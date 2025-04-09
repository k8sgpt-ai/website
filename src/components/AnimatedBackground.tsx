import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      
      {/* Vertical lines only grid */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 flex justify-between">
          <div className="w-px h-full bg-gray-300"></div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[2400px] h-[2400px] rounded-full bg-primary/40 blur-2xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[2200px] h-[2200px] rounded-full bg-secondary/40 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-[2000px] h-[2000px] rounded-full bg-primary/40 blur-2xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground; 