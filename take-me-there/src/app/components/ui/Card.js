// Card Component (src/components/ui/Card.js)
export function Card({ children, className = '', hover = true, ...props }) {
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105' : '';
  
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg transition-all duration-300 ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
