'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Mouse, Play, Pause, Volume2, Heart, Share2,
  Eye, Hand, Zap, Star, ArrowRight, RotateCcw, Shuffle,
  Camera, Download, Bookmark, Send, Trophy, Award,
  MapPin, Calendar, Clock, Thermometer, Users, Coffee
} from 'lucide-react';

const MicroInteractionAnimationTheme = () => {
  const [likedItems, setLikedItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pulseElements, setPulseElements] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleLike = (id) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });

    // Trigger pulse animation
    setPulseElements(prev => new Set([...prev, id]));
    setTimeout(() => {
      setPulseElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 600);
  };

  const handleButtonClick = (id) => {
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 300);
  };

  const attractions = [
    {
      id: 1,
      name: "Doddabetta Peak",
      subtitle: "The Crown of Nilgiris",
      description: "Standing majestically at 2,637 meters above sea level, Doddabetta Peak offers breathtaking panoramic views of the entire Nilgiri range. This highest point in the region provides a 360-degree vista of rolling hills, deep valleys, and distant plains that stretch to the horizon.",
      interactiveElements: ["Telescope viewing", "360° panorama", "Weather station"],
      visitorsToday: 342,
      rating: 4.8,
      temperature: "18°C",
      crowdLevel: "moderate",
      bestTime: "Early morning",
      highlights: [
        "Highest peak in Nilgiris at 2,637m",
        "Telescope house for magnified views", 
        "Rich biodiversity in surrounding areas",
        "Weather monitoring station",
        "Scenic drive through shola forests"
      ]
    },
    {
      id: 2,
      name: "Nilgiri Mountain Railway",
      subtitle: "UNESCO Heritage Journey",
      description: "Embark on a magical journey aboard the century-old 'Toy Train' that winds through spectacular mountain scenery. This UNESCO World Heritage railway uses a unique rack and pinion system to navigate steep gradients, offering passengers an unforgettable experience through tunnels, over bridges, and around hairpin bends.",
      interactiveElements: ["Live tracking", "Historical timeline", "Route map"],
      visitorsToday: 156,
      rating: 4.9,
      temperature: "Variable",
      crowdLevel: "high",
      bestTime: "Morning departure",
      highlights: [
        "UNESCO World Heritage railway since 2005",
        "46km journey from Mettupalayam to Ooty",
        "Passes through 16 tunnels and 250 bridges",
        "Rack and pinion system for steep climbs",
        "Steam locomotives on heritage runs"
      ]
    },
    {
      id: 3,
      name: "Tea Plantations",
      subtitle: "Emerald Carpets of Flavor",
      description: "Discover the art of tea cultivation on sprawling estates that carpet the hillsides in vibrant green. These high-altitude tea gardens produce some of the world's finest black tea, with their unique terroir creating distinctive flavors that have made Nilgiri tea famous globally.",
      interactiveElements: ["Tea tasting", "Factory tour", "Plucking experience"],
      visitorsToday: 298,
      rating: 4.7,
      temperature: "20°C",
      crowdLevel: "low",
      bestTime: "Afternoon",
      highlights: [
        "Over 12,000 hectares of tea cultivation",
        "Hand-plucking ensures premium quality",
        "High altitude creates unique flavor profile",
        "Sustainable farming practices",
        "Direct-from-garden purchasing opportunities"
      ]
    },
    {
      id: 4,
      name: "Botanical Garden",
      subtitle: "Nature's Living Museum",
      description: "Explore 22 hectares of meticulously maintained gardens showcasing over 650 species of plants from around the world. Established in 1848, these terraced gardens feature rare orchids, ancient ferns, and the famous 20-million-year-old fossilized tree.",
      interactiveElements: ["Plant identification", "Guided tours", "Photography spots"],
      visitorsToday: 187,
      rating: 4.6,
      temperature: "19°C",
      crowdLevel: "moderate",
      bestTime: "Morning",
      highlights: [
        "Established in 1848 by William McIvor",
        "Home to 650+ plant species",
        "20-million-year-old fossilized tree",
        "Italian-style terraced layout",
        "Annual flower show in May"
      ]
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-auto relative"
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-40 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md text-white py-8 sticky top-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                  Interactive Ooty
                </h1>
                <p className="text-blue-100">Discover through micro-interactions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => handleButtonClick('explore')}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center space-x-2 font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Explore Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative">
            <h2 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              Experience Ooty Like Never Before
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Immerse yourself in the Queen of Hills through interactive animations and micro-interactions 
              that bring every moment to life. Hover, click, and discover the magic hidden in every detail.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, value: "2.8M", label: "Annual Visitors", color: "from-pink-500 to-purple-500" },
                { icon: MapPin, value: "36", label: "Square Kilometers", color: "from-blue-500 to-cyan-500" },
                { icon: Thermometer, value: "18°C", label: "Average Temp", color: "from-green-500 to-teal-500" },
                { icon: Star, value: "4.8", label: "Rating", color: "from-yellow-500 to-orange-500" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform transition-all duration-500 hover:scale-110 hover:bg-white/20 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`stat-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-sm transform transition-all duration-300 group-hover:text-white">
                    {stat.label}
                  </div>
                  
                  {hoveredCard === `stat-${index}` && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Attractions */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-16">
            Interactive Attractions
          </h3>
          
          <div className="space-y-12">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(attraction.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                            {index + 1}
                          </div>
                          <div className="text-blue-200 text-sm">{attraction.subtitle}</div>
                        </div>
                      </div>

                      <h4 className="text-3xl font-bold text-white transform transition-all duration-300 group-hover:scale-105">
                        {attraction.name}
                      </h4>

                      <p className="text-blue-100 leading-relaxed transform transition-all duration-300 group-hover:text-white">
                        {attraction.description}
                      </p>

                      {/* Interactive Elements */}
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-white">Interactive Features</h5>
                        <div className="flex flex-wrap gap-3">
                          {attraction.interactiveElements.map((element, idx) => (
                            <button
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-md rounded-full text-white text-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 active:scale-95"
                              onClick={() => handleButtonClick(`element-${attraction.id}-${idx}`)}
                            >
                              <span className="flex items-center space-x-2">
                                <Hand className="w-4 h-4" />
                                <span>{element}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { icon: Users, value: attraction.visitorsToday, label: "Today" },
                          { icon: Star, value: attraction.rating, label: "Rating" },
                          { icon: Thermometer, value: attraction.temperature, label: "Weather" },
                          { icon: Clock, value: attraction.bestTime, label: "Best Time" }
                        ].map((stat, idx) => (
                          <div 
                            key={idx}
                            className="text-center p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                          >
                            <stat.icon className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                            <div className="text-white font-semibold text-sm">{stat.value}</div>
                            <div className="text-blue-200 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4">
                        <button
                          className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold transform transition-all duration-300 hover:scale-105 active:scale-95 ${
                            likedItems.has(attraction.id) ? 'animate-pulse' : ''
                          }`}
                          onClick={() => handleLike(attraction.id)}
                        >
                          <Heart 
                            className={`w-5 h-5 transform transition-all duration-300 ${
                              likedItems.has(attraction.id) 
                                ? 'fill-current scale-125 text-red-300' 
                                : 'hover:scale-110'
                            }`}
                          />
                          <span>
                            {likedItems.has(attraction.id) ? 'Loved!' : 'Love This'}
                          </span>
                        </button>

                        <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95">
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </button>

                        <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95">
                          <Bookmark className="w-5 h-5" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-4 transform transition-all duration-300 group-hover:scale-125">
                              {attraction.id === 1 ? '🏔️' : attraction.id === 2 ? '🚂' : attraction.id === 3 ? '🍃' : '🌺'}
                            </div>
                            <div className="text-2xl font-bold transform transition-all duration-300 group-hover:scale-110">
                              {attraction.name}
                            </div>
                          </div>
                        </div>

                        {/* Floating Action Buttons */}
                        <div className="absolute top-4 right-4 space-y-2">
                          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-125 hover:bg-white/30 active:scale-95">
                            <Camera className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-125 hover:bg-white/30 active:scale-95">
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Hover Overlay */}
                        {hoveredCard === attraction.id && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                            <div className="space-y-2 animate-fade-in">
                              {attraction.highlights.slice(0, 3).map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-white text-sm">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pulse Effect for Liked Items */}
                      {pulseElements.has(attraction.id) && (
                        <div className="absolute inset-0 border-4 border-pink-500 rounded-3xl animate-ping" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative max-w-4xl mx-auto p-12 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-md rounded-3xl border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready for Your Interactive Adventure?
            </h3>
            <p className="text-xl text-blue-100 mb-12">
              Every click, hover, and interaction reveals new secrets about Ooty's magical charm
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center space-x-2 text-white font-bold text-lg">
                  <Play className="w-6 h-6" />
                  <span>Start Exploring</span>
                  <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95">
                <span className="flex items-center space-x-2 font-semibold">
                  <Download className="w-5 h-5" />
                  <span>Get Guide</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default MicroInteractionAnimationTheme;