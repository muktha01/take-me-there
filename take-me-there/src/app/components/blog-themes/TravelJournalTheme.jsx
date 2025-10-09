"use client";
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Camera, 
  MapPin, 
  Heart, 
  Star, 
  Clock, 
  Calendar,
  Compass,
  Coffee,
  Mountain,
  Utensils,
  PenTool,
  Bookmark,
  Quote,
  Paperclip,
  Stamp,
  Plane,
  Train,
  Car,
  Home,
  Hotel,
  Bed,
  Cloud,
  Sun,
  CloudRain,
  Thermometer,
  DollarSign,
  Info,
  Users,
  Share2,
  Instagram,
  Hash,
  Navigation
} from 'lucide-react';

const TravelJournalTheme = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [stickyNotes, setStickyNotes] = useState([]);

  // Create comprehensive journal pages with safety checks
  const journalPages = [
    {
      type: 'cover',
      title: `Journey to ${data.location.name}`,
      subtitle: data.hero.tagline,
      date: data.meta.publishDate
    },
    {
      type: 'intro',
      title: 'Before We Begin...',
      content: data.hero.subtitle,
      image: data.hero.mainImage,
      highlights: data.hero.highlights
    },
    {
      type: 'overview',
      title: 'Planning Essentials',
      content: 'Everything you need to know before visiting',
      overview: data.overview
    },
    {
      type: 'weather',
      title: 'Weather & Climate',
      content: 'Understanding the perfect time to visit',
      climate: data.overview.climate,
      bestTime: data.overview.bestTime
    }
  ];

  // Add attraction pages safely
  if (data.attractions && data.attractions.length > 0) {
    data.attractions.forEach(attraction => {
      journalPages.push({
        type: 'attraction',
        title: attraction.name,
        content: attraction.description,
        image: attraction.image,
        details: attraction,
        doodles: ['star', 'heart', 'arrow']
      });
    });
  }

  // Add food pages safely
  if (data.food && data.food.categories && data.food.categories.length > 0) {
    journalPages.push({
      type: 'food-intro',
      title: 'Culinary Adventures',
      content: 'Every destination has its unique taste that tells a story...',
      image: data.food.categories[0]?.items?.[0]?.image
    });

    data.food.categories.forEach(category => {
      if (category && category.items && category.items.length > 0) {
        journalPages.push({
          type: 'food-category',
          title: category.name,
          content: `Discovering the authentic flavors of ${category.name}`,
          category: category
        });
      }
    });

    if (data.food.restaurants && data.food.restaurants.length > 0) {
      journalPages.push({
        type: 'restaurants',
        title: 'Where to Dine',
        content: 'Recommended restaurants for an authentic experience',
        restaurants: data.food.restaurants
      });
    }
  }

  // Add other pages
  if (data.itineraries && data.itineraries.length > 0) {
    journalPages.push({
      type: 'itinerary',
      title: 'My Travel Plan',
      content: data.itineraries[0]
    });
  }

  if (data.practical) {
    if (data.practical.howToReach) {
      journalPages.push({
        type: 'transportation',
        title: 'Getting There',
        content: 'All the ways to reach this beautiful destination',
        howToReach: data.practical.howToReach
      });
    }

    if (data.practical.accommodation) {
      journalPages.push({
        type: 'accommodation',
        title: 'Where to Stay',
        content: 'Comfortable places to rest during your journey',
        accommodation: data.practical.accommodation
      });
    }

    if (data.practical.tips && data.practical.tips.length > 0) {
      journalPages.push({
        type: 'tips',
        title: 'Travel Tips & Insights',
        content: 'Wisdom gathered from fellow travelers',
        tips: data.practical.tips
      });
    }
  }

  if (data.gallery && data.gallery.length > 0) {
    journalPages.push({
      type: 'memories',
      title: 'Precious Memories',
      content: 'Moments that will last forever...',
      gallery: data.gallery
    });
  }

  if (data.social && data.relatedDestinations) {
    journalPages.push({
      type: 'social',
      title: 'Share Your Journey',
      content: 'Connect with fellow travelers',
      social: data.social,
      related: data.relatedDestinations
    });
  }

  // Debug: Log the number of pages
  console.log('Total journal pages:', journalPages.length);
  console.log('Journal pages:', journalPages.map(p => p.type));

  // Vintage handwritten fonts from Google Fonts
  useEffect(() => {
    // Add fonts to head
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const addStickyNote = (pageIndex, x, y, text) => {
    const newNote = {
      id: Date.now(),
      pageIndex,
      x,
      y,
      text,
      color: ['yellow', 'pink', 'blue', 'green'][Math.floor(Math.random() * 4)]
    };
    setStickyNotes([...stickyNotes, newNote]);
  };

  const nextPage = () => {
    console.log('Next page clicked. Current:', currentPage, 'Max:', journalPages.length - 1);
    if (currentPage < journalPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    console.log('Prev page clicked. Current:', currentPage);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageData = journalPages[currentPage];
  
  // Debug current page
  console.log('Current page:', currentPage, 'Page data:', currentPageData);

  // Fallback if page data is missing
  if (!currentPageData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Page Not Found</h2>
          <p className="text-amber-600 mb-4">Page {currentPage + 1} doesn't exist.</p>
          <button 
            onClick={() => setCurrentPage(0)}
            className="bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full"
          >
            Go to First Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-4">
      {/* Journal Book Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Book Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-amber-700" />
            <h1 className="text-4xl font-bold text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
              Travel Journal
            </h1>
          </div>
          <p className="text-amber-600 mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
            Page {currentPage + 1} of {journalPages.length}
          </p>
          <p className="text-amber-500 text-sm" style={{ fontFamily: 'Caveat, cursive' }}>
            Currently reading: "{currentPageData?.title}"
          </p>
        </div>

        {/* Journal Book */}
        <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Book Binding */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-800 to-amber-700 shadow-inner">
            <div className="h-full flex flex-col justify-center space-y-4 px-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-amber-900 rounded-full mx-auto" />
              ))}
            </div>
          </div>

          {/* Page Content */}
          <div className="ml-16 min-h-[600px] relative">
            
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-amber-200/30 to-amber-300/30" />
            
            {/* Notebook Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-full h-px bg-blue-200/30"
                  style={{ top: `${100 + i * 30}px` }}
                />
              ))}
            </div>

            {/* Red Margin Line */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300/50" />

            {/* Page Content */}
            <div className="relative z-10 p-8 md:p-12">
              
              {/* Cover Page */}
              {currentPageData.type === 'cover' && (
                <div className="text-center space-y-8">
                  <div className="relative">
                    <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-4 transform -rotate-1" 
                        style={{ fontFamily: 'Caveat, cursive' }}>
                      {currentPageData.title}
                    </h1>
                    
                    {/* Decorative Doodles */}
                    <div className="absolute -top-4 -right-4 text-red-400 transform rotate-12">
                      <Heart className="w-8 h-8 fill-current" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 text-blue-400 transform -rotate-12">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  
                  <p className="text-2xl text-amber-700 transform rotate-1" 
                     style={{ fontFamily: 'Dancing Script, cursive' }}>
                    {currentPageData.subtitle}
                  </p>
                  
                  <div className="bg-yellow-200/80 rounded-lg p-4 transform -rotate-1 inline-block shadow-lg">
                    <p className="text-amber-800 font-medium" style={{ fontFamily: 'Kalam, cursive' }}>
                      Started: {new Date(currentPageData.date).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Travel Stamps */}
                  <div className="flex justify-center space-x-4 mt-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full border-2 border-red-500/50 border-dashed flex items-center justify-center transform rotate-12">
                      <Stamp className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full border-2 border-blue-500/50 border-dashed flex items-center justify-center transform -rotate-12">
                      <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>
              )}

              {/* Intro Page */}
              {currentPageData.type === 'intro' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <p className="text-lg text-amber-700 leading-relaxed" 
                         style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.content}
                      </p>
                      
                      {/* Highlights */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Why Visit? ✨
                        </h3>
                        {currentPageData.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full" />
                            <p className="text-amber-700" style={{ fontFamily: 'Kalam, cursive' }}>
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hand-drawn arrow */}
                      <div className="relative">
                        <svg className="w-24 h-12 text-amber-600" viewBox="0 0 100 50">
                          <path d="M10 25 Q50 5 80 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                          <path d="M75 20 L80 25 L75 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                        <p className="absolute -bottom-6 left-0 text-sm text-amber-600 transform -rotate-2" 
                           style={{ fontFamily: 'Caveat, cursive' }}>
                          Let's explore!
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="transform rotate-2 shadow-lg">
                        <img 
                          src={currentPageData.image} 
                          alt="Journey begins"
                          className="w-full rounded-lg border-4 border-white"
                        />
                        
                        {/* Polaroid-style caption */}
                        <div className="bg-white p-3 border-l-4 border-r-4 border-b-4 border-white">
                          <p className="text-center text-amber-700 text-sm" 
                             style={{ fontFamily: 'Caveat, cursive' }}>
                            The adventure begins...
                          </p>
                        </div>
                      </div>
                      
                      {/* Paperclip */}
                      <div className="absolute -top-2 -right-2 text-gray-500 transform rotate-45">
                        <Paperclip className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Overview Page */}
              {currentPageData.type === 'overview' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Duration */}
                    <div className="bg-blue-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          How Long?
                        </h3>
                      </div>
                      <div className="space-y-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        <p className="text-blue-700">Minimum: {currentPageData.overview.duration.minimum}</p>
                        <p className="text-blue-700">Recommended: {currentPageData.overview.duration.recommended}</p>
                        <p className="text-blue-700">Extended: {currentPageData.overview.duration.extended}</p>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="bg-green-100/80 p-6 rounded-lg transform rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        <h3 className="text-xl font-bold text-green-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Budget Guide
                        </h3>
                      </div>
                      <div className="space-y-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        <p className="text-green-700">Budget: {currentPageData.overview.budget.budget}</p>
                        <p className="text-green-700">Mid-range: {currentPageData.overview.budget.midRange}</p>
                        <p className="text-green-700">Luxury: {currentPageData.overview.budget.luxury}</p>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div className="bg-yellow-100/80 p-6 rounded-lg transform rotate-2 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Mountain className="w-6 h-6 text-yellow-600" />
                        <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Difficulty
                        </h3>
                      </div>
                      <p className="text-yellow-700 text-lg" style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.overview.difficulty}
                      </p>
                    </div>

                    {/* Best Time */}
                    <div className="bg-orange-100/80 p-6 rounded-lg transform -rotate-2 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-6 h-6 text-orange-600" />
                        <h3 className="text-xl font-bold text-orange-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          When to Visit
                        </h3>
                      </div>
                      <div className="space-y-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        <p className="text-orange-700">Peak: {currentPageData.overview.bestTime.peak}</p>
                        <p className="text-orange-700">Moderate: {currentPageData.overview.bestTime.moderate}</p>
                        <p className="text-orange-700">Avoid: {currentPageData.overview.bestTime.avoid}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Weather Page */}
              {currentPageData.type === 'weather' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Summer */}
                    <div className="bg-yellow-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-yellow-500" />
                        <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Summer
                        </h3>
                      </div>
                      <p className="text-yellow-700 text-lg mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.climate.summer}
                      </p>
                      <p className="text-yellow-600 text-sm" style={{ fontFamily: 'Caveat, cursive' }}>
                        Perfect for sightseeing! ☀️
                      </p>
                    </div>

                    {/* Winter */}
                    <div className="bg-blue-100/80 p-6 rounded-lg transform rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Cloud className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-bold text-blue-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Winter
                        </h3>
                      </div>
                      <p className="text-blue-700 text-lg mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.climate.winter}
                      </p>
                      <p className="text-blue-600 text-sm" style={{ fontFamily: 'Caveat, cursive' }}>
                        Cozy and cool! 🧥
                      </p>
                    </div>

                    {/* Monsoon */}
                    <div className="bg-green-100/80 p-6 rounded-lg transform rotate-2 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <CloudRain className="w-8 h-8 text-green-500" />
                        <h3 className="text-xl font-bold text-green-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Monsoon
                        </h3>
                      </div>
                      <p className="text-green-700 text-lg mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.climate.monsoon}
                      </p>
                      <p className="text-green-600 text-sm" style={{ fontFamily: 'Caveat, cursive' }}>
                        Lush and green! 🌧️
                      </p>
                    </div>
                  </div>

                  {/* Best Time Guide */}
                  <div className="bg-white/60 rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                      📅 My Recommendation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🔥</span>
                        </div>
                        <h4 className="font-bold text-red-800" style={{ fontFamily: 'Caveat, cursive' }}>Peak Season</h4>
                        <p className="text-red-700 text-sm" style={{ fontFamily: 'Kalam, cursive' }}>
                          {currentPageData.bestTime.peak}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">👌</span>
                        </div>
                        <h4 className="font-bold text-orange-800" style={{ fontFamily: 'Caveat, cursive' }}>Moderate</h4>
                        <p className="text-orange-700 text-sm" style={{ fontFamily: 'Kalam, cursive' }}>
                          {currentPageData.bestTime.moderate}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">⚠️</span>
                        </div>
                        <h4 className="font-bold text-gray-800" style={{ fontFamily: 'Caveat, cursive' }}>Avoid</h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: 'Kalam, cursive' }}>
                          {currentPageData.bestTime.avoid}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Attraction Pages */}
              {currentPageData.type === 'attraction' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-4xl font-bold text-amber-800 transform -rotate-1" 
                        style={{ fontFamily: 'Caveat, cursive' }}>
                      {currentPageData.title}
                    </h2>
                    
                    {/* Rating stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < currentPageData.details.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <p className="text-lg text-amber-700 leading-relaxed" 
                         style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.content}
                      </p>
                      
                      {/* Sticky Notes for Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-yellow-200/80 p-4 rounded-lg transform -rotate-2 shadow-md">
                          <p className="text-sm font-medium text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                            ⏰ Duration: {currentPageData.details.duration}
                          </p>
                        </div>
                        
                        <div className="bg-pink-200/80 p-4 rounded-lg transform rotate-1 shadow-md">
                          <p className="text-sm font-medium text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                            💰 Entry: {currentPageData.details.entryFee}
                          </p>
                        </div>
                        
                        <div className="bg-blue-200/80 p-4 rounded-lg transform rotate-2 shadow-md">
                          <p className="text-sm font-medium text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                            ⭐ Best: {currentPageData.details.bestTime}
                          </p>
                        </div>
                        
                        <div className="bg-green-200/80 p-4 rounded-lg transform -rotate-1 shadow-md">
                          <p className="text-sm font-medium text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                            📍 {currentPageData.details.category}
                          </p>
                        </div>
                      </div>
                      
                      {/* Highlights with doodles */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Don't Miss:
                        </h3>
                        {currentPageData.details.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full" />
                            <p className="text-amber-700" style={{ fontFamily: 'Kalam, cursive' }}>
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="transform -rotate-1 shadow-lg">
                        <img 
                          src={currentPageData.image} 
                          alt={currentPageData.title}
                          className="w-full rounded-lg border-4 border-white"
                        />
                        
                        {/* Polaroid caption */}
                        <div className="bg-white p-3 border-l-4 border-r-4 border-b-4 border-white">
                          <p className="text-center text-amber-700 text-sm" 
                             style={{ fontFamily: 'Caveat, cursive' }}>
                            {currentPageData.title} - Absolutely magical! ✨
                          </p>
                        </div>
                      </div>
                      
                      {/* Hand-drawn elements */}
                      <div className="absolute -top-4 -left-4 text-red-400 transform -rotate-12">
                        <Heart className="w-6 h-6 fill-current" />
                      </div>
                      
                      <div className="absolute -bottom-4 -right-4 text-blue-400 transform rotate-12">
                        <Camera className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Food Intro Page */}
              {currentPageData.type === 'food-intro' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <p className="text-lg text-amber-700 leading-relaxed" 
                         style={{ fontFamily: 'Kalam, cursive' }}>
                        {currentPageData.content}
                      </p>
                      
                      <div className="bg-orange-100/80 p-4 rounded-lg transform -rotate-1 shadow-md">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-orange-800 mb-3" 
                            style={{ fontFamily: 'Caveat, cursive' }}>
                          <Coffee className="w-6 h-6" />
                          Food Philosophy
                        </h3>
                        <p className="text-orange-700" style={{ fontFamily: 'Kalam, cursive' }}>
                          "Food is not just sustenance, it's the soul of a place. Each bite tells a story of tradition, culture, and love." 
                        </p>
                      </div>
                      
                      <div className="relative">
                        <svg className="w-32 h-16 text-amber-600" viewBox="0 0 120 60">
                          <path d="M20 30 Q60 10 100 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                          <path d="M95 25 L100 30 L95 35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                        <p className="absolute -bottom-6 left-0 text-sm text-amber-600 transform -rotate-2" 
                           style={{ fontFamily: 'Caveat, cursive' }}>
                          Taste the culture!
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="transform rotate-1 shadow-lg">
                        <img 
                          src={currentPageData.image} 
                          alt="Local cuisine"
                          className="w-full h-64 object-cover rounded-lg border-4 border-white"
                        />
                        
                        <div className="bg-white p-3 border-l-4 border-r-4 border-b-4 border-white">
                          <p className="text-center text-amber-700 text-sm" 
                             style={{ fontFamily: 'Caveat, cursive' }}>
                            First taste of local flavors! 😋
                          </p>
                        </div>
                      </div>
                      
                      <div className="absolute -top-4 -left-4 text-red-400 transform -rotate-12">
                        <Heart className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Food Category Pages */}
              {currentPageData.type === 'food-category' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPageData.category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`bg-white/80 rounded-lg p-6 shadow-md transform ${itemIndex % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform`}>
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden transform -rotate-2 shadow-md">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
                              {item.name} {item.mustTry && '⭐'}
                            </h4>
                            <p className="text-amber-600 mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                              {item.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <p className="text-green-600 font-bold">{item.price}</p>
                              {item.mustTry && (
                                <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">
                                  Must Try!
                                </span>
                              )}
                            </div>
                            <p className="text-amber-500 text-sm mt-1" style={{ fontFamily: 'Caveat, cursive' }}>
                              📍 {item.where}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Restaurants Page */}
              {currentPageData.type === 'restaurants' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="space-y-6">
                    {currentPageData.restaurants.map((restaurant, index) => (
                      <div key={index} className={`bg-white/80 rounded-lg p-6 shadow-md transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-amber-800" style={{ fontFamily: 'Caveat, cursive' }}>
                              {restaurant.name}
                            </h3>
                            <p className="text-amber-600" style={{ fontFamily: 'Kalam, cursive' }}>
                              {restaurant.type} • {restaurant.cuisine}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < restaurant.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-green-100/80 p-3 rounded transform -rotate-1">
                            <p className="text-green-800 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                              💰 {restaurant.priceRange}
                            </p>
                          </div>
                          <div className="bg-blue-100/80 p-3 rounded transform rotate-1">
                            <p className="text-blue-800 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                              ✨ {restaurant.speciality}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transportation Page */}
              {currentPageData.type === 'transportation' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="space-y-6">
                    {/* By Air */}
                    <div className="bg-blue-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Plane className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          By Air ✈️
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ fontFamily: 'Kalam, cursive' }}>
                        <div>
                          <p className="font-bold text-blue-700">Airport:</p>
                          <p className="text-blue-600">{currentPageData.howToReach.byAir.airport}</p>
                        </div>
                        <div>
                          <p className="font-bold text-blue-700">Travel Time:</p>
                          <p className="text-blue-600">{currentPageData.howToReach.byAir.travelTime}</p>
                        </div>
                        <div>
                          <p className="font-bold text-blue-700">Cost:</p>
                          <p className="text-blue-600">{currentPageData.howToReach.byAir.cost}</p>
                        </div>
                      </div>
                    </div>

                    {/* By Train */}
                    <div className="bg-green-100/80 p-6 rounded-lg transform rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Train className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          By Train 🚂
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ fontFamily: 'Kalam, cursive' }}>
                        <div>
                          <p className="font-bold text-green-700">Station:</p>
                          <p className="text-green-600">{currentPageData.howToReach.byTrain.station}</p>
                        </div>
                        <div>
                          <p className="font-bold text-green-700">Travel Time:</p>
                          <p className="text-green-600">{currentPageData.howToReach.byTrain.travelTime}</p>
                        </div>
                        <div>
                          <p className="font-bold text-green-700">Cost:</p>
                          <p className="text-green-600">{currentPageData.howToReach.byTrain.cost}</p>
                        </div>
                      </div>
                    </div>

                    {/* By Road */}
                    <div className="bg-yellow-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Car className="w-8 h-8 text-yellow-600" />
                        <h3 className="text-2xl font-bold text-yellow-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          By Road 🚗
                        </h3>
                      </div>
                      <div className="space-y-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        {Object.entries(currentPageData.howToReach.byRoad).map(([key, value]) => (
                          <p key={key} className="text-yellow-700">
                            <span className="font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                            {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Accommodation Page */}
              {currentPageData.type === 'accommodation' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="space-y-6">
                    {/* Luxury */}
                    <div className="bg-purple-100/80 p-6 rounded-lg transform rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Hotel className="w-8 h-8 text-purple-600" />
                        <h3 className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Luxury Stays 👑
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPageData.accommodation.luxury.map((hotel, index) => (
                          <div key={index} className="bg-white/60 p-4 rounded-lg">
                            <p className="text-purple-700 font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                              {hotel}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mid Range */}
                    <div className="bg-blue-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Mid-Range Comfort 🏨
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPageData.accommodation.midRange.map((hotel, index) => (
                          <div key={index} className="bg-white/60 p-4 rounded-lg">
                            <p className="text-blue-700 font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                              {hotel}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="bg-green-100/80 p-6 rounded-lg transform rotate-2 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <Bed className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Caveat, cursive' }}>
                          Budget-Friendly 🎒
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPageData.accommodation.budget.map((hotel, index) => (
                          <div key={index} className="bg-white/60 p-4 rounded-lg">
                            <p className="text-green-700 font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                              {hotel}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tips Page */}
              {currentPageData.type === 'tips' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPageData.tips.map((tip, index) => (
                      <div key={index} className={`bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-lg shadow-md transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-amber-800 font-medium" style={{ fontFamily: 'Kalam, cursive' }}>
                            {tip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pro Tip Section */}
                  <div className="bg-red-100/80 p-6 rounded-lg transform rotate-1 shadow-md border-l-4 border-red-400">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">💡</span>
                      <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Caveat, cursive' }}>
                        Pro Traveler Tip
                      </h3>
                    </div>
                    <p className="text-red-700" style={{ fontFamily: 'Kalam, cursive' }}>
                      "Connect with locals! They know the hidden gems that no guidebook mentions. A simple smile and curiosity can lead to the most amazing discoveries."
                    </p>
                  </div>
                </div>
              )}

              {/* Social Page */}
              {currentPageData.type === 'social' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  {/* Hashtags */}
                  <div className="bg-pink-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <Hash className="w-6 h-6 text-pink-600" />
                      <h3 className="text-xl font-bold text-pink-800" style={{ fontFamily: 'Caveat, cursive' }}>
                        Popular Hashtags
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentPageData.social.hashtags.map((hashtag, index) => (
                        <span key={index} className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Instagram Spots */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg transform rotate-1 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <Instagram className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Caveat, cursive' }}>
                        Instagram-Worthy Spots 📸
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {currentPageData.social.instagramSpots.map((spot, index) => (
                        <div key={index} className="bg-white/60 p-3 rounded-lg text-center">
                          <p className="text-purple-700 font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                            {spot}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Destinations */}
                  <div className="bg-blue-100/80 p-6 rounded-lg transform -rotate-2 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <Navigation className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-blue-800" style={{ fontFamily: 'Caveat, cursive' }}>
                        Next Adventures 🗺️
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {currentPageData.related.map((destination, index) => (
                        <div key={index} className="flex justify-between items-center bg-white/60 p-3 rounded-lg">
                          <div>
                            <p className="font-bold text-blue-800" style={{ fontFamily: 'Kalam, cursive' }}>
                              {destination.name}
                            </p>
                            <p className="text-blue-600 text-sm">{destination.state}</p>
                          </div>
                          <p className="text-blue-700 text-sm" style={{ fontFamily: 'Caveat, cursive' }}>
                            {destination.distance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Itinerary Page */}
              {currentPageData.type === 'itinerary' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {currentPageData.content.days.map((day, dayIndex) => (
                      <div key={dayIndex} className="bg-white/60 rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-bold text-amber-800 mb-4" 
                            style={{ fontFamily: 'Caveat, cursive' }}>
                          Day {day.day}: {day.title}
                        </h3>
                        
                        <div className="space-y-3">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start gap-4">
                              <div className="bg-amber-200 rounded-full px-3 py-1 text-sm font-bold text-amber-800">
                                {activity.time}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-amber-800" style={{ fontFamily: 'Kalam, cursive' }}>
                                  {activity.activity}
                                </p>
                                {activity.location && (
                                  <p className="text-amber-600 text-sm" style={{ fontFamily: 'Kalam, cursive' }}>
                                    📍 {activity.location}
                                  </p>
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

              {/* Memories Page */}
              {currentPageData.type === 'memories' && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700 mb-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {currentPageData.gallery.map((photo, index) => (
                      <div key={photo.id} className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} shadow-lg`}>
                        <img 
                          src={photo.image} 
                          alt={photo.caption}
                          className="w-full h-32 object-cover rounded-lg border-4 border-white"
                        />
                        <div className="bg-white p-2 border-l-4 border-r-4 border-b-4 border-white">
                          <p className="text-center text-amber-700 text-xs" 
                             style={{ fontFamily: 'Caveat, cursive' }}>
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Default/Unknown Page Type Handler */}
              {!['cover', 'intro', 'overview', 'weather', 'attraction', 'food-intro', 'food-category', 'restaurants', 'transportation', 'accommodation', 'tips', 'itinerary', 'memories', 'social'].includes(currentPageData.type) && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6 transform -rotate-1" 
                      style={{ fontFamily: 'Caveat, cursive' }}>
                    {currentPageData.title}
                  </h2>
                  
                  <p className="text-lg text-amber-700" style={{ fontFamily: 'Kalam, cursive' }}>
                    {currentPageData.content || 'Content for this page is being prepared...'}
                  </p>
                  
                  <div className="bg-yellow-100/80 p-6 rounded-lg transform -rotate-1 shadow-md">
                    <p className="text-yellow-800" style={{ fontFamily: 'Caveat, cursive' }}>
                      📝 Page type: {currentPageData.type}
                    </p>
                    <p className="text-yellow-700 text-sm mt-2" style={{ fontFamily: 'Kalam, cursive' }}>
                      This page is still being written in our travel journal...
                    </p>
                  </div>
                </div>
              )}

              {/* Sticky Notes Overlay */}
              {stickyNotes.filter(note => note.pageIndex === currentPage).map((note) => (
                <div
                  key={note.id}
                  className={`absolute bg-${note.color}-200 p-2 rounded-lg shadow-md transform -rotate-3 text-xs`}
                  style={{ left: `${note.x}px`, top: `${note.y}px` }}
                >
                  {note.text}
                </div>
              ))}
            </div>

            {/* Page Navigation - Fixed positioning for better accessibility */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg z-20">
              <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-10 h-10 bg-amber-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-300 transition-colors text-amber-800 font-bold"
                title="Previous page"
              >
                ←
              </button>
              
              <span className="text-amber-700 font-semibold px-3" style={{ fontFamily: 'Kalam, cursive' }}>
                {currentPage + 1} / {journalPages.length}
              </span>
              
              <button 
                onClick={nextPage}
                disabled={currentPage === journalPages.length - 1}
                className="flex items-center justify-center w-10 h-10 bg-amber-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-300 transition-colors text-amber-800 font-bold"
                title="Next page"
              >
                →
              </button>
            </div>

            {/* Quick Page Jump - Better positioning */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md z-10">
              <select 
                value={currentPage} 
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                className="text-xs bg-transparent border-none focus:outline-none cursor-pointer min-w-[120px]"
                style={{ fontFamily: 'Kalam, cursive' }}
                title="Jump to page"
              >
                {journalPages.map((page, index) => (
                  <option key={index} value={index}>
                    {index + 1}. {page.title.substring(0, 20)}...
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Journal Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => console.log('Available pages:', journalPages.map((p, i) => `${i+1}. ${p.title}`))}
            className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors">
            <BookOpen className="w-4 h-4" />
            <span style={{ fontFamily: 'Kalam, cursive' }}>View All Pages</span>
          </button>
          
          <button className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors">
            <Bookmark className="w-4 h-4" />
            <span style={{ fontFamily: 'Kalam, cursive' }}>Bookmark</span>
          </button>
          
          <button className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors">
            <PenTool className="w-4 h-4" />
            <span style={{ fontFamily: 'Kalam, cursive' }}>Add Note</span>
          </button>
          
          <button className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors">
            <Heart className="w-4 h-4" />
            <span style={{ fontFamily: 'Kalam, cursive' }}>Favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelJournalTheme;