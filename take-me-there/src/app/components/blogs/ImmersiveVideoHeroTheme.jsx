'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, SkipForward, SkipBack,
  MapPin, Calendar, Clock, Star, Share2, Bookmark, 
  ChevronDown, ChevronUp, Menu, X, Search, Filter,
  Camera, Mountain, TreePine, Coffee, Utensils, Bed,
  Navigation, Compass, Globe, Sunrise, Sunset, Eye,
  Award, CheckCircle, Info, ArrowRight, ArrowDown
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const ImmersiveVideoHeroTheme = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const videoRef = useRef();
  const containerRef = useRef();

  // Comprehensive video content for Ooty
  const videoSections = [
    {
      id: 'hero',
      title: "Welcome to Ooty",
      subtitle: "The Queen of Hill Stations",
      videoUrl: "https://player.vimeo.com/external/390186046.hd.mp4?s=9e3b25e6dc89c44dddd1d0ea5528a1be9a4fb03a&profile_id=174",
      poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
      description: "Discover the breathtaking beauty of Udhagamandalam, nestled in the Nilgiri Hills at 2,240 meters above sea level. Experience the colonial charm, lush tea gardens, and pristine natural landscapes that have captivated travelers for over two centuries.",
      highlights: ["2,240m elevation", "Colonial heritage", "Tea plantations", "UNESCO Railway"]
    },
    {
      id: 'attractions',
      title: "Iconic Attractions",
      subtitle: "Must-Visit Destinations",
      videoUrl: "https://player.vimeo.com/external/425293890.hd.mp4?s=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&profile_id=174",
      poster: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop",
      description: "From the majestic Doddabetta Peak offering panoramic views to the serene Ooty Lake perfect for boating, explore the most iconic attractions that define the Ooty experience.",
      highlights: ["Doddabetta Peak", "Ooty Lake", "Botanical Garden", "Toy Train"]
    },
    {
      id: 'culture',
      title: "Rich Heritage",
      subtitle: "Cultural Tapestry",
      videoUrl: "https://player.vimeo.com/external/372516541.hd.mp4?s=b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1&profile_id=174",
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      description: "Immerse yourself in the rich cultural heritage of Ooty, from indigenous Toda communities to colonial British architecture, creating a unique blend of traditions and modernity.",
      highlights: ["Toda culture", "Colonial architecture", "Local traditions", "Art & crafts"]
    },
    {
      id: 'nature',
      title: "Natural Wonders",
      subtitle: "Biodiversity Hotspot",
      videoUrl: "https://player.vimeo.com/external/324957646.hd.mp4?s=c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2&profile_id=174",
      poster: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop",
      description: "Explore the incredible biodiversity of the Western Ghats, from endemic shola forests to rolling grasslands, home to unique flora and fauna found nowhere else on Earth.",
      highlights: ["Shola forests", "Endemic species", "Wildlife sanctuaries", "Conservation efforts"]
    }
  ];

  // Comprehensive Ooty content with detailed information
  const comprehensiveContent = {
    attractions: [
      {
        id: 1,
        name: "Doddabetta Peak",
        type: "Viewpoint",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        description: "Standing at 2,637 meters, Doddabetta Peak is the highest point in the Nilgiri Hills and offers breathtaking 360-degree panoramic views. The summit features a telescope observatory that allows visitors to see distant mountain ranges, valleys, and on clear days, even glimpses of the Arabian Sea. The peak represents significant geological and ecological importance, being part of the ancient Western Ghats formation.",
        detailedInfo: {
          elevation: "2,637 meters above sea level",
          significance: "Highest peak in South India",
          facilities: "Telescope observatory, parking, refreshments",
          bestTime: "Early morning (6-8 AM) for clearest views",
          duration: "2-3 hours",
          accessibility: "Well-maintained road access"
        },
        highlights: [
          "360-degree panoramic views",
          "Telescope observatory",
          "Highest peak in South India",
          "Endemic flora and fauna",
          "Geological significance",
          "Photography paradise"
        ]
      },
      {
        id: 2,
        name: "Ooty Lake",
        type: "Lake",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
        description: "Created in 1824 by John Sullivan, Ooty Lake is an artificial marvel that has become the heart of recreational activities in the hill station. The lake spans 65 acres and is surrounded by eucalyptus trees and well-maintained gardens. It offers various boating activities and serves as a venue for annual cultural events and festivals.",
        detailedInfo: {
          created: "1824 by John Sullivan",
          area: "65 acres",
          activities: "Boating, photography, garden walks",
          ecosystem: "Home to various fish and bird species",
          maintenance: "Managed by Tamil Nadu Tourism",
          events: "Annual boat races and cultural programs"
        },
        highlights: [
          "Historic artificial lake from 1824",
          "Comprehensive boating facilities",
          "Eucalyptus gardens",
          "Bird watching opportunities",
          "Cultural event venue",
          "Photography hotspot"
        ]
      },
      {
        id: 3,
        name: "Nilgiri Mountain Railway",
        type: "Heritage Transport",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
        description: "The UNESCO World Heritage Nilgiri Mountain Railway, known as the 'Toy Train,' is a remarkable engineering achievement connecting Mettupalayam to Ooty. Built between 1891-1908, it features a unique rack and pinion system that safely navigates steep gradients up to 1 in 12.5, passing through 250 bridges and 16 tunnels.",
        detailedInfo: {
          established: "1891-1908",
          distance: "46 kilometers",
          system: "Rack and pinion mechanism",
          structures: "250 bridges, 16 tunnels",
          recognition: "UNESCO World Heritage Site",
          journey: "4.5 hours through diverse ecosystems"
        },
        highlights: [
          "UNESCO World Heritage Site",
          "Unique rack and pinion system",
          "46 km mountain journey",
          "250 bridges and 16 tunnels",
          "Heritage steam locomotives",
          "Diverse ecosystem experience"
        ]
      }
    ],

    experiences: [
      {
        category: "Adventure",
        title: "Trekking in the Nilgiris",
        description: "Explore scenic trails through shola forests and grasslands, offering encounters with endemic wildlife and stunning mountain vistas.",
        activities: ["Nature trails", "Bird watching", "Photography", "Wildlife spotting"]
      },
      {
        category: "Cultural",
        title: "Toda Village Visits",
        description: "Experience the unique culture of the indigenous Toda people, known for their distinctive dome-shaped huts and pastoral lifestyle.",
        activities: ["Cultural immersion", "Traditional crafts", "Buffalo herding", "Local cuisine"]
      },
      {
category: "Relaxation",
        title: "Tea Plantation Tours",
        description: "Visit working tea estates to learn about tea cultivation, processing, and enjoy fresh mountain air with panoramic views.",
        activities: ["Tea tasting", "Factory tours", "Scenic walks", "Local shopping"]
      }
    ],

    practicalInfo: {
      gettingThere: {
        byRoad: "Well-connected by road from Bangalore (270km), Chennai (560km), and Coimbatore (88km)",
        byTrain: "Nearest major station is Coimbatore; connect via Nilgiri Mountain Railway",
        byAir: "Nearest airport is Coimbatore (88km) with domestic and international flights"
      },
      bestTime: {
        summer: "March-June: Pleasant weather, peak tourist season",
        monsoon: "July-September: Lush landscapes, occasional travel disruptions",
        winter: "October-February: Cool weather, clear skies, ideal for trekking"
      },
      accommodation: {
        luxury: "Heritage hotels like Taj Savoy with colonial charm",
        midRange: "Boutique resorts and plantation bungalows",
        budget: "Guesthouses and homestays with local hospitality"
      }
    }
  };

  // Video and scroll management
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoSections.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoSections.length) % videoSections.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  const currentSection = videoSections[currentVideoIndex];

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Ooty Explorer</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {videoSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setCurrentVideoIndex(index);
                    scrollToSection(section.id);
                  }}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${activeSection === section.id 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden bg-white/10 backdrop-blur-md p-2 rounded-full"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-lg p-4">
              {videoSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setCurrentVideoIndex(index);
                    scrollToSection(section.id);
                  }}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Video Hero Section */}
      <section 
        data-section="hero" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={currentSection.poster}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={currentSection.videoUrl} type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img 
              src={currentSection.poster} 
              alt={currentSection.title}
              className="w-full h-full object-cover"
            />
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Video Controls */}
        {showControls && videoLoaded && (
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlayPause}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={previousVideo}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <SkipBack className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextVideo}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {currentSection.title}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100">
            {currentSection.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {currentSection.description}
          </p>
          
          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {currentSection.highlights.map((highlight, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('attractions')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explore Ooty
            <ArrowDown className="ml-2 w-5 h-5 inline-block animate-bounce" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section data-section="attractions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Iconic Attractions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most spectacular destinations that make Ooty the Queen of Hill Stations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {comprehensiveContent.attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium">{attraction.type}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{attraction.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{attraction.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {attraction.description.substring(0, 150)}...
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Info */}
                  <div className="space-y-2 text-sm">
                    {Object.entries(attraction.detailedInfo).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        <span className="capitalize">{key}:</span>
                        <span className="ml-2 text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section data-section="culture" className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unique Experiences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in authentic Ooty experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comprehensiveContent.experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition-all duration-500"
              >
                <div className="mb-6">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {experience.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{experience.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                <div className="space-y-2">
                  {experience.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center text-purple-200">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section data-section="nature" className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Plan Your Visit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential information to make your Ooty journey seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Getting There */}
            <div className="bg-gradient-to-b from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Navigation className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Getting There</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(comprehensiveContent.practicalInfo.gettingThere).map(([mode, info]) => (
                  <div key={mode} className="border-l-2 border-green-400 pl-4">
                    <h4 className="font-semibold text-green-300 capitalize mb-1">{mode.replace('by', 'By ')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{info}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Time */}
            <div className="bg-gradient-to-b from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Best Time to Visit</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(comprehensiveContent.practicalInfo.bestTime).map(([season, info]) => (
                  <div key={season} className="border-l-2 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-300 capitalize mb-1">{season}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{info}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-gradient-to-b from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Bed className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Where to Stay</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(comprehensiveContent.practicalInfo.accommodation).map(([type, info]) => (
                  <div key={type} className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-300 capitalize mb-1">{type}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mountain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Ooty Explorer</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Experience the cinematic beauty of Udhagamandalam through immersive video storytelling 
              and comprehensive travel insights.
            </p>
            <div className="flex justify-center space-x-6">
              <Share2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Camera className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImmersiveVideoHeroTheme;