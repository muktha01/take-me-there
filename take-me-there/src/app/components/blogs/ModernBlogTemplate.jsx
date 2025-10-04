"use client";
import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  Bookmark, 
  Heart, 
  Clock, 
  Calendar, 
  User, 
  ChevronUp,
  Twitter,
  Facebook,
  Linkedin,
  Link,
  Check,
  ArrowLeft,
  Coffee,
  Eye
} from 'lucide-react';

const ModernBlogTemplate = ({ 
  title = "The Ultimate Guide to Transformative Travel",
  subtitle = "How authentic experiences can change your perspective on life and culture",
  author = {
    name: "Elena Rodriguez",
    bio: "Travel writer and cultural explorer with 10+ years experience",
    avatar: "/avatars/elena.jpg",
    social: {
      twitter: "@elenawrites",
      linkedin: "elena-rodriguez"
    }
  },
  publishDate = "December 20, 2024",
  readTime = "12 min read",
  category = "Travel & Culture",
  heroImage = "/images/hero-travel.jpg",
  content = null,
  tags = ["Travel", "Culture", "Adventure", "Mindfulness"],
  relatedPosts = []
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 2000);
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-white transition-all duration-300 text-gray-700 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        {/* Category */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium tracking-wide">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light max-w-3xl">
          {subtitle}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900">{author.name}</div>
              <div className="text-xs text-gray-500">{author.bio}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>2.1K views</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isLiked 
                ? 'bg-red-50 text-red-600 border border-red-200' 
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{isLiked ? 'Liked' : 'Like'}</span>
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isBookmarked 
                ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <div className="relative">
            <button
              onClick={shareToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
            
            {showShareTooltip && (
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                <Check className="w-3 h-3 inline mr-1" />
                Link copied!
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {heroImage && (
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6">
        {/* Article Content */}
        <main className="prose prose-lg prose-gray max-w-none">
          {content || <DefaultContent />}
        </main>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get more stories like this
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join 50,000+ readers who get our best travel stories and insider tips delivered weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </article>
  );
};

// Default content component
const DefaultContent = () => (
  <div className="space-y-8">
    <section id="section-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        The Power of Transformative Travel
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Travel has the remarkable ability to transform us in ways we never expected. 
        It's not just about visiting new places—it's about opening our minds to different 
        perspectives, cultures, and ways of living that challenge our assumptions and expand our understanding of the world.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        When we step outside our comfort zones and immerse ourselves in unfamiliar environments, 
        we create space for personal growth and self-discovery. Every conversation with a local, 
        every taste of authentic cuisine, and every moment of cultural exchange contributes to 
        a deeper understanding of both the world and ourselves.
      </p>
    </section>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl my-8">
      <blockquote className="text-xl italic text-blue-900 font-medium">
        "Travel makes one modest. You see what a tiny place you occupy in the world."
        <footer className="text-blue-700 mt-2 text-base not-italic">— Gustave Flaubert</footer>
      </blockquote>
    </div>

    <section id="section-1">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Finding Authentic Experiences
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Authentic travel experiences don't happen by accident—they require intention, 
        openness, and sometimes the courage to venture off the beaten path. Here are 
        some ways to discover the heart of a destination:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">Connect with Locals</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The best travel stories come from genuine connections with people who call your destination home. 
            Seek out local guides, stay in family-run accommodations, and don't be afraid to strike up conversations.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">Embrace Slow Travel</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Instead of rushing to check off tourist attractions, spend time truly experiencing a place. 
            Visit local markets, attend community events, and allow yourself to get beautifully lost.
          </p>
        </div>
      </div>
    </section>

    <section id="section-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        The Art of Cultural Immersion
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Cultural immersion goes beyond surface-level tourism. It's about approaching 
        each destination with curiosity, respect, and a genuine desire to understand 
        different ways of life.
      </p>
      
      <ul className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
          <div>
            <strong className="text-gray-900">Learn basic phrases</strong> in the local language
            <p className="text-gray-600 text-sm mt-1">Even simple greetings show respect and often lead to warmer interactions</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
          <div>
            <strong className="text-gray-900">Participate in local customs</strong> and traditions
            <p className="text-gray-600 text-sm mt-1">When invited, join in festivals, ceremonies, or community activities</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
          <div>
            <strong className="text-gray-900">Eat like a local</strong> at neighborhood establishments
            <p className="text-gray-600 text-sm mt-1">Street food and family restaurants offer authentic flavors and cultural insights</p>
          </div>
        </li>
      </ul>
    </section>

    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Tip: The 24-Hour Rule</h3>
      <p className="text-gray-700 leading-relaxed">
        When you arrive in a new destination, spend your first 24 hours without a strict agenda. 
        Walk around, observe daily life, and let the rhythm of the place guide your exploration. 
        This unstructured time often leads to the most memorable discoveries and connections.
      </p>
    </div>

    <section id="section-3">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Building Meaningful Connections
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The relationships we form while traveling often become the most treasured souvenirs. 
        These connections remind us of our shared humanity and create lasting bonds that 
        transcend geographical boundaries.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Remember that every person you meet has a story worth hearing. Approach each 
        interaction with genuine curiosity and openness. You might be surprised by the 
        profound impact a simple conversation can have on your perspective and theirs.
      </p>
    </section>
  </div>
);

export default ModernBlogTemplate;
