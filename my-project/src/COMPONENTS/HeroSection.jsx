import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextRevealed(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-32 md:pt-0"
      style={{
                    backgroundImage: 'url("/image.png")'
      }}
    >
      {/* Clean Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#b99a4a] rounded-full opacity-60 animate-gentle-float-1"></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-[#f0e6c8] rounded-full opacity-40 animate-gentle-float-2"></div>
      </div>

      {/* Circular Founding Year Display - Mobile Optimized */}
<div className="absolute top-40 md:top-32 right-4 md:right-8 z-30">
  <div className="relative">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-80 rounded-full border-2 border-[#b99a4a] shadow-lg flex items-center justify-center animate-circular-rotate">
      <div className="text-center">
        <div className="text-[8px] md:text-[10px] text-[#f0e6c8] font-medium mb-1">ESTABLISHED</div>
        <div className="text-base md:text-lg font-serif text-[#b99a4a] font-bold leading-none">2025</div>
      </div>
    </div>
    
    {/* Rotating text ring */}
    <div className="absolute -inset-2 md:-inset-3 rounded-full">
      <div className="relative w-full h-full animate-text-rotate">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] md:text-[8px] text-[#b99a4a] font-semibold tracking-widest uppercase">
        </span>
      </div>
    </div>
  </div>
</div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left: Text content with clean animations */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* FIND A TABLE Button */}
              <div className={`mb-6 lg:mb-8 transform transition-all duration-700 ${
                textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button
                  className="border-2 border-[#b99a4a] text-white px-6 lg:px-8 py-3 lg:py-4 text-sm font-semibold tracking-widest rounded-lg hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  FIND A TABLE
                </button>
              </div>

              {/* Main Heading */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 lg:mb-6 leading-tight">
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <span className="text-white">DELIGHTFUL</span>
                  </div>
                  <div className={`transform transition-all duration-1000 delay-500 ${
                    textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <span className="text-white">EXPER</span>
                    <span className="text-amber-600">IENCE</span>
                  </div>
                </h1>
              </div>

              {/* Subheading */}
              <div className={`mb-4 lg:mb-6 transform transition-all duration-700 delay-700 ${
                textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-light">
                  For the love of <span className="text-[#b99a4a] font-semibold">delicious food</span>
                </p>
              </div>

              {/* Description */}
              <div className={`mb-6 lg:mb-10 transform transition-all duration-700 delay-900 ${
                textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-base sm:text-lg font-medium text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Come with family & feel the joy of mouthwatering food. Enjoy carefully curated seasonal dishes and a warm, professional atmosphere.
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start transform transition-all duration-700 delay-1100 ${
                textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button className="bg-[#b99a4a] text-black px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-[#a58b3f] transform hover:scale-105 transition-all duration-300 shadow-lg">
                  VIEW OUR MENU
                </button>
                
                <button className="border-2 border-[#b99a4a] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-[#b99a4a] hover:text-black transform hover:scale-105 transition-all duration-300">
                  RESERVE NOW
                </button>
              </div>
            </div>
          </div>

          {/* Right: Premium Dining Card - Clean and Professional */}
          <div className={`w-full lg:w-2/5 flex justify-center transform transition-all duration-700 delay-1300 ${
            textRevealed ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="group bg-black bg-opacity-70 border-2 border-[#b99a4a] rounded-xl p-6 lg:p-8 shadow-xl transform hover:scale-105 transition-all duration-500 max-w-sm lg:max-w-md w-full">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-serif text-[#b99a4a] mb-4 lg:mb-6 font-semibold">
                  Premium Dining
                </h3>
                <div className="w-20 lg:w-24 h-1 bg-[#b99a4a] mx-auto mb-4 lg:mb-6"></div>
                
                <div className="space-y-3 lg:space-y-4 text-white text-sm lg:text-base">
                  <div className="flex justify-between items-center py-2 border-b border-[#b99a4a] border-opacity-30">
                    <span>Private Tables</span>
                    <span className="text-[#b99a4a]">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#b99a4a] border-opacity-30">
                    <span>Chef's Special</span>
                    <span className="text-[#b99a4a]">Daily</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#b99a4a] border-opacity-30">
                    <span>Wine Pairing</span>
                    <span className="text-[#b99a4a]">Expert</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Ambiance</span>
                    <span className="text-[#b99a4a]">Luxury</span>
                  </div>
                </div>

                <button className="mt-6 lg:mt-8 w-full bg-[#b99a4a] text-black py-3 lg:py-4 rounded-lg font-semibold hover:bg-[#a58b3f] transform hover:scale-105 transition-all duration-300">
                  BOOK YOUR TABLE
                </button>
                
                <p className="text-xs lg:text-sm text-gray-300 mt-3 lg:mt-4">
                  * Reserve 24 hours in advance for best experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-[#b99a4a] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#b99a4a] rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Custom Clean Animations */}
      <style jsx>{`
        @keyframes gentle-float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gentle-float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes circular-rotate {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes text-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        .animate-gentle-float-1 {
          animation: gentle-float-1 6s ease-in-out infinite;
        }
        
        .animate-gentle-float-2 {
          animation: gentle-float-2 8s ease-in-out infinite;
        }
        
        .animate-circular-rotate {
          animation: circular-rotate 20s linear infinite;
        }
        
        .animate-text-rotate {
          animation: text-rotate 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;