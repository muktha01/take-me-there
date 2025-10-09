"use client";
import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import MinimalistExplorerTheme from './MinimalistExplorerTheme';
import AdventureMagazineTheme from './AdventureMagazineTheme';
import PhotoStoryTheme from './PhotoStoryTheme';
import TravelJournalTheme from './TravelJournalTheme';
import ModernCardTheme from './ModernCardTheme';
import SplitScreenTheme from './SplitScreenTheme';
import InteractiveDashboardTheme from './InteractiveDashboardTheme';
import DarkModeWanderlustTheme from '../blogs/DarkModeWanderlustTheme';
import MicroInteractionTravelTheme from '../blogs/MicroInteractionTravelTheme';
import InteractiveMapFirstTheme from '../blogs/InteractiveMapFirstTheme';
import ImmersiveVideoHeroTheme from '../blogs/ImmersiveVideoHeroTheme';
import AsymmetricGeometricTheme from '../blogs/AsymmetricGeometricTheme';
import LocalCultureStorytellingTheme from '../blogs/LocalCultureStorytellingTheme';
import DataDrivenExplorerTheme from '../blogs/DataDrivenExplorerTheme';
import SocialMediaIntegrationTheme from '../blogs/SocialMediaIntegrationTheme';
import VintagePostcardTheme from '../blogs/VintagePostcardTheme';
import SustainableTravelEcoTheme from '../blogs/SustainableTravelEcoTheme';
import MicroInteractionAnimationTheme from '../blogs/MicroInteractionAnimationTheme';
import AdventureSeekerMobileTheme from '../blogs/AdventureSeekerMobileTheme';
import ModernBlogTemplate from '../blogs/ModernBlogTemplate';
import PinterestBlogTemplate from '../blogs/PinterestBlogTemplate';
import ootyData from '../../../lib/data/ootyData';

const ThemeShowcase = () => {
  const [activeTheme, setActiveTheme] = useState('minimalist');
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Custom scrollbar styles
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  `;

  const themes = [
    {
      id: 'minimalist',
      name: 'Minimalist Explorer',
      description: 'Clean, white background with sticky navigation and grid layouts',
      component: MinimalistExplorerTheme,
      color: 'bg-blue-500',
      features: ['Sticky Navigation', 'Grid Layout', 'Reading Progress', 'Breadcrumbs']
    },
    {
      id: 'magazine',
      name: 'Adventure Magazine',
      description: 'Bold typography with magazine-style multi-column layout',
      component: AdventureMagazineTheme,
      color: 'bg-red-500',
      features: ['Magazine Layout', 'Interactive Map', 'Category Filters', 'Pull Quotes']
    },
    {
      id: 'photo',
      name: 'Photo Story',
      description: 'Photography-first design with full-width images and galleries',
      component: PhotoStoryTheme,
      color: 'bg-purple-500',
      features: ['Lightbox Gallery', 'Parallax Scrolling', 'Instagram Grid', 'Auto-play']
    },
    {
      id: 'journal',
      name: 'Travel Journal',
      description: 'Handwritten-style fonts with diary aesthetic and vintage elements',
      component: TravelJournalTheme,
      color: 'bg-amber-500',
      features: ['Vintage Design', 'Page Turning', 'Handwritten Fonts', 'Polaroid Frames']
    },
    {
      id: 'cards',
      name: 'Modern Cards',
      description: 'Card-based layout with material design and glassmorphism effects',
      component: ModernCardTheme,
      color: 'bg-indigo-500',
      features: ['Flip Cards', 'Glassmorphism', 'Material Design', 'Interactive Elements']
    },
    {
      id: 'split',
      name: 'Split Screen',
      description: '50/50 split layout with fixed image side and scrolling content',
      component: SplitScreenTheme,
      color: 'bg-teal-500',
      features: ['Split Layout', 'Alternating Sections', 'Smooth Transitions', 'Bold Typography']
    },
    {
      id: 'dashboard',
      name: 'Interactive Dashboard',
      description: 'Dashboard-style layout with widgets and interactive elements',
      component: InteractiveDashboardTheme,
      color: 'bg-green-500',
      features: ['Tabbed Navigation', 'Interactive Widgets', 'Data Visualization', 'Checklists']
    },
    {
      id: 'darkmode',
      name: 'Dark Mode Wanderlust',
      description: 'Modern dark theme with comprehensive content and mode switching',
      component: DarkModeWanderlustTheme,
      color: 'bg-gray-800',
      features: ['Dark/Light Mode', 'Comprehensive Content', 'Modern UI', 'Detailed Descriptions']
    },
    {
      id: 'videohero',
      name: 'Immersive Video Hero',
      description: 'Cinematic video-first theme with autoplay backgrounds and transparent overlays',
      component: ImmersiveVideoHeroTheme,
      color: 'bg-blue-600',
      features: ['Video Backgrounds', 'Cinematic Design', 'Parallax Effects', 'Transparent Overlays']
    },
    {
      id: 'geometric',
      name: 'Asymmetric Geometric',
      description: 'Modern artistic theme with broken grids and geometric patterns',
      component: AsymmetricGeometricTheme,
      color: 'bg-orange-500',
      features: ['Geometric Patterns', 'Asymmetric Layout', 'Artistic Design', 'Dynamic Shapes']
    },
    {
      id: 'storytelling',
      name: 'Local Culture Storytelling',
      description: 'Chapter-based narrative theme with cultural motifs and storytelling features',
      component: LocalCultureStorytellingTheme,
      color: 'bg-purple-600',
      features: ['Chapter Navigation', 'Cultural Motifs', 'Audio Integration', 'Glossary System']
    },
    {
      id: 'datadriven',
      name: 'Data-Driven Explorer',
      description: 'Interactive theme with analytics, charts, budget calculators, and data visualization',
      component: DataDrivenExplorerTheme,
      color: 'bg-emerald-500',
      features: ['Analytics Dashboard', 'Budget Calculator', 'Data Visualization', 'Interactive Charts']
    },
    {
      id: 'social',
      name: 'Social Media Integration',
      description: 'Theme with embedded feeds, user-generated content galleries, and social features',
      component: SocialMediaIntegrationTheme,
      color: 'bg-pink-500',
      features: ['Social Feeds', 'User Content', 'Trending Hashtags', 'Influencer Profiles']
    },
    {
      id: 'vintage',
      name: 'Vintage Postcard',
      description: 'Retro-styled theme with aged paper textures and nostalgic design elements',
      component: VintagePostcardTheme,
      color: 'bg-amber-600',
      features: ['Vintage Design', 'Postcard Flip', 'Aged Textures', 'Nostalgic Elements']
    },
    {
      id: 'sustainable',
      name: 'Sustainable Travel Eco',
      description: 'Earth-toned theme focused on eco-friendly travel and sustainability',
      component: SustainableTravelEcoTheme,
      color: 'bg-green-600',
      features: ['Eco Focus', 'Carbon Calculator', 'Conservation Info', 'Sustainability Tips']
    },
    {
      id: 'microinteraction',
      name: 'Micro-Interaction Animation',
      description: 'Playful theme with hover effects, micro-animations, and interactive elements',
      component: MicroInteractionAnimationTheme,
      color: 'bg-violet-500',
      features: ['Micro-Interactions', 'Hover Effects', 'Smooth Animations', 'Interactive Elements']
    },
    {
      id: 'mobilefirst',
      name: 'Adventure Seeker Mobile',
      description: 'Mobile-first theme optimized for adventure travelers and outdoor activities',
      component: AdventureSeekerMobileTheme,
      color: 'bg-red-600',
      features: ['Mobile-First Design', 'Adventure Focus', 'Offline Capabilities', 'GPS Integration']
    },
    {
      id: 'mapfirst',
      name: 'Interactive Map First',
      description: 'Map-centered design with location details and route planning',
      component: InteractiveMapFirstTheme,
      color: 'bg-emerald-600',
      features: ['Interactive Map', 'Route Planning', 'Location Details', 'Weather Integration']
    },
    {
      id: 'modernblog',
      name: 'Modern Blog Template',
      description: 'Clean, modern blog layout with reading progress and social features',
      component: ModernBlogTemplate,
      color: 'bg-slate-600',
      features: ['Reading Progress', 'Social Features', 'Clean Layout', 'Modern Typography']
    },
    {
      id: 'pinterest',
      name: 'Pinterest Blog Template',
      description: 'Pinterest-inspired masonry layout with visual emphasis and sharing features',
      component: PinterestBlogTemplate,
      color: 'bg-rose-500',
      features: ['Masonry Layout', 'Pinterest Style', 'Visual Emphasis', 'Share Features']
    }
  ];

  const selectTheme = (themeId) => {
    setActiveTheme(themeId);
    setShowThemeSelector(false); // Close selector after selecting
  };

  const selectedThemeData = themes.find(theme => theme.id === activeTheme);
  const ThemeComponent = selectedThemeData?.component;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Inject custom scrollbar styles */}
      <style jsx>{scrollbarStyles}</style>
      
      {/* Subtle Theme Toggle Button */}
      <button
        onClick={() => setShowThemeSelector(!showThemeSelector)}
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
        title="Switch Theme"
      >
        <Palette className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
      </button>

      {/* Expandable Theme Selector */}
      {showThemeSelector && (
        <div className="fixed top-20 left-4 z-50 bg-white rounded-lg shadow-xl border max-w-sm animate-in fade-in slide-in-from-top-5 duration-300 max-h-[80vh] flex flex-col">
          <div className="p-4 flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Choose Theme
              </h3>
              <button
                onClick={() => setShowThemeSelector(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    activeTheme === theme.id
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${theme.color}`} />
                    <div>
                      <div className="font-medium text-gray-900">{theme.name}</div>
                      <div className="text-xs text-gray-500">{theme.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Current Theme Info */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex-shrink-0">
              <div className="text-sm font-medium text-blue-900 mb-1">
                Currently Viewing: {selectedThemeData?.name}
              </div>
              <div className="text-xs text-blue-700">
                {selectedThemeData?.description}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showThemeSelector && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowThemeSelector(false)}
        />
      )}

      {/* Selected Theme Display */}
      <div className="theme-container">
        {ThemeComponent && <ThemeComponent data={ootyData} />}
      </div>
    </div>
  );
};

export default ThemeShowcase;