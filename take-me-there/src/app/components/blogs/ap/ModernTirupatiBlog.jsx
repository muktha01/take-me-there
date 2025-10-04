"use client";
import React from 'react';
import ModernBlogTemplate from '../ModernBlogTemplate';
import { 
  MapPin, 
  Mountain, 
  Star, 
  Heart, 
  Utensils, 
  Home, 
  Car, 
  Train, 
  Plane,
  Clock,
  Shield,
  Camera,
  Info
} from 'lucide-react';

const ModernTirupatiBlog = () => {
  const blogData = {
    title: "Complete Tirupati Pilgrimage Guide: A Sacred Journey to Lord Venkateswara",
    subtitle: "Everything you need to know for a meaningful and well-planned spiritual journey to one of India's most revered temples",
    author: {
      name: "Priya Sharma",
      bio: "Spiritual travel writer and pilgrimage guide with 15+ years of temple exploration experience",
      avatar: "/avatars/priya.jpg",
      social: {
        twitter: "@priyatravels",
        linkedin: "priya-sharma-travel"
      }
    },
    publishDate: "December 20, 2024",
    readTime: "18 min read",
    category: "Spiritual Travel",
    heroImage: "/images/tirupati-hero.jpg",
    tags: ["Tirupati", "Pilgrimage", "Spiritual Travel", "India", "Temples", "Andhra Pradesh"],
    content: <TirupatiContent />
  };

  return <ModernBlogTemplate {...blogData} />;
};

const TirupatiContent = () => (
  <div className="space-y-12">
    {/* Introduction */}
    <section id="introduction">
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Nestled in the sacred hills of Tirumala, the Sri Venkateswara Temple stands as one of India's most 
        powerful spiritual destinations. Every year, over 20 million devotees make the pilgrimage to seek 
        blessings from Lord Venkateswara, making it the world's most visited religious site.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        This comprehensive guide will help you plan a meaningful and hassle-free pilgrimage, covering 
        everything from travel logistics to spiritual preparation, ensuring your journey to the sacred 
        seven hills is both transformative and well-organized.
      </p>
    </section>

    {/* Quick Facts */}
    <div className="bg-blue-50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Information at a Glance</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div className="font-semibold text-gray-900">Distance</div>
          <div className="text-gray-600 text-sm">250km from Bangalore</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="font-semibold text-gray-900">Best Time</div>
          <div className="text-gray-600 text-sm">October - March</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Mountain className="w-6 h-6 text-white" />
          </div>
          <div className="font-semibold text-gray-900">Duration</div>
          <div className="text-gray-600 text-sm">3-4 Days Ideal</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="font-semibold text-gray-900">Budget</div>
          <div className="text-gray-600 text-sm">₹3,000 - ₹15,000</div>
        </div>
      </div>
    </div>

    {/* How to Reach */}
    <section id="getting-there">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Reach Tirupati</h2>
      
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">By Air</h3>
              <p className="text-gray-600">Fastest and most convenient option</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tirupati Airport (Renigunta)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 15km from Tirupati city center</li>
                <li>• Direct flights from major cities</li>
                <li>• Pre-paid taxi services available</li>
                <li>• Airport shuttle buses to city</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Connected Cities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Chennai (1 hour flight)</li>
                <li>• Hyderabad (1.5 hours)</li>
                <li>• Bangalore (1 hour)</li>
                <li>• Delhi (2.5 hours)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Train className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">By Train</h3>
              <p className="text-gray-600">Most popular choice among pilgrims</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Tirupati Railway Station is well-connected to all major cities. Special pilgrimage trains 
            are available during festival seasons. Book tickets well in advance, especially for 
            weekends and holidays.
          </p>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-xl">
            <p className="text-green-800 font-medium">Pro Tip:</p>
            <p className="text-green-700 text-sm">Renigunta (RU) is an alternative railway station, 20km from Tirupati, with better connectivity to some cities.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">By Road</h3>
              <p className="text-gray-600">Most flexible with scenic routes</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Excellent highway connectivity makes road travel convenient. State transport and private 
            buses run regularly from neighboring states.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Distances</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>Chennai: 135km (3 hours)</li>
                <li>Bangalore: 250km (5 hours)</li>
                <li>Hyderabad: 550km (9 hours)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Routes</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>NH716 via Chittoor</li>
                <li>NH69 via Kolar</li>
                <li>Well-maintained highways</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Accommodation */}
    <section id="accommodation">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Where to Stay</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-orange-900">In Tirupati</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-orange-800 mb-3">Budget Options (₹800 - ₹2,000)</h4>
              <ul className="space-y-2 text-orange-700">
                <li>• Sri Venkateshwara Lodge</li>
                <li>• Bhimas Paradise</li>
                <li>• PLR Grand</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-orange-800 mb-3">Mid-Range Hotels (₹3,000 - ₹8,000)</h4>
              <ul className="space-y-2 text-orange-700">
                <li>• Minerva Grand Tirupati</li>
                <li>• Fortune Select Grand Ridge</li>
                <li>• Marasa Sarovar Premiere</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Mountain className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-green-900">In Tirumala</h3>
          </div>
          
          <div>
            <h4 className="font-bold text-green-800 mb-3">TTD Accommodation</h4>
            <p className="text-green-700 mb-4 text-sm">
              Temple-run guesthouses offering subsidized rates for pilgrims. Advance booking essential.
            </p>
            <ul className="space-y-2 text-green-700">
              <li>• Srinivasam (Premium)</li>
              <li>• Vishnu Nivasam</li>
              <li>• Madhavam</li>
              <li>• Dormitory options available</li>
            </ul>
          </div>
          
          <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-r-xl mt-6">
            <p className="text-green-800 font-medium text-sm">Book online at:</p>
            <p className="text-green-700 text-sm">ttdevasthanams.ap.gov.in</p>
          </div>
        </div>
      </div>
    </section>

    {/* Darshan Guide */}
    <section id="darshan-guide">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Darshan Guide</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl mb-8">
        <p className="text-blue-900 font-medium mb-2">Important Note:</p>
        <p className="text-blue-800 text-sm leading-relaxed">
          The main temple has three types of darshan. Choose based on your time availability and preference. 
          All types lead to the same divine experience—the waiting time is the only difference.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sarva Darshan</h3>
            <p className="text-green-600 font-semibold">Free for All</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wait Time:</span>
              <span className="font-semibold">6-12 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Availability:</span>
              <span className="font-semibold">24/7</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            Traditional queue darshan open to all devotees. Most authentic experience 
            but requires patience.
          </p>
        </div>

        <div className="bg-white border-2 border-blue-400 rounded-2xl p-6 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
            RECOMMENDED
          </div>
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Divya Darshan</h3>
            <p className="text-blue-600 font-semibold">For Hill Climbers</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wait Time:</span>
              <span className="font-semibold">2-4 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Eligibility:</span>
              <span className="font-semibold">Foot climbers</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            Special darshan for devotees who climb the hills on foot. 
            Spiritual reward for physical effort.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Special Entry</h3>
            <p className="text-purple-600 font-semibold">Premium Experience</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-semibold">₹300</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wait Time:</span>
              <span className="font-semibold">30-60 mins</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Booking:</span>
              <span className="font-semibold">Online required</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            Paid darshan with reduced waiting time and better facilities. 
            Book in advance online.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Darshan Process & Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-yellow-800 mb-3">What to Bring:</h4>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Original photo ID proof</li>
              <li>• Traditional dress (no shorts/sleeveless)</li>
              <li>• Small bag for essentials</li>
              <li>• Cash for offerings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-3">What NOT to Bring:</h4>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Mobile phones (lockers available)</li>
              <li>• Cameras or electronic items</li>
              <li>• Leather items</li>
              <li>• Outside food</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Sacred Food */}
    <section id="food-guide">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Sacred Food & Prasadam</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-amber-600" />
            <h3 className="text-2xl font-bold text-amber-900">Tirupati Laddu</h3>
          </div>
          <div className="bg-white rounded-xl p-4 mb-6 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-800">World Famous Prasadam</span>
              <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">GI Protected</span>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              The only prasadam in the world with Geographical Indication status. 
              Made with pure ghee, cardamom, and premium ingredients in the temple's sacred kitchen.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">Price per piece:</span>
              <span className="font-semibold text-amber-800">₹25</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">Limit per person:</span>
              <span className="font-semibold text-amber-800">2 laddus</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">Availability:</span>
              <span className="font-semibold text-amber-800">24/7</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-green-900">Annadanam</h3>
          </div>
          <p className="text-green-700 mb-6 leading-relaxed">
            Free vegetarian meals served to all pilgrims as part of the temple's service. 
            Simple yet nutritious South Indian thali with rice, dal, sambar, and seasonal vegetables.
          </p>
          <div className="bg-green-100 rounded-xl p-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Meal Timings:</h4>
            <ul className="space-y-1 text-green-700 text-sm">
              <li>• Breakfast: 6:00 AM - 10:00 AM</li>
              <li>• Lunch: 11:00 AM - 3:00 PM</li>
              <li>• Dinner: 6:00 PM - 9:00 PM</li>
            </ul>
            <p className="text-green-600 text-xs mt-3">
              Multiple serving locations in Tirumala • No registration required
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Sacred Places */}
    <section id="sacred-places">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Sacred Sites Around Tirumala</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Akasha Ganga",
            type: "Sacred Waterfall",
            description: "Divine waterfall believed to originate from Lord Vishnu's feet. Holy bath spot.",
            time: "45 minutes",
            difficulty: "Moderate trek"
          },
          {
            name: "Silathoranam", 
            type: "Natural Wonder",
            description: "Ancient natural stone arch formed millions of years ago. Geological marvel.",
            time: "30 minutes",
            difficulty: "Easy walk"
          },
          {
            name: "Papavinasam Theertham",
            type: "Holy Waters",
            description: "Sacred pool where sins are believed to be washed away. Peaceful atmosphere.",
            time: "20 minutes", 
            difficulty: "Easy access"
          },
          {
            name: "Srivari Padalu",
            type: "Sacred Footprints", 
            description: "Divine footprints of Lord Venkateswara. Great sunrise viewpoint.",
            time: "1 hour",
            difficulty: "Moderate climb"
          },
          {
            name: "Chakra Theertham",
            type: "Sacred Pond",
            description: "Divine pond with crystal clear water. Serene meditation spot.",
            time: "25 minutes",
            difficulty: "Easy walk"
          },
          {
            name: "Japali Hanuman Temple",
            type: "Forest Temple",
            description: "Peaceful temple surrounded by dense forests. Wildlife spotting opportunity.",
            time: "40 minutes",
            difficulty: "Forest walk"
          }
        ].map((place, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">{place.name}</h3>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">{place.type}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
            </div>
            <div className="flex justify-between text-xs bg-gray-50 rounded-lg p-3">
              <div>
                <span className="text-gray-500">Duration:</span>
                <p className="font-semibold text-gray-700">{place.time}</p>
              </div>
              <div>
                <span className="text-gray-500">Difficulty:</span>
                <p className="font-semibold text-gray-700">{place.difficulty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Travel Tips */}
    <section id="travel-tips">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Travel Tips</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Before You Go
            </h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Book accommodation 2-3 weeks in advance</li>
              <li>• Download TTD mobile app for updates</li>
              <li>• Check festival calendar for crowd estimates</li>
              <li>• Carry original photo ID proof</li>
              <li>• Pack light and comfortable clothing</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Health & Safety
            </h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Stay hydrated during hill climb</li>
              <li>• Wear comfortable walking shoes</li>
              <li>• Carry basic medications</li>
              <li>• Follow crowd control instructions</li>
              <li>• Be prepared for long waiting periods</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
            <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Temple Etiquette
            </h3>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li>• Traditional dress required for darshan</li>
              <li>• Remove footwear before entering</li>
              <li>• Maintain silence in queue areas</li>
              <li>• No photography inside temple</li>
              <li>• Accept prasadam with both hands</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Money Matters
            </h3>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li>• Carry sufficient cash for offerings</li>
              <li>• ATMs available but may have queues</li>
              <li>• Keep change ready for prasadam</li>
              <li>• Digital payments accepted at counters</li>
              <li>• Budget extra for special sevas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Emergency Contacts */}
    <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
      <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Emergency Contacts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold text-red-800">TTD Helpline</h4>
          <p className="text-red-600 font-mono text-lg">0877-2277777</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold text-red-800">Police Control</h4>
          <p className="text-red-600 font-mono text-lg">0877-2233333</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold text-red-800">Medical Emergency</h4>
          <p className="text-red-600 font-mono text-lg">108</p>
        </div>
      </div>
    </div>

    {/* Conclusion */}
    <section id="conclusion">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Sacred Journey Awaits</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Tirupati offers more than just a pilgrimage—it provides a transformative spiritual experience 
          that touches the soul. Every step on the sacred hills, every moment in divine presence becomes 
          a cherished memory. Plan with devotion, travel with faith, and return with blessings.
        </p>
        <div className="mt-6 text-2xl">🙏 Govinda! Govinda! 🙏</div>
      </div>
    </section>
  </div>
);

export default ModernTirupatiBlog;
