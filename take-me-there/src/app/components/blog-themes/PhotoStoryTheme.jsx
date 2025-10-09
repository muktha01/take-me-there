"use client";
import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  MapPin, 
  Heart, 
  Share2, 
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Play,
  Pause,
  Volume2,
  ZoomIn,
  Info,
  Star,
  Clock
} from 'lucide-react';

const PhotoStoryTheme = ({ data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showImageInfo, setShowImageInfo] = useState(false);

  // Create photo gallery from attractions and general gallery
  const allPhotos = [
    ...data.attractions.map(attraction => ({
      id: `attraction-${attraction.id}`,
      src: attraction.image,
      caption: attraction.name,
      description: attraction.description,
      location: attraction.name,
      category: attraction.category,
      rating: attraction.rating
    })),
    ...data.gallery.map(item => ({
      id: `gallery-${item.id}`,
      src: item.image,
      caption: item.caption,
      description: item.caption,
      location: data.location.name,
      category: item.category,
      rating: 4.5
    }))
  ];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto play lightbox
  useEffect(() => {
    let interval;
    if (autoPlay && lightboxOpen) {
      interval = setInterval(() => {
        setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, lightboxOpen, allPhotos.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setAutoPlay(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="parallax absolute inset-0 w-110 h-110" 
          data-speed="0.5"
        >
          <img 
            src={data.hero.mainImage} 
            alt={data.location.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-4xl">
            {/* Photo Credit */}
            <div className="flex items-center gap-2 mb-4 text-white/80">
              <Camera className="w-4 h-4" />
              <span className="text-sm">Photo Story by {data.meta.author}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-light leading-none mb-6">
              {data.location.name}
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 mb-8 max-w-2xl">
              {data.hero.subtitle}
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => openLightbox(0)}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Start Photo Tour
              </button>
              
              <button className="border border-white/50 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Guide
              </button>
            </div>
          </div>
        </div>

        {/* Floating Navigation */}
        <div className="absolute top-8 right-8 flex items-center gap-3">
          <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
            <Instagram className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6">Visual Journey</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience {data.location.name} through stunning photography that captures 
              the essence of this incredible destination.
            </p>
          </div>

          {/* Main Featured Image */}
          <div className="mb-16">
            <div 
              className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img 
                src={allPhotos[0].src} 
                alt={allPhotos[0].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* Image Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{allPhotos[0].caption}</h3>
                    <p className="text-white/80">{allPhotos[0].description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{allPhotos[0].rating}</span>
                  </div>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Instagram-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-16">
            {allPhotos.slice(1, 13).map((photo, index) => (
              <div 
                key={photo.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  (index + 1) % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index + 1)}
              >
                <div className="aspect-square">
                  <img 
                    src={photo.src} 
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <Camera className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs font-medium">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Food Photography Section */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-center">Culinary Delights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.food.categories.slice(0, 3).map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h4 className="text-xl font-medium text-center">{category.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.slice(0, 4).map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(allPhotos.findIndex(p => p.src === item.image))}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-white/80">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all">
              Load More Photos
            </button>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-60"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all z-60"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all z-60"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Controls */}
          <div className="absolute top-6 left-6 flex items-center gap-3 z-60">
            <button 
              onClick={() => setAutoPlay(!autoPlay)}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              {autoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => setShowImageInfo(!showImageInfo)}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <Info className="w-5 h-5" />
            </button>
            
            <div className="text-sm text-white/80">
              {lightboxIndex + 1} / {allPhotos.length}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-[90vh] mx-auto px-20">
            <img 
              src={allPhotos[lightboxIndex].src} 
              alt={allPhotos[lightboxIndex].caption}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Info Panel */}
          {showImageInfo && (
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg p-6 z-60">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-light mb-2">{allPhotos[lightboxIndex].caption}</h3>
                <p className="text-white/80 mb-4">{allPhotos[lightboxIndex].description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{allPhotos[lightboxIndex].location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{allPhotos[lightboxIndex].rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-60 max-w-md overflow-x-auto">
            {allPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  index === lightboxIndex ? 'border-white' : 'border-transparent opacity-60'
                }`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoStoryTheme;