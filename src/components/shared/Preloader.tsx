import React, { useEffect, useState } from 'react';
import GradientText from './GradientText';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mb-4 mx-auto">
          <div className="absolute inset-0 border-4 border-t-purple-500 border-r-pink-500 border-b-purple-500 border-l-pink-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-pink-500 border-r-purple-500 border-b-pink-500 border-l-purple-500 rounded-full animate-spin-reverse"></div>
        </div>
        <GradientText className="text-2xl font-bold animate-pulse">
          Loading...
        </GradientText>
      </div>
    </div>
  );
};

export default Preloader;