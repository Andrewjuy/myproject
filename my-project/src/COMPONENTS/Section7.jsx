import React, { useState, useEffect, useRef } from 'react';
import { FaShieldAlt, FaLeaf, FaUserTie, FaGlassCheers } from 'react-icons/fa';

const Section7 = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      id: 1,
      icon: FaShieldAlt,
      title: 'Hygienic Food',
      description: 'Our ingredients are sourced daily and prepared in immaculate conditions.'
    },
    {
      id: 2,
      icon: FaLeaf,
      title: 'Fresh Environment',
      description: 'Elegant ambiance with perfect lighting and comfortable seating.'
    },
    {
      id: 3,
      icon: FaUserTie,
      title: 'Skilled Chefs',
      description: 'Award-winning chefs with decades of culinary expertise.'
    },
    {
      id: 4,
      icon: FaGlassCheers,
      title: 'Event & Party',
      description: 'Perfect venue for celebrations with customized menus.'
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 md:py-28 overflow-hidden">
      
      {/* Background Image - Easy to replace */}
      <img 
        src="/refv.png" 
        alt="Restaurant Ambiance" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 font-bold">
            Why Choose Us
          </h2>
          
          {/* Gold Line Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] rounded-full"></div>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#f0e6c8] mb-8 font-semibold">
            Our Strength & Excellence
          </h3>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of exquisite cuisine, elegant ambiance, and exceptional service 
            that sets Elite_Delici apart as the premier dining destination.
          </p>
        </div>

        {/* Features Grid - Clean & Professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`group text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-[#b99a4a] border-opacity-30 hover:border-opacity-100 transition-all duration-500 h-full hover:bg-black hover:bg-opacity-80">
                
                {/* Icon with professional animation */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#b99a4a] to-[#d4b95a] flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="text-2xl text-white transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#b99a4a] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-serif text-white mb-4 font-semibold group-hover:text-[#f0e6c8] transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <div className="w-12 h-1 bg-[#b99a4a] mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="border-2 border-[#b99a4a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105">
            DISCOVER MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section7;