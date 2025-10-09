'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Triangle, Square, Circle, Hexagon, Diamond, 
  MapPin, Calendar, Clock, Star, Share2, Bookmark,
  ChevronRight, ChevronLeft, RotateCw, Move,
  Camera, Mountain, TreePine, Coffee, Utensils, Bed,
  Navigation, Compass, Globe, Eye, Award, Info,
  Filter, Search, Menu, X, ArrowRight, ArrowUp,
  Zap, Layers, Palette, Grid, Maximize2
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const AsymmetricGeometricTheme = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedShapes, setAnimatedShapes] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isGridMode, setIsGridMode] = useState(false);

  const containerRef = useRef();
  const shapesRef = useRef([]);

  // Comprehensive Ooty content with geometric design elements
  const geometricContent = {
    hero: {
      title: "UDHAGAMANDALAM",
      subtitle: "GEOMETRIC EXPLORATION",
      description: "Experience Ooty through bold geometric patterns and asymmetric layouts that break traditional design boundaries. Discover the Queen of Hill Stations reimagined through modern artistic vision.",
      shapes: [
        { type: 'triangle', color: 'bg-blue-500', size: 'w-32 h-32', position: 'top-20 left-10', rotation: 'rotate-45' },
        { type: 'square', color: 'bg-purple-500', size: 'w-24 h-24', position: 'top-40 right-20', rotation: 'rotate-12' },
        { type: 'circle', color: 'bg-pink-500', size: 'w-40 h-40', position: 'bottom-32 left-32', rotation: '' },
        { type: 'hexagon', color: 'bg-teal-500', size: 'w-28 h-28', position: 'top-60 right-40', rotation: 'rotate-30' }
      ]
    },

    sections: [
      {
        id: 1,
        title: "PEAK EXPERIENCES",
        subtitle: "Doddabetta Summit",
        layout: "diagonal-split",
        color: "blue",
        content: {
          description: `At 2,637 meters above sea level, Doddabetta Peak represents the geometric pinnacle of the Western Ghats. This towering summit offers a 360-degree perspective that transforms the landscape into abstract patterns of tea gardens, forests, and valleys.

          The peak's unique position creates natural geometric formations - triangular valleys carved by ancient rivers, circular clearings formed by wind patterns, and linear tea plantation rows that create striking visual rhythms across the mountainside.

          The telescope observatory at the summit provides visitors with an enhanced geometric view of the surrounding landscape, where distant mountains form angular silhouettes against the sky, and the patchwork of cultivation creates a living geometric tapestry.

          Visitors can observe how natural and human-made geometries interact - the organic curves of hillsides intersecting with the precise lines of roads and boundaries, creating a dynamic interplay between planned and natural forms.`,
          statistics: [
            { label: "Elevation", value: "2,637m", shape: "triangle" },
            { label: "View Range", value: "50+ km", shape: "circle" },
            { label: "Visitors/Year", value: "500K+", shape: "square" },
            { label: "Photo Spots", value: "25+", shape: "hexagon" }
          ],
          highlights: [
            "Geometric landscape patterns from above",
            "Abstract tea garden formations",
            "Triangular valley perspectives",
            "Circular horizon views",
            "Linear mountain ridge alignments",
            "Angular architecture of observatory"
          ]
        },
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        geometricElements: [
          { shape: 'triangle', color: 'blue-500', size: 'lg' },
          { shape: 'square', color: 'blue-400', size: 'md' },
          { shape: 'circle', color: 'blue-600', size: 'sm' }
        ]
      },
      {
        id: 2,
        title: "WATER GEOMETRIES",
        subtitle: "Ooty Lake Reflections",
        layout: "zigzag",
        color: "teal",
        content: {
          description: `Ooty Lake, created in 1824, demonstrates perfect geometric harmony between human engineering and natural beauty. The artificial lake forms an elongated oval that serves as a mirror, creating perfect symmetrical reflections of the surrounding landscape.

          The lake's geometric properties extend beyond its physical form - the concentric ripples created by boats form dynamic circular patterns, while the linear walking paths create structured geometric frameworks around the water body.

          The Eucalyptus trees planted around the lake create natural vertical lines that contrast with the horizontal plane of the water surface, establishing a geometric dialogue between earth and sky, vertical and horizontal, natural and artificial.

          Boating activities add kinetic geometric elements to the scene - the curved wakes of boats create temporary geometric patterns on the water surface, while the rhythmic movement of paddle wheels generates repetitive circular motions.`,
          statistics: [
            { label: "Surface Area", value: "65 acres", shape: "circle" },
            { label: "Perimeter", value: "2.5 km", shape: "square" },
            { label: "Depth", value: "12 feet", shape: "triangle" },
            { label: "Boat Capacity", value: "200+", shape: "hexagon" }
          ],
          highlights: [
            "Perfect oval lake formation",
            "Symmetrical mountain reflections",
            "Concentric ripple patterns",
            "Linear eucalyptus alignments",
            "Geometric boat wake patterns",
            "Circular boating movements"
          ]
        },
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop",
        geometricElements: [
          { shape: 'circle', color: 'teal-500', size: 'lg' },
          { shape: 'triangle', color: 'teal-400', size: 'md' },
          { shape: 'square', color: 'teal-600', size: 'sm' }
        ]
      },
      {
        id: 3,
        title: "RAILWAY VECTORS",
        subtitle: "Nilgiri Mountain Railway",
        layout: "split-angle",
        color: "purple",
        content: {
          description: `The Nilgiri Mountain Railway creates one of the most fascinating geometric journeys in the world. The UNESCO World Heritage track follows mathematical principles of engineering, utilizing a rack and pinion system that creates precise angular movements up the mountain slopes.

          The railway's 46-kilometer route forms a complex geometric pattern across the landscape - spiraling curves, sharp angular turns, and linear stretches that demonstrate the marriage of geometric precision with natural topography.

          The train cars themselves become moving geometric elements in the landscape, their rectangular forms contrasting with the organic curves of the hillsides while the regular rhythm of the tracks creates a linear musical composition across the terrain.

          The 250 bridges and 16 tunnels represent architectural geometry integrated into natural forms - each bridge creates geometric frames through which passengers view the changing landscape, while tunnels provide dramatic geometric transitions between light and shadow.`,
          statistics: [
            { label: "Track Length", value: "46 km", shape: "triangle" },
            { label: "Bridges", value: "250", shape: "square" },
            { label: "Tunnels", value: "16", shape: "circle" },
            { label: "Gradient", value: "1:12.5", shape: "hexagon" }
          ],
          highlights: [
            "Geometric track spiral patterns",
            "Angular bridge architecture",
            "Linear tunnel perspectives",
            "Rectangular train car forms",
            "Triangular mountain cutting",
            "Circular curve geometries"
          ]
        },
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
        geometricElements: [
          { shape: 'square', color: 'purple-500', size: 'lg' },
          { shape: 'hexagon', color: 'purple-400', size: 'md' },
          { shape: 'triangle', color: 'purple-600', size: 'sm' }
        ]
      },
      {
        id: 4,
        title: "BOTANICAL PATTERNS",
        subtitle: "Government Botanical Garden",
        layout: "honeycomb",
        color: "green",
        content: {
          description: `The Government Botanical Garden showcases nature's own geometric principles across 55 acres of carefully planned landscape. Established in 1848, the garden demonstrates the geometric relationships between planned human design and organic natural growth patterns.

          The Italian Garden section features formal geometric layouts with symmetrical flower beds, geometric topiary shapes, and mathematical planting patterns that create living geometric art. The conservatory houses plants arranged in geometric greenhouse structures that frame natural forms within architectural geometry.

          Natural geometric patterns are abundant throughout the garden - the spiral arrangements of pinecones, the hexagonal structures of honeycomb displays, the fractal patterns of ferns, and the radial symmetry of flowers create a comprehensive geometric education in natural forms.

          The garden's pathways create geometric networks that guide visitors through calculated viewing angles and perspectives, each turn revealing new geometric relationships between plant life, architecture, and landscape design.`,
          statistics: [
            { label: "Garden Area", value: "55 acres", shape: "circle" },
            { label: "Plant Species", value: "1,000+", shape: "triangle" },
            { label: "Sections", value: "12", shape: "square" },
            { label: "Established", value: "1848", shape: "hexagon" }
          ],
          highlights: [
            "Geometric topiary sculptures",
            "Symmetrical flower bed patterns",
            "Hexagonal greenhouse structures",
            "Spiral pathway designs",
            "Radial garden layouts",
            "Fractal plant arrangements"
          ]
        },
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop",
        geometricElements: [
          { shape: 'hexagon', color: 'green-500', size: 'lg' },
          { shape: 'circle', color: 'green-400', size: 'md' },
          { shape: 'square', color: 'green-600', size: 'sm' }
        ]
      }
    ],

    categories: [
      { id: 'all', name: 'All Experiences', color: 'gray-500', icon: Grid },
      { id: 'viewpoints', name: 'Viewpoints', color: 'blue-500', icon: Mountain },
      { id: 'heritage', name: 'Heritage', color: 'purple-500', icon: Award },
      { id: 'nature', name: 'Nature', color: 'green-500', icon: TreePine },
      { id: 'adventure', name: 'Adventure', color: 'red-500', icon: Zap }
    ]
  };

  // Geometric shape component
  const GeometricShape = ({ shape, color, size, position, rotation, animated = false }) => {
    const baseClasses = `absolute ${position} ${rotation} transition-all duration-700`;
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32'
    };
    
    const shapeClasses = {
      triangle: 'clip-path-triangle',
      square: 'rounded-none',
      circle: 'rounded-full',
      hexagon: 'clip-path-hexagon',
      diamond: 'clip-path-diamond'
    };

    return (
      <div 
        className={`
          ${baseClasses} 
          ${sizeClasses[size] || sizeClasses.md} 
          bg-${color} 
          ${shapeClasses[shape]}
          ${animated ? 'animate-pulse' : ''}
          opacity-70 hover:opacity-100
        `}
        style={{
          clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                   shape === 'hexagon' ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' :
                   shape === 'diamond' ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' :
                   'none'
        }}
      />
    );
  };

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Animate shapes based on scroll
      const newAnimatedShapes = new Set();
      geometricContent.sections.forEach((section, index) => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newAnimatedShapes.add(section.id);
          }
        }
      });
      setAnimatedShapes(newAnimatedShapes);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Layout generators for different section types
  const getLayoutClasses = (layout) => {
    switch (layout) {
      case 'diagonal-split':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transform -skew-y-2';
      case 'zigzag':
        return 'grid grid-cols-1 lg:grid-cols-3 gap-6 items-center';
      case 'split-angle':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transform skew-y-1';
      case 'honeycomb':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      default:
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden" ref={containerRef}>
      {/* Custom CSS for geometric shapes */}
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
        .clip-path-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .geometric-grid {
          background-image: 
            linear-gradient(45deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%),
            linear-gradient(45deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%);
          background-size: 30px 30px;
          background-position: 0 0, 15px 15px;
        }
      `}</style>

      {/* Geometric Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Triangle className="w-8 h-8 text-blue-500" />
                <Square className="w-4 h-4 text-purple-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-gray-800">GEOMETRIC OOTY</span>
            </div>

            {/* Category Filter */}
            <div className="hidden md:flex items-center space-x-2">
              {geometricContent.categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-none transition-all duration-300
                      ${selectedCategory === category.id 
                        ? `bg-${category.color} text-white transform rotate-3` 
                        : `text-${category.color} hover:bg-${category.color}/10 hover:transform hover:rotate-1`
                      }
                    `}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Grid Mode Toggle */}
            <button
              onClick={() => setIsGridMode(!isGridMode)}
              className={`
                p-2 rounded-none transition-all duration-300 transform
                ${isGridMode ? 'bg-purple-500 text-white rotate-45' : 'bg-gray-200 text-gray-600 hover:rotate-12'}
              `}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {geometricContent.hero.shapes.map((shape, index) => (
          <GeometricShape
            key={index}
            {...shape}
            animated={animatedShapes.size > 0}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center geometric-grid relative pt-20">
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Geometric Elements */}
              <div className="hidden lg:flex flex-col space-y-8">
                <div className="w-32 h-32 bg-blue-500 transform rotate-45 opacity-80"></div>
                <div className="w-24 h-24 bg-purple-500 rounded-full opacity-70"></div>
                <div className="w-28 h-28 bg-teal-500 opacity-75" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
              </div>

              {/* Center Content */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl font-black text-gray-800 tracking-tighter transform -skew-x-6">
                  {geometricContent.hero.title}
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-purple-600 tracking-wider transform skew-x-3">
                  {geometricContent.hero.subtitle}
                </p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {geometricContent.hero.description}
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-2xl">
                  EXPLORE GEOMETRIES
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                </button>
              </div>

              {/* Right Geometric Elements */}
              <div className="hidden lg:flex flex-col space-y-8">
                <div className="w-36 h-36 bg-pink-500 transform -rotate-12 opacity-80" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                <div className="w-28 h-28 bg-green-500 opacity-70"></div>
                <div className="w-32 h-32 bg-red-500 rounded-full transform rotate-12 opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      {geometricContent.sections.map((section, index) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}
        >
          <div className="container mx-auto px-4">
            <div className={getLayoutClasses(section.layout)}>
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 bg-${section.color}-500 transform rotate-45`}></div>
                    <span className={`text-${section.color}-600 font-bold text-lg tracking-wide`}>
                      {section.title}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-800 transform -skew-x-3">
                    {section.subtitle}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  {section.content.description.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {section.content.statistics.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`
                        p-4 bg-${section.color}-50 border-l-4 border-${section.color}-500
                        transform hover:scale-105 transition-all duration-300
                        ${stat.shape === 'triangle' ? 'skew-x-3' : 
                          stat.shape === 'circle' ? 'rounded-full' : 
                          stat.shape === 'square' ? 'rounded-none' : 'rounded-lg'}
                      `}
                    >
                      <div className={`text-2xl font-bold text-${section.color}-600`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {section.content.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 bg-${section.color}-500 transform rotate-45`}></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div className="relative group">
                  <img
                    src={section.image}
                    alt={section.subtitle}
                    className="w-full h-96 object-cover transform hover:skew-x-2 transition-all duration-500"
                  />
                  
                  {/* Geometric Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                    {section.geometricElements.map((element, eIndex) => (
                      <div
                        key={eIndex}
                        className={`
                          absolute w-16 h-16 bg-${element.color} opacity-20
                          ${element.shape === 'triangle' ? 'clip-path-triangle' : 
                            element.shape === 'circle' ? 'rounded-full' : 
                            element.shape === 'square' ? 'rounded-none' : 'clip-path-hexagon'}
                          transform transition-all duration-700 group-hover:scale-110
                        `}
                        style={{
                          top: `${20 + eIndex * 25}%`,
                          right: `${10 + eIndex * 15}%`,
                          clipPath: element.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                                   element.shape === 'hexagon' ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' :
                                   'none'
                        }}
                      />
                    ))}
                  </div>

                  {/* Color Block Overlay */}
                  <div className={`absolute top-4 left-4 w-24 h-24 bg-${section.color}-500 opacity-30 transform -rotate-12`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform skew-x-12"></div>
        </section>
      ))}

      {/* Geometric Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geometric-grid opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Triangle className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold">GEOMETRIC OOTY</span>
              </div>
              <p className="text-gray-400">
                Experience Ooty through the lens of modern geometric design and asymmetric layouts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">EXPLORE SHAPES</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-500 transform rotate-45"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <div className="w-8 h-8 bg-teal-500 clip-path-triangle"></div>
                <div className="w-8 h-8 bg-pink-500 clip-path-hexagon"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">GEOMETRIC LINKS</h3>
              <div className="flex space-x-6">
                <Share2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 transform hover:rotate-12" />
                <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300 transform hover:-rotate-12" />
                <Camera className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300 transform hover:rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AsymmetricGeometricTheme;