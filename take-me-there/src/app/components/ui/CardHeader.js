export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}