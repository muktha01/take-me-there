







// Badge Component (src/components/ui/Badge.js)
export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full transition-all duration-200';
  
  const variants = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
    secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    success: 'bg-green-100 text-green-700 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    danger: 'bg-red-100 text-red-700 hover:bg-red-200',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-rose-500 hover:text-rose-600'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}