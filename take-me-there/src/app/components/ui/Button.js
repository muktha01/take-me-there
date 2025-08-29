// Button Component (src/components/ui/Button.js)
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-rose-500 to-red-500 text-white hover:from-rose-600 hover:to-red-600 focus:ring-rose-300 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-rose-600 border-2 border-rose-500 hover:bg-rose-50 focus:ring-rose-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-rose-500 hover:text-rose-600 focus:ring-rose-300',
    ghost: 'text-gray-600 hover:text-rose-600 hover:bg-rose-50 focus:ring-rose-300'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : '';
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
