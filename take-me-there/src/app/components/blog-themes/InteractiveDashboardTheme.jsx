"use client";
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Share2,
  Bookmark,
  CheckSquare,
  Square,
  TrendingUp,
  DollarSign,
  Thermometer,
  Users,
  Camera,
  Utensils,
  Mountain,
  Calendar,
  Navigation,
  Filter,
  Search,
  Settings,
  Download,
  RefreshCw,
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';

const InteractiveDashboardTheme = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [budget, setBudget] = useState(5000);
  const [duration, setDuration] = useState(3);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'attractions', name: 'Places', icon: MapPin },
    { id: 'food', name: 'Food', icon: Utensils },
    { id: 'planner', name: 'Planner', icon: Calendar },
    { id: 'budget', name: 'Budget', icon: DollarSign }
  ];

  const toggleCheck = (itemId) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  // Dashboard Widgets
  const WeatherWidget = () => (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 col-span-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Weather</h3>
        <Thermometer className="w-5 h-5 opacity-80" />
      </div>
      <div className="text-3xl font-bold mb-2">22°C</div>
      <div className="text-blue-100 text-sm mb-3">Perfect for exploring</div>
      <div className="flex justify-between text-sm text-blue-100">
        <span>High: 25°C</span>
        <span>Low: 18°C</span>
      </div>
    </div>
  );

  const StatsWidget = () => (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 col-span-2">
      <h3 className="font-semibold mb-4">Trip Statistics</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{data.attractions.length}</div>
          <div className="text-gray-500 text-sm">Attractions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{duration}</div>
          <div className="text-gray-500 text-sm">Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">₹{budget}</div>
          <div className="text-gray-500 text-sm">Budget</div>
        </div>
      </div>
    </div>
  );

  const QuickActionsWidget = () => (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 col-span-1">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
          Download Guide
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Share Trip
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Save for Later
        </button>
      </div>
    </div>
  );

  const ProgressWidget = () => (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Planning Progress</h3>
        <span className="text-sm text-gray-500">{checkedItems.size}/{data.attractions.length + 5} completed</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(checkedItems.size / (data.attractions.length + 5)) * 100}%` }}
        />
      </div>
      <div className="text-sm text-gray-600">
        Keep planning! You're {Math.round((checkedItems.size / (data.attractions.length + 5)) * 100)}% done.
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl">{data.location.name} Dashboard</h1>
                <p className="text-gray-500 text-sm">Plan your perfect trip</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-500 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 border border-gray-200">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            
            {/* Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <WeatherWidget />
              <StatsWidget />
              <QuickActionsWidget />
              <ProgressWidget />
            </div>

            {/* Hero Section */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative h-64 md:h-80">
                <img 
                  src={data.hero.mainImage} 
                  alt={data.location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{data.location.name}</h2>
                  <p className="text-white/90">{data.hero.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Elevation</div>
                    <div className="font-semibold">{data.location.elevation}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Best Time</div>
                    <div className="font-semibold">{data.overview.bestTime.peak}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold">{data.overview.duration.recommended}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Budget</div>
                    <div className="font-semibold">{data.overview.budget.midRange}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attractions Tab */}
        {activeTab === 'attractions' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search attractions..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Attractions List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.attractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{attraction.name}</h3>
                        <p className="text-gray-600 text-sm">{attraction.category}</p>
                      </div>
                      <button 
                        onClick={() => toggleCheck(attraction.id)}
                        className="ml-3 text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        {checkedItems.has(attraction.id) ? (
                          <CheckSquare className="w-5 h-5" />
                        ) : (
                          <Square className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {attraction.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration: </span>
                        <span className="font-medium">{attraction.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Entry: </span>
                        <span className="font-medium">{attraction.entryFee}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {attraction.highlights.slice(0, 3).map((highlight, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Food Tab */}
        {activeTab === 'food' && (
          <div className="space-y-6">
            {data.food.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <button 
                            onClick={() => toggleCheck(`food-${categoryIndex}-${itemIndex}`)}
                            className="text-blue-500 hover:text-blue-600 transition-colors"
                          >
                            {checkedItems.has(`food-${categoryIndex}-${itemIndex}`) ? (
                              <CheckSquare className="w-4 h-4" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-600 font-medium text-sm">{item.price}</span>
                          {item.mustTry && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                              Must Try
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Planner Tab */}
        {activeTab === 'planner' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Trip Planner</h2>
              
              {data.itineraries[0] && (
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      {data.itineraries[0].title} ({data.itineraries[0].duration})
                    </h3>
                    <p className="text-blue-700 text-sm">
                      Recommended itinerary for your {data.location.name} trip
                    </p>
                  </div>
                  
                  {data.itineraries[0].days.map((day, dayIndex) => (
                    <div key={dayIndex} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Day {day.day}: {day.title}</h4>
                        <button 
                          onClick={() => toggleCheck(`day-${day.day}`)}
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          {checkedItems.has(`day-${day.day}`) ? (
                            <CheckSquare className="w-5 h-5" />
                          ) : (
                            <Square className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-16 text-sm font-medium text-blue-600 flex-shrink-0">
                              {activity.time}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{activity.activity}</p>
                                <button 
                                  onClick={() => toggleCheck(`activity-${dayIndex}-${actIndex}`)}
                                  className="text-green-500 hover:text-green-600 transition-colors"
                                >
                                  {checkedItems.has(`activity-${dayIndex}-${actIndex}`) ? (
                                    <CheckSquare className="w-4 h-4" />
                                  ) : (
                                    <Square className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
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
              )}
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Budget Calculator</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trip Duration (days)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 day</span>
                    <span className="font-medium">{duration} days</span>
                    <span>10 days</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range (₹)
                  </label>
                  <input
                    type="range"
                    min="2000"
                    max="15000"
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹2,000</span>
                    <span className="font-medium">₹{budget}</span>
                    <span>₹15,000</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Estimated Total Cost</h3>
                <div className="text-2xl font-bold text-green-600">₹{budget * duration}</div>
                <p className="text-green-700 text-sm">
                  For {duration} days at ₹{budget} per day
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveDashboardTheme;