import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-300% animate-gradient ${className}`}>
    {children}
  </span>
);

export default GradientText;