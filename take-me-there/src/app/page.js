'use client';

import { useState } from 'react';
import Header from '@/app/components/layout/Header';
import Hero from '@/app/components/sections/Hero';
import CategoryFilter from '@/app/components/ui/CategoryFilter';
import MasonryGrid from '@/app/components/layout/MansonryGrid';
import Newsletter from '@/app/components/sections/NewsletterSection';
import Footer from '@/app/components/layout/Footer';
import SearchOverlay from '@/app/components/ui/SearchOverlay';
import { destinations } from '@/lib/data/destinations';
import MapComponent from './components/layout/map';
import BlogPages from './components/temp/Blogpage';

const categories = [
  { id: 'all', name: 'All Destinations', count: destinations.length },
  { id: 'temples', name: 'Sacred Temples', count: destinations.filter(d => d.category === 'temples').length },
  { id: 'mountains', name: 'Hill Stations', count: destinations.filter(d => d.category === 'mountains').length },
  { id: 'beaches', name: 'Coastal Paradise', count: destinations.filter(d => d.category === 'beaches').length },
  { id: 'heritage', name: 'Royal Heritage', count: destinations.filter(d => d.category === 'heritage').length },
  { id: 'cities', name: 'Metro Cities', count: destinations.filter(d => d.category === 'cities').length },
  { id: 'backwaters', name: 'Backwaters', count: destinations.filter(d => d.category === 'backwaters').length },
  { id: 'wildlife', name: 'Wildlife Safari', count: destinations.filter(d => d.category === 'wildlife').length },
  { id: 'spiritual', name: 'Spiritual Retreats', count: destinations.filter(d => d.category === 'spiritual').length }
];

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedDestinations, setLikedDestinations] = useState(new Set());
  const [savedDestinations, setSavedDestinations] = useState(new Set());

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const handleLike = (destinationId) => {
    setLikedDestinations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(destinationId)) {
        newSet.delete(destinationId);
      } else {
        newSet.add(destinationId);
      }
      return newSet;
    });
  };

  const handleSave = (destinationId) => {
    setSavedDestinations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(destinationId)) {
        newSet.delete(destinationId);
      } else {
        newSet.add(destinationId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      
      <Hero />
      
      <main id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <MasonryGrid
          destinations={filteredDestinations}
          likedDestinations={likedDestinations}
          savedDestinations={savedDestinations}
          onLike={handleLike}
          onSave={handleSave}
        />
      </main>

      
      <MapComponent />
      <Newsletter />

      <BlogPages />
      <Footer />
      
      
      <SearchOverlay
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        destinations={destinations}
      />
    </div>
  

  );
}