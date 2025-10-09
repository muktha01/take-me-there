'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, PieChart, TrendingUp, Calculator, DollarSign, MapPin,
  Calendar, Clock, Thermometer, Users, Car, Train, Plane,
  Star, Eye, ThumbsUp, ArrowUp, ArrowDown, Activity,
  Filter, Download, Share2, Bookmark, RefreshCw, Info,
  Mountain, TreePine, Coffee, Utensils, Bed, Wifi,
  ChevronDown, ChevronUp, ChevronRight, Menu, X, Search
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const DataDrivenExplorerTheme = () => {
  const [activeDataset, setActiveDataset] = useState('overview');
  const [budgetInputs, setBudgetInputs] = useState({
    days: 3,
    accommodation: 'mid-range',
    transportation: 'car',
    meals: 'restaurant',
    activities: 'moderate'
  });
  const [calculatedBudget, setCalculatedBudget] = useState(0);
  const [crowdData, setCrowdData] = useState('low');
  const [weatherData, setWeatherData] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);

  // Comprehensive data for Ooty with analytics focus
  const ootyAnalytics = {
    overview: {
      elevation: 2240,
      area: 36,
      population: 88430,
      annualVisitors: 2800000,
      averageStay: 2.8,
      peakSeason: "April-June",
      languages: ["Tamil", "English", "Hindi", "Kannada"],
      established: 1818
    },

    visitorsData: {
      monthlyVisitors: [
        { month: 'Jan', visitors: 180000, weather: 'excellent', crowd: 'moderate' },
        { month: 'Feb', visitors: 220000, weather: 'excellent', crowd: 'moderate' },
        { month: 'Mar', visitors: 280000, weather: 'good', crowd: 'high' },
        { month: 'Apr', visitors: 350000, weather: 'excellent', crowd: 'very-high' },
        { month: 'May', visitors: 380000, weather: 'excellent', crowd: 'very-high' },
        { month: 'Jun', visitors: 320000, weather: 'good', crowd: 'high' },
        { month: 'Jul', visitors: 200000, weather: 'fair', crowd: 'moderate' },
        { month: 'Aug', visitors: 180000, weather: 'fair', crowd: 'moderate' },
        { month: 'Sep', visitors: 160000, weather: 'good', crowd: 'low' },
        { month: 'Oct', visitors: 240000, weather: 'excellent', crowd: 'moderate' },
        { month: 'Nov', visitors: 260000, weather: 'excellent', crowd: 'moderate' },
        { month: 'Dec', visitors: 280000, weather: 'excellent', crowd: 'high' }
      ]
    },

    weatherAnalytics: {
      temperature: {
        jan: { min: 5, max: 20, avg: 12.5 },
        feb: { min: 7, max: 22, avg: 14.5 },
        mar: { min: 10, max: 25, avg: 17.5 },
        apr: { min: 13, max: 25, avg: 19 },
        may: { min: 15, max: 25, avg: 20 },
        jun: { min: 14, max: 23, avg: 18.5 },
        jul: { min: 13, max: 20, avg: 16.5 },
        aug: { min: 13, max: 20, avg: 16.5 },
        sep: { min: 13, max: 22, avg: 17.5 },
        oct: { min: 12, max: 22, avg: 17 },
        nov: { min: 8, max: 20, avg: 14 },
        dec: { min: 6, max: 18, avg: 12 }
      },
      rainfall: [65, 45, 85, 120, 180, 220, 280, 250, 160, 140, 90, 70],
      humidity: [75, 70, 72, 75, 80, 85, 90, 88, 82, 78, 75, 73]
    },

    attractions: [
      {
        name: "Doddabetta Peak",
        visitorsPerDay: 2500,
        averageTime: 2.5,
        rating: 4.8,
        crowdTimes: { morning: 'low', afternoon: 'high', evening: 'moderate' },
        cost: { entry: 30, parking: 20, telescope: 5 },
        distance: { fromCenter: 10, walkingTime: 15 },
        coordinates: { lat: 11.4008, lng: 76.7338 }
      },
      {
        name: "Ooty Lake",
        visitorsPerDay: 3200,
        averageTime: 1.8,
        rating: 4.6,
        crowdTimes: { morning: 'moderate', afternoon: 'very-high', evening: 'high' },
        cost: { entry: 20, boating: 200, parking: 15 },
        distance: { fromCenter: 2, walkingTime: 25 },
        coordinates: { lat: 11.4102, lng: 76.6950 }
      },
      {
        name: "Botanical Garden",
        visitorsPerDay: 1800,
        averageTime: 2.2,
        rating: 4.7,
        crowdTimes: { morning: 'low', afternoon: 'moderate', evening: 'low' },
        cost: { entry: 30, camera: 25, guide: 100 },
        distance: { fromCenter: 3, walkingTime: 35 },
        coordinates: { lat: 11.4126, lng: 76.6987 }
      },
      {
        name: "Nilgiri Mountain Railway",
        visitorsPerDay: 400,
        averageTime: 5.5,
        rating: 4.9,
        crowdTimes: { morning: 'high', afternoon: 'low', evening: 'none' },
        cost: { firstClass: 370, secondClass: 280, thirdClass: 50 },
        distance: { fromCenter: 1, walkingTime: 15 },
        coordinates: { lat: 11.4078, lng: 76.6952 }
      }
    ],

    costAnalysis: {
      accommodation: {
        luxury: { min: 8000, max: 25000, avg: 15000 },
        midRange: { min: 2500, max: 8000, avg: 4500 },
        budget: { min: 800, max: 2500, avg: 1200 }
      },
      food: {
        fineDining: { breakfast: 800, lunch: 1200, dinner: 1500 },
        restaurant: { breakfast: 300, lunch: 500, dinner: 700 },
        streetFood: { breakfast: 100, lunch: 200, dinner: 250 }
      },
      transportation: {
        car: { perKm: 12, dailyRental: 2500 },
        taxi: { perKm: 18, halfDay: 1500, fullDay: 2500 },
        bus: { local: 15, intercity: 250 },
        autorickshaw: { perKm: 15, minimum: 50 }
      },
      activities: {
        sightseeing: { average: 150, premium: 500 },
        adventure: { average: 800, premium: 2000 },
        cultural: { average: 200, premium: 800 }
      }
    }
  };

  // Budget Calculator
  useEffect(() => {
    calculateBudget();
  }, [budgetInputs]);

  const calculateBudget = () => {
    const { days, accommodation, transportation, meals, activities } = budgetInputs;
    
    // Accommodation cost
    const accommodationCost = ootyAnalytics.costAnalysis.accommodation[accommodation].avg * days;
    
    // Transportation cost
    const transportationCost = transportation === 'car' ? 
      ootyAnalytics.costAnalysis.transportation.car.dailyRental * days :
      ootyAnalytics.costAnalysis.transportation.taxi.fullDay * days;
    
    // Food cost
    const dailyFoodCost = meals === 'fineDining' ?
      ootyAnalytics.costAnalysis.food.fineDining.breakfast + 
      ootyAnalytics.costAnalysis.food.fineDining.lunch + 
      ootyAnalytics.costAnalysis.food.fineDining.dinner :
      meals === 'restaurant' ?
      ootyAnalytics.costAnalysis.food.restaurant.breakfast + 
      ootyAnalytics.costAnalysis.food.restaurant.lunch + 
      ootyAnalytics.costAnalysis.food.restaurant.dinner :
      ootyAnalytics.costAnalysis.food.streetFood.breakfast + 
      ootyAnalytics.costAnalysis.food.streetFood.lunch + 
      ootyAnalytics.costAnalysis.food.streetFood.dinner;
    
    const foodCost = dailyFoodCost * days;
    
    // Activities cost
    const activitiesCost = activities === 'premium' ?
      ootyAnalytics.costAnalysis.activities.sightseeing.premium * days :
      activities === 'moderate' ?
      ootyAnalytics.costAnalysis.activities.sightseeing.average * days * 1.5 :
      ootyAnalytics.costAnalysis.activities.sightseeing.average * days;
    
    const total = accommodationCost + transportationCost + foodCost + activitiesCost + (days * 500); // misc
    setCalculatedBudget(total);
  };

  // Data visualization components
  const DataCard = ({ title, value, trend, icon: Icon, subtitle, color = "blue" }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${color}-500`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-${color}-100 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        {trend && (
          <div className={`flex items-center ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span className="text-sm font-medium ml-1">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );

  const VisitorChart = () => {
    const maxVisitors = Math.max(...ootyAnalytics.visitorsData.monthlyVisitors.map(d => d.visitors));
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Visitor Analysis</h3>
        <div className="space-y-4">
          {ootyAnalytics.visitorsData.monthlyVisitors.map((data, index) => (
            <div key={data.month} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 rounded-full flex items-center justify-end pr-3"
                  style={{ width: `${(data.visitors / maxVisitors) * 100}%` }}
                >
                  <span className="text-white text-xs font-medium">
                    {(data.visitors / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>
              <div className={`w-20 text-xs px-2 py-1 rounded-full text-center ${
                data.crowd === 'very-high' ? 'bg-red-100 text-red-800' :
                data.crowd === 'high' ? 'bg-orange-100 text-orange-800' :
                data.crowd === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {data.crowd}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const WeatherChart = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Climate Data Analysis</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Temperature (°C)</h4>
          <div className="space-y-2">
            {Object.entries(ootyAnalytics.weatherAnalytics.temperature).slice(0, 6).map(([month, temp]) => (
              <div key={month} className="flex items-center justify-between text-sm">
                <span className="capitalize">{month}</span>
                <span className="font-medium">{temp.min}-{temp.max}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Rainfall (mm)</h4>
          <div className="space-y-2">
            {ootyAnalytics.weatherAnalytics.rainfall.slice(0, 6).map((rainfall, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</span>
                <div className="flex items-center">
                  <div className="w-12 h-2 bg-blue-200 rounded-full mr-2">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${(rainfall / 300) * 100}%` }}
                    />
                  </div>
                  <span className="font-medium">{rainfall}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Humidity (%)</h4>
          <div className="space-y-2">
            {ootyAnalytics.weatherAnalytics.humidity.slice(0, 6).map((humidity, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</span>
                <span className="font-medium">{humidity}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Analytics Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Ooty Data Explorer</h1>
                <p className="text-sm text-gray-600">Analytics-driven travel insights</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Calculator className="w-4 h-4" />
                <span>Budget Calculator</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Budget Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Trip Budget Calculator</h2>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration</label>
                <select
                  value={budgetInputs.days}
                  onChange={(e) => setBudgetInputs({...budgetInputs, days: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  {[1,2,3,4,5,6,7].map(day => (
                    <option key={day} value={day}>{day} day{day > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Accommodation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Type</label>
                <select
                  value={budgetInputs.accommodation}
                  onChange={(e) => setBudgetInputs({...budgetInputs, accommodation: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="budget">Budget (₹800-2,500/night)</option>
                  <option value="midRange">Mid-range (₹2,500-8,000/night)</option>
                  <option value="luxury">Luxury (₹8,000-25,000/night)</option>
                </select>
              </div>

              {/* Transportation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transportation</label>
                <select
                  value={budgetInputs.transportation}
                  onChange={(e) => setBudgetInputs({...budgetInputs, transportation: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="car">Rental Car (₹2,500/day)</option>
                  <option value="taxi">Taxi/Cab (₹2,500/day)</option>
                </select>
              </div>

              {/* Meals */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dining Preference</label>
                <select
                  value={budgetInputs.meals}
                  onChange={(e) => setBudgetInputs({...budgetInputs, meals: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="streetFood">Local Food (₹550/day)</option>
                  <option value="restaurant">Restaurant (₹1,500/day)</option>
                  <option value="fineDining">Fine Dining (₹3,500/day)</option>
                </select>
              </div>

              {/* Activities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                <select
                  value={budgetInputs.activities}
                  onChange={(e) => setBudgetInputs({...budgetInputs, activities: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="basic">Basic Sightseeing (₹150/day)</option>
                  <option value="moderate">Moderate Activities (₹225/day)</option>
                  <option value="premium">Premium Experiences (₹500/day)</option>
                </select>
              </div>

              {/* Budget Result */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Estimated Total Budget</h3>
                <div className="text-3xl font-bold text-blue-600">
                  ₹{calculatedBudget.toLocaleString()}
                </div>
                <p className="text-sm text-blue-600 mt-1">
                  Per person for {budgetInputs.days} day{budgetInputs.days > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DataCard
            title="Annual Visitors"
            value="2.8M"
            trend={12}
            icon={Users}
            subtitle="↑12% from last year"
            color="blue"
          />
          <DataCard
            title="Average Stay"
            value="2.8 days"
            trend={-5}
            icon={Calendar}
            subtitle="↓5% shorter visits"
            color="green"
          />
          <DataCard
            title="Peak Temperature"
            value="25°C"
            trend={0}
            icon={Thermometer}
            subtitle="Consistent year-round"
            color="orange"
          />
          <DataCard
            title="Satisfaction Rate"
            value="4.7/5"
            trend={8}
            icon={Star}
            subtitle="↑8% improvement"
            color="purple"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <VisitorChart />
          <WeatherChart />
        </div>

        {/* Attractions Analytics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Attraction Analytics</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Attraction</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Daily Visitors</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Avg. Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Best Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Entry Cost</th>
                </tr>
              </thead>
              <tbody>
                {ootyAnalytics.attractions.map((attraction, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-800">{attraction.name}</td>
                    <td className="py-3 px-4 text-gray-600">{attraction.visitorsPerDay.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-600">{attraction.averageTime}h</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-600">{attraction.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        Object.entries(attraction.crowdTimes).find(([time, crowd]) => crowd === 'low')?.[0] === 'morning' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {Object.entries(attraction.crowdTimes).find(([time, crowd]) => crowd === 'low')?.[0] || 'morning'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">₹{attraction.cost.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Cost Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Accommodation</h4>
              {Object.entries(ootyAnalytics.costAnalysis.accommodation).map(([type, cost]) => (
                <div key={type} className="flex justify-between items-center text-sm">
                  <span className="capitalize text-gray-600">{type}</span>
                  <span className="font-medium">₹{cost.avg}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Transportation</h4>
              {Object.entries(ootyAnalytics.costAnalysis.transportation).map(([type, cost]) => (
                <div key={type} className="flex justify-between items-center text-sm">
                  <span className="capitalize text-gray-600">{type}</span>
                  <span className="font-medium">₹{cost.dailyRental || cost.fullDay || cost.perKm}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Dining</h4>
              {Object.entries(ootyAnalytics.costAnalysis.food).map(([type, meals]) => (
                <div key={type} className="flex justify-between items-center text-sm">
                  <span className="capitalize text-gray-600">{type.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="font-medium">₹{meals.breakfast + meals.lunch + meals.dinner}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Activities</h4>
              {Object.entries(ootyAnalytics.costAnalysis.activities).map(([type, cost]) => (
                <div key={type} className="flex justify-between items-center text-sm">
                  <span className="capitalize text-gray-600">{type}</span>
                  <span className="font-medium">₹{cost.average}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataDrivenExplorerTheme;