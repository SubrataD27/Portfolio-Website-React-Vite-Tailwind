import React from 'react';
import { Send } from '../shared/icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all transform hover:scale-[1.02] flex items-center justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90",
    outline: "border border-purple-500 text-white hover:bg-purple-500/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export default Button;