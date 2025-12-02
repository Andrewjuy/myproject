import React, { useState, useEffect } from 'react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('MORNING');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$25.50",
      description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
      image: "/image copy 5.png",
      badge: null
    },
    {
      id: 2,
      name: "Lasagne",
      price: "$40.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      image: "/image copy 6.png",
      badge: "SEASONAL"
    },
    {
      id: 3,
      name: "Butternut Pumpkin",
      price: "$10.00",
      description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
      image: "/image copy 7.png",
      badge: null
    },
    {
      id: 4,
      name: "Tokusen Wagyu",
      price: "$39.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      image: "/image copy 8.png",
      badge: "NEW"
    },
    {
      id: 5,
      name: "Olivas Rellenas",
      price: "$25.00",
      description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
      image: "/image copy 9.png",
      badge: null
    },
    {
      id: 6,
      name: "Opu Fish",
      price: "$49.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      image: "/3536.jpg",
      badge: null
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <img src="/iamgee.png" alt="Menu Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-transparent to-[#b99a4a] opacity-70"></div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-[#b99a4a] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 border border-[#f0e6c8] rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#de6f08] rounded-full opacity-60 animate-ping"></div>
      
      {/* Animated particles */}
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-[#b99a4a] rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-[#f0e6c8] rounded-full animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section with enhanced animations */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative group">
            <h2 className="text-3xl cursor-pointer md:text-4xl lg:text-5xl font-serif text-white mb-4 font-semibold transform hover:scale-105 transition-transform duration-500">
              Special selection
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-linear-to-r from-[#b99a4a] to-[#de6f08] group-hover:w-full transition-all duration-700"></div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="text-[#b99a4a] animate-pulse">
              <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#f0e6c8] mb-8 font-semibold transform hover:scale-105 transition-transform duration-500 cursor-pointer">
            Delicious Menu
          </h3>
          
          {/* Menu Categories with enhanced animations */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {['MORNING', 'WEEKDAY LUNCH', 'DINNER', 'WINES'].map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-500 transform hover:scale-110 overflow-hidden group ${
                  activeCategory === category 
                    ? 'bg-linear-to-r from-[#b99a4a] to-[#de6f08] text-black shadow-2xl' 
                    : 'text-[#f0e6c8] hover:text-[#de6f08] border-2 border-[#b99a4a]'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid with fire animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border-2 border-[#b99a4a] border-opacity-30 hover:border-opacity-100 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:bg-black hover:bg-opacity-80 hover:rotate-1 relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#b99a4a] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* HOT badge with animation */}
              {item.badge && (
                <div className="absolute -top-2 -right-2 bg-linear-to-r from-[#de6f08] to-[#b99a4a] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-bold shadow-lg animate-bounce z-20">
                  {item.badge}
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-serif text-white font-semibold group-hover:text-[#b99a4a] transition-colors duration-500 transform group-hover:translate-x-2">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-lg font-serif bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] bg-clip-text text-transparent mb-2 font-semibold transform group-hover:scale-105 transition-transform duration-300">
                    {item.price}
                  </p>
                </div>
                <div className="w-20 h-20 ml-4 rounded-full overflow-hidden bg-linear-to-br from-[#b99a4a] to-[#d4b95a] shrink-0 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border-2 border-[#b99a4a]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <p className="text-[#f0e6c8] text-sm leading-relaxed group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-1 relative z-10">
                {item.description}
              </p>
              
              {/* Hover arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#b99a4a]">
                →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with enhanced animations */}
        <div className="text-center">
          <div className="bg-linear-to-r from-black to-gray-900 rounded-2xl p-8 mb-8 max-w-2xl mx-auto border-2 border-[#b99a4a] border-opacity-50 hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#b99a4a] to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:skew-x-0 transition-all duration-700"></div>
            
            <p className="text-white text-lg mb-4 font-semibold relative z-10 transform group-hover:scale-105 transition-transform duration-300">
              During winter daily from <span className="bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] bg-clip-text text-transparent animate-pulse">7:00 pm</span> to <span className="bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] bg-clip-text text-transparent animate-pulse">9:00 pm</span>
            </p>
          </div>
          
          {/* View All Menu Button with fire animation */}
          <button className="group relative border-2 border-[#b99a4a] text-white px-12 py-4 rounded-full font-semibold tracking-wider hover:bg-linear-to-r hover:from-[#b99a4a] hover:to-[#de6f08] hover:text-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">VIEW ALL MENU</span>
            
            {/* Animated background fill */}
            <div className="absolute inset-0 bg-linear-to-r from-[#b99a4a] to-[#de6f08] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#f0e6c8] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          </button>
        </div>

      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;