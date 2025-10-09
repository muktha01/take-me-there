'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Navigation, Compass, Globe, Layers, Satellite,
  Mountain, TreePine, Camera, Coffee, Calendar, Clock,
  Star, Heart, Share2, Bookmark, Eye, ThumbsUp, MessageCircle,
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw,
  Filter, Search, Menu, X, Play, Pause, Volume2, VolumeX,
  Info, CheckCircle, AlertCircle, MapIcon, Route, Car,
  Train, Plane, Bus, Users, Award, Sunrise, Sunset,
  CloudRain, Sun, Wind, Thermometer, Droplets, Umbrella,
  ShoppingBag, Utensils, Bed, Wifi, Phone, Mail
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const InteractiveMapFirstTheme = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapView, setMapView] = useState('satellite');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeLayer, setActiveLayer] = useState('attractions');
  const [routeMode, setRouteMode] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState([]);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    temp: '18°C',
    condition: 'Partly Cloudy',
    humidity: '75%',
    wind: '8 km/h'
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const mapRef = useRef();
  const audioRef = useRef();

  // Comprehensive Ooty locations with detailed information
  const comprehensiveOotyLocations = {
    attractions: [
      {
        id: 1,
        name: "Doddabetta Peak",
        type: "viewpoint",
        coordinates: { x: 45, y: 30 },
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        description: `At 2,637 meters above sea level, Doddabetta Peak stands as the highest point in the Nilgiri Hills and offers the most spectacular panoramic views in South India. This iconic summit has been attracting visitors for over two centuries, serving as both a geographical landmark and a spiritual retreat for those seeking communion with nature.

        **Geological Significance:** Doddabetta is part of the ancient Western Ghats mountain range, formed over 500 million years ago. The peak represents the culmination of tectonic forces that shaped the Indian subcontinent. The unique geological composition includes metamorphic rocks, quartzite formations, and laterite soils that support the region's distinctive ecosystem.

        **The Observatory Experience:** The summit houses a telescope observatory operated by the Tamil Nadu Tourism Development Corporation. This facility features multiple high-powered telescopes that provide visitors with enhanced views of the surrounding landscape. On exceptionally clear days, the view extends beyond the Nilgiris to the Mysore plateau, the Bandipur forests, and even glimpses of the Arabian Sea on the western horizon.

        **Flora and Fauna:** The summit region is characterized by unique high-altitude vegetation, including endemic species of rhododendrons, wild orchids, and medicinal plants. The area serves as a crucial habitat for the endangered Nilgiri tahr, several species of endemic birds, and numerous butterfly species that thrive in the cool, moist climate.

        **Cultural and Historical Context:** The peak has been considered sacred by indigenous communities for centuries. The Todas, Kotas, and other tribal groups have traditional stories and rituals associated with the mountain. During the colonial period, British officials often rode up to the summit for recreation and to escape the heat of the plains.

        **Best Viewing Times:** Early morning (6:00-8:00 AM) offers the clearest visibility with minimal mist and atmospheric disturbance. The sunrise from Doddabetta is particularly spectacular, with the golden light gradually illuminating the entire Nilgiri landscape. Evening visits provide dramatic sunset views, though mist formation can be unpredictable.

        **Photography Guidelines:** The summit offers 360-degree photography opportunities. Professional photographers recommend visiting during the golden hours for optimal lighting conditions. The changing weather patterns create diverse photographic moods - from clear, bright landscape shots to mysterious, mist-shrouded scenes.

        **Accessibility and Facilities:** The peak is accessible by a well-maintained road suitable for cars and motorcycles. Parking facilities are available near the summit. Basic amenities include restrooms and a small refreshment counter. The telescope observatory operates from 8:00 AM to 6:00 PM daily.`,
        highlights: [
          "Highest peak in South India at 2,637m",
          "360-degree panoramic views",
          "Professional telescope observatory",
          "Endemic flora and fauna",
          "Geological significance",
          "Colonial heritage site"
        ],
        practicalInfo: {
          timings: "6:00 AM - 6:00 PM",
          entryFee: "₹30 for adults, ₹15 for children, Telescope: ₹5",
          distance: "10 km from Ooty town center",
          duration: "2-3 hours",
          difficulty: "Easy",
          bestTime: "Early morning or evening"
        },
        weather: {
          temperature: "8°C - 15°C",
          rainfall: "Heavy during monsoon",
          wind: "Strong winds common",
          visibility: "Best in winter months"
        },
        facilities: [
          "Parking available",
          "Telescope observatory",
          "Restrooms",
          "Refreshment counter",
          "Security personnel"
        ]
      },
      {
        id: 2,
        name: "Ooty Lake",
        type: "lake",
        coordinates: { x: 55, y: 60 },
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
        description: `Ooty Lake stands as one of the most iconic and historically significant attractions in the Queen of Hill Stations. This artificial lake, created in 1824 by John Sullivan, the founder of Ooty, represents a remarkable feat of 19th-century engineering and continues to serve as the heart of recreational activities in the hill station.

        **Historical Engineering Marvel:** The lake was constructed by damming the natural flow of mountain streams in the Ooty valley. This engineering project required innovative solutions to manage water flow, prevent flooding, and create a stable water body at high altitude. The original dam structure, though modified over the years, demonstrates the engineering capabilities of the early colonial period.

        **Ecosystem Development:** Over nearly two centuries, the artificial lake has developed its own unique ecosystem. The water body supports various fish species, including carp and trout, which were introduced at different periods. The surrounding area has become a habitat for numerous bird species, including both resident and migratory birds that visit during winter months.

        **Recreational Activities:** The lake offers a comprehensive range of water-based recreational activities managed by the Tamil Nadu Tourism Development Corporation. Pedal boats, available in various designs including swan-shaped boats popular with families, provide a gentle way to explore the lake. Row boats offer a more traditional experience, while motorboats are available for those seeking a faster ride.

        **Garden and Landscape:** The lake is surrounded by carefully maintained Eucalyptus gardens that were planted during the colonial era. These gardens feature a variety of exotic and native plants, creating a colorful landscape that changes with the seasons. Walking paths wind around the lake, providing visitors with scenic routes for morning jogs or evening strolls.

        **Cultural Significance:** The lake has become deeply embedded in Ooty's cultural identity, featuring in numerous films, literature, and artistic works. It serves as a venue for various cultural events throughout the year, including boat races during summer festivals, musical performances, and art exhibitions.

        **Photography and Film Location:** The lake's scenic beauty has made it a favorite location for photographers and filmmakers. The calm waters provide perfect reflections of the surrounding hills and sky, creating picture-perfect scenes. Different times of day offer varying photographic opportunities - from misty morning shots to golden evening reflections.

        **Conservation Efforts:** Ongoing conservation efforts focus on maintaining water quality, preventing pollution, and preserving the lake's ecological balance. Regular cleaning drives, water treatment measures, and visitor education programs help ensure the lake's sustainability for future generations.

        **Seasonal Variations:** The lake's appearance and activities vary significantly with seasons. During monsoon, the water level rises, and the surrounding area becomes lush green. Winter months offer the clearest water and best visibility, while summer provides the most pleasant weather for water activities.`,
        highlights: [
          "Historic artificial lake from 1824",
          "Comprehensive boating facilities",
          "Eucalyptus gardens",
          "Bird watching opportunities",
          "Cultural event venue",
          "Photography hotspot"
        ],
        practicalInfo: {
          timings: "9:00 AM - 6:00 PM",
          entryFee: "₹20 entry, Boating: ₹150-300",
          distance: "2 km from Ooty town center",
          duration: "1-2 hours",
          difficulty: "Easy",
          bestTime: "Morning or evening"
        },
        activities: [
          "Pedal boating",
          "Row boating",
          "Photography",
          "Garden walks",
          "Bird watching",
          "Cycling around lake"
        ],
        facilities: [
          "Boating services",
          "Parking area",
          "Food stalls",
          "Restrooms",
          "Children's play area",
          "Garden seating"
        ]
      },
      {
        id: 3,
        name: "Nilgiri Mountain Railway",
        type: "heritage",
        coordinates: { x: 35, y: 75 },
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
        description: `The Nilgiri Mountain Railway, affectionately known as the "Toy Train," represents one of the most significant engineering achievements of the British colonial era and stands today as a UNESCO World Heritage Site. This narrow-gauge railway, connecting Mettupalayam to Ooty, offers passengers a journey through time and diverse ecosystems while showcasing remarkable 19th-century engineering innovation.

        **Engineering Innovation:** Completed in 1908, the railway employs a unique rack and pinion system designed by the Swiss engineer Niklaus Riggenbach. This system allows trains to safely climb steep gradients that would be impossible for conventional railways. The steepest gradient on the route reaches 1 in 12.5, requiring specialized locomotives and safety systems.

        **Route and Infrastructure:** The 46-kilometer journey includes 250 bridges of varying sizes, 16 tunnels carved through solid rock, and numerous sharp curves engineered to navigate the challenging mountain terrain. Each bridge and tunnel represents a specific engineering solution to overcome geographical obstacles while minimizing environmental impact.

        **Historical Development:** Construction began in 1891 under the supervision of the Nilgiri Railway Company. The project faced numerous challenges including monsoon rains, difficult terrain, labor shortages, and the need to transport heavy equipment to remote mountain locations. The railway was built in phases, with the final section to Ooty completed in 1908.

        **Rolling Stock and Technology:** The railway operates various types of locomotives, including heritage steam engines dating back to the early 20th century and modern diesel locomotives for regular passenger service. The steam locomotives, still used for special tourist trains, represent authentic examples of colonial-era railway technology.

        **Ecological Journey:** The train journey provides passengers with a unique opportunity to experience diverse ecosystems within a few hours. Starting from tropical deciduous forests at Mettupalayam (300m elevation), the route passes through temperate forests, tea plantations, and finally reaches the montane grasslands and shola forests around Ooty (2,203m elevation).

        **Cultural Heritage:** The railway has become an integral part of Tamil Nadu's cultural heritage, featured in numerous films, songs, and literary works. It represents the romantic era of train travel and continues to evoke nostalgia for a bygone era of leisurely travel and exploration.

        **Stations and Stops:** Key stations along the route include Kallar (known for its orange groves), Adderley (featuring spectacular valley views), Hillgrove (surrounded by tea plantations), Runneymede (offering glimpses of the plains below), Coonoor (the major intermediate station), and Wellington (the military cantonment) before reaching Ooty.

        **Conservation and Maintenance:** As a UNESCO World Heritage Site, the railway is subject to strict conservation guidelines. Efforts focus on preserving original infrastructure, maintaining traditional operating methods, and protecting the surrounding environment while ensuring modern safety standards.

        **Tourism Impact:** The toy train has become one of South India's most popular tourist attractions, contributing significantly to the local economy. However, efforts are ongoing to balance tourism demands with heritage conservation and environmental protection.`,
        highlights: [
          "UNESCO World Heritage Site",
          "Unique rack and pinion system",
          "46 km mountain journey",
          "250 bridges and 16 tunnels",
          "Heritage steam locomotives",
          "Diverse ecosystem experience"
        ],
        practicalInfo: {
          timings: "7:10 AM departure from Mettupalayam",
          entryFee: "₹280-1500 depending on class",
          distance: "Journey from Mettupalayam to Ooty",
          duration: "4.5 hours",
          difficulty: "Comfortable",
          bestTime: "October to March"
        },
        route: [
          "Mettupalayam (Start)",
          "Kallar (Orange groves)",
          "Adderley (Valley views)",
          "Hillgrove (Tea plantations)",
          "Runneymede (Plains view)",
          "Coonoor (Major stop)",
          "Wellington (Cantonment)",
          "Ooty (Destination)"
        ],
        features: [
          "Rack and pinion system",
          "Steam locomotive rides",
          "Multiple class options",
          "Scenic photography stops",
          "Heritage carriages",
          "UNESCO recognition"
        ]
      },
      {
        id: 4,
        name: "Government Botanical Garden",
        type: "garden",
        coordinates: { x: 65, y: 55 },
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        description: `The Government Botanical Garden of Ooty, established in 1848, stands as one of the most scientifically significant and aesthetically beautiful botanical collections in India. Spread across 55 acres of carefully landscaped terrain, this garden represents over 175 years of botanical research, conservation, and horticultural excellence.

        **Historical Foundation:** The garden was established by the Marquis of Tweeddale, who was then the Governor of Madras Presidency. The initial design was created by William Graham McIvor, a renowned Scottish botanist and horticulturist. The garden was conceived not just as a recreational space but as a center for botanical research and acclimatization of exotic plant species to Indian conditions.

        **Scientific Collections:** The garden houses over 1,000 species of plants, trees, and shrubs, including rare and exotic varieties from around the world. The collection includes specimens from temperate regions of Australia, New Zealand, Europe, and the Americas, successfully acclimatized to the Nilgiri climate. Many species were introduced during the colonial period and have now become integral parts of the local ecosystem.

        **Specialized Sections:** The garden is divided into several specialized sections, each focusing on different types of flora. The Italian Garden features formal landscaping with geometric patterns and seasonal flowers. The Conservatory houses delicate tropical and subtropical plants in controlled conditions. The Fern House contains one of India's most comprehensive collections of ferns and allied plants.

        **Annual Flower Show:** Every summer, the garden hosts the prestigious Annual Flower and Fruit Show, which has been a tradition for over 150 years. This event showcases the garden's horticultural excellence and attracts visitors from across India. The show features elaborate flower arrangements, topiary art, and displays of exotic fruits and vegetables grown in the garden.

        **Research and Conservation:** The garden serves as an active research center for botanical studies, plant conservation, and horticultural development. Ongoing research projects focus on endemic plant species conservation, medicinal plant cultivation, and climate-adaptive gardening techniques. The garden collaborates with various universities and research institutions for scientific studies.

        **Educational Programs:** The garden conducts regular educational programs for students, researchers, and gardening enthusiasts. Guided tours provide detailed information about plant species, their origins, ecological significance, and cultivation requirements. Workshops on organic gardening, plant propagation, and landscape design are regularly organized.

        **Architectural Features:** The garden includes several architectural features that complement its natural beauty. The Italian Garden's formal layout includes geometric flower beds, decorative urns, and classical statuary. Historic greenhouses, some dating back to the colonial era, house temperature-sensitive plants and serve as examples of Victorian-era garden architecture.

        **Seasonal Attractions:** The garden's appearance changes dramatically with seasons. Spring brings blooming cherry blossoms, rhododendrons, and magnolias. Summer features vibrant annual flowers and the famous flower show. Monsoon transforms the garden into a lush, green paradise, while winter offers clear views and comfortable walking conditions.

        **Photography and Art:** The garden provides countless opportunities for photography and artistic inspiration. Professional photographers often use the garden for portrait sessions and landscape photography. The changing seasons, diverse plant life, and architectural elements create varied photographic subjects throughout the year.`,
        highlights: [
          "Established in 1848",
          "Over 1,000 plant species",
          "Annual Flower Show tradition",
          "Botanical research center",
          "Italian Garden design",
          "Conservation programs"
        ],
        practicalInfo: {
          timings: "8:30 AM - 6:30 PM",
          entryFee: "₹30 for adults, ₹15 for children",
          distance: "3 km from Ooty Railway Station",
          duration: "2-3 hours",
          difficulty: "Easy",
          bestTime: "May (Flower Show) or Oct-Mar"
        },
        collections: [
          "Rare orchids",
          "Exotic ferns",
          "Medicinal plants",
          "Topiary gardens",
          "Rose varieties",
          "Coniferous trees"
        ],
        facilities: [
          "Guided tours",
          "Plant nursery",
          "Conservatory",
          "Souvenir shop",
          "Photography permits",
          "Educational programs"
        ]
      }
    ],

    restaurants: [
      {
        id: 5,
        name: "Savoy Hotel Restaurant",
        type: "fine-dining",
        coordinates: { x: 50, y: 45 },
        rating: 4.8,
        cuisine: "Continental & Indian",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        description: `The Savoy Hotel Restaurant represents the pinnacle of fine dining in Ooty, maintaining its reputation for culinary excellence since the colonial era. Located within the historic Taj Savoy Hotel, this restaurant combines traditional recipes with contemporary presentation, offering guests an unforgettable gastronomic experience in an atmosphere of old-world elegance.

        **Historical Legacy:** Established during the British colonial period, the restaurant has served royalty, dignitaries, and discerning travelers for over a century. The dining room retains its original colonial architecture, featuring high ceilings, period furniture, and vintage photographs that tell the story of Ooty's sophisticated past.

        **Culinary Philosophy:** The restaurant's menu reflects a careful balance between continental classics and refined Indian cuisine, with special emphasis on locally sourced ingredients. The chefs work closely with local farmers and suppliers to ensure the freshest seasonal produce, supporting the local economy while maintaining the highest quality standards.

        **Signature Dishes:** Continental specialties include roasted lamb with rosemary, grilled trout from local streams, and classic beef Wellington. Indian offerings feature traditional Kerala fish curry, Chettinad chicken, and elaborate biryanis. The restaurant is particularly famous for its Sunday roast tradition and elaborate high tea service.

        **Local Ingredients:** The menu showcases the abundance of the Nilgiri region, featuring fresh vegetables from local organic farms, aromatic spices from nearby plantations, and specialty items like Nilgiri tea, eucalyptus honey, and locally made cheeses. Seasonal menus highlight the best produce available throughout the year.

        **Dining Experience:** The restaurant offers multiple dining environments, from intimate indoor seating with fireplace ambiance to outdoor terraces overlooking the gardens. The service maintains colonial-era standards of hospitality, with trained staff providing personalized attention to each guest's preferences and dietary requirements.

        **Wine Collection:** The restaurant boasts an extensive wine cellar featuring both international selections and premium Indian wines. The sommelier provides expert recommendations to complement each dish, ensuring a perfect pairing for every meal. Special wine tasting events are organized regularly for enthusiasts.

        **Special Events:** The restaurant hosts themed dining events throughout the year, including colonial dinner experiences, wine pairing dinners, and seasonal celebrations. The Christmas and New Year celebrations are particularly elaborate, featuring traditional British holiday fare adapted to local tastes.`,
        specialties: [
          "Sunday Roast Tradition",
          "High Tea Service",
          "Wine Pairing Dinners",
          "Colonial-style cuisine",
          "Local ingredient focus",
          "Seasonal menus"
        ],
        practicalInfo: {
          timings: "7:00 AM - 10:30 PM",
          priceRange: "₹2,500-5,000 per person",
          reservations: "Recommended",
          dressCode: "Smart casual",
          speciality: "Continental & Local cuisine"
        }
      },
      {
        id: 6,
        name: "Earl's Secret",
        type: "cafe",
        coordinates: { x: 60, y: 50 },
        rating: 4.5,
        cuisine: "Continental & Cafe",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
        description: `Earl's Secret has established itself as Ooty's premier cafe destination, combining the charm of a colonial-era tea room with contemporary cafe culture. Located in a beautifully restored heritage building, this establishment offers visitors an authentic taste of hill station hospitality with a modern twist.

        **Ambiance and Setting:** The cafe occupies a restored colonial bungalow with original architectural features including wooden floors, high ceilings, and large windows that provide panoramic views of the surrounding hills. The interior design combines vintage furniture with contemporary comfort, creating an atmosphere that appeals to both history enthusiasts and modern travelers.

        **Signature Beverages:** Earl's Secret is renowned for its extensive tea collection, featuring premium Nilgiri teas, international blends, and creative tea-based cocktails. The coffee menu includes single-origin beans from local estates and popular international preparations. Signature drinks include spiced Nilgiri chai, coffee with local honey, and seasonal fruit-based beverages.

        **Artisanal Food Menu:** The kitchen focuses on fresh, locally sourced ingredients to create both international favorites and local specialties. Popular items include homemade soups, artisanal sandwiches, fresh salads, and European-style pastries. The menu changes seasonally to incorporate the best local produce available.

        **Bakery and Desserts:** The in-house bakery produces fresh bread, pastries, and desserts daily. Specialties include homemade scones with clotted cream, chocolate eclairs, fresh fruit tarts, and traditional English cakes. Many recipes have been adapted to include local ingredients like eucalyptus honey and fresh mountain berries.

        **Cultural Events:** The cafe regularly hosts cultural events including live music performances, poetry readings, and art exhibitions featuring local artists. These events have made Earl's Secret a hub for Ooty's creative community and provide visitors with opportunities to experience local culture.

        **Sustainability Practices:** Earl's Secret is committed to sustainable practices, sourcing ingredients from local organic farms, using biodegradable packaging, and supporting fair trade suppliers. The cafe also participates in local environmental conservation efforts and community development programs.`,
        specialties: [
          "Premium Nilgiri teas",
          "Artisanal coffee",
          "Homemade pastries",
          "Local ingredient focus",
          "Cultural events",
          "Heritage ambiance"
        ],
        practicalInfo: {
          timings: "8:00 AM - 9:00 PM",
          priceRange: "₹500-1,200 per person",
          wifi: "Free WiFi available",
          speciality: "Tea & Coffee",
          atmosphere: "Casual & cozy"
        }
      }
    ],

    accommodation: [
      {
        id: 7,
        name: "Taj Savoy Hotel",
        type: "heritage-hotel",
        coordinates: { x: 48, y: 42 },
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        description: `The Taj Savoy Hotel stands as Ooty's most prestigious heritage accommodation, representing over a century of hospitality excellence and colonial elegance. Built in 1834, this iconic property has welcomed royalty, dignitaries, and discerning travelers while maintaining its original charm and character through careful preservation and thoughtful modernization.

        **Historical Significance:** Originally built as a summer residence for British officials, the hotel has witnessed Ooty's transformation from a colonial hill station to a modern tourist destination. The property has hosted numerous historical figures, including British governors, Indian royalty, and international celebrities, each leaving their mark on the hotel's rich legacy.

        **Architecture and Design:** The hotel showcases classic colonial architecture with Victorian influences, featuring wrap-around verandas, bay windows, and period furnishings. The interior design carefully balances historical authenticity with modern comfort, incorporating antique furniture, vintage photographs, and original architectural elements.

        **Accommodation Options:** The hotel offers various room categories, from heritage rooms in the original building to contemporary suites in newer wings. Each room is individually decorated with period furniture, local artwork, and modern amenities while maintaining the property's historical character.

        **Dining and Cuisine:** Multiple dining venues cater to diverse tastes, from formal fine dining to casual outdoor seating. The restaurants serve both international cuisine and local specialties, with emphasis on fresh, locally sourced ingredients. The traditional high tea service is a particular highlight, maintaining colonial-era traditions.

        **Recreation and Amenities:** The hotel provides comprehensive recreational facilities including landscaped gardens, a heated indoor pool, spa services, and outdoor activities. The gardens are particularly notable, featuring rare plants and trees that have been cultivated for over a century.

        **Conservation Efforts:** As a heritage property, the hotel is committed to conservation and sustainable tourism practices. Efforts include heritage preservation, environmental protection, and support for local communities and artisans.`,
        amenities: [
          "Heritage architecture",
          "Fine dining restaurants",
          "Heated indoor pool",
          "Spa and wellness center",
          "Landscaped gardens",
          "Business facilities"
        ],
        practicalInfo: {
          checkIn: "2:00 PM",
          checkOut: "12:00 PM",
          priceRange: "₹15,000-35,000 per night",
          booking: "Advance booking recommended",
          specialFeatures: "Heritage property, Colonial architecture"
        }
      }
    ],

    transportation: [
      {
        id: 8,
        name: "Ooty Railway Station",
        type: "transport-hub",
        coordinates: { x: 40, y: 70 },
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
        description: `Ooty Railway Station serves as the terminus of the famous Nilgiri Mountain Railway and represents one of the most charming transportation hubs in India. This heritage railway station, with its distinctive architecture and historical significance, provides visitors with their first taste of Ooty's colonial heritage and natural beauty.`,
        services: [
          "Toy train terminus",
          "Tourist information",
          "Luggage services",
          "Local transportation",
          "Heritage tours",
          "Photography permits"
        ]
      }
    ]
  };

  // Comprehensive route information
  const touristRoutes = [
    {
      id: 1,
      name: "Heritage Trail",
      duration: "Full Day",
      distance: "25 km",
      stops: ["Ooty Railway Station", "Government Botanical Garden", "Ooty Lake", "St. Stephen's Church"],
      description: "Explore Ooty's colonial heritage and historical landmarks",
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Nature Explorer",
      duration: "2 Days",
      distance: "45 km",
      stops: ["Doddabetta Peak", "Rose Garden", "Pine Forest", "Shooting Point"],
      description: "Immerse yourself in Ooty's natural beauty and biodiversity",
      difficulty: "Moderate"
    },
    {
      id: 3,
      name: "Tea Garden Circuit",
      duration: "Half Day",
      distance: "15 km",
      stops: ["Tea Museum", "Ketti Valley", "Lamb's Rock", "Dolphin's Nose"],
      description: "Discover the world of Nilgiri tea and plantation culture",
      difficulty: "Easy"
    }
  ];

  // Interactive map functions
  const handleMapClick = (e) => {
    if (!isDragging) {
      const rect = mapRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Find nearest location
      const allLocations = [
        ...comprehensiveOotyLocations.attractions,
        ...comprehensiveOotyLocations.restaurants,
        ...comprehensiveOotyLocations.accommodation,
        ...comprehensiveOotyLocations.transportation
      ];
      
      const nearest = allLocations.reduce((closest, location) => {
        const distance = Math.sqrt(
          Math.pow(location.coordinates.x - x, 2) + 
          Math.pow(location.coordinates.y - y, 2)
        );
        return distance < closest.distance ? { location, distance } : closest;
      }, { location: null, distance: Infinity });
      
      if (nearest.distance < 5) {
        setSelectedLocation(nearest.location);
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX - mapPosition.x;
    const startY = e.clientY - mapPosition.y;

    const handleMouseMove = (e) => {
      setMapPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const resetView = () => {
    setZoomLevel(1);
    setMapPosition({ x: 0, y: 0 });
  };

  const addToRoute = (location) => {
    if (!selectedRoute.find(stop => stop.id === location.id)) {
      setSelectedRoute([...selectedRoute, location]);
    }
  };

  const removeFromRoute = (locationId) => {
    setSelectedRoute(selectedRoute.filter(stop => stop.id !== locationId));
  };

  const LocationMarker = ({ location, isSelected, onClick }) => (
    <div
      className={`
        absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300
        ${isSelected ? 'scale-150 z-30' : 'hover:scale-125 z-20'}
      `}
      style={{
        left: `${location.coordinates.x}%`,
        top: `${location.coordinates.y}%`
      }}
      onClick={() => onClick(location)}
    >
      <div className={`
        w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold
        ${location.type === 'viewpoint' ? 'bg-blue-500' :
          location.type === 'lake' ? 'bg-cyan-500' :
          location.type === 'heritage' ? 'bg-purple-500' :
          location.type === 'garden' ? 'bg-green-500' :
          location.type === 'fine-dining' ? 'bg-red-500' :
          location.type === 'cafe' ? 'bg-orange-500' :
          location.type === 'heritage-hotel' ? 'bg-pink-500' :
          'bg-gray-500'
        }
        ${isSelected ? 'animate-pulse' : ''}
      `}>
        {location.type === 'viewpoint' ? <Mountain className="w-3 h-3" /> :
         location.type === 'lake' ? <Droplets className="w-3 h-3" /> :
         location.type === 'heritage' ? <Train className="w-3 h-3" /> :
         location.type === 'garden' ? <TreePine className="w-3 h-3" /> :
         location.type === 'fine-dining' ? <Utensils className="w-3 h-3" /> :
         location.type === 'cafe' ? <Coffee className="w-3 h-3" /> :
         location.type === 'heritage-hotel' ? <Bed className="w-3 h-3" /> :
         <MapPin className="w-3 h-3" />
        }
      </div>
      {isSelected && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-2 min-w-32 text-center z-40">
          <div className="text-xs font-semibold text-gray-800">{location.name}</div>
          <div className="text-xs text-gray-600">{location.type}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <MapIcon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Ooty Interactive Map</h1>
                <p className="text-sm text-gray-300">Explore the Queen of Hill Stations</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{currentWeather.temp}</span>
              </div>
              
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          {showSearch && (
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search locations, attractions, restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`
          bg-black/40 backdrop-blur-md border-r border-white/10 transition-all duration-300 overflow-y-auto
          ${showSidebar ? 'w-96' : 'w-0'}
        `}>
          {showSidebar && (
            <div className="p-6">
              {/* Tab Navigation */}
              <div className="flex space-x-2 mb-6">
                {['overview', 'locations', 'routes', 'weather'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${activeTab === tab 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }
                    `}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content based on active tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About Ooty</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Discover Udhagamandalam, the Queen of Hill Stations, through our interactive map. 
                      Explore attractions, restaurants, accommodation, and transportation options with 
                      detailed information and user reviews.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Elevation</div>
                        <div className="text-lg font-semibold">2,240m</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Temperature</div>
                        <div className="text-lg font-semibold">15-25°C</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Best Time</div>
                        <div className="text-sm font-semibold">Oct-Mar</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs text-gray-400">UNESCO Site</div>
                        <div className="text-sm font-semibold">Toy Train</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'locations' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['all', 'attractions', 'restaurants', 'accommodation', 'transportation'].map((layer) => (
                        <button
                          key={layer}
                          onClick={() => setActiveLayer(layer)}
                          className={`
                            px-3 py-1 rounded-full text-xs transition-all duration-300
                            ${activeLayer === layer 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }
                          `}
                        >
                          {layer.charAt(0).toUpperCase() + layer.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location List */}
                  <div className="space-y-3">
                    {(activeLayer === 'all' || activeLayer === 'attractions') && 
                      comprehensiveOotyLocations.attractions.map((location) => (
                        <div
                          key={location.id}
                          onClick={() => setSelectedLocation(location)}
                          className="bg-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                              <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{location.name}</h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-400">
                                <span>{location.type}</span>
                                <span>•</span>
                                <div className="flex items-center">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                  {location.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                    
                    {(activeLayer === 'all' || activeLayer === 'restaurants') && 
                      comprehensiveOotyLocations.restaurants.map((location) => (
                        <div
                          key={location.id}
                          onClick={() => setSelectedLocation(location)}
                          className="bg-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                              <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{location.name}</h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-400">
                                <span>{location.cuisine}</span>
                                <span>•</span>
                                <div className="flex items-center">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                  {location.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'routes' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tourist Routes</h3>
                    <div className="space-y-3">
                      {touristRoutes.map((route) => (
                        <div key={route.id} className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{route.name}</h4>
                            <span className="text-xs bg-blue-600 px-2 py-1 rounded-full">{route.difficulty}</span>
                          </div>
                          <p className="text-sm text-gray-300 mb-3">{route.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {route.duration}
                            </div>
                            <div className="flex items-center">
                              <Route className="w-3 h-3 mr-1" />
                              {route.distance}
                            </div>
                          </div>
                          <div className="text-xs">
                            <div className="text-gray-400 mb-1">Stops:</div>
                            <div className="space-y-1">
                              {route.stops.map((stop, index) => (
                                <div key={index} className="text-gray-300">{index + 1}. {stop}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Custom Route Builder */}
                  <div>
                    <h4 className="font-medium mb-3">Build Your Route</h4>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-sm text-gray-300 mb-2">Selected Stops:</div>
                      {selectedRoute.length === 0 ? (
                        <div className="text-xs text-gray-400 italic">Click on map locations to add stops</div>
                      ) : (
                        <div className="space-y-2">
                          {selectedRoute.map((stop, index) => (
                            <div key={stop.id} className="flex items-center justify-between bg-white/10 rounded p-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-blue-600 w-5 h-5 rounded-full flex items-center justify-center">{index + 1}</span>
                                <span className="text-xs">{stop.name}</span>
                              </div>
                              <button
                                onClick={() => removeFromRoute(stop.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => setSelectedRoute([])}
                            className="w-full text-xs bg-red-600 hover:bg-red-700 py-2 rounded mt-2 transition-colors duration-300"
                          >
                            Clear Route
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'weather' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Current Weather</h3>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-2xl font-bold">{currentWeather.temp}</div>
                          <div className="text-sm text-blue-100">{currentWeather.condition}</div>
                        </div>
                        <CloudRain className="w-12 h-12 text-blue-200" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-blue-200">Humidity</div>
                          <div className="font-medium">{currentWeather.humidity}</div>
                        </div>
                        <div>
                          <div className="text-blue-200">Wind</div>
                          <div className="font-medium">{currentWeather.wind}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Weekly Forecast</h4>
                    <div className="space-y-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={day} className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                          <span className="text-sm font-medium">{day}</span>
                          <div className="flex items-center space-x-3">
                            {index % 3 === 0 ? <Sun className="w-4 h-4 text-yellow-400" /> :
                             index % 3 === 1 ? <Cloud className="w-4 h-4 text-gray-400" /> :
                             <CloudRain className="w-4 h-4 text-blue-400" />}
                            <span className="text-sm">{18 - index}°C</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Main Map Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Map Controls */}
          <div className="absolute top-4 right-4 z-30 flex flex-col space-y-2">
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-2 space-y-2">
              <button
                onClick={zoomIn}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={zoomOut}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={resetView}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-2 space-y-2">
              <button
                onClick={() => setMapView(mapView === 'satellite' ? 'terrain' : 'satellite')}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                {mapView === 'satellite' ? <Layers className="w-5 h-5" /> : <Satellite className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setRouteMode(!routeMode)}
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                  ${routeMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 hover:bg-white/30'}
                `}
              >
                <Route className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Map */}
          <div
            ref={mapRef}
            className="w-full h-full relative cursor-move"
            onClick={handleMapClick}
            onMouseDown={handleMouseDown}
            style={{
              backgroundImage: mapView === 'satellite' 
                ? 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)'
                : 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop)',
              backgroundSize: `${100 * zoomLevel}%`,
              backgroundPosition: `${mapPosition.x}px ${mapPosition.y}px`,
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Location Markers */}
            {(activeLayer === 'all' || activeLayer === 'attractions') && 
              comprehensiveOotyLocations.attractions.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onClick={setSelectedLocation}
                />
            ))}
            
            {(activeLayer === 'all' || activeLayer === 'restaurants') && 
              comprehensiveOotyLocations.restaurants.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onClick={setSelectedLocation}
                />
            ))}
            
            {(activeLayer === 'all' || activeLayer === 'accommodation') && 
              comprehensiveOotyLocations.accommodation.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onClick={setSelectedLocation}
                />
            ))}
            
            {(activeLayer === 'all' || activeLayer === 'transportation') && 
              comprehensiveOotyLocations.transportation.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onClick={setSelectedLocation}
                />
            ))}

            {/* Route Lines */}
            {routeMode && selectedRoute.length > 1 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {selectedRoute.map((stop, index) => {
                  if (index === 0) return null;
                  const prevStop = selectedRoute[index - 1];
                  return (
                    <line
                      key={`${prevStop.id}-${stop.id}`}
                      x1={`${prevStop.coordinates.x}%`}
                      y1={`${prevStop.coordinates.y}%`}
                      x2={`${stop.coordinates.x}%`}
                      y2={`${stop.coordinates.y}%`}
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>
            )}
          </div>

          {/* Location Details Panel */}
          {selectedLocation && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-6 max-h-96 overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">{selectedLocation.name}</h3>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {selectedLocation.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {selectedLocation.rating}
                    </div>
                    {selectedLocation.cuisine && (
                      <span>{selectedLocation.cuisine}</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {routeMode && (
                    <button
                      onClick={() => addToRoute(selectedLocation)}
                      className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-all duration-300"
                    >
                      <Route className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedLocation.description.substring(0, 300)}...
                  </p>
                </div>

                <div className="space-y-4">
                  {selectedLocation.highlights && (
                    <div>
                      <h4 className="font-medium mb-2">Highlights</h4>
                      <div className="space-y-1">
                        {selectedLocation.highlights.slice(0, 4).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLocation.practicalInfo && (
                    <div>
                      <h4 className="font-medium mb-2">Practical Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{selectedLocation.practicalInfo.timings}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{selectedLocation.practicalInfo.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{selectedLocation.practicalInfo.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMapFirstTheme;