import React, { useState, useEffect, useRef } from 'react';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the card animations
          setTimeout(() => setAnimatedItems([true, false, false]), 200);
          setTimeout(() => setAnimatedItems([true, true, false]), 400);
          setTimeout(() => setAnimatedItems([true, true, true]), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-linear-to-br from-gray-900 to-black py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#b99a4a] rounded-full opacity-60 animate-float-gentle-1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#f0e6c8] rounded-full opacity-40 animate-float-gentle-2"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#de6f08] rounded-full opacity-50 animate-float-gentle-3"></div>
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#b99a4a] rounded-full opacity-5 blur-3xl animate-orb-glow-1"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#f0e6c8] rounded-full opacity-5 blur-3xl animate-orb-glow-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section with welcoming animations */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block relative mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 animate-title-reveal">
              Flavors for royalty
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] animate-line-expand"></div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="text-[#b99a4a] animate-pulse-soft">
              <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <div className="animate-text-flow">
            <p className="text-lg font-semibold md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We Offer Top Notch
            </p>
            <span className="block text-sm md:text-base text-[#c5b291] mt-4 animate-subtitle-fade">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever.
            </span>
          </div>
        </div>

        {/* Cards Grid with elegant staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-16">
          
          {/* Breakfast Card */}
          <div className={`group text-center transform transition-all duration-700 ${
            animatedItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Image Box with elegant hover */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden mb-6 h-64 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 shadow-2xl">
                <img 
                  src="/temp.jpg" 
                  alt="Breakfast" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#b99a4a] rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-500 animate-ping-slow"></div>
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transform group-hover:translate-y-1 transition-transform duration-300">
              Breakfast
            </h3>
            <p className="text-[#c5b291] font-medium text-sm mb-6 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300">
              Start your day with our delicious breakfast selections and morning specialties
            </p>
            <button className="border-2 border-[#b99a4a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
              VIEW MENU
            </button>
          </div>

          {/* Appetizers Card */}
          <div className={`group text-center transform transition-all duration-700 delay-200 ${
            animatedItems[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Image Box */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden mb-6 h-64 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 shadow-2xl">
                <img 
                  src="/bey.jpg" 
                  alt="Appetizers" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#de6f08] rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-500 animate-ping-slower"></div>
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transform group-hover:translate-y-1 transition-transform duration-300">
              Appetizers
            </h3>
            <p className="text-[#c5b291] font-medium text-sm mb-6 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300">
              Perfect starters to awaken your taste buds before the main course
            </p>
            <button className="border-2 border-[#b99a4a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
              VIEW MENU
            </button>
          </div>

          {/* Drinks Card */}
          <div className={`group text-center transform transition-all duration-700 delay-400 ${
            animatedItems[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Image Box */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden mb-6 h-64 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 shadow-2xl">
                <img 
                  src="/por.jpg" 
                  alt="Drinks" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f0e6c8] rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-500 animate-ping-slowest"></div>
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transform group-hover:translate-y-1 transition-transform duration-300">
              Drinks
            </h3>
            <p className="text-[#c5b291] font-medium text-sm mb-6 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300">
              Refreshing beverages, fine wines, and crafted cocktails for every occasion
            </p>
            <button className="border-2 border-[#b99a4a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
              VIEW MENU
            </button>
          </div>

        </div>

        {/* Enhanced Professional Menu CTA */}
        <div className={`text-center mt-16 md:mt-20 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block group cursor-pointer">
            <div className="relative border-2 border-[#b99a4a] px-8 py-4 rounded-full transition-all duration-500 transform hover:bg-[#b99a4a] hover:scale-105 hover:shadow-xl overflow-hidden">
              <span className="text-white font-medium tracking-wide text-sm md:text-base group-hover:text-black transition-colors duration-500 relative z-10">
                EXPLORE OUR FULL MENU
              </span>
              
              {/* Animated background fill */}
              <div className="absolute inset-0 bg-[#b99a4a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>
            
            {/* Animated decorative line */}
            <div className="w-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] mx-auto mt-3 transition-all duration-500 group-hover:w-24 group-hover:opacity-100 opacity-0"></div>
            
            {/* Floating arrow indicator */}
            <div className="text-[#b99a4a] mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              ↓
            </div>
          </div>
        </div>

      </div>

      {/* Custom welcoming animations */}
      <style jsx>{`
        @keyframes title-reveal {
          0% { 
            letter-spacing: 10px;
            opacity: 0;
            filter: blur(5px);
          }
          100% { 
            letter-spacing: normal;
            opacity: 1;
            filter: blur(0);
          }
        }
        
        @keyframes line-expand {
          0% { width: 0; }
          100% { width: 200px; }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes text-flow {
          0% { 
            transform: translateY(20px);
            opacity: 0;
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes subtitle-fade {
          0% { 
            opacity: 0;
            transform: translateY(10px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-gentle-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -15px); }
        }
        
        @keyframes float-gentle-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 12px); }
        }
        
        @keyframes float-gentle-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -8px); }
        }
        
        @keyframes orb-glow-1 {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.1); opacity: 0.08; }
        }
        
        @keyframes orb-glow-2 {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.15); opacity: 0.07; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes ping-slowest {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        .animate-title-reveal {
          animation: title-reveal 1.5s ease-out forwards;
        }
        
        .animate-line-expand {
          animation: line-expand 1s ease-out 0.5s forwards;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        
        .animate-text-flow {
          animation: text-flow 1s ease-out 0.8s forwards;
        }
        
        .animate-subtitle-fade {
          animation: subtitle-fade 1s ease-out 1.2s forwards;
        }
        
        .animate-float-gentle-1 {
          animation: float-gentle-1 6s ease-in-out infinite;
        }
        
        .animate-float-gentle-2 {
          animation: float-gentle-2 8s ease-in-out infinite;
        }
        
        .animate-float-gentle-3 {
          animation: float-gentle-3 7s ease-in-out infinite;
        }
        
        .animate-orb-glow-1 {
          animation: orb-glow-1 8s ease-in-out infinite;
        }
        
        .animate-orb-glow-2 {
          animation: orb-glow-2 10s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s ease-out infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 3s ease-out infinite;
        }
        
        .animate-ping-slowest {
          animation: ping-slowest 4s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Section1;