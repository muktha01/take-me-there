"use client";
import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  Bookmark, 
  Heart, 
  Clock, 
  Eye, 
  User, 
  ChevronUp,
  Calendar,
  ArrowRight,
  Quote,
  Sparkles,
  Coffee,
  Star,
  Download,
  ChevronDown
} from 'lucide-react';

const PinterestBlogTemplate = ({ 
  title = "Your Blog Title Goes Here",
  subtitle = "A compelling subtitle that hooks your readers",
  authorName = "Travel Expert",
  readTime = "8 min read",
  publishDate = "Dec 15, 2024",
  views = "2.1K",
  heroImage = null,
  sections = [],
  tags = [],
  category = "Travel Guide"
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareOptions = [
    { name: 'Pinterest', color: 'red', icon: '📌' },
    { name: 'Instagram', color: 'pink', icon: '📸' },
    { name: 'Twitter', color: 'blue', icon: '🐦' },
    { name: 'Facebook', color: 'blue', icon: '📘' },
    { name: 'WhatsApp', color: 'green', icon: '💬' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Elegant Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-rose-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 transition-all duration-500 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Pinterest-Style Header */}
      <header className="relative bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          {/* Category Badge */}
          <div className="text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border border-rose-200">
              {category}
            </span>
          </div>

          {/* Title Section - Pinterest Style */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light">
              {subtitle}
            </p>

            {/* Elegant Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-700">{authorName}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Eye className="w-4 h-4" />
                <span>{views} views</span>
              </div>
            </div>

            {/* Pinterest-Style Action Buttons */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-500 text-white shadow-lg shadow-red-200' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">Love</span>
              </button>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:text-amber-500'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="font-medium">Save</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-rose-200"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="font-medium">Share</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showShareMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Share Menu */}
                {showShareMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-48 z-30">
                    <div className="grid grid-cols-1 gap-2">
                      {shareOptions.map((option, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 text-left w-full"
                        >
                          <span className="text-lg">{option.icon}</span>
                          <span className="font-medium text-gray-700">Share on {option.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Pinterest Style */}
        {heroImage ? (
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt={title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <div className="h-96 md:h-[500px] bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-xl">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-rose-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Beautiful Visual Story</h3>
                <p className="text-gray-600 mt-2">Add your hero image here</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Content Container - Pinterest Grid Style */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 font-light mb-6">
                Start with a compelling introduction that hooks your readers. This is where you set the tone 
                and give readers a taste of what's to come. Make it personal, engaging, and valuable.
              </p>
              
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border-l-4 border-rose-300">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Add a beautiful quote or key insight that captures the essence of your content. 
                  This will be one of the most shareable parts of your post."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <div key={index} className="mb-16">
              <ContentSection 
                title={section.title}
                content={section.content}
                type={section.type || 'default'}
                data={section.data}
                index={index}
              />
            </div>
          ))
        ) : (
          <DefaultSections />
        )}

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-12 text-white text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }} />
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-10 text-purple-100 max-w-2xl mx-auto">
              Take the next step and transform your travel dreams into reality. Your adventure awaits!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-purple-50 transition-all duration-300 shadow-xl">
                Get Started Now
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        {tags.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:from-rose-100 hover:to-pink-100 hover:text-rose-700 transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup - Pinterest Style */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-10 border border-rose-200 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
            <p className="text-gray-600 mb-8">Get exclusive travel tips, guides, and inspiration delivered to your inbox.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-semibold rounded-2xl hover:from-rose-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-8 flex flex-col gap-4 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        
        <button className="w-14 h-14 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
          <Download className="w-6 h-6" />
        </button>
      </div>

      {/* Reading Progress */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200 hidden md:block">
        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-gray-500" />
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </article>
  );
};

// Content Section Component
const ContentSection = ({ title, content, type, data, index }) => {
  const sectionColors = [
    'rose', 'pink', 'purple', 'indigo', 'blue', 'emerald', 'green', 'amber', 'orange', 'red'
  ];
  const color = sectionColors[index % sectionColors.length];

  switch (type) {
    case 'list':
      return (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data?.map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-2xl p-6 border border-${color}-200`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'quote':
      return (
        <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-3xl p-10 border border-${color}-200 shadow-xl`}>
          <div className="text-center max-w-3xl mx-auto">
            <Quote className={`w-16 h-16 text-${color}-400 mx-auto mb-6`} />
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed mb-6">
              "{content}"
            </blockquote>
            <div className={`w-24 h-1 bg-gradient-to-r from-${color}-400 to-${color}-500 mx-auto rounded-full`} />
          </div>
        </div>
      );

    case 'tips':
      return (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-${color}-400 to-${color}-500 mx-auto rounded-full`} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((tip, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-2xl p-6 border border-${color}-200 hover:shadow-xl transition-all duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-xl flex items-center justify-center mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-12 h-12 bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-2xl flex items-center justify-center`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      );
  }
};

// Default content sections if none provided
const DefaultSections = () => (
  <>
    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Main Content Section</h2>
      </div>
      <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">
          This is where your main content goes. Write engaging, valuable content that your readers will love. 
          Keep paragraphs short and scannable for better readability.
        </p>
        <p>
          Add your detailed content here. Use bullet points, images, and subheadings to break up the text 
          and make it more digestible. This template is designed to be both beautiful and functional.
        </p>
      </div>
    </div>

    <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-10 border border-emerald-200 shadow-xl mb-16">
      <div className="text-center max-w-3xl mx-auto">
        <Quote className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed mb-6">
          "Add inspiring quotes or key takeaways that readers will want to share on social media."
        </blockquote>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full" />
      </div>
    </div>
  </>
);

export default PinterestBlogTemplate;
