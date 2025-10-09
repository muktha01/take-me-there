'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Calendar, Clock, Star, Heart, Share2, Bookmark, 
  Camera, Navigation, Mountain, TreePine, Coffee, Car, 
  Users, Eye, ThumbsUp, MessageCircle, Tag, Filter,
  ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX,
  Award, Info, CheckCircle, X, Search, Menu, ArrowRight,
  Compass, Globe, Sunset, Camera as CameraIcon, Utensils,
  Bed, ShoppingBag, Wind, CloudRain, Sun, Cloud
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const MicroInteractionTravelTheme = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [animatedElements, setAnimatedElements] = useState(new Set());

  const observerRef = useRef();
  const audioRef = useRef();

  // Comprehensive Ooty content with detailed descriptions
  const comprehensiveOotyContent = {
    hero: {
      title: "Udhagamandalam: The Crown Jewel of the Nilgiris",
      subtitle: "A Complete Guide to the Queen of Hill Stations",
      description: `Nestled at an elevation of 2,240 meters above sea level in the Western Ghats, Udhagamandalam, fondly known as Ooty, stands as one of India's most beloved hill stations. This former summer capital of the Madras Presidency during British colonial rule has evolved into a year-round destination that captivates visitors with its cool climate, rolling hills, aromatic tea plantations, and rich cultural heritage.

      Established as a hill station in the early 19th century by John Sullivan, the then Collector of Coimbatore, Ooty has retained its old-world charm while embracing modern tourism. The town serves as the headquarters of the Nilgiris district and is strategically located at the junction of Karnataka, Kerala, and Tamil Nadu, making it accessible from multiple states.

      The landscape of Ooty is a painter's palette of emerald green tea gardens, dense shola forests, pristine lakes, and mist-covered mountains. The Western Ghats, a UNESCO World Heritage Site, provides the backdrop for this enchanting destination, offering incredible biodiversity and ecological significance that attracts nature enthusiasts from around the world.`,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
    },

    detailedSections: {
      climate: {
        title: "Climate & Best Time to Visit",
        content: `Ooty enjoys a subtropical highland climate that remains pleasant throughout the year, earning it the nickname "Queen of Hill Stations." The temperature rarely exceeds 25°C even during summer months, making it a perfect escape from the scorching heat of the plains.

        **Summer (March to June):** This is the peak tourist season with temperatures ranging from 15°C to 25°C. The weather is perfect for sightseeing, outdoor activities, and enjoying the blooming gardens. However, this period sees the highest influx of tourists, so advance booking is recommended.

        **Monsoon (July to September):** The monsoon brings heavy rainfall, transforming Ooty into a lush green paradise. While some outdoor activities may be restricted, the landscape becomes breathtakingly beautiful. This is an ideal time for photography enthusiasts and those seeking solitude.

        **Winter (October to February):** Winter in Ooty is characterized by cool, crisp air with temperatures dropping to 5°C. This is considered the best time to visit for those who enjoy cooler weather. The clear skies offer stunning views of the surrounding mountains, and it's perfect for trekking and outdoor adventures.

        The unique microclimate of Ooty is influenced by its elevation and the surrounding Western Ghats, creating distinct weather patterns that support diverse flora and fauna.`,
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop"
      },

      history: {
        title: "Rich Historical Heritage",
        content: `The history of Ooty is a fascinating blend of indigenous Toda culture and British colonial influence. Long before the arrival of the British, the Nilgiri Hills were inhabited by indigenous tribes including the Todas, Kotas, Kurumbas, and Irulas, each with their unique customs, traditions, and way of life.

        **Pre-Colonial Era:** The Todas, known for their distinctive dome-shaped huts called 'munds' and their sacred relationship with buffaloes, were the original inhabitants of the plateau. Their pastoral lifestyle and unique polyandrous social structure have been preserved for centuries.

        **Colonial Period (1818-1947):** John Sullivan, the Collector of Coimbatore, is credited with 'discovering' Ooty for the British. Recognizing its potential as a summer retreat, he established the first European settlement in 1818. The British developed Ooty as a sanatorium and summer capital, building churches, clubs, schools, and residential areas that still stand today.

        **Architectural Legacy:** The colonial architecture of Ooty includes the Gothic Revival St. Stephen's Church (1829), the Ooty Club (1843), and numerous heritage bungalows. These structures showcase a unique blend of British architectural styles adapted to local climate conditions.

        **Post-Independence:** After India's independence in 1947, Ooty transitioned from a colonial hill station to a major tourist destination while preserving its historical character and cultural heritage.`,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      },

      ecology: {
        title: "Biodiversity & Ecological Significance",
        content: `Ooty is part of the Nilgiri Biosphere Reserve, recognized by UNESCO as one of the world's most important ecological hotspots. The region's unique position in the Western Ghats contributes to its exceptional biodiversity and ecological importance.

        **Shola Forests:** These are unique montane forests found only in the higher elevations of the Western Ghats. Shola-grassland ecosystems are characterized by dense patches of tropical montane forests separated by rolling grasslands. These forests are home to endemic species and play a crucial role in water conservation.

        **Flora:** The region boasts over 2,500 species of flowering plants, including numerous endemic species. The famous Nilgiri tea gardens, eucalyptus plantations, and native shola forests create a diverse botanical landscape. Rare orchids, rhododendrons, and medicinal plants thrive in this unique ecosystem.

        **Fauna:** Ooty's forests and grasslands support diverse wildlife including the endangered Nilgiri tahr, Asian elephants, Indian gaur (bison), leopards, and over 200 species of birds. The Nilgiri langur, an endemic primate species, is particularly significant to the region's biodiversity.

        **Conservation Efforts:** Multiple wildlife sanctuaries and national parks around Ooty, including Mudumalai National Park and Bandipur National Park, work together to preserve this unique ecosystem. Conservation programs focus on protecting endemic species and maintaining the delicate balance of the shola-grassland ecosystem.

        **Water Resources:** The region's ecology plays a crucial role in water conservation, with numerous streams and rivers originating from these hills, providing water to millions of people in Tamil Nadu and Karnataka.`,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
      }
    },

    attractions: [
      {
        id: 1,
        name: "Doddabetta Peak",
        category: "viewpoint",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        description: `Standing majestically at 2,637 meters above sea level, Doddabetta Peak is the highest point in the Nilgiri Hills and the second-highest peak in South India. This iconic landmark offers breathtaking panoramic views that stretch across the entire Nilgiri district and beyond into neighboring states.

        **The Journey to the Summit:** The drive to Doddabetta is an experience in itself, winding through dense eucalyptus and pine forests. The road is well-maintained, making it accessible by car, motorcycle, or tourist buses. Along the way, visitors encounter several viewpoints offering glimpses of the spectacular landscape that awaits at the summit.

        **The Observatory:** At the summit, a telescope house operated by the Tamil Nadu Tourism Development Corporation provides visitors with enhanced views of the surrounding landscape. On clear days, the view extends to the Mysore plateau, distant mountain ranges of Karnataka, and the sprawling tea estates of the Nilgiris. The observatory houses high-powered telescopes that bring distant features into sharp focus.

        **Unique Flora and Fauna:** The summit area is home to several endemic plant species adapted to high-altitude conditions. The surrounding shola forests harbor rare birds and butterflies, making it a paradise for nature enthusiasts and wildlife photographers.

        **Best Time to Visit:** Early morning (6:00-8:00 AM) offers the clearest views with minimal mist and fog. Sunset visits are equally spectacular, with the golden light painting the landscape in warm hues. However, weather conditions can change rapidly at this altitude, so visitors should be prepared for sudden temperature drops and mist formation.

        **Photography Tips:** The summit offers 360-degree views, making it ideal for landscape photography. The changing light conditions throughout the day provide different moods for photography - from misty morning shots to dramatic sunset silhouettes.`,
        highlights: ["Highest peak in Nilgiris", "360-degree panoramic views", "Telescope observatory", "Endemic flora and fauna"],
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹30 for adults, ₹15 for children",
        distance: "10 km from Ooty town center"
      },
      {
        id: 2,
        name: "Ooty Lake",
        category: "lake",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
        description: `Ooty Lake, an artificial marvel created in 1824, stands as one of the most popular and picturesque attractions in the hill station. Constructed by John Sullivan by damming the mountain streams flowing down Ooty valley, this lake has become an integral part of the town's identity and a central hub for recreational activities.

        **Historical Significance:** The lake was part of Sullivan's vision to develop Ooty as a premier hill station. The construction involved significant engineering challenges of the time, requiring the coordination of multiple mountain streams and the creation of a stable dam structure. The lake originally served as a water source for the growing settlement and continues to play an important role in the town's water supply.

        **Recreational Activities:** The lake offers a variety of water-based activities that cater to all age groups. Pedal boating is the most popular activity, with colorful boats available for hire throughout the day. Row boats provide a more traditional experience, while paddle boats offer family-friendly fun. The Tamil Nadu Tourism Development Corporation manages these activities, ensuring safety and quality service.

        **The Lake's Ecosystem:** Despite being artificial, the lake has developed its own ecosystem over nearly two centuries. The surrounding area supports various bird species, including migratory birds that visit during winter months. The lake's waters are home to several fish species, and the surrounding gardens provide habitat for local fauna.

        **Garden and Walking Paths:** The lake is surrounded by well-maintained Eucalyptus gardens and walking paths that offer scenic strolls. The garden features a variety of exotic plants and flowers, creating a colorful landscape that changes with the seasons. Benches placed strategically around the lake provide rest spots for visitors to enjoy the serene atmosphere.

        **Annual Events:** The lake serves as a venue for various cultural and recreational events throughout the year. The annual boat race during the summer festival is a major attraction, drawing participants and spectators from across the region. Cultural programs and food festivals are regularly organized along the lake's periphery.

        **Best Photography Spots:** The lake offers numerous photography opportunities - from reflections of the surrounding hills in the calm waters to action shots of boating activities. Early morning mist over the lake creates ethereal scenes, while sunset provides warm, golden-hour photography opportunities.`,
        highlights: ["Boating activities", "Eucalyptus gardens", "Historic engineering marvel", "Bird watching"],
        timings: "9:00 AM - 6:00 PM",
        entryFee: "₹20 entry, ₹150-300 for boating",
        distance: "2 km from Ooty town center"
      },
      {
        id: 3,
        name: "Nilgiri Mountain Railway",
        category: "heritage",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
        description: `The Nilgiri Mountain Railway, affectionately known as the "Toy Train," is a UNESCO World Heritage Site and one of India's most remarkable engineering achievements. Built between 1891 and 1908, this narrow-gauge railway connects Mettupalayam to Ooty, covering a distance of 46 kilometers through some of the most spectacular mountain scenery in South India.

        **Engineering Marvel:** The railway is a testament to British engineering ingenuity, featuring a unique rack and pinion system that allows trains to climb steep gradients safely. The route includes 250 bridges, 16 tunnels, and numerous sharp curves, with the steepest gradient reaching 1 in 12. The engineering solutions developed for this railway were pioneering for their time and continue to function efficiently today.

        **Historical Journey:** Construction of the railway began in 1891 under the supervision of the Nilgiri Railway Company. The project faced numerous challenges including difficult terrain, monsoon rains, and the need to preserve the delicate mountain ecosystem. The railway was completed in 1908 and has been operating continuously for over a century, making it one of the oldest mountain railways in the world.

        **The Journey Experience:** The train journey from Mettupalayam to Ooty takes approximately 4.5 hours, climbing from 300 meters to 2,203 meters above sea level. Passengers experience diverse landscapes, from tropical forests at lower elevations to temperate grasslands and tea gardens at higher altitudes. The journey offers glimpses of wildlife, mountain streams, and traditional hill station architecture.

        **Heritage Steam Locomotives:** While modern diesel locomotives handle regular passenger services, heritage steam locomotives are still used for special tourist trains. These steam engines, some dating back to the early 20th century, provide an authentic historical experience with their characteristic sounds and steam clouds.

        **Cultural Impact:** The toy train has become an integral part of Ooty's cultural identity, featured in numerous films, literature, and tourism campaigns. It represents the romantic era of hill station development and continues to evoke nostalgia for a bygone era.

        **Conservation Efforts:** Being a UNESCO World Heritage Site, the railway is subject to strict conservation guidelines. Efforts are ongoing to preserve original infrastructure, maintain traditional operating methods, and protect the surrounding environment while ensuring modern safety standards.

        **Stations Along the Route:** Key stations include Mettupalayam (starting point), Hillgrove (known for its tea plantations), Coonoor (offering spectacular valley views), Wellington (military cantonment), and finally Ooty. Each station offers unique attractions and perspectives of the Nilgiri landscape.`,
        highlights: ["UNESCO World Heritage Site", "Rack and pinion system", "46 km mountain journey", "Heritage steam locomotives"],
        timings: "7:10 AM departure from Mettupalayam",
        entryFee: "₹280-1500 depending on class",
        distance: "Journey from Mettupalayam to Ooty"
      }
    ],

    foodExperiences: [
      {
        name: "Traditional Toda Cuisine",
        description: `Experience the unique culinary traditions of the indigenous Toda community, characterized by dairy-based dishes and wild herbs. Traditional preparations include Toda-style buffalo milk preparations, wild mushroom curries, and indigenous grain dishes that have been passed down through generations.

        The Toda cuisine reflects their pastoral lifestyle, with buffalo milk forming the cornerstone of their diet. Fermented milk products, similar to cheese, are prepared using traditional methods in sacred dairies. These dishes are often flavored with herbs and leaves found in the local shola forests.

        Key dishes include fermented milk preparations, wild honey collected from forest bees, traditional grain porridges made from indigenous millet varieties, and seasonal vegetables prepared with minimal spices to preserve their natural flavors.`,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        category: "indigenous"
      },
      {
        name: "Colonial-Era English Breakfast",
        description: `Relive the colonial era with authentic English breakfasts served in heritage hotels and clubs that have maintained their traditional recipes since the British period. These establishments continue to serve hearty breakfasts that include freshly baked bread, local butter, seasonal jams, and organic eggs.

        The colonial breakfast tradition in Ooty includes elements adapted to local availability - local honey instead of imported preserves, fresh mountain vegetables, and locally sourced meats. Many heritage properties maintain their original dining rooms with period furniture and silverware.

        Traditional items include homemade sausages, black pudding (adapted with local ingredients), freshly baked scones with clotted cream, kedgeree made with local fish, and strong English tea grown in nearby plantations.`,
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
        category: "colonial"
      },
      {
        name: "Nilgiri Tea Plantation Experience",
        description: `Embark on a comprehensive tea plantation tour that includes tea tasting, processing demonstrations, and meals prepared with tea-infused ingredients. Learn about the history of tea cultivation in the Nilgiris and its impact on local culture and economy.

        The Nilgiri tea region produces distinctive teas known for their bright, citrusy flavor and aromatic qualities. The high altitude, cool climate, and specific soil conditions create ideal growing conditions for premium tea varieties.

        Plantation experiences include guided walks through tea gardens, interactions with tea pluckers, visits to processing factories, and specialized tea tasting sessions led by expert tea masters. Many plantations offer accommodation with meals featuring tea-infused dishes and locally grown organic vegetables.`,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "plantation"
      }
    ],

    practicalInfo: {
      transportation: {
        title: "Getting to Ooty",
        content: `**By Road:** Ooty is well-connected by road to major cities in South India. The journey from Bangalore (270 km) takes approximately 6 hours through scenic mountain roads. From Chennai (560 km), the drive takes about 10 hours. Regular bus services operate from Bangalore, Chennai, Mysore, and Coimbatore. Private taxis and rental cars are popular options for families and groups.

        **By Train:** The famous Nilgiri Mountain Railway (toy train) connects Ooty to Mettupalayam, which has regular train connections to major cities. The nearest major railway station is Coimbatore (88 km), well-connected to cities across India.

        **By Air:** The nearest airport is Coimbatore International Airport (88 km), which has domestic and international flights. Bangalore International Airport (290 km) is the nearest major international airport with extensive connectivity.`,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
      },
      accommodation: {
        title: "Where to Stay",
        content: `**Heritage Hotels:** Colonial-era properties like the Taj Savoy Hotel and Fernhills Royal Palace offer luxury accommodation with historical significance. These properties maintain their original architecture and provide authentic colonial experiences.

        **Tea Plantation Bungalows:** Stay in restored plantation bungalows that offer immersive experiences in tea gardens. These accommodations provide guided plantation tours, tea tasting sessions, and organic farm-to-table dining.

        **Budget Accommodations:** Numerous budget hotels, guesthouses, and homestays cater to backpackers and budget travelers. Many offer scenic views and local hospitality at affordable rates.

        **Luxury Resorts:** Modern luxury resorts provide world-class amenities while maintaining harmony with the natural environment. These properties often feature spa services, fine dining, and extensive recreational facilities.`,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
      }
    }
  };

  // Micro-interactions and animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, id]));
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    document.querySelectorAll('[data-id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = (id) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleBookmark = (id) => {
    setBookmarkedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const nextImage = (attractionId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [attractionId]: ((prev[attractionId] || 0) + 1) % 3
    }));
  };

  const InteractiveCard = ({ children, className = "", id, ...props }) => (
    <div
      data-id={id}
      className={`
        transform transition-all duration-700 ease-out
        ${animatedElements.has(id) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        hover:scale-105 hover:shadow-2xl cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );

  const MicroInteractionButton = ({ children, onClick, variant = "primary", className = "", ...props }) => (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }
        rounded-full px-6 py-3 font-medium shadow-lg hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 -translate-x-full hover:translate-x-full"></div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Floating Audio Controls */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? <Pause className="w-5 h-5 text-blue-600" /> : <Play className="w-5 h-5 text-blue-600" />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-blue-600" /> : <Volume2 className="w-5 h-5 text-blue-600" />}
        </button>
      </div>

      {/* Hero Section with Parallax */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${comprehensiveOotyContent.hero.image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${scrollPosition * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {comprehensiveOotyContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {comprehensiveOotyContent.hero.subtitle}
          </p>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed mb-8 text-gray-200">
            {comprehensiveOotyContent.hero.description.substring(0, 300)}...
          </div>
          <MicroInteractionButton 
            onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4"
          >
            Explore Complete Guide
            <ArrowRight className="ml-2 w-5 h-5 inline-block" />
          </MicroInteractionButton>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Ooty Explorer</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Category Navigation */}
          <div className="mt-4 flex space-x-4 overflow-x-auto">
            {['overview', 'climate', 'history', 'ecology'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 p-4 shadow-lg">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-4">
              {['all', 'viewpoint', 'lake', 'heritage', 'adventure'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${activeFilter === filter 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div id="content" className="container mx-auto px-4 py-8">
        
        {/* Detailed Section Content */}
        {activeCategory !== 'overview' && (
          <InteractiveCard id={`section-${activeCategory}`} className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="h-80 relative">
                <img 
                  src={comprehensiveOotyContent.detailedSections[activeCategory].image} 
                  alt={comprehensiveOotyContent.detailedSections[activeCategory].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">
                    {comprehensiveOotyContent.detailedSections[activeCategory].title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {comprehensiveOotyContent.detailedSections[activeCategory].content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveCard>
        )}

        {/* Attractions Grid */}
        {(activeCategory === 'overview' || activeCategory === 'attractions') && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Must-Visit Attractions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {comprehensiveOotyContent.attractions
                .filter(attraction => activeFilter === 'all' || attraction.category === activeFilter)
                .map((attraction, index) => (
                <InteractiveCard key={attraction.id} id={`attraction-${attraction.id}`}>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col">
                    <div className="relative h-64">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button
                          onClick={() => handleLike(attraction.id)}
                          className={`
                            p-2 rounded-full backdrop-blur-sm transition-all duration-300
                            ${likedPosts.has(attraction.id) 
                              ? 'bg-red-500 text-white' 
                              : 'bg-white/90 text-gray-600 hover:text-red-500'
                            }
                          `}
                        >
                          <Heart className={`w-5 h-5 ${likedPosts.has(attraction.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => handleBookmark(attraction.id)}
                          className={`
                            p-2 rounded-full backdrop-blur-sm transition-all duration-300
                            ${bookmarkedPosts.has(attraction.id) 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-white/90 text-gray-600 hover:text-blue-500'
                            }
                          `}
                        >
                          <Bookmark className={`w-5 h-5 ${bookmarkedPosts.has(attraction.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        {attraction.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{attraction.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-600">{attraction.rating}</span>
                        </div>
                      </div>
                      
                      <div className="text-gray-600 mb-4 flex-1">
                        {expandedCards.has(attraction.id) 
                          ? attraction.description
                          : `${attraction.description.substring(0, 200)}...`
                        }
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {attraction.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-sm text-gray-500 space-y-1">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {attraction.timings}
                          </div>
                          <div className="flex items-center">
                            <Tag className="w-4 h-4 mr-2" />
                            {attraction.entryFee}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {attraction.distance}
                          </div>
                        </div>
                        
                        <MicroInteractionButton
                          onClick={() => toggleExpand(attraction.id)}
                          variant="secondary"
                          className="w-full"
                        >
                          {expandedCards.has(attraction.id) ? 'Show Less' : 'Read More'}
                          {expandedCards.has(attraction.id) ? 
                            <ChevronUp className="ml-2 w-4 h-4" /> : 
                            <ChevronDown className="ml-2 w-4 h-4" />
                          }
                        </MicroInteractionButton>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        )}

        {/* Food Experiences */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Culinary Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveOotyContent.foodExperiences.map((food, index) => (
              <InteractiveCard key={index} id={`food-${index}`}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
                  <div className="h-48 relative">
                    <img 
                      src={food.image} 
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      {food.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{food.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{food.description}</p>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Practical Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(comprehensiveOotyContent.practicalInfo).map(([key, info], index) => (
              <InteractiveCard key={key} id={`practical-${index}`}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={info.image} 
                      alt={info.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <h3 className="text-2xl font-bold">{info.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="prose max-w-none text-gray-700">
                      {info.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Interactive Stats */}
        <InteractiveCard id="stats">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Ooty at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2,240m</div>
                <div className="text-blue-100">Elevation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15-25°C</div>
                <div className="text-blue-100">Temperature Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1818</div>
                <div className="text-blue-100">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">46km</div>
                <div className="text-blue-100">Toy Train Route</div>
              </div>
            </div>
          </div>
        </InteractiveCard>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Mountain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Ooty Complete Guide</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Experience the comprehensive beauty and rich heritage of Udhagamandalam, 
              the Queen of Hill Stations, through our detailed travel guide.
            </p>
            <div className="flex justify-center space-x-6">
              <Share2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Heart className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" />
              <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </footer>

      {/* Ambient Audio */}
      <audio ref={audioRef} loop>
        <source src="/ambient-nature.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MicroInteractionTravelTheme;