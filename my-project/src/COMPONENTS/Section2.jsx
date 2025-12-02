import React, { useState, useEffect, useRef } from 'react';

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setTextRevealed(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-linear-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#b99a4a] rounded-full animate-particle-1"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#de6f08] rounded-full animate-particle-2"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#f0e6c8] rounded-full animate-particle-3"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#b99a4a] rounded-full animate-particle-4"></div>
      </div>

      {/* Geometric background shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 border-8 border-[#b99a4a] opacity-5 rotate-45 animate-shape-drift-1"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 border-4 border-[#f0e6c8] opacity-5 rotate-12 animate-shape-drift-2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Text Content with advanced animations */}
          <div className="w-full lg:w-1/2">
            <div className={`max-w-2xl transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              
              {/* Header with split text animation */}
              <div className="mb-8 overflow-hidden">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  <span className="inline-block animate-split-text-1">Our</span>{' '}
                  <span className="inline-block animate-split-text-2">story</span>
                </h2>
                
                <div className="flex mb-6">
                  <div className="text-[#b99a4a] animate-line-expand">
                    <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                      <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 animate-title-glow">
                  Every Flavor Tells a Story
                </h3>
              </div>

              {/* Description with cascading text reveal */}
              <div className="mb-8">
                <p className={`text-gray-600 leading-relaxed text-lg transform transition-all duration-700 ${
                  textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
                </p>
              </div>

              {/* Phone Number with digital counter effect */}
              <div className="mb-8 animate-number-count">
                <p className="text-[#b99a4a] font-bold text-sm mb-2 animate-pulse-slow">Book Through Call</p>
                <p className="text-2xl text-gray-900 font-mono animate-digital-flip">
                  +234 70 183 5355
                </p>
                <div className="w-24 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent mt-1 animate-underline-grow"></div>
              </div>

              {/* Read More Buttons with holographic effect */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-linear-to-r from-[#b99a4a] to-[#de6f08] text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl animate-button-ripple">
                  <span className="relative z-10 flex items-center">
                    DETAILS
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Holographic shine */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:skew-x-0 transition-all duration-700"></div>
                </button>
                
                <button className="group relative border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-500 animate-button-magnetic">
                  <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-500">
                    READ MORE
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                  
                  {/* Magnetic fill */}
                  <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Border glow */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#b99a4a] to-[#de6f08] rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                </button>
              </div>

              {/* Floating achievement badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-white px-4 py-2 rounded-full border border-[#b99a4a] shadow-lg animate-badge-float-1">
                  <span className="text-sm text-gray-700">🏆 15+ Years Experience</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-[#b99a4a] shadow-lg animate-badge-float-2">
                  <span className="text-sm text-gray-700">⭐ 500+ 5-Star Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images with 3D parallax effects */}
          <div className="w-full lg:w-1/2 relative">
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              
              {/* Main Large Image with parallax */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-700 animate-image-float">
                <div className="w-full h-80 md:h-96 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/inid.jpg" 
                    alt="Our Restaurant" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Small Overlay Image with advanced animation */}
              <div className="absolute -bottom-8 -left-8 z-20 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 hover:-rotate-6 transition-all duration-500 animate-mini-image-pop">
                <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <img 
                    src="/1902.jpg" 
                    alt="Chef Cooking" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating chef hat icon */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#b99a4a] rounded-full flex items-center justify-center shadow-lg animate-chef-bounce">
                  <span className="text-white text-sm">👨‍🍳</span>
                </div>
              </div>

              {/* Animated decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#b99a4a] rounded-xl opacity-30 animate-spin-slow"></div>
              <div className="absolute bottom-4 -right-4 w-16 h-16 border-2 border-[#f0e6c8] rounded-lg opacity-40 animate-spin-reverse"></div>
              
              {/* Floating ingredients */}
              <div className="absolute top-10 -left-4 w-6 h-6 bg-[#de6f08] rounded-full opacity-80 animate-ingredient-float-1"></div>
              <div className="absolute bottom-20 -right-6 w-4 h-4 bg-[#b99a4a] rounded-full opacity-80 animate-ingredient-float-2"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom advanced animations */}
      <style jsx>{`
        @keyframes split-text-1 {
          0% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
          60% { transform: translateX(10px) rotate(2deg); opacity: 1; }
          100% { transform: translateX(0) rotate(0); opacity: 1; }
        }
        
        @keyframes split-text-2 {
          0% { transform: translateX(100px) rotate(10deg); opacity: 0; }
          60% { transform: translateX(-10px) rotate(-2deg); opacity: 1; }
          100% { transform: translateX(0) rotate(0); opacity: 1; }
        }
        
        @keyframes line-expand {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 0px rgba(185, 154, 74, 0); }
          50% { text-shadow: 0 0 15px rgba(185, 154, 74, 0.4); }
        }
        
        @keyframes number-count {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes digital-flip {
          0% { letter-spacing: 10px; opacity: 0; }
          100% { letter-spacing: normal; opacity: 1; }
        }
        
        @keyframes underline-grow {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        
        @keyframes button-ripple {
          0% { box-shadow: 0 0 0 0 rgba(185, 154, 74, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(185, 154, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(185, 154, 74, 0); }
        }
        
        @keyframes button-magnetic {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes badge-float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes badge-float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes image-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes mini-image-pop {
          0% { transform: scale(0.8) rotate(-5deg); opacity: 0; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        
        @keyframes chef-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes ingredient-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -8px) rotate(90deg); }
          50% { transform: translate(2px, -12px) rotate(180deg); }
          75% { transform: translate(-3px, -8px) rotate(270deg); }
        }
        
        @keyframes ingredient-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4px, 6px) scale(1.2); }
        }
        
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, 15px); opacity: 0.8; }
        }
        
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(-15px, 10px); opacity: 0.9; }
        }
        
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(10px, -20px); opacity: 1; }
        }
        
        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(-20px, -10px); opacity: 0.7; }
        }
        
        @keyframes shape-drift-1 {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(50deg) translate(10px, 5px); }
        }
        
        @keyframes shape-drift-2 {
          0%, 100% { transform: rotate(12deg) translate(0, 0); }
          50% { transform: rotate(8deg) translate(-15px, 8px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-split-text-1 {
          animation: split-text-1 1s ease-out forwards;
        }
        
        .animate-split-text-2 {
          animation: split-text-2 1s ease-out 0.2s forwards;
        }
        
        .animate-line-expand {
          animation: line-expand 1s ease-out 0.5s forwards;
        }
        
        .animate-title-glow {
          animation: title-glow 3s ease-in-out infinite 1s;
        }
        
        .animate-number-count {
          animation: number-count 1s ease-out 1.2s forwards;
        }
        
        .animate-digital-flip {
          animation: digital-flip 1.5s ease-out 1.5s forwards;
        }
        
        .animate-underline-grow {
          animation: underline-grow 1s ease-out 2s forwards;
        }
        
        .animate-button-ripple {
          animation: button-ripple 2s ease-in-out infinite 2.5s;
        }
        
        .animate-button-magnetic {
          animation: button-magnetic 3s ease-in-out infinite 2.7s;
        }
        
        .animate-badge-float-1 {
          animation: badge-float-1 4s ease-in-out infinite 3s;
        }
        
        .animate-badge-float-2 {
          animation: badge-float-2 5s ease-in-out infinite 3.2s;
        }
        
        .animate-image-float {
          animation: image-float 6s ease-in-out infinite;
        }
        
        .animate-mini-image-pop {
          animation: mini-image-pop 1s ease-out 0.8s forwards;
        }
        
        .animate-chef-bounce {
          animation: chef-bounce 2s ease-in-out infinite 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-ingredient-float-1 {
          animation: ingredient-float-1 8s ease-in-out infinite;
        }
        
        .animate-ingredient-float-2 {
          animation: ingredient-float-2 6s ease-in-out infinite;
        }
        
        .animate-particle-1 {
          animation: particle-1 8s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle-2 10s ease-in-out infinite;
        }
        
        .animate-particle-3 {
          animation: particle-3 12s ease-in-out infinite;
        }
        
        .animate-particle-4 {
          animation: particle-4 9s ease-in-out infinite;
        }
        
        .animate-shape-drift-1 {
          animation: shape-drift-1 25s ease-in-out infinite;
        }
        
        .animate-shape-drift-2 {
          animation: shape-drift-2 30s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OurStory;