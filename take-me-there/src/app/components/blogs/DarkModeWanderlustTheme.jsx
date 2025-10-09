"use client";
import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  Thermometer,
  Camera,
  Heart,
  Share2,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Navigation,
  Coffee,
  Utensils,
  Train,
  Plane,
  Car,
  Hotel,
  Compass,
  Mountain,
  TreePine,
  Flower,
  Sunrise,
  CloudRain,
  Snowflake
} from 'lucide-react';

const DarkModeWanderlustTheme = ({ data }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Enhanced Ooty data with comprehensive information
  const enhancedOotyData = {
    ...data,
    detailedDescription: `Nestled in the heart of the Nilgiri Hills in Tamil Nadu, Ooty (officially known as Udhagamandalam) stands as the undisputed "Queen of Hill Stations" in South India. This enchanting destination, perched at an elevation of 2,240 meters above sea level, offers a perfect escape from the sweltering heat of the plains below.

    Founded by the British in the early 19th century as a summer retreat, Ooty has retained its colonial charm while embracing modern amenities. The town's unique blend of Victorian architecture, sprawling tea gardens, pristine lakes, and mist-covered mountains creates an atmosphere that's both romantic and adventurous.

    The very air of Ooty tells stories - stories of British colonizers who fell in love with its climate, of tea planters who transformed its landscape, and of countless travelers who found solace in its tranquil embrace. Every winding road, every colonial bungalow, and every tea bush whispers tales of a bygone era while promising new adventures to those who seek them.

    What makes Ooty truly special is not just its natural beauty, but its ability to offer something for every type of traveler. Whether you're a nature enthusiast seeking pristine wilderness, a photography aficionado hunting for that perfect shot, a couple looking for a romantic getaway, or a family wanting to create lasting memories, Ooty delivers with an abundance that's both surprising and delightful.`,

    culturalHeritage: `The cultural tapestry of Ooty is as rich and diverse as its landscape. The town represents a unique confluence of Tamil culture, British colonial legacy, and the traditions of various indigenous tribes of the Nilgiris. The Toda people, one of the most fascinating tribal communities of the region, have called these hills home for centuries, living in their distinctive barrel-shaped huts and practicing a pastoral lifestyle that's remained largely unchanged.

    The British influence is evident everywhere - from the architecture of St. Stephen's Church (built in 1829) to the layout of the Government Botanical Garden. The colonial-era buildings, with their sloping roofs and large windows designed to capture the mountain breeze, stand as testament to a time when Ooty was the summer capital of the Madras Presidency.

    Local festivals like the Summer Festival (held in May) and the Tea and Tourism Festival showcase the vibrant culture of the region. These celebrations feature traditional dance performances, local cuisine, and exhibitions of indigenous crafts. The markets of Ooty buzz with activity, selling everything from handmade chocolates and essential oils to traditional Nilgiri tea and local handicrafts.`,

    ecologyAndBiodiversity: `Ooty is not just a tourist destination; it's a biodiversity hotspot of global significance. The town lies within the Nilgiri Biosphere Reserve, home to over 3,000 species of flowering plants, 1,000 species of vertebrates, and countless insects and microorganisms. The shola forests - unique tropical montane cloud forests found only in the Western Ghats - create a mystical landscape where endemic species thrive.

    The region is home to several endangered species including the Nilgiri Tahr (the state animal of Tamil Nadu), the Lion-tailed Macaque, and the Nilgiri Langur. Birdwatchers can spot over 200 species of birds, including several endemics like the Nilgiri Flycatcher and the Nilgiri Pipit.

    The tea gardens, while human-made, have created their own ecosystem. These emerald carpets rolling across the hills are not just aesthetically pleasing but also serve as carbon sinks and watershed protection areas. The careful cultivation practices followed by local tea estates ensure that this landscape remains sustainable for future generations.`
  };

  const attractions = data.attractions.map(attraction => ({
    ...attraction,
    detailedInfo: getDetailedAttractionInfo(attraction.name)
  }));

  function getDetailedAttractionInfo(name) {
    const details = {
      "Ooty Lake": `Created in 1824 by John Sullivan, the founder of Ooty, this artificial lake is a marvel of early 19th-century engineering. Spanning 65 acres, the lake was constructed by damming the mountain streams flowing down from the surrounding hills. What began as a utilitarian project to provide water for the growing settlement has evolved into one of Ooty's most beloved attractions.

      The lake offers a perfect mirror to the sky, reflecting the changing moods of the Nilgiri weather. During the early morning hours, when mist rises from the water's surface, the lake takes on an ethereal quality that has inspired poets and artists for generations. The well-maintained promenade around the lake provides an excellent opportunity for leisurely walks, with benches strategically placed to offer the best views.

      Boating on Ooty Lake is an experience that combines tranquility with gentle adventure. Paddle boats and rowboats are available for those who prefer a peaceful journey, while motorboats offer a quicker way to explore the lake's expanse. The boat house, built in traditional colonial style, serves as both a functional facility and a charming backdrop for photographs.

      The area around the lake has been developed into a comprehensive recreation zone. The children's park features swings and slides set amidst well-manicured gardens, while the nearby railway station adds the excitement of the toy train's whistle to the lake's serene ambiance. Food stalls selling local snacks and hot beverages ensure that visitors can extend their stay comfortably.`,

      "Doddabetta Peak": `Standing majestically at 2,637 meters above sea level, Doddabetta Peak is not just the highest point in Ooty but also the second-highest peak in South India after Anamudi in Kerala. The name 'Doddabetta' translates to 'big mountain' in the local language, and it truly lives up to its name in every sense.

      The journey to Doddabetta is as rewarding as the destination itself. The winding road takes you through dense forests of eucalyptus and pine, tea gardens that seem to stretch to infinity, and small settlements that offer glimpses into the daily life of the hill people. As you ascend, the air becomes crisper, and the views become more expansive.

      At the summit, the Telescope House offers visitors a chance to get a closer look at the surrounding landscape. On clear days, the view extends for miles in every direction, encompassing the Nilgiri Hills, the plains of Tamil Nadu and Karnataka, and even glimpses of Kerala. The sight of clouds moving between the peaks creates a dynamic landscape that changes with every passing moment.

      The peak is particularly famous for its sunrise and sunset views. Early morning visitors are rewarded with the spectacular sight of the sun rising over the Eastern Ghats, painting the sky in brilliant hues of orange and pink. The temperature at the peak can be significantly cooler than in Ooty town, so carrying warm clothing is advisable even during summer months.`,

      "Government Botanical Garden": `Established in 1848 and spread across 55 acres, the Government Botanical Garden is a living testament to the incredible biodiversity of the Nilgiris. What began as a modest collection of plants has evolved into one of the finest botanical gardens in India, housing over 650 species of plants and trees from around the world.

      The garden is scientifically designed and divided into several sections, each representing different types of flora. The lower garden features ornamental plants and flower beds arranged in geometric patterns, creating a riot of colors throughout the year. The middle garden houses the impressive fossil tree - a 20-million-year-old fossilized tree trunk that offers a glimpse into the geological history of the region.

      The highlight of the garden is the Italian Garden, designed in the style of European formal gardens. With its terraced layout, ornamental pools, and precisely trimmed hedges, it provides a stark yet beautiful contrast to the wild landscape of the surrounding hills. The fernery section contains one of the largest collections of ferns in India, some of which are endemic to the Western Ghats.

      Throughout the year, the garden hosts flower shows that attract visitors from across the country. The Summer Festival flower show, held annually in May, is particularly spectacular, featuring topiary work, flower arrangements, and horticultural exhibitions. The garden also serves as an important research center, conducting studies on plant conservation and propagation techniques.`,

      "Rose Garden": `The Centenary Rose Garden, established in 1995 to commemorate the centenary of the first horticultural show in Ooty, is a paradise for rose lovers and a testament to successful horticultural practices in high-altitude regions. Spread across 10 acres on the slopes of Elk Hill, the garden houses over 20,000 rose bushes representing more than 2,800 varieties.

      The garden's design follows the natural contours of the hill, creating a terraced landscape that maximizes both aesthetic appeal and growing conditions. Each terrace is dedicated to different types of roses - hybrid teas, floribundas, polyanthas, climbers, and miniature roses. The variety includes both international cultivars and indigenous varieties, some of which have been specially developed for the high-altitude climate of the Nilgiris.

      The rose garden is not just about visual beauty; it's also an educational experience. Information boards throughout the garden provide details about different rose varieties, their origins, care requirements, and unique characteristics. The garden serves as a testing ground for new varieties, helping determine which roses thrive best in the Nilgiri climate.

      The best time to visit is during the flowering season from April to June and again from September to November. During these periods, the garden becomes a symphony of colors and fragrances, attracting not just tourists but also photographers, botanists, and nature enthusiasts from around the world.`,

      "Nilgiri Mountain Railway": `The Nilgiri Mountain Railway, affectionately known as the "Toy Train," is not just a mode of transportation but a journey through time and one of the most scenic railway routes in the world. Built between 1891 and 1908, this narrow-gauge railway was designated as a UNESCO World Heritage Site in 2005, recognizing its outstanding universal value as an engineering marvel.

      The railway operates on a unique rack and pinion system, necessary to navigate the steep gradients of the Nilgiri Hills. The journey from Mettupalayam to Ooty covers 46 kilometers and includes 208 curves, 16 tunnels, and 250 bridges. The engineering feat required to construct this railway in the pre-independence era, using only manual labor and basic tools, speaks to the determination and skill of its builders.

      The train journey is a sensory experience that engages all your senses. The rhythmic chugging of the steam engine, the whistle echoing through the valleys, the sight of mist-covered mountains and tea gardens rolling by, and the fresh mountain air create an unforgettable experience. The journey takes approximately 3.5 hours, but every minute offers new vistas and photographic opportunities.

      Different classes of travel are available, from general compartments to first-class coaches. The first-class coaches, though basic by modern standards, offer better views and a more comfortable journey. Many travelers prefer to book seats on the right side of the train for better views of the valleys and mountains.`,

      "Pykara Lake & Waterfalls": `Located about 19 kilometers from Ooty, Pykara represents the pristine beauty of the Nilgiris in its most unspoiled form. The name 'Pykara' is derived from the local word 'Pugaikarai,' meaning 'the place where the Pugar tree grows abundantly.' This destination combines the tranquil beauty of a high-altitude lake with the dynamic energy of cascading waterfalls.

      Pykara Lake is actually part of a series of lakes formed by the Pykara River as it winds through the Mukurthi National Park. The lake is surrounded by shola forests - unique high-altitude tropical forests found only in the Western Ghats. These forests are home to several endemic species and provide a habitat for various wildlife including elephants, deer, and numerous bird species.

      The Pykara Falls are formed as the river tumbles down from a height of about 55 meters in two distinct stages. The upper falls are more dramatic and powerful, especially during the monsoon season, while the lower falls create a series of smaller cascades that are perfect for photography. The area around the falls has been developed with walking paths and viewing platforms that offer safe vantage points.

      The entire Pykara region is part of a protected ecosystem, and visitors are encouraged to maintain the pristine nature of the environment. The best time to visit is just after the monsoon season when the waterfalls are at their most spectacular and the surrounding vegetation is lush and green.`
    };

    return details[name] || `${name} is one of Ooty's remarkable attractions, offering visitors a unique glimpse into the natural beauty and cultural heritage of the Nilgiris. This destination combines scenic beauty with historical significance, making it a must-visit location for travelers exploring the Queen of Hill Stations.`;
  }

  // Scroll-triggered section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'attractions', 'culture', 'food', 'practical'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'
    }`}>
      
      {/* Floating Controls */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
              : 'bg-black/10 text-purple-600 hover:bg-black/20'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        
        <button
          onClick={toggleAudio}
          className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-white/10 text-blue-400 hover:bg-white/20' 
              : 'bg-black/10 text-blue-600 hover:bg-black/20'
          }`}
          title={isPlaying ? 'Pause Ambient Sounds' : 'Play Ambient Sounds'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          {isMuted ? <VolumeX className="w-4 h-4 absolute -bottom-1 -right-1" /> : <Volume2 className="w-4 h-4 absolute -bottom-1 -right-1" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 ${
        isDarkMode ? 'bg-black/30' : 'bg-white/30'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className={`w-8 h-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className="text-xl font-bold">Wanderlust Ooty</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'attractions', 'culture', 'food', 'practical'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:scale-105 ${
                    currentSection === section 
                      ? (isDarkMode ? 'text-purple-400 shadow-lg' : 'text-purple-600 shadow-lg')
                      : (isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${data.hero.mainImage})`,
            filter: isDarkMode ? 'brightness(0.7) contrast(1.1)' : 'brightness(0.9)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-black/80' 
            : 'bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black/40'
        }`} />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-purple-400 via-pink-400 to-blue-400' 
                : 'from-purple-600 via-pink-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              Discover Ooty
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            {data.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {data.hero.highlights.map((highlight, index) => (
              <span 
                key={index}
                className={`px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-white/20 border border-white/30'
                }`}
              >
                {highlight}
              </span>
            ))}
          </div>
          
          <button className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500' 
              : 'bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600'
          } text-white shadow-lg hover:shadow-xl`}>
            Begin Your Journey
            <ChevronRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full ${
            isDarkMode ? 'border-white/50' : 'border-black/50'
          }`}>
            <div className={`w-1 h-3 rounded-full mx-auto mt-2 animate-pulse ${
              isDarkMode ? 'bg-white/70' : 'bg-black/70'
            }`} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              The Queen of Hill Stations
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 to-blue-400' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600'
            }`} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/60 border border-white/30'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  <Mountain className="w-8 h-8" />
                  Natural Wonder
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {enhancedOotyData.detailedDescription.split('\n\n')[0]}
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/60 border border-white/30'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  <TreePine className="w-8 h-8" />
                  Rich Heritage
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {enhancedOotyData.culturalHeritage.split('\n\n')[0]}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src={data.gallery[1].image} 
                alt="Ooty Landscape"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
              <img 
                src={data.gallery[0].image} 
                alt="Tea Gardens"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className={`py-20 ${
        isDarkMode ? 'bg-black/30' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Must-Visit Attractions
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore the wonders that make Ooty truly magical
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={attraction.id}
                className={`group rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-white/80 border border-white/30 hover:bg-white/90'
                } shadow-lg hover:shadow-2xl`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t from-purple-900/80 via-transparent to-transparent' 
                      : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'
                  }`} />
                  
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                      isDarkMode ? 'bg-black/50' : 'bg-white/80'
                    }`}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(attraction.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : (isDarkMode ? 'text-gray-600' : 'text-gray-300')
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-purple-600/80 text-white' 
                        : 'bg-purple-600 text-white'
                    }`}>
                      {attraction.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {attraction.name}
                  </h3>
                  
                  <p className={`text-base leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {attraction.detailedInfo.substring(0, 200)}...
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className={`flex items-center gap-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Clock className="w-4 h-4" />
                      <span>{attraction.duration}</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <MapPin className="w-4 h-4" />
                      <span>{attraction.timings}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {attraction.highlights.slice(0, 3).map((highlight, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${
                          isDarkMode 
                            ? 'bg-blue-600/20 text-blue-400' 
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white' 
                      : 'bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 text-white'
                  }`}>
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className={`py-20 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Cultural Tapestry
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover the rich heritage and biodiversity of the Nilgiris
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`p-8 rounded-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20' 
                : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
            }`}>
              <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>
                <Flower className="w-8 h-8" />
                Cultural Heritage
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {enhancedOotyData.culturalHeritage}
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/20' 
                : 'bg-gradient-to-br from-green-50 to-teal-50 border border-green-200'
            }`}>
              <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}>
                <TreePine className="w-8 h-8" />
                Ecology & Biodiversity
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {enhancedOotyData.ecologyAndBiodiversity}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className={`py-20 ${
        isDarkMode ? 'bg-black/30' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Culinary Delights
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Savor the authentic flavors of the Nilgiris
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.food.categories.map((category, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-white/30'
                }`}
              >
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                    isDarkMode ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    <Utensils className="w-6 h-6" />
                    {category.name}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-md"
                        />
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.name}
                            {item.mustTry && (
                              <span className="ml-2 text-yellow-400">⭐</span>
                            )}
                          </h4>
                          <p className={`text-sm mb-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {item.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-500">{item.price}</span>
                            {item.mustTry && (
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                isDarkMode 
                                  ? 'bg-yellow-600/20 text-yellow-400' 
                                  : 'bg-yellow-100 text-yellow-600'
                              }`}>
                                Must Try!
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section id="practical" className={`py-20 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Plan Your Journey
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need to know for the perfect Ooty experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Weather Info */}
            <div className={`p-6 rounded-2xl text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
            }`}>
              <Thermometer className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Climate
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Summer: {data.overview.climate.summer}<br />
                Winter: {data.overview.climate.winter}
              </p>
            </div>
            
            {/* Best Time */}
            <div className={`p-6 rounded-2xl text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/20' 
                : 'bg-gradient-to-br from-green-50 to-teal-50 border border-green-200'
            }`}>
              <Calendar className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`} />
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Best Time
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Peak: {data.overview.bestTime.peak}<br />
                Avoid: {data.overview.bestTime.avoid}
              </p>
            </div>
            
            {/* Transportation */}
            <div className={`p-6 rounded-2xl text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20' 
                : 'bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200'
            }`}>
              <Train className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-orange-400' : 'text-orange-600'
              }`} />
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Transport
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Toy Train: UNESCO Heritage<br />
                Road: Well connected
              </p>
            </div>
            
            {/* Accommodation */}
            <div className={`p-6 rounded-2xl text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20' 
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
            }`}>
              <Hotel className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Stay
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Luxury to Budget<br />
                Colonial charm
              </p>
            </div>
          </div>
          
          {/* Travel Tips */}
          <div className={`p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20' 
              : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Essential Travel Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.practical.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${
                    isDarkMode ? 'bg-purple-600' : 'bg-purple-700'
                  }`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${
        isDarkMode ? 'bg-black/50' : 'bg-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Your Ooty Adventure?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of travelers who've discovered the magic of the Queen of Hill Stations
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Heart className="w-6 h-6 text-red-400" />
              </button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Share2 className="w-6 h-6 text-blue-400" />
              </button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Camera className="w-6 h-6 text-purple-400" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Wanderlust Ooty. Crafted with ❤️ for travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkModeWanderlustTheme;