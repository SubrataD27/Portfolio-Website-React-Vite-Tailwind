import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  multiline = false,
  rows = 4,
  className = '', 
  ...props 
}) => {
  const baseStyles = "w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors";
  const Component = multiline ? 'textarea' : 'input';

  return (
    <div>
      <label className="block text-gray-400 mb-2">{label}</label>
      <Component 
        className={`${baseStyles} ${className}`}
        rows={multiline ? rows : undefined}
        {...props}
      />
    </div>
  );
};

export default Input;