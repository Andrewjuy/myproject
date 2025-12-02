import React, { useState, useEffect } from 'react';

const SpecialDish = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-linear-to-br from-gray-900 to-black py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#b99a4a] rounded-full opacity-5 animate-orbital-1"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-[#f0e6c8] rounded-full opacity-5 animate-orbital-2"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#de6f08] rounded-full opacity-10 animate-orbital-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Image with unique animations */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Main image container */}
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
                <div className="w-full h-80 md:h-96 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <img 
                    src="/top.jpg" 
                    alt="Lobster Tortellini" 
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                {/* Floating ingredients animation */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#b99a4a] rounded-full opacity-80 animate-float-ingredient-1"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#f0e6c8] rounded-full opacity-80 animate-float-ingredient-2"></div>
                <div className="absolute top-4 -right-2 w-4 h-4 bg-[#de6f08] rounded-full opacity-80 animate-float-ingredient-3"></div>
              </div>
              
              {/* Rotating decorative frames */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#b99a4a] rounded-xl opacity-30 animate-rotate-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#f0e6c8] rounded-lg opacity-40 animate-rotate-reverse"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#b99a4a] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-700 transform group-hover:scale-105"></div>
            </div>
          </div>

          {/* Right: Content with typewriter and slide animations */}
          <div className="w-full lg:w-1/2">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              
              {/* Header with typewriter effect */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 overflow-hidden">
                  <span className="animate-typewriter block whitespace-nowrap overflow-hidden border-r-4 border-[#b99a4a]">
                    Special dish
                  </span>
                </h2>
                
                <div className="flex mb-6">
                  <div className="text-[#b99a4a] animate-pulse-glow">
                    <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                      <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 animate-text-glow">
                  Lobster Tortellini
                </h3>
              </div>

              {/* Description with fade-in words */}
              <p className="text-[#b99a4a] leading-relaxed mb-8 text-lg animate-word-fade">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.
              </p>

              {/* Price with counter animation */}
              <div className="mb-8">
                <div className="flex items-center gap-4 animate-price-bounce">
                  <span className="text-3xl font-serif font-bold bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] bg-clip-text text-transparent">
                    $20.00
                  </span>
                  <span className="text-xl text-gray-400 line-through animate-strike-through">
                    $40.00
                  </span>
                </div>
                <div className="w-32 h-1 bg-linear-to-r from-[#b99a4a] to-transparent mt-2 animate-width-grow"></div>
              </div>

              {/* View All Menu Button with magnetic effect */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative border-2 border-[#b99a4a] text-white px-8 py-4 rounded-full font-medium tracking-wider overflow-hidden animate-button-float">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    VIEW ALL MENU
                  </span>
                  
                  {/* Magnetic fill effect */}
                  <div className="absolute inset-0 bg-[#b99a4a] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                  
                  {/* Spark trail effect */}
                  <div className="absolute -inset-1 bg-linear-to-r from-transparent via-[#f0e6c8] to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:skew-x-0 transition-all duration-700"></div>
                </button>
              </div>

              {/* Floating order badge */}
              <div className="mt-8 inline-flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-full border border-[#b99a4a] border-opacity-30 animate-pulse-gentle">
                <div className="w-2 h-2 bg-[#de6f08] rounded-full animate-ping"></div>
                <span className="text-sm text-[#f0e6c8]">🔥 50+ Orders Today</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Custom unique animations */}
      <style jsx>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes float-ingredient-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(90deg); }
          50% { transform: translate(5px, -25px) rotate(180deg); }
          75% { transform: translate(-5px, -15px) rotate(270deg); }
        }
        
        @keyframes float-ingredient-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-8px, 12px) rotate(120deg); }
          66% { transform: translate(8px, 18px) rotate(240deg); }
        }
        
        @keyframes float-ingredient-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5px, -8px) scale(1.2); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes orbital-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(100px, 50px) rotate(360deg); }
        }
        
        @keyframes orbital-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-80px, -30px) rotate(-360deg); }
        }
        
        @keyframes orbital-3 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(60px, -40px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(185, 154, 74, 0.5); }
          50% { text-shadow: 0 0 20px rgba(185, 154, 74, 0.8), 0 0 30px rgba(185, 154, 74, 0.6); }
        }
        
        @keyframes word-fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes price-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes strike-through {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes width-grow {
          from { width: 0; }
          to { width: 8rem; }
        }
        
        @keyframes button-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }

        .animate-typewriter {
          animation: typewriter 2s steps(40) 1s 1 normal both;
        }
        
        .animate-float-ingredient-1 {
          animation: float-ingredient-1 6s ease-in-out infinite;
        }
        
        .animate-float-ingredient-2 {
          animation: float-ingredient-2 8s ease-in-out infinite;
        }
        
        .animate-float-ingredient-3 {
          animation: float-ingredient-3 5s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 15s linear infinite;
        }
        
        .animate-orbital-1 {
          animation: orbital-1 25s linear infinite;
        }
        
        .animate-orbital-2 {
          animation: orbital-2 30s linear infinite;
        }
        
        .animate-orbital-3 {
          animation: orbital-3 20s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-word-fade {
          animation: word-fade 1.5s ease-out forwards;
        }
        
        .animate-price-bounce {
          animation: price-bounce 2s ease-in-out;
        }
        
        .animate-strike-through {
          position: relative;
        }
        
        .animate-strike-through::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 0;
          height: 2px;
          background: #b99a4a;
          animation: strike-through 1s ease-in-out 2s forwards;
        }
        
        .animate-width-grow {
          animation: width-grow 1.5s ease-out 2.5s forwards;
        }
        
        .animate-button-float {
          animation: button-float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SpecialDish;