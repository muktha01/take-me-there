'use client';

import React, { useState, useEffect } from 'react';
import { 
  Leaf, Recycle, TreePine, Droplets, Wind, Sun, Heart,
  Award, Shield, Globe, Users, Star, MapPin, Calendar,
  Camera, Share2, Bookmark, ArrowRight, ChevronDown,
  Zap, Target, Mountain, Coffee, Car, Bike, Train
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const SustainableTravelEcoTheme = () => {
  const [activeSection, setActiveSection] = useState('impact');
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [ecoScore, setEcoScore] = useState(85);

  const ecoSections = {
    impact: {
      title: "Environmental Impact",
      icon: Globe,
      color: "emerald",
      content: {
        description: "Discover how your visit to Ooty can contribute to environmental conservation and sustainable tourism practices. The Nilgiri Biosphere Reserve, where Ooty is nestled, is home to unique ecosystems that require careful protection while welcoming mindful travelers.",
        stats: [
          { label: "Carbon Absorbed", value: "2.3 tons/year", desc: "by Ooty's forests per visitor" },
          { label: "Species Protected", value: "3,000+", desc: "flora and fauna species" },
          { label: "Water Conserved", value: "40%", desc: "through sustainable practices" },
          { label: "Waste Reduced", value: "65%", desc: "via eco-tourism initiatives" }
        ]
      }
    },
    conservation: {
      title: "Conservation Efforts",
      icon: Shield,
      color: "green",
      content: {
        description: "The Nilgiris region has been at the forefront of conservation efforts in India. From protecting the endangered Nilgiri Tahr to preserving ancient shola forests, Ooty represents a model for sustainable hill station tourism that balances visitor experience with environmental stewardship.",
        initiatives: [
          {
            name: "Nilgiri Tahr Protection",
            description: "Conservation program for the endangered mountain goat species endemic to the Western Ghats",
            impact: "Population increased by 40% in the last decade",
            involvement: "Visitors can support through eco-tourism fees"
          },
          {
            name: "Shola Forest Restoration",
            description: "Protecting and restoring native montane forests unique to the Western Ghats",
            impact: "500+ hectares restored in recent years",
            involvement: "Tree planting programs for tourists"
          },
          {
            name: "Sustainable Tea Cultivation",
            description: "Promoting organic farming practices in tea estates",
            impact: "30% of estates now use organic methods",
            involvement: "Visit certified organic tea gardens"
          }
        ]
      }
    },
    responsible: {
      title: "Responsible Travel Tips",
      icon: Heart,
      color: "blue",
      content: {
        description: "Make your Ooty visit a force for good by following responsible travel practices that support local communities, protect the environment, and preserve cultural heritage for future generations.",
        tips: [
          {
            category: "Transportation",
            icon: Car,
            suggestions: [
              "Use the heritage Nilgiri Mountain Railway instead of road transport",
              "Choose shared transportation or electric vehicles when available",
              "Walk or cycle for short distances within Ooty",
              "Offset your carbon footprint through verified programs"
            ]
          },
          {
            category: "Accommodation",
            icon: TreePine,
            suggestions: [
              "Stay in eco-certified hotels and homestays",
              "Choose accommodations that use renewable energy",
              "Support properties that employ local communities",
              "Minimize water and energy consumption during your stay"
            ]
          },
          {
            category: "Dining",
            icon: Coffee,
            suggestions: [
              "Eat at restaurants serving local, organic produce",
              "Try traditional Nilgiri cuisine and support local farmers",
              "Avoid single-use plastics and carry reusable items",
              "Choose establishments that minimize food waste"
            ]
          }
        ]
      }
    }
  };

  const ecoAttractions = [
    {
      name: "Mukurthi National Park",
      description: "A pristine wilderness area protecting endangered species and unique montane ecosystems. Home to the Nilgiri Tahr, this park showcases the region's commitment to conservation.",
      ecoFeatures: ["Protected wildlife habitat", "Research station", "Guided eco-tours", "Conservation education"],
      sustainabilityScore: 95,
      activities: ["Wildlife watching", "Nature photography", "Educational tours", "Research participation"],
      bestPractices: "Visitors must follow strict guidelines to minimize environmental impact"
    },
    {
      name: "Organic Tea Estates",
      description: "Experience sustainable agriculture at its finest in Ooty's certified organic tea plantations. Learn about traditional farming methods that work in harmony with nature.",
      ecoFeatures: ["Organic certification", "Bird-friendly practices", "Soil conservation", "Fair trade principles"],
      sustainabilityScore: 88,
      activities: ["Tea tasting", "Farm tours", "Processing workshops", "Sustainable farming education"],
      bestPractices: "Support certified organic estates that employ ethical labor practices"
    },
    {
      name: "Avalanche Valley",
      description: "A pristine valley ecosystem that demonstrates successful conservation efforts. This protected area maintains its natural balance through careful management and limited access.",
      ecoFeatures: ["Restricted access", "Ecosystem preservation", "Research programs", "Community involvement"],
      sustainabilityScore: 92,
      activities: ["Guided nature walks", "Bird watching", "Photography", "Environmental education"],
      bestPractices: "Visit only with authorized guides and follow leave-no-trace principles"
    },
    {
      name: "Tribal Cultural Centers",
      description: "Learn about the indigenous Toda, Badaga, and Kurumba communities whose traditional practices have sustained the Nilgiri ecosystem for centuries.",
      ecoFeatures: ["Cultural preservation", "Traditional knowledge", "Community tourism", "Craft workshops"],
      sustainabilityScore: 90,
      activities: ["Cultural programs", "Traditional craft learning", "Community meals", "Story sessions"],
      bestPractices: "Respect local customs and support authentic community-run programs"
    }
  ];

  const getCurrentSection = () => ecoSections[activeSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 text-white py-8 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Sustainable Ooty</h1>
                <p className="text-green-100">Responsible Travel in the Nilgiris</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{ecoScore}%</div>
                <div className="text-sm text-green-100">Eco Score</div>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Carbon Positive</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 py-4">
            {Object.entries(ecoSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === key
                    ? `bg-${section.color}-500 text-white shadow-lg`
                    : `text-${section.color}-600 hover:bg-${section.color}-50`
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Travel with Purpose in the Queen of Hills
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nestled in the Western Ghats, Ooty stands as a beacon of sustainable tourism. This UNESCO Biosphere Reserve 
            offers travelers the opportunity to experience pristine nature while contributing to conservation efforts and 
            supporting local communities. Discover how your visit can make a positive impact on this fragile mountain ecosystem.
          </p>
        </div>

        {/* Current Section Content */}
        <div className="mb-16">
          {activeSection === 'impact' && (
            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Environmental Impact Assessment</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {getCurrentSection().content.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {getCurrentSection().content.stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carbon Footprint Calculator */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Calculate Your Carbon Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Transportation</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option value="train">Train (Eco-friendly)</option>
                      <option value="bus">Bus</option>
                      <option value="car">Private Car</option>
                      <option value="flight">Flight + Car</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option value="1">1-2 days</option>
                      <option value="3">3-4 days</option>
                      <option value="5">5-7 days</option>
                      <option value="8">1 week+</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Accommodation</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option value="eco">Eco-certified</option>
                      <option value="heritage">Heritage Hotel</option>
                      <option value="homestay">Local Homestay</option>
                      <option value="luxury">Luxury Resort</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-700">2.3 tons CO₂</div>
                      <div className="text-sm text-gray-600">Estimated carbon footprint</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">Offset Available</div>
                      <div className="text-sm text-gray-600">Plant 23 trees to neutralize</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'conservation' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Active Conservation Programs</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {getCurrentSection().content.description}
                </p>

                <div className="space-y-8">
                  {getCurrentSection().content.initiatives.map((initiative, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-800">{initiative.name}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          Active
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{initiative.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Impact Achieved</div>
                          <div className="text-green-600 font-semibold">{initiative.impact}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">How You Can Help</div>
                          <div className="text-blue-600 font-semibold">{initiative.involvement}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'responsible' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Responsible Travel Guidelines</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {getCurrentSection().content.description}
                </p>

                <div className="space-y-8">
                  {getCurrentSection().content.tips.map((category, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <category.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">{category.category}</h4>
                      </div>
                      <ul className="space-y-3">
                        {category.suggestions.map((suggestion, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Eco Attractions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sustainable Attractions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecoAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800">{attraction.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Leaf className="w-5 h-5 text-green-500" />
                      <span className="text-green-600 font-semibold">{attraction.sustainabilityScore}%</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{attraction.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Eco Features</h5>
                      <div className="flex flex-wrap gap-2">
                        {attraction.ecoFeatures.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Sustainable Activities</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {attraction.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-1">Best Practices</h5>
                      <p className="text-sm text-blue-700">{attraction.bestPractices}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Start Your Sustainable Journey</h3>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of conscious travelers who have made Ooty a model for responsible tourism
          </p>
          <div className="flex items-center justify-center space-x-6">
            <button className="flex items-center space-x-2 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              <Bookmark className="w-5 h-5" />
              <span>Plan Eco Trip</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors duration-300">
              <Share2 className="w-5 h-5" />
              <span>Share Impact</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SustainableTravelEcoTheme;