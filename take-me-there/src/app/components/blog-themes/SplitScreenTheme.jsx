"use client";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Camera,
  Navigation,
  Coffee,
  Mountain,
  Utensils,
  Calendar,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const SplitScreenTheme = ({ data }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLeftFixed, setIsLeftFixed] = useState(true);

  const sections = [
    {
      id: 'hero',
      title: data.location.name,
      subtitle: data.hero.subtitle,
      image: data.hero.mainImage,
      content: (
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light leading-none">
            {data.location.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {data.hero.subtitle}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>{data.location.state}, {data.location.country}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mountain className="w-4 h-4" />
              <span>{data.location.elevation}</span>
            </div>
          </div>
        </div>
      )
    },
    ...data.attractions.slice(0, 4).map((attraction, index) => ({
      id: `attraction-${attraction.id}`,
      title: attraction.name,
      subtitle: attraction.category,
      image: attraction.image,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-light text-gray-300">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-light">{attraction.name}</h2>
              <p className="text-gray-500">{attraction.category}</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {attraction.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Duration</div>
              <div className="font-medium">{attraction.duration}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Entry Fee</div>
              <div className="font-medium">{attraction.entryFee}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Best Time</div>
              <div className="font-medium">{attraction.bestTime}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Rating</div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">{attraction.rating}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Highlights</h3>
            <div className="space-y-2">
              {attraction.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    })),
    {
      id: 'food',
      title: 'Local Cuisine',
      subtitle: 'Flavors of the Region',
      image: data.food.categories[0]?.items[0]?.image || data.hero.mainImage,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-light text-gray-300">05</span>
            <div>
              <h2 className="text-3xl md:text-4xl font-light">Local Cuisine</h2>
              <p className="text-gray-500">Culinary Adventures</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the authentic flavors and traditional dishes that make this destination unique.
          </p>
          
          <div className="space-y-4">
            {data.food.categories.slice(0, 2).map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.slice(0, 2).map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-green-600 font-medium text-sm">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {item.mustTry && (
                        <span className="inline-block mt-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          Must Try
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const currentSectionData = sections[currentSection];
  const isEven = currentSection % 2 === 0;

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSection}
              disabled={currentSection === 0}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="text-sm text-gray-500">
              {currentSection + 1} / {sections.length}
            </div>
            
            <button 
              onClick={nextSection}
              disabled={currentSection === sections.length - 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Split Screen Layout */}
      <div className="pt-16 h-screen flex">
        
        {/* Left Side (Image) */}
        <div 
          className={`w-1/2 relative overflow-hidden ${
            isEven ? 'order-1' : 'order-2'
          }`}
        >
          <img 
            src={currentSectionData.image} 
            alt={currentSectionData.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Image Info */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-light mb-1">{currentSectionData.title}</h3>
              <p className="text-white/80 text-sm">{currentSectionData.subtitle}</p>
            </div>
          </div>

          {/* Photo Credit */}
          <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center gap-2 text-white text-sm">
              <Camera className="w-3 h-3" />
              <span>Photo by {data.meta.author}</span>
            </div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div 
          className={`w-1/2 overflow-y-auto ${
            isEven ? 'order-2' : 'order-1'
          }`}
        >
          <div className="p-8 md:p-16 min-h-full flex items-center">
            <div className="w-full max-w-lg mx-auto">
              {currentSectionData.content}
              
              {/* Section Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevSection}
                    disabled={currentSection === 0}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Previous</span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {sections.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSection(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSection 
                            ? 'bg-blue-500 w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSection}
                    disabled={currentSection === sections.length - 1}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span className="text-sm">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Sidebar */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-white rounded-lg shadow-lg p-4 space-y-3 max-w-xs hidden xl:block">
        <h4 className="font-medium text-gray-900 mb-3">Quick Info</h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Best Time:</span>
            <span className="font-medium">{data.overview.bestTime.peak}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium">{data.overview.duration.recommended}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Climate:</span>
            <span className="font-medium">{data.overview.climate.summer}</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-gray-100">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white rounded-full shadow-lg px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-600 font-medium">
            {Math.round(((currentSection + 1) / sections.length) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenTheme;