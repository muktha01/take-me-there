"use client"
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  User,
  ChevronUp,
  Share2,
  Bookmark,
  Coffee,
  Mountain,
  Star,
  CheckCircle,
  AlertTriangle,
  Navigation,
  Camera,
  Utensils,
  ShoppingBag,
  Plane,
  Train,
  Car,
  Home,
  Heart,
  Phone,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

const TirupatiPilgrimageBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-there', title: 'How to Reach' },
    { id: 'accommodation', title: 'Where to Stay' },
    { id: 'itinerary', title: '4-Day Spiritual Itinerary' },
    { id: 'legends', title: 'Sacred Legends' },
    { id: 'darshan', title: 'Darshan Types & Tips' },
    { id: 'food', title: 'Local Cuisine & Prasadam' },
    { id: 'attractions', title: 'Must-Visit Attractions' },
    { id: 'tips', title: 'Essential Travel Tips' }
  ];

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>Complete Tirupati & Tirumala Travel Guide: Itinerary, Temples, History & Tips</title>
        <meta name="description" content="Explore the ultimate guide to Tirupati and Tirumala, including a complete travel itinerary, darshan tips, temple information, legends, places to visit, and spiritual insights." />
        <meta name="keywords" content="Tirupati travel guide, Tirumala darshan, Venkateswara temple, pilgrimage India, Andhra Pradesh tourism, spiritual travel, temple visit tips" />
        <meta name="author" content="Travel Expert" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/complete-tirupati-tirumala-travel-guide" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Complete Tirupati & Tirumala Travel Guide: Itinerary, Temples, History & Tips" />
        <meta property="og:description" content="Ultimate guide to Tirupati and Tirumala pilgrimage with complete itinerary, darshan tips, and spiritual insights" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourwebsite.com/complete-tirupati-tirumala-travel-guide" />
        <meta property="og:image" content="https://yourwebsite.com/images/tirupati-temple-guide.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Tirupati & Tirumala Travel Guide" />
        <meta name="twitter:description" content="Ultimate pilgrimage guide with itinerary, darshan tips, and spiritual insights" />
        <meta name="twitter:image" content="https://yourwebsite.com/images/tirupati-temple-guide.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Complete Tirupati & Tirumala Travel Guide",
            "description": "Ultimate guide to Tirupati and Tirumala pilgrimage with itinerary, darshan tips, temple information, and spiritual insights",
            "url": "https://yourwebsite.com/complete-tirupati-tirumala-travel-guide",
            "author": {
              "@type": "Person",
              "name": "Travel Expert"
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "image": "https://yourwebsite.com/images/tirupati-temple.jpg",
            "touristDestination": {
              "@type": "TouristDestination",
              "name": "Tirupati & Tirumala",
              "description": "Sacred pilgrimage destination in Andhra Pradesh, India",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.6288",
                "longitude": "79.4192"
              }
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How to reach Tirupati?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tirupati can be reached by air via Tirupati Airport, by train via Tirupati Railway Station, or by road with excellent bus connectivity from major cities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best time to visit Tirupati?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "The best time to visit Tirupati is from October to March when the weather is pleasant for climbing and temple visits."
                  }
                }
              ]
            }
          })}
        </script>
      </Head>

      <article className="min-h-screen bg-white">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <div 
            className="h-full bg-blue-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Header */}
        <header className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
              <span>Travel</span> <span className="mx-2">→</span> <span>Pilgrimage</span> <span className="mx-2">→</span> <span>Tirupati Guide</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Tirupati & Tirumala Travel Guide: Itinerary, Temples, History & Tips
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Explore the ultimate guide to Tirupati and Tirumala, including a complete travel itinerary, darshan tips, temple information, legends, places to visit, and spiritual insights.
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Travel Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated Dec 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tirupati, Andhra Pradesh</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
              <button 
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Contents
              </button>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {showTableOfContents && (
          <div className="bg-gray-50 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded transition-all"
                  >
                    <span className="text-gray-400">{index + 1}.</span>
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
   {/* Hero Image Section */}
<div className="w-full h-80 bg-gradient-to-r from-orange-100 to-purple-100 rounded-2xl flex items-center justify-center mb-16 relative overflow-hidden">
  <Image
    src="/bliog-images/tirupati-temple.jpgz"
    alt="Tirupati Temple"
    fill
    className="object-cover rounded-2xl opacity-90"
    priority
  />
</div>




          {/* Introduction */}
          <section id="introduction" className="mb-24">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl leading-relaxed mb-8">
Tirupati, located in Andhra Pradesh, is not just a city—it’s a holy place filled with faith and tradition. It is the starting point for the famous Tirumala hills, where lakhs of devotees visit every year to have darshan of Lord Venkateswara.              </p>
<p>Whether you're going for spiritual reasons, exploring our culture, or just curious to know more about this sacred town—this guide will help you plan your trip better. From how to reach, what to see, where to stay, and tips for a smooth darshan—we’ve got you covered.</p>
              <p>
                From travel options and darshan procedures to temple legends and local insights, this guide covers everything you need for a meaningful and well-organized journey to one of India's most sacred destinations.
              </p>
            </div>
          </section>

          {/* Getting There */}
          <section id="getting-there" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8" />
              How to Reach Tirupati & Tirumala
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">By Air</h3>
                <div className="space-y-3 text-blue-800">
                  <p><strong>Tirupati Airport (Renigunta)</strong></p>
                  <p className="text-sm">Direct flights from Hyderabad, Chennai, Bangalore, and other major cities. Airport is 15km from Tirupati city.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Train className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">By Train</h3>
                <div className="space-y-3 text-green-800">
                  <p><strong>Tirupati Railway Station</strong></p>
                  <p className="text-sm">Well-connected to all major Indian cities. Alternative: Renigunta (RU), just 15 km away.</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Car className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-4">By Road</h3>
                <div className="space-y-3 text-purple-800">
                  <p className="text-sm">Excellent bus connectivity from Chennai (135 km), Bangalore (250 km), and Hyderabad (550 km). Self-drive via NH716 or NH69.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Accommodation */}
          <section id="accommodation" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Home className="w-8 h-8" />
              Where to Stay
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-6">In Tirupati</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Budget Options</h4>
                    <p className="text-sm text-orange-700">Bhimas Paradise, PLR Grand</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Mid-Range</h4>
                    <p className="text-sm text-orange-700">Minerva Grand, Fortune Select Grand Ridge</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">TTD Accommodation</h4>
                    <p className="text-sm text-orange-700">Srinivasam, Vishnu Nivasam</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-green-900 mb-6">In Tirumala</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">TTD Guesthouses</h4>
                    <p className="text-sm text-green-700">Padmavathi, Rambagicha, Seshadri</p>
                  </div>
                  <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                    <p className="text-yellow-800 font-medium text-sm">
                      Book via ttdevasthanams.ap.gov.in - Advance booking highly recommended
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spiritual Itinerary */}
          <section id="itinerary" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              4-Day Spiritual Itinerary
            </h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left py-3 px-4 font-semibold text-purple-900">Day</th>
                      <th className="text-left py-3 px-4 font-semibold text-purple-900">Location</th>
                      <th className="text-left py-3 px-4 font-semibold text-purple-900">Highlights</th>
                    </tr>
                  </thead>
                  <tbody className="text-purple-800">
                    <tr className="border-b border-purple-100">
                      <td className="py-3 px-4 font-medium">1</td>
                      <td className="py-3 px-4">Tirupati</td>
                      <td className="py-3 px-4">Kapila Theertham, ISKCON Temple</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="py-3 px-4 font-medium">2</td>
                      <td className="py-3 px-4">Trek to Tirumala</td>
                      <td className="py-3 px-4">Alipiri/Srivari Mettu climb</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="py-3 px-4 font-medium">3</td>
                      <td className="py-3 px-4">Tirumala</td>
                      <td className="py-3 px-4">Darshan, Sacred sites, Shopping</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">4</td>
                      <td className="py-3 px-4">Tirupati</td>
                      <td className="py-3 px-4">Padmavathi Temple, Departure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  day: "Day 1",
                  title: "Arrival in Tirupati",
                  activities: [
                    "Visit Kapila Theertham (Lord Shiva temple near foothills)",
                    "Explore ISKCON Temple",
                    "Rest and prepare for Tirumala climb"
                  ]
                },
                {
                  day: "Day 2", 
                  title: "Climb to Tirumala",
                  activities: [
                    "Choose Alipiri Mettu (3550 steps, 9 km) or Srivari Mettu (2388 steps, 2.1 km)",
                    "Get free darshan token during the trek",
                    "Experience the spiritual journey uphill"
                  ]
                },
                {
                  day: "Day 3",
                  title: "Darshan & Exploration", 
                  activities: [
                    "Darshan of Lord Venkateswara at the main Tirumala temple",
                    "Visit: Akasha Ganga, Papavinasam Theertham, Silathoranam",
                    "Explore local markets and collect prasadam"
                  ]
                },
                {
                  day: "Day 4",
                  title: "Return and Visit Padmavathi Temple",
                  activities: [
                    "Visit Sri Padmavathi Ammavari Temple at Tiruchanur",
                    "Final blessings and departure"
                  ]
                }
              ].map((day, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{day.day}: {day.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Sacred Legends */}
          <section id="legends" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8" />
              Sacred Legends from Traditional Texts
            </h2>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                "As per Skanda Purana, Lord Vishnu descended as Venkateswara in Kaliyuga to guide his devotees. His marriage with Goddess Padmavathi is symbolic of dharma and divine union."
              </blockquote>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-orange-400">
                <h3 className="font-semibold text-orange-900 mb-3">The Divine Debt</h3>
                <p className="text-gray-700">
                  According to legend, Lord Venkateswara took a loan from Kubera for his wedding with Goddess Padmavathi. Devotees offer hair (tonsure) and donations as a gesture to help repay this divine debt, symbolizing surrender and devotion.
                </p>
              </div>
            </div>
          </section>

          {/* Darshan Types */}
          <section id="darshan" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8" />
              Darshan Types & Tips
            </h2>

            <div className="space-y-6">
              {[
                {
                  type: "Sarva Darshan (Free)",
                  desc: "Open to all devotees, longer waiting time but completely free",
                  price: "Free",
                  color: "green"
                },
                {
                  type: "Divya Darshan",
                  desc: "Available for footpath trekkers (Alipiri & Sri Vari Mettu)",
                  price: "Free for Trekkers",
                  color: "blue"
                },
                {
                  type: "Special Entry Darshan",
                  desc: "Faster darshan with shorter queue time",
                  price: "₹300",
                  color: "purple"
                },
                {
                  type: "Electronic DIP Seva System",
                  desc: "Online lottery for Arjitha Sevas like Suprabhatam, Thomala",
                  price: "Varies",
                  color: "orange"
                }
              ].map((darshan, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{darshan.type}</h3>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {darshan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{darshan.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-2xl mt-8">
              <p className="text-blue-900 font-medium">
                <strong>Pro Tip:</strong> Book 2 weeks in advance for ₹300 darshan or seva options through the official TTD website.
              </p>
            </div>
          </section>

          {/* Food & Prasadam */}
          <section id="food" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Utensils className="w-8 h-8" />
              Local Cuisine & Prasadam
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
                <h3 className="text-xl font-semibold text-yellow-900 mb-6">Famous Prasadam</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-2">Tirupati Laddu</h4>
                    <p className="text-sm text-yellow-700">World-famous and GI-tag protected sweet prasadam</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-2">Free Annadanam</h4>
                    <p className="text-sm text-yellow-700">Complete meals served free at Tirumala</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-6">Local Dishes to Try</h3>
                <ul className="space-y-3">
                  {["Pulihora (Tamarind rice)", "Upma", "Pongal", "Andhra meals", "South Indian filter coffee"].map((dish, index) => (
                    <li key={index} className="flex items-center gap-3 text-orange-800">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Must-Visit Attractions */}
          <section id="attractions" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Mountain className="w-8 h-8" />
              Must-Visit Attractions & Hidden Gems
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Silathoranam",
                  desc: "Natural rock arch, rare geological wonder",
                  type: "Natural Wonder"
                },
                {
                  name: "Japali Hanuman Temple", 
                  desc: "Surrounded by peaceful forests",
                  type: "Temple"
                },
                {
                  name: "Srivari Padalu",
                  desc: "Footprints of Lord Venkateswara, great viewpoint",
                  type: "Sacred Site"
                },
                {
                  name: "Akasha Ganga",
                  desc: "Sacred waterfall with divine waters",
                  type: "Waterfall"
                },
                {
                  name: "Papavinasam Theertham",
                  desc: "Holy bath to wash away sins",
                  type: "Sacred Water"
                },
                {
                  name: "Chakra Theertham",
                  desc: "Peaceful divine pond",
                  type: "Sacred Pond"
                }
              ].map((place, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                    {place.type}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Tips */}
          <section id="tips" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Essential Travel Tips
            </h2>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-red-900 mb-3">Documentation & Dress Code</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Always carry identity proof</li>
                      <li>• Wear traditional clothes for darshan</li>
                      <li>• Remove footwear before temple entry</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-red-900 mb-3">Booking & Planning</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Book darshan and rooms in advance via TTD site</li>
                      <li>• Use free bus services in Tirumala</li>
                      <li>• Plan for longer wait times during festivals</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-red-900 mb-3">Health & Safety</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Stay hydrated during treks</li>
                      <li>• Carry basic medications</li>
                      <li>• Be prepared for crowds and long queues</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-red-900 mb-3">Environmental Care</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Avoid plastic; maintain temple cleanliness</li>
                      <li>• Respect local customs and traditions</li>
                      <li>• Follow photography restrictions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Sacred Journey Awaits</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Tirupati and Tirumala are more than just destinations; they are powerful spiritual experiences. Whether you climb the sacred steps or drive up the hill, every journey here is a journey inward. With the right planning, you can experience the full essence of this holy site—its traditions, its faith, and its timeless divinity.
            </p>
            <p className="text-lg font-semibold text-purple-800 mb-8">
              Plan with devotion. Travel with heart. Return with blessings. Govinda! Govinda!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition duration-300">
                Plan Your Pilgrimage
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition duration-300">
                Book TTD Services
              </button>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </article>
    </>
  );
};

export default TirupatiPilgrimageBlog;