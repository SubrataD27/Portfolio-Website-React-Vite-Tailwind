import React from 'react';

const ParticlesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Radial gradient background */}
    <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#3B0764,transparent)]" />
    {/* Pattern overlay with Imgur background image */}
    <div
      className="absolute w-full h-full opacity-[0.03]"
      style={{
        backgroundImage: `url("https://i.imgur.com/GFLkn3s.jpg")`, // Ensure this is the direct image URL
      }}
    />
  </div>
);

export default ParticlesBackground;
