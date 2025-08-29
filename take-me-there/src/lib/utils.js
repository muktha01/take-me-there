// Utility functions for the Take Me There app

// Format price with currency
export function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Format date in readable format
export function formatDate(date) {
  return new Intl.DateFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

// Generate random heights for masonry layout
export function getRandomHeight() {
  const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88'];
  return heights[Math.floor(Math.random() * heights.length)];
}

// Truncate text to specified length
export function truncateText(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Generate slug from title
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Check if image URL is valid
export function isValidImageUrl(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

// Debounce function for search
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Filter destinations by search query
export function filterDestinations(destinations, query) {
  if (!query) return destinations;
  
  const searchQuery = query.toLowerCase();
  return destinations.filter(destination => 
    destination.title.toLowerCase().includes(searchQuery) ||
    destination.location.toLowerCase().includes(searchQuery) ||
    destination.country.toLowerCase().includes(searchQuery) ||
    destination.description.toLowerCase().includes(searchQuery) ||
    destination.category.toLowerCase().includes(searchQuery)
  );
}

// Sort destinations by various criteria
export function sortDestinations(destinations, sortBy = 'popular') {
  const sortedDestinations = [...destinations];
  
  switch (sortBy) {
    case 'popular':
      return sortedDestinations.sort((a, b) => b.likes - a.likes);
    case 'price-low':
      return sortedDestinations.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedDestinations.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedDestinations.sort((a, b) => b.rating - a.rating);
    case 'alphabetical':
      return sortedDestinations.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
      return sortedDestinations.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    default:
      return sortedDestinations;
  }
}

// Get random destinations
export function getRandomDestinations(destinations, count = 4) {
  const shuffled = [...destinations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Class name utility (similar to clsx)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Smooth scroll to element
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Local storage helpers (for client-side only)
export function getFromStorage(key, defaultValue = null) {
  if (typeof window !== 'undefined') {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
}

export function setToStorage(key, value) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }
}

// Image optimization helper
export function getOptimizedImageUrl(url, width = 800, height = 600, quality = 80) {
  // This is a placeholder - in a real app, you'd use a service like Cloudinary or Next.js Image
  return url;
}

// Generate color from string (for avatars, etc.)
export function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const colors = [
    'bg-rose-500', 'bg-pink-500', 'bg-red-500', 'bg-orange-500',
    'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500',
    'bg-purple-500', 'bg-teal-500'
  ];
  
  return colors[Math.abs(hash) % colors.length];
}