"use client";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  Camera, 
  Navigation,
  Coffee,
  Utensils,
  Mountain,
  Heart,
  Share2,
  Bookmark,
  ArrowUp,
  ChevronRight
} from 'lucide-react';

const MinimalistExplorerTheme = ({ data }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-1 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100 mt-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex items-center space-x-2">
              <Mountain className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-900">{data.location.name}</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'attractions', label: 'Places' },
                { id: 'food', label: 'Food' },
                { id: 'itinerary', label: 'Itinerary' },
                { id: 'tips', label: 'Tips' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Travel Guides</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{data.location.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
          <img 
            src={data.hero.mainImage} 
            alt={data.location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {data.location.name}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                {data.hero.tagline}
              </p>
              <p className="text-lg opacity-80 mb-6">
                {data.hero.subtitle}
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{data.meta.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(data.meta.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{data.location.state}, {data.location.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section id="overview" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Best Time */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Best Time</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">Peak Season</p>
            <p className="font-medium text-gray-900">{data.overview.bestTime.peak}</p>
            <p className="text-gray-600 text-sm mt-2">{data.overview.bestTime.moderate}</p>
          </div>

          {/* Duration */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Duration</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">Recommended</p>
            <p className="font-medium text-gray-900">{data.overview.duration.recommended}</p>
            <p className="text-gray-600 text-sm mt-2">Minimum: {data.overview.duration.minimum}</p>
          </div>

          {/* Budget */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Coffee className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Budget</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">Mid-Range</p>
            <p className="font-medium text-gray-900">{data.overview.budget.midRange}</p>
            <p className="text-gray-600 text-sm mt-2">Per person per day</p>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section id="attractions" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Attractions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.attractions.map((attraction) => (
            <div 
              key={attraction.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-gray-900">
                  {attraction.category}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-900">{attraction.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {attraction.description}
                </p>
                
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium text-gray-900">{attraction.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Entry Fee:</span>
                    <span className="font-medium text-gray-900">{attraction.entryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Time:</span>
                    <span className="font-medium text-gray-900">{attraction.bestTime}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {attraction.highlights.slice(0, 3).map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Food & Cuisine</h2>
        
        {data.food.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-500" />
              {category.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        {item.mustTry && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                            Must Try
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-green-600">{item.price}</span>
                        <span className="text-gray-500">{item.where}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Sample Itinerary */}
      <section id="itinerary" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Itinerary</h2>
        
        {data.itineraries[0] && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {data.itineraries[0].title} ({data.itineraries[0].duration})
            </h3>
            
            <div className="space-y-8">
              {data.itineraries[0].days.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Day {day.day}: {day.title}
                  </h4>
                  
                  <div className="space-y-3">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-16 text-sm font-medium text-blue-600 flex-shrink-0">
                          {activity.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.activity}</p>
                          {activity.location && (
                            <p className="text-gray-600 text-sm">{activity.location}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Practical Tips */}
      <section id="tips" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Tips</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* How to Reach */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-500" />
              How to Reach
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">By Air</h4>
                <p className="text-gray-600 text-sm">{data.practical.howToReach.byAir.airport}</p>
                <p className="text-gray-600 text-sm">Travel Time: {data.practical.howToReach.byAir.travelTime}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">By Train</h4>
                <p className="text-gray-600 text-sm">{data.practical.howToReach.byTrain.station}</p>
                <p className="text-gray-600 text-sm">Travel Time: {data.practical.howToReach.byTrain.travelTime}</p>
              </div>
            </div>
          </div>

          {/* Essential Tips */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Tips</h3>
            
            <ul className="space-y-2">
              {data.practical.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default MinimalistExplorerTheme;