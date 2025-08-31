# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, jsonify
from flask_ngrok import run_with_ngrok
import threading
from pyngrok import ngrok
from datetime import datetime
import pytz
from statsmodels.tsa.arima.model import ARIMA
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import LabelEncoder
import plotly.express as px
import plotly.graph_objects as go
import joblib
import warnings
warnings.filterwarnings('ignore')
import pandas as pd
import numpy as np

# Initialize Flask app
app = Flask(__name__, template_folder='templates')
run_with_ngrok(app)  # This will handle the ngrok integration

## Data Loading and Preparation
# Load all datasets
airline_data = pd.read_csv('/content/Airline Dataset Updated - v2.csv')
bali_data = pd.read_csv('/content/Bali Popular Destination for Tourist 2022.csv')
tokyo_listings = pd.read_csv('/content/Listings.csv')
tokyo_reviews = pd.read_csv('/content/Reviews.csv')
flight_prices = pd.read_csv('/content/Clean_Dataset.csv')
hotel_bookings = pd.read_csv('/content/hotel_bookings.csv')

# Data Cleaning Functions
def clean_airline_data(df):
    # Handle missing values
    df['Arrival Airport'].fillna('UNKNOWN', inplace=True)
    df['Flight Status'].fillna('On Time', inplace=True)

    # Convert dates to datetime
    date_formats = ['%m/%d/%Y', '%d-%m-%Y']
    for fmt in date_formats:
        try:
            df['Departure Date'] = pd.to_datetime(df['Departure Date'], format=fmt)
            break
        except:
            continue

    # Encode categorical variables
    df['Flight Status'] = df['Flight Status'].map({'On Time': 0, 'Delayed': 1, 'Cancelled': 2})
    df['Gender'] = df['Gender'].map({'Male': 0, 'Female': 1})

    return df

def clean_bali_data(df):
    # Convert price strings to numeric
    df['Visitor Fees'] = df['Tourism/Visitor Fee (approx in USD)'].str.replace('$', '').str.replace(',', '').str.extract('(\d+\.\d+)')[0].astype(float)

    # Clean ratings
    df['Google Maps Rating'] = df['Google Maps Rating'].astype(str).str.extract('(\d+\.\d+)')[0].astype(float)

    # Extract review counts
    df['Google Reviews (Count)'] = df['Google Reviews (Count)'].astype(str)
    df['Review Count'] = df['Google Reviews (Count)'].str.replace(',', '').astype(int)

    return df

def clean_tokyo_listings(df):
    # Clean price data
    df['price'] = df['price'].astype(str).str.replace('¥', '').str.replace('$', '').str.replace(',', '').astype(float)

    # Convert last_review to datetime
    df['last_review'] = pd.to_datetime(df['last_review'])

    # Fill missing values
    df['reviews_per_month'].fillna(0, inplace=True)

    return df

def clean_flight_prices(df):
    # Convert price to numeric
    df['price'] = df['price'].astype(int)

    # Encode categorical variables
    le = LabelEncoder()
    df['airline'] = le.fit_transform(df['airline'])
    df['source_city'] = le.fit_transform(df['source_city'])
    df['departure_time'] = le.fit_transform(df['departure_time'])
    df['stops'] = le.fit_transform(df['stops'])

    return df

# Clean all dataframes
airline_data = clean_airline_data(airline_data)
bali_data = clean_bali_data(bali_data)
tokyo_listings = clean_tokyo_listings(tokyo_listings)
flight_prices = clean_flight_prices(flight_prices)

## Feature Engineering
def create_time_features(df, date_col):
    df['year'] = df[date_col].dt.year
    df['month'] = df[date_col].dt.month
    df['day'] = df[date_col].dt.day
    df['day_of_week'] = df[date_col].dt.dayofweek
    df['day_of_year'] = df[date_col].dt.dayofyear
    df['week_of_year'] = df[date_col].dt.isocalendar().week
    return df

# For Tokyo listings
tokyo_listings = create_time_features(tokyo_listings, 'last_review')

## Model Training
def train_price_predictor(df, location):
    if location == 'Bali':
        # Simple average model for Bali (limited temporal data)
        avg_price = df['Visitor Fees'].mean()
        return {'model': 'average', 'value': avg_price}

    elif location == 'Tokyo':
        # Prepare Tokyo data for time series forecasting
        ts_data = df.groupby('last_review')['price'].mean().reset_index()
        ts_data = ts_data.set_index('last_review').asfreq('D')
        ts_data['price'].fillna(method='ffill', inplace=True)

        # Train ARIMA model
        model = ARIMA(ts_data['price'], order=(5,1,0))
        model_fit = model.fit()

        return model_fit

