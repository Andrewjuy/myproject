import React, { useState, useEffect } from 'react';

const SpecialOffer = () => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const specialItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$39.00",
      description: "Avocados with crab meat, red onion, crab salad red bell pepper...",
      image: "/36196.jpg",
      category: "salads"
    },
    {
      id: 2,
      name: "Tokusen Wagyu",
      price: "$45.00",
      description: "Tomatoes, green bell pepper, sliced cucumber onion, olives...",
      image: "/1869.jpg",
      category: "meat"
    },
    {
      id: 3,
      name: "Butternut Pumpkin",
      price: "$15.00",
      description: "Avocados with crab meat, red onion, crab salad stuffed bell pepper...",
      image: "/8499.jpg",
      category: "vegetarian"
    },
    {
      id: 4,
      name: "Opu Fish",
      price: "$12.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
      image: "/2147765505.jpg",
      category: "seafood"
    },
    {
      id: 5,
      name: "Mediterranean Pasta",
      price: "$28.00",
      description: "Fresh pasta with olive oil, garlic, sun-dried tomatoes and basil...",
      image: "/4839.jpg",
      category: "pasta"
    },
    {
      id: 6,
      name: "Truffle Risotto",
      price: "$52.00",
      description: "Creamy arborio rice with black truffle and parmesan cheese...",
      image: "/27549.jpg",
      category: "rice"
    },
    {
      id: 7,
      name: "Seafood Platter",
      price: "$65.00",
      description: "Fresh lobster, shrimp, scallops and oysters with lemon butter...",
      image: "/1868.jpg",
      category: "seafood"
    },
    {
      id: 8,
      name: "Beef Wellington",
      price: "$48.00",
      description: "Prime beef tenderloin wrapped in puff pastry with mushroom duxelles...",
      image: "/1203.jpg",
      category: "meat"
    },
    {
      id: 9,
      name: "Vegetable Curry",
      price: "$22.00",
      description: "Spicy coconut curry with seasonal vegetables and jasmine rice...",
      image: "/27205.jpg",
      category: "vegetarian"
    },
    {
      id: 10,
      name: "Chocolate Soufflé",
      price: "$18.00",
      description: "Warm chocolate soufflé with vanilla bean ice cream...",
      image: "/14463.jpg",
      category: "dessert"
    },
    {
      id: 11,
      name: "Caprese Salad",
      price: "$24.00",
      description: "Fresh mozzarella, tomatoes, basil with balsamic reduction...",
      image: "/13078.jpg",
      category: "salads"
    },
    {
      id: 12,
      name: "Lamb Chops",
      price: "$42.00",
      description: "Grilled lamb chops with mint sauce and roasted potatoes...",
      image: "/6095.jpg",
      category: "meat"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Specials' },
    { id: 'meat', name: 'Meat' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'salads', name: 'Salads' },
    { id: 'dessert', name: 'Dessert' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? specialItems 
    : specialItems.filter(item => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 4, filteredItems.length));
      setIsLoading(false);
    }, 800);
  };

  // Auto-rotate featured items
  const [currentFeatured, setCurrentFeatured] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredItems = specialItems.slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <img src="/image (2).png" alt="Special Offer Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-transparent to-[#b99a4a] opacity-80"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#f0e6c8] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#f0e6c8] rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#b99a4a] rounded-full opacity-40 animate-ping"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section with animation */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 font-semibold transform hover:scale-105 transition-transform duration-500 cursor-pointer">
              Special offer
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#b99a4a] group-hover:w-full transition-all duration-500"></div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="text-[#b99a4a] animate-pulse">
              <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                <path d="M0 4H60" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#f0e6c8] mb-8 font-semibold">
            Best Specialties
          </h3>

          {/* Featured item carousel */}
          <div className="max-w-2xl mx-auto mb-12 bg-black bg-opacity-50 rounded-xl p-6 border border-[#b99a4a] border-opacity-50">
            <div className="text-center">
              <p className="text-[#de6f08] text-sm font-semibold mb-2">✨ Featured Today ✨</p>
              <h4 className="text-xl font-serif text-white mb-2 animate-fade-in">
                {featuredItems[currentFeatured].name}
              </h4>
              <p className="text-[#f0e6c8] text-sm">
                {featuredItems[currentFeatured].description}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleItems(8);
              }}
              className={`px-4 py-2 rounded-full font-medium tracking-wide text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-[#b99a4a] text-black shadow-lg'
                  : `border border-[#b99a4a] ${
                      category.id === 'all' 
                        ? 'text-[#b99a4a] hover:bg-[#b99a4a] hover:text-black' 
                        : 'text-white hover:bg-[#b99a4a] hover:text-black'
                    }`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Special Items Grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {displayedItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-6 border border-[#b99a4a] border-opacity-30 hover:border-opacity-100 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:rotate-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Popular badge for first 3 items */}
              {index < 3 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  HOT
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-serif text-white font-semibold mb-2 group-hover:text-[#b99a4a] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#f0e6c8] leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-serif bg-linear-to-r from-[#b99a4a] to-[#d4b95a] bg-clip-text text-transparent font-semibold">
                      {item.price}
                    </p>
                    <button className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#b99a4a] hover:text-white">
                      ←
                    </button>
                  </div>
                </div>
                {/* Larger image circle */}
                <div className="w-25 h-25 ml-4 rounded-full overflow-hidden bg-linear-to-br from-[#b99a4a] to-[#d4b95a] shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg border-2 border-[#b99a4a]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mb-12">
            <button 
              onClick={loadMore}
              disabled={isLoading}
              className="group border-2 border-[#b99a4a] text-white px-8 py-4 rounded-full font-semibold tracking-wider hover:bg-[#b99a4a] hover:text-black transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center text-white group-hover:text-black transition-colors duration-300">
                  <div className="w-4 h-4 border-2 border-white group-hover:border-black border-t-transparent rounded-full animate-spin mr-2 transition-colors duration-300"></div>
                  Loading...
                </span>
              ) : (
                <span className="group-hover:text-black transition-colors duration-300">
                  LOAD MORE (+{Math.min(4, filteredItems.length - visibleItems)})
                </span>
              )}
            </button>
          </div>
        )}

        {/* View All Menu Button with enhanced animation */}
        <div className="text-center">
          <button className="group relative border-2 border-[#b99a4a] text-white px-12 py-4 rounded-full font-semibold tracking-wider hover:bg-[#b99a4a] transition-all duration-500 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">VIEW ALL MENU</span>
            <div className="absolute inset-0 bg-[#b99a4a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>

      </div>

      {/* Add custom animations */}
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
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SpecialOffer;