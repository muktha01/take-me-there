'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, Calendar, Clock, Stamp, Heart, Star,
  Camera, Edit, Share2, Download, Bookmark, Send, Plane,
  Train, Car, Mountain, TreePine, Coffee, Compass, Globe
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const VintagePostcardTheme = () => {
  const [selectedPostcard, setSelectedPostcard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [personalMessage, setPersonalMessage] = useState('');

  const vintagePostcards = [
    {
      id: 1,
      title: "Greetings from the Queen of Hill Stations",
      location: "Ooty, Nilgiri Hills",
      date: "Established 1818",
      frontImage: "doddabetta-vintage",
      description: "Perched at 2,240 meters above sea level in the enchanting Nilgiri Hills of Tamil Nadu, Ooty (Udhagamandalam) beckons travelers with its colonial charm and breathtaking vistas. Founded by John Sullivan in 1818 as a summer retreat for the British Raj, this hill station has retained its old-world elegance through tree-lined avenues, heritage bungalows, and meticulously maintained gardens. The morning mist that rolls over emerald tea plantations creates a mystical atmosphere that has captivated visitors for over two centuries.",
      vintage_facts: [
        "Originally called Udhagamandalam by the Toda tribe",
        "Served as summer capital of Madras Presidency",
        "Home to India's first golf course in the hills (1896)",
        "The Nilgiri Mountain Railway, a UNESCO World Heritage site",
        "Famous for blue eucalyptus groves planted by British"
      ],
      weather: "Pleasant year-round, 5°C to 25°C",
      bestTime: "April to June, September to November",
      stamp: "heritage"
    },
    {
      id: 2,
      title: "Journey Through Time on Wheels",
      location: "Nilgiri Mountain Railway",
      date: "Since 1908",
      frontImage: "toy-train-vintage",
      description: "All aboard the legendary 'Toy Train' that has been chugging through the Nilgiri Hills for over a century! This narrow-gauge railway, a masterpiece of engineering ingenuity, covers 46 kilometers from Mettupalayam to Ooty, climbing from 300 to 2,200 meters altitude. The journey takes you through 16 tunnels, over 250 bridges, and around countless hairpin bends, offering spectacular views of coffee plantations, dense forests, and rolling hills. This UNESCO World Heritage Railway is a testament to human determination and the beauty of slow travel.",
      vintage_facts: [
        "Uses unique rack and pinion system on steep gradients",
        "Steam locomotives still used for heritage runs",
        "Takes 5 hours to complete the journey",
        "Passes through 16 tunnels and 250 bridges",
        "One of only 5 mountain railways in India"
      ],
      weather: "Scenic throughout the year",
      bestTime: "October to March for clear mountain views",
      stamp: "railway"
    },
    {
      id: 3,
      title: "Gardens of Colonial Splendor",
      location: "Government Botanical Garden",
      date: "Established 1848",
      frontImage: "botanical-garden-vintage",
      description: "Step into a living museum of botanical wonders at the Government Botanical Garden, where over 650 species of plants tell the story of Ooty's colonial past. Spread across 22 hectares on the slopes of Doddabetta, these terraced gardens showcase rare orchids, ancient ferns, and the famous 20-million-year-old fossilized tree. The Italian-style layout, complete with ornamental ponds and manicured lawns, reflects the aesthetic sensibilities of the British era while preserving indigenous flora of the Western Ghats.",
      vintage_facts: [
        "Designed by William Graham McIvor",
        "Home to 20-million-year-old fossilized tree",
        "Features rare species from around the world",
        "Annual flower show attracts thousands",
        "Research center for hill station horticulture"
      ],
      weather: "Cool and misty, perfect for plant growth",
      bestTime: "Year-round, flower show in May",
      stamp: "botanical"
    },
    {
      id: 4,
      title: "Liquid Gold of the Nilgiris",
      location: "Tea Estates of Ooty",
      date: "Cultivation since 1835",
      frontImage: "tea-gardens-vintage",
      description: "Witness the artistry of tea cultivation on the rolling hills where emerald carpets of tea bushes stretch to the horizon. The high-altitude climate of the Nilgiris, with its cool temperatures and adequate rainfall, creates perfect conditions for producing some of the world's finest black tea. These sprawling estates, covering over 12,000 hectares, employ thousands of skilled workers who continue the time-honored tradition of hand-plucking the tender 'two leaves and a bud.' Visit a tea factory to witness the journey from leaf to cup - withering, rolling, fermentation, and drying.",
      vintage_facts: [
        "First tea plants brought from China in 1835",
        "Nilgiri tea known for citrusy, brisk flavor",
        "Hand-plucking ensures highest quality",
        "Tea factories operate year-round",
        "Major export to countries worldwide"
      ],
      weather: "Misty mornings, sunny afternoons",
      bestTime: "March to May for fresh tea season",
      stamp: "tea"
    },
    {
      id: 5,
      title: "Serenity at Mirror Lake",
      location: "Ooty Lake",
      date: "Created 1824",
      frontImage: "ooty-lake-vintage",
      description: "Discover tranquility at this man-made marvel created in 1824 by John Sullivan, who dammed the valley to form this picturesque lake. Surrounded by eucalyptus groves and rolling hills, Ooty Lake serves as the town's recreational heart. Paddle boats and rowboats dot the water's surface, while the lake's perfect reflection of surrounding hills creates a mirror-like effect during calm mornings. The tree-lined promenade offers leisurely walks with vendors selling roasted corn and local snacks, maintaining the charm of a bygone era.",
      vintage_facts: [
        "Originally created by damming a valley",
        "Covers area of 65 acres",
        "Source of Ooty's water supply",
        "Popular boating destination since British era",
        "Surrounded by heritage eucalyptus trees"
      ],
      weather: "Calm mornings, gentle breezes",
      bestTime: "Early morning for misty lake views",
      stamp: "lake"
    },
    {
      id: 6,
      title: "Peaks and Perspectives",
      location: "Doddabetta Peak",
      date: "2,637 meters above sea level",
      frontImage: "doddabetta-peak-vintage",
      description: "Ascend to the highest point in the Nilgiri Hills, where panoramic vistas reward the journey to Doddabetta Peak. At 2,637 meters, this summit offers breathtaking 360-degree views of the Western Ghats, with rolling hills, deep valleys, and distant plains stretching to the horizon. The telescope house at the summit provides magnified views of the surrounding landscape, while the winding road to the peak passes through dense shola forests rich in endemic flora and fauna. On clear days, you can see the plains of Coimbatore and even glimpse the coast.",
      vintage_facts: [
        "Highest peak in Nilgiri Hills",
        "Name means 'big mountain' in local language",
        "Telescope house built for better views",
        "Rich biodiversity in surrounding forests",
        "Important watershed for the region"
      ],
      weather: "Cool and windy, often misty",
      bestTime: "October to February for clear views",
      stamp: "mountain"
    }
  ];

  const stampDesigns = {
    heritage: "🏛️",
    railway: "🚂", 
    botanical: "🌺",
    tea: "🍃",
    lake: "🏞️",
    mountain: "🏔️"
  };

  const handlePostcardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentPostcard = vintagePostcards[selectedPostcard];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Vintage Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23654321' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white py-6 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wide">Vintage Ooty</h1>
                <p className="text-amber-100">Postcards from the Queen of Hills</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Postcard Selection */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Choose Your Memory</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Select from our collection of vintage-inspired postcards celebrating the timeless beauty of Ooty
          </p>
        </div>

        {/* Postcard Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {vintagePostcards.map((postcard, index) => (
            <button
              key={postcard.id}
              onClick={() => setSelectedPostcard(index)}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
                selectedPostcard === index 
                  ? 'ring-4 ring-amber-500 shadow-2xl transform scale-105' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">{stampDesigns[postcard.stamp]}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{postcard.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Main Postcard Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Postcard Container */}
            <div 
              className={`relative w-full aspect-[3/2] transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Postcard */}
              <div 
                className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Vintage Frame */}
                <div className="absolute inset-2 border-4 border-amber-600 rounded-lg">
                  <div className="absolute inset-2 border border-amber-400 rounded-md" />
                </div>

                {/* Main Image Area */}
                <div className="relative h-full p-8">
                  <div className="h-full bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-lg overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="relative h-2/3 bg-gradient-to-br from-emerald-200 to-sky-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{stampDesigns[currentPostcard.stamp]}</div>
                        <h3 className="text-2xl font-bold text-amber-900">{currentPostcard.location}</h3>
                        <p className="text-lg text-amber-700">{currentPostcard.date}</p>
                      </div>
                    </div>

                    {/* Title Banner */}
                    <div className="h-1/3 bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center p-4">
                      <h2 className="text-white text-2xl md:text-3xl font-bold text-center leading-tight">
                        {currentPostcard.title}
                      </h2>
                    </div>
                  </div>

                  {/* Vintage Stamps */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-600 text-white p-2 rounded transform rotate-12 shadow-lg">
                      <div className="text-xl">{stampDesigns[currentPostcard.stamp]}</div>
                    </div>
                  </div>

                  {/* Postmark */}
                  <div className="absolute top-16 right-8">
                    <div className="w-16 h-16 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 text-xs transform -rotate-12 bg-white/80">
                      <div className="text-center">
                        <div className="font-bold">OOTY</div>
                        <div>2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of Postcard */}
              <div 
                className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-2xl p-8 rotate-y-180"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="h-full flex">
                  {/* Left Side - Message Area */}
                  <div className="w-1/2 pr-4">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Your Message</h3>
                    <textarea
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      placeholder="Write your memories of Ooty here..."
                      className="w-full h-32 p-3 border border-amber-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    />
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-amber-800 mb-2">Vintage Facts</h4>
                      <ul className="space-y-1 text-sm text-amber-700">
                        {currentPostcard.vintage_facts.slice(0, 3).map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-600 mr-2">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dividing Line */}
                  <div className="w-px bg-amber-300 mx-4" />

                  {/* Right Side - Address Area */}
                  <div className="w-1/2 pl-4">
                    <div className="mb-6">
                      <h4 className="font-semibold text-amber-800 mb-3">Travel Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-700">{currentPostcard.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-700">{currentPostcard.bestTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Cloud className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-700">{currentPostcard.weather}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">Historical Note</h4>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        {currentPostcard.description.substring(0, 200)}...
                      </p>
                    </div>

                    {/* Vintage Postmark */}
                    <div className="mt-6 text-right">
                      <div className="inline-block transform rotate-12">
                        <div className="border-2 border-red-600 rounded p-2 text-red-600 text-xs">
                          <div className="font-bold">HILL STATION</div>
                          <div>TAMIL NADU</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flip Button */}
            <button
              onClick={handlePostcardFlip}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-300 shadow-lg z-10"
            >
              {isFlipped ? 'View Front' : 'View Back'}
            </button>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">{currentPostcard.title}</h3>
            <p className="text-amber-800 leading-relaxed mb-6">
              {currentPostcard.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Historical Significance</h4>
                <ul className="space-y-2">
                  {currentPostcard.vintage_facts.map((fact, index) => (
                    <li key={index} className="flex items-start text-sm text-amber-700">
                      <Star className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Visitor Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Calendar className="w-4 h-4 text-amber-600 mt-0.5" />
                    <div>
                      <span className="font-medium text-amber-800">Best Time to Visit:</span>
                      <div className="text-amber-700">{currentPostcard.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Cloud className="w-4 h-4 text-amber-600 mt-0.5" />
                    <div>
                      <span className="font-medium text-amber-800">Weather:</span>
                      <div className="text-amber-700">{currentPostcard.weather}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-amber-600 mt-0.5" />
                    <div>
                      <span className="font-medium text-amber-800">Location:</span>
                      <div className="text-amber-700">{currentPostcard.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button className="flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300">
                <Bookmark className="w-4 h-4" />
                <span>Save Postcard</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300">
                <Send className="w-4 h-4" />
                <span>Send to Friend</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Vintage Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-900 to-orange-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-amber-100 mb-2">
            "Collect moments, not things. These vintage postcards preserve the timeless charm of Ooty."
          </p>
          <div className="flex items-center justify-center space-x-4 text-amber-200">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Send memories that last a lifetime</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Fix missing import
const Cloud = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z" />
  </svg>
);

export default VintagePostcardTheme;