def train_flight_predictor():
    # Prepare flight data
    X = flight_prices[['airline', 'source_city', 'departure_time', 'stops', 'duration', 'days_left']]
    y = flight_prices['price']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train Random Forest model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluate
    preds = model.predict(X_test)
    mae = mean_absolute_error(y_test, preds)
    print(f'Flight Price Model MAE: {mae:.2f}')

    return model

# Train models
bali_model = train_price_predictor(bali_data, 'Bali')
tokyo_model = train_price_predictor(tokyo_listings, 'Tokyo')
flight_model = train_flight_predictor()

# Save models
joblib.dump(tokyo_model, 'tokyo_price_model.pkl')
joblib.dump(flight_model, 'flight_price_model.pkl')

## Prediction Functions
def predict_bali_price(destination, season):
    """Predict Bali accommodation prices"""
    if destination in bali_data['Place'].values:
        price = bali_data[bali_data['Place'] == destination]['Visitor Fees'].values[0]
        # Simple seasonal adjustment (hypothetical)
        if season == 'Peak':
            price = price * 1.3
        elif season == 'Low':
            price = price * 0.7
    else:
        price = bali_data['Visitor Fees'].mean()

    # Ensure the price is a valid JSON number
    if np.isnan(price) or np.isinf(price):
        return None
    return price

def predict_tokyo_price(neighbourhood, date):
    """Predict Tokyo accommodation prices using ARIMA"""
    model = joblib.load('tokyo_price_model.pkl')

    # Convert input date to datetime
    input_date = pd.to_datetime(date)

    # Make prediction
    forecast = tokyo_model.get_forecast(steps=30)  # Predict next 30 days
    pred = forecast.predicted_mean.loc[input_date] if input_date in forecast.predicted_mean.index else forecast.predicted_mean.mean()

    # Neighborhood adjustment
    if neighbourhood in tokyo_listings['neighbourhood'].unique():
        adj_factor = tokyo_listings[tokyo_listings['neighbourhood'] == neighbourhood]['price'].mean() / tokyo_listings['price'].mean()
        pred *= adj_factor

    # Ensure the price is a valid JSON number
    if np.isnan(pred) or np.isinf(pred):
        return None
    return pred

def predict_flight_prices(airline, days_until, stops):
    """Predict flight prices using trained model"""
    model = joblib.load('flight_price_model.pkl')

    # Encode inputs
    le_airline = LabelEncoder()
    le_airline.fit(flight_prices['airline'])

    le_stops = LabelEncoder()
    le_stops.fit(flight_prices['stops'])

    # Create feature vector
    features = np.array([[
        le_airline.transform([airline])[0],
        0,  # source_city (Delhi)
        2,  # departure_time (Morning)
        le_stops.transform([stops])[0],
        2.5,  # average duration
        days_until
    ]])

    # Predict
    price = model.predict(features)[0]
    return price

def recommend_airlines(destination, budget):
    """Mock airline recommendation function"""
    return [
        {'airline': 'MockAir', 'price': 500, 'duration': 5.5, 'stops': 0},
        {'airline': 'TestJet', 'price': 600, 'duration': 6.0, 'stops': 1}
    ]

# Flask Routes
@app.route('/')
def home():
    return render_template('travel.html')

@app.route('/api')
def api_home():
    return "Welcome to the Travel-Wise API!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    destination = data.get('destination')
    date = data.get('date')
    budget = float(data.get('budget', 0))

    if not destination or not date:
        return jsonify({"error": "Missing destination or date"}), 400

    if destination.lower() == 'bali':
        price = predict_bali_price('Tanah Lot', 'Peak')
        recommendations = recommend_airlines(destination, budget)
        return jsonify({
            "destination": "Bali",
            "predicted_price": price,
            "airline_recommendations": recommendations
        })

    elif destination.lower() == 'tokyo':
        price = predict_tokyo_price('Shibuya', date)
        recommendations = recommend_airlines(destination, budget)
        return jsonify({
            "destination": "Tokyo",
            "predicted_price": price,
            "airline_recommendations": recommendations
        })
    else:
        # Check if the destination is a specific place in Bali
        if destination in bali_data['Place'].values:
            price = predict_bali_price(destination, 'Peak')
            recommendations = recommend_airlines(destination, budget)
            return jsonify({
                "destination": destination,
                "predicted_price": price,
                "airline_recommendations": recommendations
            })
        else:
            return jsonify({"error": "Destination not supported"}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5001)