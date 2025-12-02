import { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaHome, 
  FaUtensils, 
  FaInfoCircle, 
  FaPhoneAlt, 
  FaCalendarAlt,
  FaCrown,
  FaStar
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
      scrolled 
        ? 'bg-black bg-opacity-95 backdrop-blur-lg shadow-2xl border-b border-[#b99a4a] border-opacity-30' 
        : 'bg-linear-to-r from-black via-gray-900 to-black bg-opacity-90 backdrop-blur-md'
    }`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 left-10 w-1 h-1 bg-[#b99a4a] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-4 right-20 w-2 h-2 bg-[#f0e6c8] rounded-full animate-float-gentle"></div>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row md:justify-between items-center px-6 py-3 relative">

        {/* Left: Premium Logo with Advanced Animations */}
        <div className="flex items-center mb-2 md:mb-0 group cursor-pointer">
          {/* Animated Crown Logo Container */}
          <div className="relative mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {/* Main Crown Icon */}
            <div className="relative z-10">
              <FaCrown className="text-3xl md:text-4xl bg-linear-to-r from-[#b99a4a] via-[#d4b95a] to-[#f0e6c8] bg-clip-text text-transparent animate-crown-glow" />
            </div>
            
            {/* Rotating Ring */}
            <div className="absolute -inset-2 border-2 border-[#b99a4a] border-t-transparent rounded-full animate-spin-slow opacity-60"></div>
            
            {/* Floating Stars */}
            <div className="absolute -top-1 -right-1">
              <FaStar className="text-[#f0e6c8] text-xs animate-star-twinkle-1" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <FaStar className="text-[#b99a4a] text-xs animate-star-twinkle-2" />
            </div>
          </div>

          {/* Company Name with Premium Typography */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#b99a4a] via-[#f0e6c8] to-[#d4b95a] bg-clip-text text-transparent animate-text-shimmer font-['Playfair_Display'] tracking-tight">
              Elite_Delici
            </h1>
            <div className="w-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent group-hover:w-16 transition-all duration-700 mt-1"></div>
          </div>
        </div>

        {/* Center: Contact Info with Hover Effects */}
        <div className="flex items-center text-sm md:text-base font-medium mb-2 md:mb-0 space-x-4 md:space-x-6">
          {/* Location */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <FaMapMarkerAlt className="text-sm text-[#f0e6c8] group-hover:text-[#b99a4a] transition-all duration-300 transform group-hover:scale-110" />
              <div className="absolute -inset-1 bg-[#b99a4a] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-[#f0e6c8] group-hover:text-white transition-colors duration-300 text-xs md:text-sm">
              Restaurant St, London
            </span>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <FaEnvelope className="text-sm text-[#f0e6c8] group-hover:text-[#b99a4a] transition-all duration-300 transform group-hover:scale-110" />
              <div className="absolute -inset-1 bg-[#b99a4a] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-[#f0e6c8] group-hover:text-white transition-colors duration-300 text-xs md:text-sm">
              booking@elitedelici.com
            </span>
          </div>
        </div>

        {/* Right: Desktop Menu with Advanced Animations */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {[
            { icon: FaHome, text: "Home", path: "/" },
            { icon: FaUtensils, text: "Menu", path: "/menu" },
            { icon: FaInfoCircle, text: "About", path: "/about" },
            { icon: FaPhoneAlt, text: "Contact", path: "/contact" }
          ].map((item, index) => (
            <Link 
              key={item.text}
              to={item.path}
              className="group relative flex items-center space-x-2 text-[#f0e6c8] hover:text-white transition-colors duration-300 py-2"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-r from-[#b99a4a] to-transparent rounded-lg opacity-0 group-hover:opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></div>
              
              {/* Icon */}
              <item.icon className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-10" />
              
              {/* Text */}
              <span className="z-10 font-semibold tracking-wide">{item.text}</span>
              
              {/* Underline Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-[#f0e6c8] group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
          
          {/* Reservation Button with Premium Animation */}
          <Link 
            to="/reservation" 
            className="group relative bg-linear-to-r from-[#b99a4a] to-[#d4b95a] text-black px-6 py-3 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <FaCalendarAlt className="transform group-hover:rotate-12 transition-transform duration-300" />
              <span>Reservation</span>
            </span>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:skew-x-0 transition-all duration-700"></div>
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 animate-ping-slow"></div>
          </Link>
        </div>

        {/* Mobile Hamburger with Animation */}
        <div className="md:hidden absolute right-6 top-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center text-[#f0e6c8] hover:text-[#b99a4a] transition-colors duration-300 group"
          >
            {/* Animated Hamburger Lines */}
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
            }`}></div>
            <div className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
            }`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Premium Animations */}
      {isOpen && (
        <div className="flex flex-col items-center bg-black bg-opacity-95 backdrop-blur-lg py-6 md:hidden space-y-6 text-[#f0e6c8] font-medium border-t border-[#b99a4a] border-opacity-30">
          {[
            { icon: FaHome, text: "Home", path: "/" },
            { icon: FaUtensils, text: "Menu", path: "/menu" },
            { icon: FaInfoCircle, text: "About", path: "/about" },
            { icon: FaPhoneAlt, text: "Contact", path: "/contact" }
          ].map((item, index) => (
            <Link 
              key={item.text}
              to={item.path}
              className="group flex items-center space-x-3 text-lg transform hover:scale-105 transition-all duration-300 w-full justify-center py-3"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="text-[#b99a4a] transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
            </Link>
          ))}
          
          {/* Mobile Reservation Button */}
          <Link 
            to="/reservation" 
            className="bg-linear-to-r from-[#b99a4a] to-[#d4b95a] text-black px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg mt-4"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Reservation</span>
            </span>
          </Link>
        </div>
      )}

      {/* Custom Advanced Animations */}
      <style jsx>{`
        @keyframes crown-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(185, 154, 74, 0.5));
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(185, 154, 74, 0.8));
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes star-twinkle-1 {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes star-twinkle-2 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .animate-crown-glow {
          animation: crown-glow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-star-twinkle-1 {
          animation: star-twinkle-1 2s ease-in-out infinite;
        }
        
        .animate-star-twinkle-2 {
          animation: star-twinkle-2 3s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background-size: 1000px 100%;
          animation: text-shimmer 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;