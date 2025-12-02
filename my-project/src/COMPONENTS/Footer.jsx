import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowRight, FaUtensils, FaWineGlassAlt, FaStar } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Enhanced Background Image with Better Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/twigs.jpg')`,
        }}
      >
        {/* Lighter Overlay to Show More Image Details */}
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-[#1a1200]/70"></div>
        
        {/* Subtle Moving Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,215,0,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(185,154,74,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(255,215,0,0.3) 0%, transparent 50%)`,
            backgroundSize: '50% 50%, 30% 30%, 40% 40%',
            animation: 'floatBackground 25s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Enhanced Floating Elements - No Mouse Chase */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Gold Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-linear-to-br from-[#ffd700] to-[#b99a4a] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `gentleFloat ${18 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              boxShadow: '0 0 25px rgba(255,215,0,0.5)',
              filter: 'blur(0.5px)'
            }}
          ></div>
        ))}

        {/* Sophisticated Floating Icons */}
        <div className="absolute top-16 left-16 animate-float-gentle-1">
          <FaUtensils className="text-4xl text-[#ffd700] opacity-40" />
        </div>
        <div className="absolute bottom-24 right-24 animate-float-gentle-2">
          <FaWineGlassAlt className="text-3xl text-[#b99a4a] opacity-50" />
        </div>
        <div className="absolute top-1/3 right-16 animate-float-gentle-3">
          <FaStar className="text-2xl text-[#ffd700] opacity-60" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse-soft">
          <div className="w-4 h-4 bg-[#ffd700] rounded-full opacity-70"></div>
        </div>

        {/* Subtle Ambient Glow - Stationary */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffd700] rounded-full blur-3xl opacity-5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#b99a4a] rounded-full blur-3xl opacity-5 animate-pulse-slow delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className={`container mx-auto px-4 sm:px-6 py-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1 text-center lg:text-left">
              {/* Premium Animated Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative group cursor-pointer">
                  <div className="text-5xl font-serif font-bold relative">
                    <span className="bg-linear-to-r from-[#ffd700] via-[#b99a4a] to-[#ffd700] bg-clip-text text-transparent animate-gradient-x relative z-10">
                      EliteDelici
                    </span>
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#ffd700] via-[#b99a4a] to-[#ffd700] blur-2xl opacity-40 animate-pulse-soft"></div>
                  </div>
                  {/* Smooth Underline Animation */}
                  <div className="absolute -bottom-3 left-0 w-0 h-1 bg-linear-to-r from-[#ffd700] to-[#b99a4a] group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
              
              <p className="text-gray-200 mb-8 leading-relaxed text-sm transform hover:scale-102 transition-transform duration-300">
                Experience culinary excellence at EliteDelici, where every dish tells a story of passion, tradition, and innovation. Your journey to unforgettable dining starts here.
              </p>
              
              {/* Animated Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: FaMapMarkerAlt, text: 'Restaurant St, Delicious City, London 9578, UK' },
                  { icon: FaEnvelope, text: 'booking@elitedelici.com' },
                  { icon: FaPhone, text: '+234-701-8375355' },
                  { icon: FaClock, text: 'Open: 09:00 am - 01:00 pm' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center lg:justify-start space-x-3 text-gray-200 hover:text-white transition-all duration-500 transform hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative">
                      <item.icon className="text-[#ffd700] shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 text-[#ffd700] blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-sm group-hover:text-[#ffd700] transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links with Enhanced Animations */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-8 text-[#ffd700] text-center lg:text-left relative">
                <span className="relative z-10">Quick Links</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ffd700] animate-pulse-soft"></div>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  {['Home', 'Menus', 'About us', 'Our chefs'].map((link, index) => (
                    <a 
                      key={link}
                      href="#" 
                      className="block text-gray-200 hover:text-[#ffd700] transition-all duration-500 transform hover:translate-x-2 text-sm relative overflow-hidden group"
                      style={{ animationDelay: `${index * 100 + 400}ms` }}
                    >
                      <span className="relative z-10 flex items-center">
                        <div className="w-2 h-2 bg-[#ffd700] rounded-full mr-3 opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-300"></div>
                        {link}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="space-y-4">
                  {['Contact', 'Reservation', 'Gallery', 'Testimonials'].map((link, index) => (
                    <a 
                      key={link}
                      href="#" 
                      className="block text-gray-200 hover:text-[#ffd700] transition-all duration-500 transform hover:translate-x-2 text-sm relative overflow-hidden group"
                      style={{ animationDelay: `${index * 100 + 600}ms` }}
                    >
                      <span className="relative z-10 flex items-center">
                        <div className="w-2 h-2 bg-[#ffd700] rounded-full mr-3 opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-300"></div>
                        {link}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media with Refined Effects */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-8 text-[#ffd700] text-center lg:text-left relative">
                <span className="relative z-10">Follow Us</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ffd700] animate-pulse-soft"></div>
              </h3>
              
              {/* Enhanced Social Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {[
                  { icon: FaFacebookF, color: 'bg-blue-600', hover: 'bg-blue-700', glow: 'blue' },
                  { icon: FaInstagram, color: 'bg-gradient-to-br from-purple-600 to-pink-600', hover: 'from-purple-700 to-pink-700', glow: 'purple' },
                  { icon: FaTwitter, color: 'bg-blue-400', hover: 'bg-blue-500', glow: 'lightblue' },
                  { icon: FaYoutube, color: 'bg-red-600', hover: 'bg-red-700', glow: 'red' },
                  { icon: SiGooglemaps, color: 'bg-green-600', hover: 'bg-green-700', glow: 'green' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`relative w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-xl ${social.color} hover:${social.hover} group overflow-hidden`}
                    style={{ animationDelay: `${index * 150 + 800}ms` }}
                  >
                    <social.icon className="text-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></div>
                  </a>
                ))}
              </div>
              
              {/* Enhanced Map Card */}
              <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-5 border border-gray-600/50 hover:border-[#ffd700] transition-all duration-500 transform hover:scale-102 backdrop-blur-sm hover:shadow-xl hover:shadow-[#ffd700]/10 group cursor-pointer">
                <div className="flex items-center space-x-3 text-gray-200 group-hover:text-white transition-colors duration-300">
                  <SiGooglemaps className="text-[#ffd700] text-xl transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Find us on Google Maps</span>
                </div>
              </div>
            </div>

            {/* Newsletter with Polished Animations */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-[#ffd700] text-center lg:text-left relative">
                <span className="relative z-10">Get News & Offers</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ffd700] animate-pulse-soft"></div>
              </h3>
              <p className="text-gray-200 mb-6 text-sm text-center lg:text-left transform hover:scale-102 transition-transform duration-300">
                Subscribe us & Get <span className="text-[#ffd700] font-bold animate-pulse-soft">25% Off</span>.
              </p>
              
              <div className="space-y-4">
                {/* Refined Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full px-5 py-4 bg-gray-800/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/30 transition-all duration-500 backdrop-blur-sm group-hover:scale-102"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffd700]/20 rounded-xl transition-all duration-500 pointer-events-none"></div>
                </div>
                
                {/* Enhanced Buttons */}
                <button className="w-full bg-linear-to-r from-[#b99a4a] to-[#ffd700] text-black font-bold py-4 px-6 rounded-xl hover:from-[#ffd700] hover:to-[#b99a4a] transition-all duration-500 transform hover:scale-102 shadow-xl hover:shadow-[#ffd700]/20 flex items-center justify-center space-x-3 group relative overflow-hidden">
                  <span className="relative z-10">Subscribe</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <button className="w-full bg-transparent border-2 border-[#ffd700] text-[#ffd700] font-bold py-4 px-6 rounded-xl hover:bg-[#ffd700] hover:text-black transition-all duration-500 transform hover:scale-102 shadow-lg hover:shadow-[#ffd700]/10 flex items-center justify-center space-x-3 group relative overflow-hidden">
                  <span className="relative z-10">Book Table</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-[#ffd700] transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 relative">
          {/* Elegant Divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-linear-to-r from-transparent via-[#ffd700] to-transparent"></div>
          
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="text-gray-300 text-sm text-center md:text-left hover:text-[#ffd700] transition-colors duration-300">
                © 2025 <span className="text-[#ffd700] font-bold">EliteDelici Restaurant</span>. All Rights Reserved
              </div>
              
              <div className="text-gray-300 text-sm text-center md:text-left hover:text-[#ffd700] transition-colors duration-300">
                Crafted with <span className="text-red-400 animate-pulse-soft">❤</span> by <span className="text-[#ffd700] font-bold">Elite_Tech</span>
              </div>
              
              <div className="flex space-x-6 text-gray-300 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link, index) => (
                  <a 
                    key={link}
                    href="#" 
                    className="hover:text-[#ffd700] transition-all duration-300 relative group"
                  >
                    {link}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd700] group-hover:w-full transition-all duration-500"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes floatBackground {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5px, -5px) scale(1.02); }
          66% { transform: translate(5px, 5px) scale(0.98); }
        }
        
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          25% { 
            transform: translate(15px, -20px) rotate(45deg);
            opacity: 0.8;
          }
          50% { 
            transform: translate(-10px, -30px) rotate(90deg);
            opacity: 0.7;
          }
          75% { 
            transform: translate(20px, -10px) rotate(135deg);
            opacity: 0.9;
          }
        }
        
        @keyframes float-gentle-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-gentle-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        
        @keyframes float-gentle-3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.08; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        
        .animate-float-gentle-1 {
          animation: float-gentle-1 8s ease-in-out infinite;
        }
        
        .animate-float-gentle-2 {
          animation: float-gentle-2 10s ease-in-out infinite;
        }
        
        .animate-float-gentle-3 {
          animation: float-gentle-3 12s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;