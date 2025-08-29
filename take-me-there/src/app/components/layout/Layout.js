'use client';

import { useState } from 'react';
import { destinations } from '@/lib/data/destinations';
import Header from './Header';
import Footer from './Footer';
import SearchOverlay from '../ui/SearchOverlay';

export default function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      
      <main className=" ">
        {children}
      </main>

      <Footer />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        destinations={destinations}
      />
    </div>
  );
}
