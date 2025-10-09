// Comprehensive Ooty travel data structure - reusable for all blog themes

export const ootyData = {
  // Basic Info
  location: {
    name: "Ooty",
    fullName: "Udhagamandalam",
    state: "Tamil Nadu",
    country: "India",
    coordinates: { lat: 11.4102, lng: 76.7950 },
    elevation: "2240 meters",
    nickname: "Queen of Hill Stations"
  },

  // Meta Information
  meta: {
    title: "Complete Ooty Travel Guide 2025 - Queen of Hill Stations",
    description: "Discover the enchanting hill station of Ooty with our comprehensive travel guide. Explore top attractions, local cuisine, and perfect itineraries.",
    keywords: ["Ooty", "Udhagamandalam", "Tamil Nadu", "Hill Station", "Travel Guide", "Nilgiris"],
    author: "Travel Expert",
    publishDate: "2025-01-15",
    readTime: "12 min read",
    category: "Hill Stations",
    tags: ["Mountains", "Nature", "Tea Gardens", "Photography", "Weekend Getaway"]
  },

  // Hero Section
  hero: {
    mainImage: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagline: "Where Nature Paints Paradise",
    subtitle: "Escape to the misty mountains and rolling tea gardens of South India's most beloved hill station",
    highlights: ["2240m above sea level", "Year-round pleasant climate", "UNESCO World Heritage Train"],
    ctaText: "Plan Your Journey"
  },

  // Quick Overview
  overview: {
    bestTime: {
      peak: "March to June",
      moderate: "October to February", 
      avoid: "July to September (monsoon)",
      yearRound: true
    },
    duration: {
      minimum: "2 days",
      recommended: "3-4 days",
      extended: "5-7 days"
    },
    difficulty: "Easy to Moderate",
    budget: {
      budget: "₹2,000-3,500 per day",
      midRange: "₹3,500-6,000 per day",
      luxury: "₹6,000+ per day"
    },
    climate: {
      summer: "15°C - 25°C",
      winter: "5°C - 15°C",
      monsoon: "10°C - 20°C"
    }
  },

  // Top Attractions
  attractions: [
    {
      id: 1,
      name: "Ooty Lake",
      category: "Lake",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A picturesque man-made lake perfect for boating and cycling around its perimeter",
      highlights: ["Boating", "Cycling track", "Horse riding", "Toy train nearby"],
      timings: "8:00 AM - 6:00 PM",
      entryFee: "₹20 (Lake entry), ₹150 (Boating)",
      duration: "2-3 hours",
      bestTime: "Early morning or evening",
      location: { lat: 11.4064, lng: 76.6932 },
      rating: 4.3,
      tips: ["Visit early morning for peaceful experience", "Carry warm clothes", "Book boat rides in advance"]
    },
    {
      id: 2,
      name: "Doddabetta Peak",
      category: "Viewpoint",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The highest peak in the Nilgiris at 2623m, offering panoramic views through telescope house",
      highlights: ["Highest peak", "Telescope house", "Panoramic views", "Trekking trails"],
      timings: "8:00 AM - 6:00 PM",
      entryFee: "₹30 (Peak), ₹5 (Telescope)",
      duration: "2-4 hours",
      bestTime: "Clear weather days",
      location: { lat: 11.3895, lng: 76.7337 },
      rating: 4.5,
      tips: ["Check weather before visiting", "Wear comfortable shoes", "Carry binoculars"]
    },
    {
      id: 3,
      name: "Government Botanical Garden",
      category: "Garden",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sprawling 55-acre garden featuring diverse flora and a 20-million-year-old fossil tree",
      highlights: ["20 million year old fossil", "Rare plants", "Flower shows", "Photography"],
      timings: "8:30 AM - 6:30 PM",
      entryFee: "₹30 adults, ₹10 children",
      duration: "2-3 hours",
      bestTime: "Morning hours",
      location: { lat: 11.4067, lng: 76.6904 },
      rating: 4.4,
      tips: ["Visit during flower shows", "Bring camera", "Comfortable walking shoes"]
    },
    {
      id: 4,
      name: "Rose Garden",
      category: "Garden", 
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Home to over 20,000 varieties of roses spread across terraced slopes",
      highlights: ["20,000 rose varieties", "Terraced garden", "Rose festival", "Photography"],
      timings: "8:30 AM - 6:30 PM",
      entryFee: "₹15 adults, ₹5 children",
      duration: "1-2 hours",
      bestTime: "Rose blooming season (April-June)",
      location: { lat: 11.4081, lng: 76.6947 },
      rating: 4.2,
      tips: ["Visit during rose season", "Early morning best for photos", "Rose festival in May"]
    },
    {
      id: 5,
      name: "Nilgiri Mountain Railway",
      category: "Heritage",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "UNESCO World Heritage toy train journey through stunning landscapes",
      highlights: ["UNESCO heritage", "46km scenic route", "Historic steam engine", "Mountain views"],
      timings: "7:10 AM, 9:15 AM, 2:05 PM",
      entryFee: "₹50-280 (depending on class)",
      duration: "3.5 hours (one way)",
      bestTime: "Clear weather",
      location: { lat: 11.4102, lng: 76.6950 },
      rating: 4.6,
      tips: ["Book in advance", "Sit on right side for better views", "Carry snacks"]
    },
    {
      id: 6,
      name: "Pykara Lake & Waterfalls",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Serene lake and cascading waterfalls, perfect for picnics and photography",
      highlights: ["Waterfalls", "Boating", "Picnic spots", "Nature walks"],
      timings: "9:00 AM - 5:00 PM",
      entryFee: "₹10 (entry), ₹150 (boating)",
      duration: "3-4 hours",
      bestTime: "Post-monsoon (Oct-Dec)",
      location: { lat: 11.3342, lng: 76.6708 },
      rating: 4.3,
      tips: ["Better after monsoons", "Carry picnic supplies", "Slippery rocks near falls"]
    }
  ],

  // Food & Cuisine
  food: {
    categories: [
      {
        name: "South Indian Staples",
        items: [
          {
            name: "Ghee Roast Dosa",
            description: "Crispy dosa roasted with pure ghee, served with coconut chutney",
            image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "₹80-120",
            where: "Adyar Ananda Bhavan, Saravana Bhavan",
            mustTry: true
          },
          {
            name: "Kaima Idli",
            description: "Soft mini idlis served with sambar and multiple chutneys",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            price: "₹60-90",
            where: "Local restaurants",
            mustTry: false
          }
        ]
      },
      {
        name: "Regional Specialties",
        items: [
          {
            name: "Avial",
            description: "Traditional mixed vegetable curry with coconut and curry leaves",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "₹100-150",
            where: "Local Tamil restaurants",
            mustTry: true
          },
          {
            name: "Chicken Chettinad",
            description: "Spicy chicken curry with aromatic Chettinad spices",
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "₹200-300",
            where: "Chettinad restaurants",
            mustTry: true
          }
        ]
      },
      {
        name: "Local Delicacies",
        items: [
          {
            name: "Ooty Chocolates",
            description: "Famous handmade chocolates, perfect as souvenirs",
            image: "https://images.unsplash.com/photo-1549288477-2d9eb7cea9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "₹50-200 per box",
            where: "Modern Stores, King Star",
            mustTry: true
          },
          {
            name: "Nilgiri Tea",
            description: "Fresh tea from local plantations with unique flavor",
            image: "https://images.unsplash.com/photo-1597318378040-54319b9639be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "₹200-500 per kg",
            where: "Tea factories, local shops",
            mustTry: true
          }
        ]
      }
    ],
    restaurants: [
      {
        name: "Earl's Secret",
        type: "Fine Dining",
        cuisine: "Continental, Indian",
        priceRange: "₹800-1500 for two",
        rating: 4.4,
        speciality: "Ambiance and continental food"
      },
      {
        name: "Adyar Ananda Bhavan",
        type: "Vegetarian",
        cuisine: "South Indian",
        priceRange: "₹300-600 for two",
        rating: 4.2,
        speciality: "Authentic South Indian breakfast"
      }
    ]
  },

  // Sample Itineraries
  itineraries: [
    {
      duration: "2 Days",
      title: "Ooty Essentials",
      days: [
        {
          day: 1,
          title: "Arrival & Lake District",
          activities: [
            { time: "9:00 AM", activity: "Arrival & check-in", location: "Hotel" },
            { time: "11:00 AM", activity: "Ooty Lake boating", location: "Ooty Lake" },
            { time: "1:00 PM", activity: "Lunch", location: "Nearby restaurant" },
            { time: "3:00 PM", activity: "Botanical Garden visit", location: "Government Botanical Garden" },
            { time: "6:00 PM", activity: "Local market shopping", location: "Commercial Street" },
            { time: "8:00 PM", activity: "Dinner & rest", location: "Hotel" }
          ]
        },
        {
          day: 2,
          title: "Peaks & Departures",
          activities: [
            { time: "8:00 AM", activity: "Breakfast & checkout", location: "Hotel" },
            { time: "9:30 AM", activity: "Doddabetta Peak visit", location: "Doddabetta Peak" },
            { time: "12:30 PM", activity: "Rose Garden", location: "Rose Garden" },
            { time: "2:00 PM", activity: "Lunch & souvenir shopping", location: "Main bazaar" },
            { time: "4:00 PM", activity: "Departure", location: "" }
          ]
        }
      ]
    }
  ],

  // Practical Information
  practical: {
    howToReach: {
      byAir: {
        airport: "Coimbatore Airport (96 km)",
        travelTime: "2.5-3 hours by car",
        cost: "₹2000-3000 (taxi)"
      },
      byTrain: {
        station: "Mettupalayam (46 km) + Toy Train",
        travelTime: "1 hour to Mettupalayam + 3.5 hours toy train",
        cost: "₹50-280 (toy train)"
      },
      byRoad: {
        fromBangalore: "270 km, 6 hours",
        fromChennai: "535 km, 10 hours",
        fromCoimbatore: "96 km, 2.5 hours"
      }
    },
    accommodation: {
      luxury: ["Taj Savoy Hotel", "Fortune Resort Sullivan Court"],
      midRange: ["Hotel Lakeview", "Sterling Ooty Fern Hill"],
      budget: ["YWCA Guest House", "Youth Hostel"]
    },
    tips: [
      "Pack warm clothes even in summer",
      "Book toy train tickets in advance", 
      "Carry cash as some places don't accept cards",
      "Respect local environment and culture",
      "Check weather before planning outdoor activities"
    ]
  },

  // Additional Data for Themes
  gallery: [
    { id: 1, image: "https://images.unsplash.com/photo-1597318378040-54319b9639be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Rolling tea plantations", category: "nature" },
    { id: 2, image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Misty mountain mornings", category: "nature" },
    { id: 3, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Local South Indian delicacies", category: "food" },
    { id: 4, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Heritage toy train journey", category: "heritage" }
  ],

  // Social Media
  social: {
    hashtags: ["#Ooty", "#QueenOfHillStations", "#TamilNadu", "#NilgiriHills", "#ToyTrain"],
    instagramSpots: ["Ooty Lake", "Tea Gardens", "Doddabetta Peak", "Rose Garden"]
  },

  // Related Destinations
  relatedDestinations: [
    { name: "Kodaikanal", state: "Tamil Nadu", distance: "280 km" },
    { name: "Munnar", state: "Kerala", distance: "290 km" },
    { name: "Coorg", state: "Karnataka", distance: "250 km" }
  ]
};

export default ootyData;