import React from 'react';
import { MapPin, Clock, Heart, Star, Camera, Wallet, Shield, Calendar } from 'lucide-react';

export default function TirupatiGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Sacred Pilgrimage Guide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tirupati-Tirumala
            <span className="block text-3xl md:text-4xl font-light opacity-90">
              2-Day Sacred Immersion
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Your complete guide to experiencing India's most visited temple with 80,000+ daily pilgrims
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-white">
              <div className="text-2xl font-bold">2 Days</div>
              <div className="text-sm opacity-80">Perfect Duration</div>
            </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold">Sep-Mar</div>
              <div className="text-sm opacity-80">Best Season</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-white">
              <div className="text-2xl font-bold">23-32°C</div>
              <div className="text-sm opacity-80">September Weather</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Heart, label: "Sacred Sites", value: "10+" },
            { icon: Clock, label: "Best Time", value: "3:30 AM" },
            { icon: MapPin, label: "Distance", value: "28km" },
            { icon: Calendar, label: "Plan Ahead", value: "3 Months" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <stat.icon className="w-8 h-8 text-orange-500 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Essential Prep Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Preparation</h2>
          <p className="text-lg text-gray-600">Master these basics for a seamless sacred journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dress Code */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Temple Dress Code</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Men: Dhoti/pyjama with upper cloth</li>
              <li>• Women: Saree/salwar covering shoulders</li>
              <li>• No leather items allowed</li>
              <li>• Remove footwear at entrance</li>
            </ul>
          </div>

          {/* Language */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sacred Phrases</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Om Namo Venkatesaya (Sacred greeting)</li>
              <li>• Govinda Govinda (Devotional chant)</li>
              <li>• Dhanyawadalu (Thank you)</li>
              <li>• Namaste (Respectful greeting)</li>
            </ul>
          </div>

          {/* Packing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Packing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Original ID (mandatory)</li>
              <li>• Cash for donations/offerings</li>
              <li>• Light cotton clothing</li>
              <li>• Power bank essential</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Day 1 Itinerary */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Day 1</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tirupati Cultural Foundation</h2>
            <p className="text-lg text-gray-600">Prepare your spirit before the sacred ascent</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Morning */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Morning</h3>
                  <p className="text-gray-600">6:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Sri Govindaraja Temple</h4>
                  <p className="text-sm text-gray-600">Ancient preparation temple</p>
                  <p className="text-xs text-gray-500 mt-1">Golden hour photos: 6-7 AM</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Authentic Breakfast</h4>
                  <p className="text-sm text-gray-600">Hotel Mayura - Traditional South Indian</p>
                  <p className="text-xs text-gray-500 mt-1">Idli, dosa, filter coffee</p>
                </div>
              </div>
            </div>

            {/* Afternoon */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Afternoon</h3>
                  <p className="text-gray-600">12:00 PM - 6:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Padmavathi Temple</h4>
                  <p className="text-sm text-gray-600">Consort temple (5km away)</p>
                  <p className="text-xs text-gray-500 mt-1">Special darshan available</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Regional Lunch</h4>
                  <p className="text-sm text-gray-600">Andhra Spice - Authentic Regional Cuisine</p>
                  <p className="text-xs text-gray-500 mt-1">Traditional Andhra thali</p>
                </div>
              </div>
            </div>

            {/* Evening */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Evening</h3>
                  <p className="text-gray-600">6:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Gandhi Road Market</h4>
                  <p className="text-sm text-gray-600">Sacred souvenirs shopping</p>
                  <p className="text-xs text-gray-500 mt-1">Venkateswara idols & souvenirs</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Devotional Evening</h4>
                  <p className="text-sm text-gray-600">Local temple bhajans</p>
                  <p className="text-xs text-gray-500 mt-1">7-8 PM community worship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day 2 Highlight */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="font-medium">Day 2 - The Sacred Summit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tirumala Temple Experience</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Begin at 3:30 AM for the spiritual pinnacle. Join 80,000 daily pilgrims in India's most sacred darshan under the golden kupola.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">3:30 AM</div>
              <div className="text-sm opacity-80">Departure Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">TTD Bus</div>
              <div className="text-sm opacity-80">Transport</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">28 min</div>
              <div className="text-sm opacity-80">Journey Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Getting There</h2>
            <p className="text-lg text-gray-600">Transportation options and travel information</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* By Air */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">By Air</h3>
                <div className="text-3xl font-bold text-blue-500 mb-4">Tirupati Airport</div>
                <ul className="text-left space-y-3 text-gray-600">
                  <li>• Direct flights from major cities</li>
                  <li>• 15 km from temple</li>
                  <li>• Cab/bus services available</li>
                  <li>• Book flights 2-3 months ahead</li>
                  <li>• Check seasonal schedules</li>
                </ul>
              </div>
            </div>

            {/* By Train */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-500 transform scale-105">
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm mb-4">Most Popular</div>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">By Train</h3>
                <div className="text-3xl font-bold text-orange-500 mb-4">Tirupati Station</div>
                <ul className="text-left space-y-3 text-gray-600">
                  <li>• Well connected to all cities</li>
                  <li>• Direct trains from Chennai, Bangalore</li>
                  <li>• Local buses to temple</li>
                  <li>• Book tickets in advance</li>
                  <li>• Check train schedules</li>
                </ul>
              </div>
            </div>

            {/* By Road */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">By Road</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">NH 40</div>
                <ul className="text-left space-y-3 text-gray-600">
                  <li>• Good road connectivity</li>
                  <li>• State/private buses available</li>
                  <li>• Chennai: 138 km (3 hours)</li>
                  <li>• Bangalore: 250 km (4.5 hours)</li>
                  <li>• Parking available at temple</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pro Pilgrim Tips</h2>
          <p className="text-lg text-gray-600">Master these secrets for the perfect spiritual journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Best Timing",
              tip: "Arrive 3:30 AM for peaceful darshan. Avoid weekends with 120K+ crowds.",
              icon: Clock,
              color: "bg-blue-500"
            },
            {
              title: "Planning Tip",
              tip: "Plan accommodation and special darshan 3 months in advance using TTD website.",
              icon: Calendar,
              color: "bg-green-500"
            },
            {
              title: "Queue Strategy",
              tip: "Senior citizens & infants get priority. Use TTD mobile app for updates.",
              icon: MapPin,
              color: "bg-orange-500"
            },
            {
              title: "Hidden Gems",
              tip: "Visit Akasa Ganga spring & Sila Thoranam rock arch - spiritual wonders.",
              icon: Heart,
              color: "bg-purple-500"
            }
          ].map((tip, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-12 h-12 ${tip.color} rounded-xl flex items-center justify-center mb-4`}>
                <tip.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Useful Information */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Plan Your Sacred Journey</h2>
          <p className="text-xl opacity-90 mb-8">
            Join millions of pilgrims who've found divine bliss at Tirumala
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Advance Booking</h3>
              <p className="text-sm">TTD accommodation and special darshan tickets can be booked 3 months in advance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Official Website</h3>
              <p className="text-sm">Visit ttdevasthanams.ap.gov.in for authentic information and services</p>
            </div>
          </div>
          <div className="text-sm opacity-80">
            Emergency Contacts: Police (100) • Ambulance (108) • TTD Inquiry (0877-2277777)
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Om Namo Venkatesaya</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              May Lord Venkateswara bless your sacred pilgrimage with peace, devotion, and spiritual fulfillment.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Emergency Contacts: Police (100) • Ambulance (108) • TTD Inquiry (0877-2277777)
          </div>
        </div>
      </footer>
    </div>
  );
}