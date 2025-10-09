'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mountain, Compass, MapPin, Navigation, Zap, Activity,
  Camera, Share2, Bookmark, Heart, Star, Clock, Users,
  Battery, Wifi, Signal, Menu, Search, Filter, X,
  Play, Pause, VolumeX, Volume2, Download, Upload,
  ChevronRight, ChevronLeft, MoreVertical, Plus, Minus
} from 'lucide-react';

const AdventureSeekerMobileTheme = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [currentAdventure, setCurrentAdventure] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(78);
  const [isOffline, setIsOffline] = useState(false);
  const [savedAdventures, setSavedAdventures] = useState(new Set());

  const adventures = [
    {
      id: 1,
      title: "Doddabetta Peak Challenge",
      difficulty: "Moderate",
      duration: "4-5 hours",
      distance: "12 km",
      elevation: "2,637m",
      category: "Mountain Hiking",
      description: "Conquer the highest peak in the Nilgiris! This challenging trek takes you through pristine shola forests to panoramic summit views.",
      highlights: [
        "360-degree panoramic views",
        "Telescope house at summit",
        "Rich biodiversity trail",
        "Weather monitoring station visit",
        "Photography opportunities galore"
      ],
      difficulty_rating: 3.5,
      popularity: 94,
      best_weather: "Clear morning",
      gear_needed: ["Hiking boots", "Water bottle", "Camera", "Light jacket"],
      safety_tips: [
        "Start early to avoid afternoon mist",
        "Carry extra water and snacks",
        "Inform someone about your trek",
        "Check weather conditions"
      ],
      coordinates: { lat: 11.4008, lng: 76.7338 },
      photos: 247,
      reviews: 156
    },
    {
      id: 2,
      title: "Avalanche Lake Trek",
      difficulty: "Difficult",
      duration: "Full day",
      distance: "28 km",
      elevation: "2,000m",
      category: "Wilderness Trek",
      description: "Experience untouched wilderness on this challenging trek to the pristine Avalanche Lake through protected forest areas.",
      highlights: [
        "Pristine mountain lake",
        "Wildlife spotting opportunities",
        "Dense shola forest trail",
        "Rare bird species observation",
        "Conservation area education"
      ],
      difficulty_rating: 4.5,
      popularity: 78,
      best_weather: "Dry season",
      gear_needed: ["Trekking poles", "First aid kit", "GPS device", "Permits"],
      safety_tips: [
        "Mandatory guide required",
        "Obtain forest permits",
        "Carry emergency supplies",
        "Inform forest department"
      ],
      coordinates: { lat: 11.3500, lng: 76.6800 },
      photos: 89,
      reviews: 67
    },
    {
      id: 3,
      title: "Tea Estate Circuit",
      difficulty: "Easy",
      duration: "2-3 hours",
      distance: "8 km",
      elevation: "1,800m",
      category: "Cultural Walk",
      description: "Gentle walk through emerald tea plantations with opportunities to learn about tea cultivation and processing.",
      highlights: [
        "Tea plucking experience",
        "Factory tour included",
        "Tasting session",
        "Photography with workers",
        "Local cuisine sampling"
      ],
      difficulty_rating: 1.5,
      popularity: 92,
      best_weather: "Sunny afternoon",
      gear_needed: ["Comfortable shoes", "Sun hat", "Camera", "Cash for purchases"],
      safety_tips: [
        "Stay on designated paths",
        "Respect workers and property",
        "Ask permission before photography",
        "Follow guide instructions"
      ],
      coordinates: { lat: 11.4200, lng: 76.7100 },
      photos: 312,
      reviews: 203
    },
    {
      id: 4,
      title: "Night Safari Experience",
      difficulty: "Easy",
      duration: "3-4 hours",
      distance: "Vehicle based",
      elevation: "Variable",
      category: "Wildlife Safari",
      description: "Embark on an exciting night safari to spot nocturnal wildlife in their natural habitat around Ooty's forest areas.",
      highlights: [
        "Nocturnal wildlife spotting",
        "Guided by expert naturalist",
        "Special night vision equipment",
        "Educational commentary",
        "Hot beverages included"
      ],
      difficulty_rating: 1.0,
      popularity: 85,
      best_weather: "Clear night",
      gear_needed: ["Warm clothing", "Flashlight", "Binoculars", "Camera"],
      safety_tips: [
        "Follow guide instructions",
        "No sudden movements",
        "Keep voices low",
        "Stay in designated areas"
      ],
      coordinates: { lat: 11.3800, lng: 76.7200 },
      photos: 134,
      reviews: 98
    }
  ];

  const handleSaveAdventure = (id) => {
    setSavedAdventures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (rating) => {
    if (rating <= 2) return "bg-green-500";
    if (rating <= 3.5) return "bg-yellow-500";
    return "bg-red-500";
  };

  const currentAdventureData = adventures[currentAdventure];

  return (
    <div className="w-full max-w-sm mx-auto bg-black text-white min-h-screen relative overflow-hidden">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-xs">
        <div className="flex items-center space-x-2">
          <span className="font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            {isOffline && <span className="text-red-400">Offline</span>}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span>{batteryLevel}%</span>
          <Battery className={`w-4 h-4 ${batteryLevel > 20 ? 'text-green-400' : 'text-red-400'}`} />
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 rounded-full bg-white/20">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Adventure Ooty</h1>
          <button className="p-2 rounded-full bg-white/20">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Adventure Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold">{savedAdventures.size}</div>
            <div className="text-xs text-orange-100">Saved</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">247</div>
            <div className="text-xs text-orange-100">Photos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">12.5</div>
            <div className="text-xs text-orange-100">km Today</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`flex-1 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 ${
              isRecording ? 'bg-red-500' : 'bg-white/20'
            }`}
          >
            {isRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRecording ? 'Stop' : 'Start'} Adventure</span>
          </button>
          <button className="p-3 bg-white/20 rounded-full">
            <Camera className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-gray-900 px-4 py-2">
        <div className="flex items-center">
          {[
            { id: 'discover', label: 'Discover', icon: Compass },
            { id: 'map', label: 'Map', icon: MapPin },
            { id: 'saved', label: 'Saved', icon: Bookmark },
            { id: 'profile', label: 'Profile', icon: Users }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-2 text-xs ${
                activeTab === tab.id ? 'text-orange-400' : 'text-gray-400'
              }`}
            >
              <tab.icon className="w-5 h-5 mb-1" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-900">
        {activeTab === 'discover' && (
          <div className="h-full">
            {/* Featured Adventure Card */}
            <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                    {currentAdventureData.category}
                  </span>
                  <button 
                    onClick={() => handleSaveAdventure(currentAdventureData.id)}
                    className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    <Heart className={`w-5 h-5 ${
                      savedAdventures.has(currentAdventureData.id) ? 'fill-current text-red-400' : ''
                    }`} />
                  </button>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">{currentAdventureData.title}</h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentAdventureData.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Mountain className="w-4 h-4" />
                      <span>{currentAdventureData.distance}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {adventures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAdventure(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentAdventure ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Swipe Indicators */}
              <button 
                onClick={() => setCurrentAdventure((prev) => (prev > 0 ? prev - 1 : adventures.length - 1))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full backdrop-blur-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentAdventure((prev) => (prev < adventures.length - 1 ? prev + 1 : 0))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full backdrop-blur-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Adventure Details */}
            <div className="p-4 space-y-4">
              {/* Difficulty & Popularity */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-400">Difficulty:</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < currentAdventureData.difficulty_rating 
                              ? getDifficultyColor(currentAdventureData.difficulty_rating)
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{currentAdventureData.popularity}% liked</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Elevation</div>
                  <div className="font-semibold">{currentAdventureData.elevation}</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Weather</div>
                  <div className="font-semibold">{currentAdventureData.best_weather}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">About This Adventure</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {currentAdventureData.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-semibold mb-2">Highlights</h3>
                <div className="space-y-2">
                  {currentAdventureData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gear Needed */}
              <div>
                <h3 className="font-semibold mb-2">Essential Gear</h3>
                <div className="flex flex-wrap gap-2">
                  {currentAdventureData.gear_needed.map((gear, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs">
                      {gear}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 py-3 rounded-lg font-semibold">
                  Start Adventure
                </button>
                <button className="px-4 py-3 bg-gray-800 rounded-lg">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="px-4 py-3 bg-gray-800 rounded-lg">
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="h-full bg-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                <p className="text-sm text-gray-400 mb-4 px-6">
                  Explore adventure locations around Ooty with real-time GPS tracking
                </p>
                <button className="bg-orange-600 px-6 py-2 rounded-lg font-semibold">
                  Enable Location
                </button>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Minus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </button>
            </div>

            {/* Adventure Markers List */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm p-4 max-h-48 overflow-y-auto">
              <h4 className="font-semibold mb-3">Nearby Adventures</h4>
              <div className="space-y-2">
                {adventures.map((adventure, index) => (
                  <button
                    key={adventure.id}
                    className="w-full text-left p-3 bg-gray-800 rounded-lg flex items-center justify-between"
                    onClick={() => setCurrentAdventure(index)}
                  >
                    <div>
                      <div className="font-medium text-sm">{adventure.title}</div>
                      <div className="text-xs text-gray-400">{adventure.distance} • {adventure.difficulty}</div>
                    </div>
                    <div className="text-orange-400">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Saved Adventures</h2>
            {savedAdventures.size === 0 ? (
              <div className="text-center py-12">
                <Bookmark className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No Saved Adventures</h3>
                <p className="text-sm text-gray-400">
                  Save adventures you want to try later
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {adventures
                  .filter(adventure => savedAdventures.has(adventure.id))
                  .map(adventure => (
                    <div key={adventure.id} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{adventure.title}</h3>
                        <button onClick={() => handleSaveAdventure(adventure.id)}>
                          <X className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{adventure.distance}</span>
                        <span>{adventure.difficulty}</span>
                        <span>{adventure.duration}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="p-4">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                AO
              </div>
              <h2 className="text-lg font-semibold">Adventure Seeker</h2>
              <p className="text-sm text-gray-400">Exploring Ooty since 2024</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold">7</div>
                <div className="text-xs text-gray-400">Adventures</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold">42</div>
                <div className="text-xs text-gray-400">km Tracked</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold">156</div>
                <div className="text-xs text-gray-400">Photos</div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: Activity, label: "Activity History", value: "View all" },
                { icon: Download, label: "Offline Maps", value: "2.3 GB" },
                { icon: Camera, label: "Photo Gallery", value: "156 photos" },
                { icon: Share2, label: "Share Adventures", value: "Tell friends" }
              ].map((item, index) => (
                <button key={index} className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-orange-400" />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{item.value}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Safe Area */}
      <div className="h-6 bg-gray-900" />
    </div>
  );
};

export default AdventureSeekerMobileTheme;