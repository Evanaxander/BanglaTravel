// Sample data for destinations
const destinations = [
    {
        id: 'bali',
        name: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'The Island of Gods with beautiful beaches, volcanic mountains, and spiritual retreats.',
        price: 85000,
        rating: 4.8,
        duration: '5-7 days',
        highlights: [
            'Stunning beaches with great surfing spots',
            'Ancient temples and rich cultural heritage',
            'Vibrant nightlife and delicious cuisine',
            'Lush rice terraces and volcanic landscapes'
        ],
        bestTime: 'April to October offers the best weather with less rainfall.',
        quickFacts: [
            'Currency: Indonesian Rupiah (IDR)',
            'Language: Indonesian, Balinese',
            'Visa: Visa-free for 30 days for Bangladeshi passport holders',
            'Time Zone: UTC+8'
        ],
        weather: {
            summer: '26-32°C, Dry season with less humidity',
            winter: '23-29°C, Rainy season with occasional showers'
        },
        trendingPlaces: [
            {
                name: 'Uluwatu Temple',
                image: 'https://images.unsplash.com/photo-1559525846-1b194fe7bb5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural Site'
            },
            {
                name: 'Tegalalang Rice Terrace',
                image: 'https://images.unsplash.com/photo-1580537659466-0e8394e5554d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Natural Wonder'
            },
            {
                name: 'Seminyak Beach',
                image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Beach'
            }
        ],
        activities: [
            {
                name: 'Surfing Lessons',
                image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Adventure'
            },
            {
                name: 'Balinese Cooking Class',
                image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural'
            },
            {
                name: 'Sunset Cruise',
                image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Leisure'
            }
        ],
        accommodations: [
            {
                name: 'The Royal Bali Resort',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'hotel',
                price: 12000,
                rating: 4.7,
                location: 'Kuta, Bali',
                features: ['Swimming Pool', 'Spa', 'Free Breakfast', 'Beach Access']
            },
            {
                name: 'Ocean View Villa',
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'airbnb',
                price: 15000,
                rating: 4.9,
                location: 'Seminyak, Bali',
                features: ['Private Pool', 'Ocean View', 'Full Kitchen', 'Free WiFi']
            },
            {
                name: 'Ubud Rainforest Retreat',
                image: 'https://images.unsplash.com/photo-1564501049415-5db36e5e991b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'apartment',
                price: 8000,
                rating: 4.5,
                location: 'Ubud, Bali',
                features: ['Jungle View', 'Yoga Deck', 'Organic Garden', 'Eco-Friendly']
            }
        ]
    },
    {
        id: 'tokyo',
        name: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A bustling metropolis where cutting-edge technology meets traditional culture.',
        price: 120000,
        rating: 4.9,
        duration: '7-10 days',
        highlights: [
            'Futuristic technology and electronics districts',
            'Ancient temples and peaceful gardens',
            'World-class cuisine from sushi to ramen',
            'Efficient public transportation system'
        ],
        bestTime: 'March to May for cherry blossoms or September to November for pleasant weather.',
        quickFacts: [
            'Currency: Japanese Yen (JPY)',
            'Language: Japanese',
            'Visa: Required for Bangladeshi passport holders',
            'Time Zone: UTC+9'
        ],
        weather: {
            summer: '25-30°C, Humid with occasional rain',
            winter: '2-10°C, Cold with little snowfall in city'
        },
        trendingPlaces: [
            {
                name: 'Senso-ji Temple',
                image: 'https://images.unsplash.com/photo-1583425423326-3dc74c146c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural Site'
            },
            {
                name: 'Shibuya Crossing',
                image: 'https://images.unsplash.com/photo-1559386229-2ec5e7d935c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Iconic Spot'
            },
            {
                name: 'Tokyo Skytree',
                image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Observation Deck'
            }
        ],
        activities: [
            {
                name: 'Sushi Making Class',
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural'
            },
            {
                name: 'Robot Restaurant Show',
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Entertainment'
            },
            {
                name: 'Mount Fuji Day Trip',
                image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Adventure'
            }
        ],
        accommodations: [
            {
                name: 'Tokyo Grand Hotel',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'hotel',
                price: 18000,
                rating: 4.8,
                location: 'Shinjuku, Tokyo',
                features: ['City View', 'Restaurant', 'Fitness Center', 'Concierge']
            },
            {
                name: 'Traditional Ryokan',
                image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'airbnb',
                price: 25000,
                rating: 4.9,
                location: 'Asakusa, Tokyo',
                features: ['Tatami Rooms', 'Onsen Bath', 'Kaiseki Dinner', 'Garden']
            },
            {
                name: 'Shibuya Modern Apartment',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'apartment',
                price: 15000,
                rating: 4.6,
                location: 'Shibuya, Tokyo',
                features: ['Central Location', 'Modern Amenities', 'Kitchenette', 'High-Speed WiFi']
            }
        ]
    },
    {
        id: 'bangkok',
        name: 'Bangkok, Thailand',
        image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'The vibrant capital of Thailand known for its ornate temples, street food, and bustling markets.',
        price: 65000,
        rating: 4.5,
        duration: '4-6 days',
        highlights: [
            'Magnificent temples and palaces',
            'Vibrant street food scene',
            'Floating markets and canal tours',
            'Lively nightlife and shopping districts'
        ],
        bestTime: 'November to February when temperatures are cooler and rainfall is minimal.',
        quickFacts: [
            'Currency: Thai Baht (THB)',
            'Language: Thai',
            'Visa: Visa on arrival for Bangladeshi passport holders',
            'Time Zone: UTC+7'
        ],
        weather: {
            summer: '28-35°C, Hot with high humidity',
            winter: '22-32°C, Pleasant with cooler evenings'
        },
        trendingPlaces: [
            {
                name: 'Grand Palace',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural Site'
            },
            {
                name: 'Chatuchak Market',
                image: 'https://images.unsplash.com/photo-1592890282695-e72ff8d6c5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Shopping'
            },
            {
                name: 'Wat Arun',
                image: 'https://images.unsplash.com/photo-1530577190401-9d1b5e4e2434?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Temple'
            }
        ],
        activities: [
            {
                name: 'Thai Cooking Class',
                image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Cultural'
            },
            {
                name: 'Floating Market Tour',
                image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Shopping'
            },
            {
                name: 'Muay Thai Match',
                image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Entertainment'
            }
        ],
        accommodations: [
            {
                name: 'Bangkok Luxury Hotel',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'hotel',
                price: 9000,
                rating: 4.6,
                location: 'Sukhumvit, Bangkok',
                features: ['Infinity Pool', 'Sky Bar', 'Spa', 'Multiple Restaurants']
            },
            {
                name: 'Riverside Villa',
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'airbnb',
                price: 12000,
                rating: 4.8,
                location: 'Chao Phraya River, Bangkok',
                features: ['River View', 'Private Terrace', 'Modern Design', 'Free Boat Transfer']
            },
            {
                name: 'City Center Apartment',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'apartment',
                price: 6000,
                rating: 4.4,
                location: 'Siam, Bangkok',
                features: ['Central Location', 'Shopping Access', 'Fully Equipped', 'Gym Access']
            }
        ]
    },
    {
        id: 'dubai',
        name: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A glamorous city of superlatives with the world\'s tallest building, largest mall, and artificial islands.',
        price: 95000,
        rating: 4.7,
        duration: '5-7 days',
        highlights: [
            'Iconic Burj Khalifa and stunning architecture',
            'Luxurious shopping malls and traditional souks',
            'Desert safaris and dune bashing adventures',
            'World-class entertainment and dining options'
        ],
        bestTime: 'November to March when temperatures are pleasant for outdoor activities.',
        quickFacts: [
            'Currency: UAE Dirham (AED)',
            'Language: Arabic',
            'Visa: Required for Bangladeshi passport holders',
            'Time Zone: UTC+4'
        ],
        weather: {
            summer: '35-45°C, Extremely hot with high humidity',
            winter: '14-24°C, Pleasant and ideal for outdoor activities'
        },
        trendingPlaces: [
            {
                name: 'Burj Khalifa',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Iconic Structure'
            },
            {
                name: 'Dubai Mall',
                image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Shopping'
            },
            {
                name: 'Palm Jumeirah',
                image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Engineering Marvel'
            }
        ],
        activities: [
            {
                name: 'Desert Safari',
                image: 'https://images.unsplash.com/photo-1577032225474-899347640381?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Adventure'
            },
            {
                name: 'Dhow Cruise Dinner',
                image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Dining'
            },
            {
                name: 'Ski Dubai',
                image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                type: 'Entertainment'
            }
        ],
        accommodations: [
            {
                name: 'Burj Al Arab',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'hotel',
                price: 45000,
                rating: 4.9,
                location: 'Jumeirah, Dubai',
                features: ['Luxury Service', 'Private Beach', 'Helipad', 'Butler Service']
            },
            {
                name: 'Downtown Luxury Apartment',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'apartment',
                price: 15000,
                rating: 4.7,
                location: 'Downtown Dubai',
                features: ['Burj Khalifa View', 'Infinity Pool', 'Gym', 'Concierge']
            },
            {
                name: 'Palm Jumeirah Villa',
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                type: 'airbnb',
                price: 22000,
                rating: 4.8,
                location: 'Palm Jumeirah, Dubai',
                features: ['Private Beach Access', 'Pool', 'Sea View', 'Luxury Furnishings']
            }
        ]
    }
];

// Additional destinations for the "View All" section
const allDestinations = [
    ...destinations,
    {
        id: 'singapore',
        name: 'Singapore',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A modern city-state with diverse cultural influences, impressive architecture, and lush gardens.',
        price: 78000,
        rating: 4.7,
        duration: '4-5 days'
    },
    {
        id: 'maldives',
        name: 'Maldives',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Tropical paradise with crystal-clear waters, white sandy beaches, and luxurious overwater bungalows.',
        price: 110000,
        rating: 4.9,
        duration: '5-7 days'
    },
    {
        id: 'paris',
        name: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'The City of Light known for its art, fashion, gastronomy, and cultural landmarks like the Eiffel Tower.',
        price: 135000,
        rating: 4.8,
        duration: '7-10 days'
    },
    {
        id: 'kualalumpur',
        name: 'Kuala Lumpur, Malaysia',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A vibrant multicultural city with iconic Petronas Towers, diverse cuisine, and shopping paradise.',
        price: 55000,
        rating: 4.4,
        duration: '4-5 days'
    }
];

// DOM Elements
const popularDestinationsContainer = document.getElementById('popular-destinations');
const mlDestinationDetails = document.getElementById('ml-destination-details');
const destinationTitle = document.getElementById('destination-title');
const destinationHighlights = document.getElementById('destination-highlights');
const bestTimeContent = document.getElementById('best-time-content');
const quickFacts = document.getElementById('quick-facts');
const weatherInfo = document.getElementById('weather-info');
const trendingPlacesContainer = document.getElementById('trending-places');
const popularActivitiesContainer = document.getElementById('popular-activities');
const accommodationsList = document.getElementById('accommodations-list');
const allDestinationsSection = document.getElementById('all-destinations-section');
const allDestinationsGrid = document.getElementById('all-destinations-grid');
const viewMoreBtn = document.getElementById('view-more-btn');
const backBtn = document.getElementById('back-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const searchBtn = document.getElementById('search-btn');
const bookingModal = document.getElementById('booking-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const confirmationModal = document.getElementById('confirmation-modal');
const closeConfirmationBtn = document.getElementById('close-confirmation-btn');
const bookingForm = document.getElementById('booking-form');
const accommodationFilters = document.querySelectorAll('.accommodation-filter');
const destinationSearch = document.getElementById('destination-search');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render popular destinations
    renderPopularDestinations();
    
    // Render all destinations for the "View All" section
    renderAllDestinations();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize charts
    initCharts();
});

// Render popular destinations on the homepage
function renderPopularDestinations() {
    popularDestinationsContainer.innerHTML = '';
    
    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        popularDestinationsContainer.appendChild(card);
    });
}

// Render all destinations for the "View All" section
function renderAllDestinations() {
    allDestinationsGrid.innerHTML = '';
    
    allDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        allDestinationsGrid.appendChild(card);
    });
}

// Create a destination card element
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer';
    card.innerHTML = `
        <div class="h-48 overflow-hidden">
            <img src="${destination.image}" alt="${destination.name}" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold">${destination.name}</h3>
                <span class="bg-emerald-100 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 rounded">${destination.rating}</span>
            </div>
            <p class="text-gray-600 mb-4">${destination.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-emerald-700">৳${destination.price.toLocaleString()}</span>
                <span class="text-gray-500">${destination.duration}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        showDestinationDetails(destination.id);
    });
    
    return card;
}

// Show destination details
function showDestinationDetails(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    // Update UI elements
    destinationTitle.textContent = destination.name;
    
    // Render highlights
    destinationHighlights.innerHTML = `
        <p class="mb-4">${destination.description}</p>
        <h4 class="font-bold text-lg mb-2">Top Highlights:</h4>
        <ul class="list-disc pl-5">
            ${destination.highlights.map(highlight => `<li class="mb-2">${highlight}</li>`).join('')}
        </ul>
    `;
    
    // Render best time to visit
    bestTimeContent.innerHTML = `<p>${destination.bestTime}</p>`;
    
    // Render quick facts
    quickFacts.innerHTML = destination.quickFacts.map(fact => `
        <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            ${fact}
        </li>
    `).join('');
    
    // Render weather info
    weatherInfo.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                    <p class="font-semibold">Summer (Apr-Sep)</p>
                    <p class="text-gray-600">${destination.weather.summer}</p>
                </div>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                    <p class="font-semibold">Winter (Oct-Mar)</p>
                    <p class="text-gray-600">${destination.weather.winter}</p>
                </div>
            </div>
        </div>
    `;
    
    // Render trending places
    trendingPlacesContainer.innerHTML = destination.trendingPlaces.map(place => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-40 overflow-hidden">
                <img src="${place.image}" alt="${place.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h4 class="font-bold mb-1">${place.name}</h4>
                <span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${place.type}</span>
            </div>
        </div>
    `).join('');
    
    // Render popular activities
    popularActivitiesContainer.innerHTML = destination.activities.map(activity => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-40 overflow-hidden">
                <img src="${activity.image}" alt="${activity.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h4 class="font-bold mb-1">${activity.name}</h4>
                <span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${activity.type}</span>
            </div>
        </div>
    `).join('');
    
    // Render accommodations
    renderAccommodations(destination.accommodations);
    
    // Show the destination details section
    document.querySelector('.hero-section').classList.add('hidden');
    document.querySelector('.bg-white').classList.add('hidden');
    mlDestinationDetails.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Render accommodations list
function renderAccommodations(accommodations, filter = 'all') {
    accommodationsList.innerHTML = '';
    
    const filteredAccommodations = filter === 'all' 
        ? accommodations 
        : accommodations.filter(acc => acc.type === filter);
    
    filteredAccommodations.forEach(acc => {
        const card = document.createElement('div');
        card.className = 'accommodation-card bg-white rounded-lg shadow-md overflow-hidden';
        card.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${acc.image}" alt="${acc.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">${acc.name}</h3>
                    <span class="bg-emerald-100 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 rounded">${acc.rating}</span>
                </div>
                <div class="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 
