'use client'

import { useState } from 'react'
import { Search, Menu, X, Plane, Heart, Bookmark, User } from 'lucide-react'

export default function Header({ onSearchClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gradient font-playfair">
              Take Me There
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Experiences
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Stories
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Guides
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onSearchClick}
              className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-red-600 transition-all">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors font-medium">
                Destinations
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors font-medium">
                Experiences
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors font-medium">
                Stories
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors font-medium">
                Guides
              </a>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex space-x-2">
                  <button 
                    onClick={onSearchClick}
                    className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-red-600 transition-all">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}