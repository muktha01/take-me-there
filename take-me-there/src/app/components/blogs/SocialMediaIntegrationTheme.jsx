'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, Facebook, Twitter, Youtube, Heart, MessageCircle, Share2,
  Camera, MapPin, Calendar, Users, Bookmark, Send, Hash,
  TrendingUp, Eye, ThumbsUp, User, Star, Play, Pause,
  Filter, Grid, List, Search, RefreshCw, Bell, Settings,
  ChevronLeft, ChevronRight, X, Plus, Download, Upload,
  Globe, Clock, Award, Zap, Target, Wind, Mountain
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const SocialMediaIntegrationTheme = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterTag, setFilterTag] = useState('all');
  const [isLiked, setIsLiked] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [followingUsers, setFollowingUsers] = useState(new Set());

  // Mock social media data for Ooty
  const socialFeed = [
    {
      id: 1,
      platform: 'instagram',
      user: { name: 'wanderlust_sarah', avatar: '👩‍💼', followers: '52.3K', verified: true },
      location: 'Doddabetta Peak, Ooty',
      timestamp: '2 hours ago',
      content: 'Standing at 2,637 meters above sea level, Doddabetta Peak offers breathtaking 360-degree views of the Nilgiri Hills! The morning mist rolling over the tea gardens creates a magical atmosphere that words can\'t describe. This is why Ooty is called the "Queen of Hill Stations" 🏔️✨',
      image: '/api/placeholder/600/400',
      likes: 2847,
      comments: 156,
      shares: 89,
      tags: ['#OotyViews', '#DoddabettaPeak', '#NilgiriHills', '#MorningMist', '#TeaGardens', '#HillStation', '#Photography', '#Travel', '#India', '#TamilNadu'],
      engagement: 94.2
    },
    {
      id: 2,
      platform: 'youtube',
      user: { name: 'TravelWithRaj', avatar: '🎬', followers: '128K', verified: true },
      location: 'Nilgiri Mountain Railway, Ooty',
      timestamp: '5 hours ago',
      content: 'EPIC Journey on the UNESCO World Heritage Nilgiri Mountain Railway! This 106-year-old toy train takes you through 16 tunnels, 250 bridges, and countless hairpin bends. The 46km journey from Mettupalayam to Ooty is pure magic - watch as we climb from 300m to 2,200m altitude through stunning landscapes of coffee plantations, forests, and rolling hills! 🚂',
      video: true,
      duration: '18:32',
      views: '47.2K',
      likes: 3421,
      comments: 287,
      shares: 156,
      tags: ['#NilgiriRailway', '#ToyTrain', '#UNESCO', '#OotyJourney', '#MountainRailway', '#Heritage', '#Travel', '#Nilgiris'],
      engagement: 87.5
    },
    {
      id: 3,
      platform: 'facebook',
      user: { name: 'Ooty Tea Gardens Official', avatar: '🍃', followers: '89.7K', verified: true },
      location: 'Tea Estates, Coonoor Road',
      timestamp: '1 day ago',
      content: 'Behind the Scenes: The Art of Tea Making at Ooty\'s Famous Tea Gardens 🌱 Did you know that our tea estates in the Nilgiris produce some of the finest black tea in the world? The unique climate at 2,000+ meters altitude, with cool temperatures and adequate rainfall, creates the perfect conditions for tea cultivation. Our tea gardens span over 12,000 hectares, employing thousands of local families who have been perfecting this craft for generations. From plucking the tender two leaves and a bud to the careful withering, rolling, fermentation, and drying process - every step is done with precision and love. Come visit our tea factory and experience the journey from leaf to cup! 🍵',
      image: '/api/placeholder/600/400',
      likes: 1592,
      comments: 203,
      shares: 445,
      tags: ['#OotyTea', '#TeaMaking', '#NilgiriTea', '#TeaGardens', '#LocalCulture', '#Heritage', '#Sustainable', '#Organic'],
      engagement: 91.8
    },
    {
      id: 4,
      platform: 'twitter',
      user: { name: 'NaturePhotoIndia', avatar: '📸', followers: '234K', verified: true },
      location: 'Ooty Botanical Garden',
      timestamp: '3 hours ago',
      content: 'Golden Hour Magic at Ooty Botanical Garden! 🌅 Established in 1848, these 22-hectare gardens house over 650 species of plants, including rare orchids, ferns, and the 20-million-year-old fossilized tree. The Italian-style terraced gardens and the crystal-clear Ooty Lake reflecting the surrounding hills create perfect photography conditions. Best time to visit: Early morning (6-8 AM) for soft light and fewer crowds.',
      image: '/api/placeholder/600/400',
      likes: 956,
      comments: 78,
      shares: 234,
      tags: ['#OotyBotanicalGarden', '#GoldenHour', '#Photography', '#Nature', '#BotanicalGarden', '#RareFlora'],
      engagement: 82.4
    },
    {
      id: 5,
      platform: 'instagram',
      user: { name: 'foodie_explorer_', avatar: '🍽️', followers: '76.8K', verified: false },
      location: 'Charring Cross, Ooty',
      timestamp: '6 hours ago',
      content: 'Food Trail Through Ooty\'s Heart! 🍴 Started my day with piping hot Varkey (traditional Ooty bread) and fresh mountain honey, followed by a steaming cup of Nilgiri tea at a century-old tea stall. Lunch was an authentic South Indian thali featuring local specialties like Mushroom curry (Ooty is famous for fresh mushrooms!), Bamboo shoot curry, and Eucalyptus honey. Evening snack: Hot corn on the cob with spicy masala near Ooty Lake. The high altitude gives vegetables here a unique taste you won\'t find anywhere else! 🌽🍄',
      image: '/api/placeholder/600/400',
      likes: 1234,
      comments: 89,
      shares: 67,
      tags: ['#OotyFood', '#LocalCuisine', '#StreetFood', '#Varkey', '#NilgiriTea', '#MountainFood', '#Authentic'],
      engagement: 88.7
    },
    {
      id: 6,
      platform: 'youtube',
      user: { name: 'AdventureSeeker23', avatar: '🏔️', followers: '45.2K', verified: false },
      location: 'Avalanche Lake, Ooty',
      timestamp: '2 days ago',
      content: 'Hidden Gem Alert: Avalanche Lake Trek! 🥾 This 28km trek from Ooty takes you through shola forests, grasslands, and pristine wilderness to reach the stunning Avalanche Lake. The lake, surrounded by rolling hills and endemic flora, is a crucial catchment area for the region. We spotted Nilgiri Tahr, various bird species, and rare butterflies along the way. The trek requires permits and is best done with a local guide. Difficulty: Moderate to Difficult. Best season: October to March. This untouched paradise shows why the Nilgiris are a UNESCO Biosphere Reserve! 🦋',
      video: true,
      duration: '24:18',
      views: '23.7K',
      likes: 1876,
      comments: 134,
      shares: 98,
      tags: ['#AvalancheLake', '#Trekking', '#NilgiriTahr', '#BiosphereReserve', '#Adventure', '#Wildlife'],
      engagement: 89.3
    }
  ];

  const trendingHashtags = [
    { tag: '#OotyViews', posts: '12.4K', growth: '+15%' },
    { tag: '#NilgiriTea', posts: '8.7K', growth: '+23%' },
    { tag: '#ToyTrain', posts: '6.2K', growth: '+8%' },
    { tag: '#HillStation', posts: '45.3K', growth: '+12%' },
    { tag: '#TeaGardens', posts: '9.1K', growth: '+19%' },
    { tag: '#Photography', posts: '234K', growth: '+5%' },
    { tag: '#DoddabettaPeak', posts: '3.8K', growth: '+32%' },
    { tag: '#BotanicalGarden', posts: '4.5K', growth: '+7%' }
  ];

  const influencers = [
    { 
      name: 'wanderlust_sarah', 
      avatar: '👩‍💼', 
      followers: '52.3K', 
      engagement: '4.2%',
      specialty: 'Landscape Photography',
      location: 'Ooty',
      verified: true,
      posts: 342
    },
    { 
      name: 'TravelWithRaj', 
      avatar: '🎬', 
      followers: '128K', 
      engagement: '3.8%',
      specialty: 'Travel Vlogs',
      location: 'South India',
      verified: true,
      posts: 156
    },
    { 
      name: 'foodie_explorer_', 
      avatar: '🍽️', 
      followers: '76.8K', 
      engagement: '5.1%',
      specialty: 'Food & Culture',
      location: 'Tamil Nadu',
      verified: false,
      posts: 234
    },
    { 
      name: 'NaturePhotoIndia', 
      avatar: '📸', 
      followers: '234K', 
      engagement: '2.9%',
      specialty: 'Wildlife Photography',
      location: 'India',
      verified: true,
      posts: 1247
    }
  ];

  const handleLike = (postId) => {
    setIsLiked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleFollow = (userId) => {
    setFollowingUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-5 h-5 text-pink-500" />;
      case 'facebook': return <Facebook className="w-5 h-5 text-blue-600" />;
      case 'twitter': return <Twitter className="w-5 h-5 text-blue-400" />;
      case 'youtube': return <Youtube className="w-5 h-5 text-red-500" />;
      default: return <Globe className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredPosts = filterTag === 'all' 
    ? socialFeed 
    : socialFeed.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(filterTag.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Ooty Social Hub</h1>
                <p className="text-sm text-gray-600">Connect, share, and discover</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search posts, users, hashtags..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-8 mt-4 border-b border-gray-200">
            {[
              { id: 'feed', label: 'Feed', icon: Grid },
              { id: 'trending', label: 'Trending', icon: TrendingUp },
              { id: 'influencers', label: 'Creators', icon: Users },
              { id: 'hashtags', label: 'Hashtags', icon: Hash }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {/* Filter Tags */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Filter by Category</h3>
                    <button
                      onClick={() => setFilterTag('all')}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'photography', 'food', 'adventure', 'culture', 'nature'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setFilterTag(tag)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                          filterTag === tag
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Feed Posts */}
                {filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Post Header */}
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                              {post.user.avatar}
                            </div>
                            <div className="absolute -bottom-1 -right-1">
                              {getPlatformIcon(post.platform)}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-gray-800">{post.user.name}</h4>
                              {post.user.verified && (
                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{post.user.followers} followers</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <MapPin className="w-3 h-3" />
                              <span>{post.location}</span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{post.timestamp}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleFollow(post.user.name)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                            followingUsers.has(post.user.name)
                              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                        >
                          {followingUsers.has(post.user.name) ? 'Following' : 'Follow'}
                        </button>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-4">
                      <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 5).map(tag => (
                          <span
                            key={tag}
                            className="text-blue-600 text-sm hover:bg-blue-50 px-2 py-1 rounded cursor-pointer transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 5 && (
                          <span className="text-gray-500 text-sm">+{post.tags.length - 5} more</span>
                        )}
                      </div>
                    </div>

                    {/* Media */}
                    <div className="relative">
                      {post.video ? (
                        <div className="relative bg-black aspect-video">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            {post.duration}
                          </div>
                          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                            <Youtube className="w-3 h-3" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">Beautiful {post.location} Photo</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Post Actions */}
                    <div className="p-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => handleLike(post.id)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
                          >
                            <Heart className={`w-5 h-5 ${isLiked[post.id] ? 'fill-red-500 text-red-500' : ''}`} />
                            <span className="text-sm font-medium">
                              {post.likes + (isLiked[post.id] ? 1 : 0)}
                            </span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors duration-300">
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm font-medium">{post.shares}</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">Engagement:</span>
                          <span className="text-xs font-medium text-green-600">{post.engagement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'influencers' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {influencers.map((influencer, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl">
                        {influencer.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-800">{influencer.name}</h3>
                          {influencer.verified && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{influencer.specialty}</p>
                        <p className="text-xs text-gray-500">{influencer.location}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">{influencer.followers}</p>
                        <p className="text-xs text-gray-500">Followers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">{influencer.posts}</p>
                        <p className="text-xs text-gray-500">Posts</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">{influencer.engagement}</p>
                        <p className="text-xs text-gray-500">Engagement</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleFollow(influencer.name)}
                      className={`w-full py-2 rounded-lg font-medium transition-colors duration-300 ${
                        followingUsers.has(influencer.name)
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {followingUsers.has(influencer.name) ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'hashtags' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Trending Hashtags</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trendingHashtags.map((hashtag, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div>
                        <h4 className="font-semibold text-blue-600">{hashtag.tag}</h4>
                        <p className="text-sm text-gray-600">{hashtag.posts} posts</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-medium ${
                          hashtag.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {hashtag.growth}
                        </p>
                        <p className="text-xs text-gray-500">growth</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Users</span>
                  <span className="font-semibold text-gray-800">847K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Posts Today</span>
                  <span className="font-semibold text-gray-800">2.3K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Check-ins</span>
                  <span className="font-semibold text-gray-800">567</span>
                </div>
              </div>
            </div>

            {/* Live Updates */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Live Updates</h3>
              <div className="space-y-3">
                {[
                  { user: 'mountain_lover', action: 'checked in at Doddabetta Peak', time: '2m' },
                  { user: 'tea_enthusiast', action: 'shared a photo from Tea Gardens', time: '5m' },
                  { user: 'rail_fan', action: 'posted about Toy Train experience', time: '8m' },
                  { user: 'nature_seeker', action: 'reviewed Botanical Garden', time: '12m' }
                ].map((update, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                      {update.user[0].toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        <span className="font-medium">{update.user}</span> {update.action}
                      </p>
                      <p className="text-xs text-gray-500">{update.time} ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Locations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Popular Check-ins</h3>
              <div className="space-y-3">
                {[
                  { name: 'Doddabetta Peak', checkins: 234, icon: '🏔️' },
                  { name: 'Ooty Lake', checkins: 189, icon: '🏞️' },
                  { name: 'Botanical Garden', checkins: 156, icon: '🌺' },
                  { name: 'Tea Gardens', checkins: 143, icon: '🍃' },
                  { name: 'Rose Garden', checkins: 98, icon: '🌹' }
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{location.icon}</span>
                      <span className="text-sm text-gray-800">{location.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{location.checkins}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIntegrationTheme;