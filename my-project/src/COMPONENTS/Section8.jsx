import React, { useState, useEffect, useRef } from 'react';
import { FaUtensils, FaWineGlassAlt, FaCoffee, FaCookie, FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Section8 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const chefs = [
    {
      id: 1,
      name: "Willium Joe",
      position: "Master Chef",
      description: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
      image: "/image copy 10.png"
    },
    {
      id: 2,
      name: "Steave Den",
      position: "Master Chef",
      description: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
      image: "/image copy 11.png"
    },
    {
      id: 3,
      name: "Lily Sopy",
      position: "Master Chef",
      description: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
      image: "/image copy 12.png"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-linear-to-br from-black via-[#1a1200] to-[#b99a4a] py-20 md:py-28 overflow-hidden">
      
      {/* Animated Restaurant Icons in Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 animate-float-1">
          <FaUtensils className="text-4xl text-[#ffd700]" />
        </div>
        <div className="absolute top-40 right-20 animate-float-2">
          <FaWineGlassAlt className="text-3xl text-[#ffd700]" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-3">
          <FaCoffee className="text-5xl text-[#ffd700]" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-4">
          <FaCookie className="text-4xl text-[#ffd700]" />
        </div>
        <div className="absolute top-1/3 left-20 animate-float-5">
          <FaUtensils className="text-3xl text-[#ffd700]" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float-6">
          <FaWineGlassAlt className="text-4xl text-[#ffd700]" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-2 h-2 bg-[#ffd700] rounded-full animate-pulse-1"></div>
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-[#ffd700] rounded-full animate-pulse-2"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#ffd700] rounded-full animate-pulse-3"></div>
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-[#b99a4a] rounded-full animate-pulse-1"></div>
        <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-[#b99a4a] rounded-full animate-pulse-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-[#e27000] font-bold mb-4">
            Experienced team
          </h2>
          
          {/* SVG Divider */}
          <div className="flex justify-center mb-6">
            <div className="text-[#e27000]">
              <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 font-bold">
            Meet Our Chef
          </h3>
        </div>

        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {chefs.map((chef, index) => (
            <div 
              key={chef.id}
              className={`group text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(chef.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Chef Card */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(255,215,0,0.3)] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image Container - Fixed height and proper overflow */}
                <div className="relative overflow-hidden bg-gray-100 shrink-0" style={{ height: '320px' }}>
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: 'top center' }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  </div>
                  
                  {/* Social Icons - Appear on Hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      <div className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg backdrop-blur-sm">
                        <FaFacebook className="text-sm" />
                      </div>
                      <div className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center text-blue-400 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg backdrop-blur-sm">
                        <FaTwitter className="text-sm" />
                      </div>
                      <div className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center text-pink-500 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg backdrop-blur-sm">
                        <FaDribbble className="text-sm" />
                      </div>
                      <div className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center text-blue-700 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg backdrop-blur-sm">
                        <FaLinkedin className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content - Fixed to stay inside card */}
                <div className="p-6 grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-serif text-gray-900 mb-2 font-semibold">
                      {chef.name}
                    </h4>
                    
                    <p className="text-transparent bg-linear-to-r from-[#b99a4a] to-[#ffd700] bg-clip-text text-sm font-medium mb-4 uppercase tracking-wide">
                      {chef.position}
                    </p>
                    
                    <div className="w-12 h-1 bg-linear-to-r from-[#b99a4a] to-[#ffd700] mx-auto mb-4"></div>
                    
                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                      {chef.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#b99a4a] rounded-lg transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Team Button */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-linear-to-r from-[#b99a4a] to-[#ffd700] text-black px-8 py-4 rounded-full font-semibold hover:from-[#ffd700] hover:to-[#b99a4a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            VIEW ALL TEAM
          </button>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -15px) rotate(180deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 10px) scale(1.1); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -10px) rotate(180deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 15px); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10px, 20px) scale(1.2); }
        }
        @keyframes pulse-1 {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes pulse-2 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
        @keyframes pulse-3 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 11s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 13s ease-in-out infinite; }
        .animate-pulse-1 { animation: pulse-1 3s ease-in-out infinite; }
        .animate-pulse-2 { animation: pulse-2 4s ease-in-out infinite; }
        .animate-pulse-3 { animation: pulse-3 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Section8;