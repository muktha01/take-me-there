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

const categories = [
  { id: 'all', name: 'All Destinations', count: destinations.length },
  { id: 'beach', name: 'Beach Paradise', count: 12 },
  { id: 'mountain', name: 'Mountain Adventures', count: 8 },
  { id: 'city', name: 'City Escapes', count: 15 },
  { id: 'culture', name: 'Cultural Tours', count: 10 },
  { id: 'adventure', name: 'Adventure Sports', count: 7 },
  { id: 'luxury', name: 'Luxury Travel', count: 9 }
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

      <Newsletter />
      <Footer />
      
      <SearchOverlay
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        destinations={destinations}
      />
    </div>
  

  );
}