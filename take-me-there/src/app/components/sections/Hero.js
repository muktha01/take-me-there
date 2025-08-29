'use client'

import { useState, useEffect } from 'react'
import { Search, Play, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero({ onSearchClick }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
      title: 'Discover Amazing Places',
      subtitle: 'Let\'s discover the world together'
    },
    {
      url: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1920&h=1080&fit=crop',
      title: 'Create Unforgettable Memories',
      subtitle: 'Adventures that last a lifetime'
    },
    {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop',
      title: 'Explore Hidden Gems',
      subtitle: 'Journey to the extraordinary'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [heroImages.length])

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
           <Image
              src={image.url}
              alt={image.title}
              width={800}       
              height={600}     
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/15 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-bounce" />
        <div className="absolute bottom-60 right-1/4 w-5 h-5 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-rose-400/20 to-red-400/20 rounded-full animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 leading-none">
            Take Me There
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-red-400 mx-auto rounded-full mb-6" />
        </div>

        {/* Dynamic Titles */}
        <div className="mb-8 h-32 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            {heroImages[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 animate-fade-in delay-200">
            {heroImages[currentSlide].subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div
            onClick={onSearchClick}
            className="relative group cursor-pointer"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex items-center space-x-4">
                <Search className="w-6 h-6 text-white/80" />
                <span className="text-white/80 text-lg">Where do you want to go?</span>
              </div>
              <div className="bg-gradient-to-r from-rose-500 to-red-500 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button 
            onClick={scrollToDestinations}
            className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Destinations
          </button>
          
          <button className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={scrollToDestinations}
          className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </button>
      </div>

      {/* Side Stats */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4 border border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-white/80 text-sm">Destinations</div>
          </div>
          <div className="w-12 h-px bg-white/30 mx-auto" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
          <div className="w-12 h-px bg-white/30 mx-auto" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9★</div>
            <div className="text-white/80 text-sm">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="absolute right-8 bottom-20 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
            <Image
  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
  alt="Traveler"
  width={40}
  height={40}
  className="w-8 h-8 rounded-full border-2 border-white"
/>

<Image
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  alt="Traveler"
  width={40}
  height={40}
  className="w-8 h-8 rounded-full border-2 border-white"
/>

<Image
  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  alt="Traveler"
  width={40}
  height={40}
  className="w-8 h-8 rounded-full border-2 border-white"
/>
            </div>
            <div>
              <div className="text-white text-sm font-medium">2.5K travelers</div>
              <div className="text-white/70 text-xs">joined this week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}