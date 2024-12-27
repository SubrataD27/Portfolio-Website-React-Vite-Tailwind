import React, { useEffect, useState } from 'react';
import { Cloud, Server, Database } from 'lucide-react';
import GradientText from './GradientText';

const CloudPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-black to-purple-900/20 flex items-center justify-center">
      <div className="text-center p-8 relative">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Cloud 
            size={80} 
            className="absolute top-0 left-0 text-blue-500 animate-float opacity-80"
          />
          <Server 
            size={40} 
            className="absolute bottom-4 right-4 text-purple-500 animate-pulse"
          />
          <Database 
            size={40} 
            className="absolute bottom-4 left-4 text-pink-500 animate-bounce-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-spin-slow"></div>
        </div>

        <GradientText className="text-3xl font-bold mb-4">
          Loading Experience
        </GradientText>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-400 mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default CloudPreloader;