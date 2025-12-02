import React, { useState, useEffect, useRef } from 'react';

const Reservation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    persons: '1 Person',
    date: '',
    time: '08 : 00 am',
    message: ''
  });
  const [activeField, setActiveField] = useState(null);
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation data:', formData);
  };

  return (
    <section ref={sectionRef} className="relative bg-linear-to-br from-gray-900 via-black to-gray-800 py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 border-2 border-[#b99a4a] rounded-full opacity-20 animate-float-shape-1"></div>
        <div className="absolute top-40 right-20 w-8 h-8 border border-[#f0e6c8] rounded-lg opacity-15 animate-float-shape-2"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#de6f08] opacity-10 rounded-full animate-float-shape-3"></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 border-2 border-[#b99a4a] opacity-15 rotate-45 animate-float-shape-4"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full w-full animate-grid-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-[#b99a4a] opacity-20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#b99a4a] rounded-full opacity-10 blur-3xl animate-orb-pulse-1"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#de6f08] rounded-full opacity-10 blur-3xl animate-orb-pulse-2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 font-bold animate-text-shimmer">
            Online Reservation
          </h2>
          <p className="text-xl text-[#f0e6c8] max-w-2xl mx-auto leading-relaxed animate-subtitle-glow">
            Booking request <span className="text-white font-semibold">+234-701-183-75355</span> or fill out the order form
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Reservation Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <form onSubmit={handleSubmit} className="bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-[#b99a4a] border-opacity-30 shadow-2xl">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 animate-input-glow"
                      placeholder="Enter your name"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-[#de6f08] transition-all duration-500 ${
                      activeField === 'name' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 animate-input-glow"
                      placeholder="Your phone number"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#b99a4a] to-[#de6f08] transition-all duration-500 ${
                      activeField === 'phone' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Persons Select */}
                <div className="relative group">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Persons
                  </label>
                  <select
                    value={formData.persons}
                    onChange={(e) => handleInputChange('persons', e.target.value)}
                    onFocus={() => setActiveField('persons')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 appearance-none animate-input-glow"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={`${num} Person${num > 1 ? 's' : ''}`}>
                        {num} Person{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#b99a4a]">
                    ▼
                  </div>
                </div>

                {/* Date Input */}
                <div className="relative group">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    onFocus={() => setActiveField('date')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 animate-input-glow"
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Time Select */}
                <div className="relative group">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    onFocus={() => setActiveField('time')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 appearance-none animate-input-glow"
                  >
                    {['08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#b99a4a]">
                    ▼
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group md:col-span-2">
                  <label className="block text-[#f0e6c8] text-sm font-semibold mb-3 animate-label-float">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    rows="4"
                    className="w-full bg-gray-800 bg-opacity-50 border-2 border-[#b99a4a] border-opacity-30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99a4a] focus:border-opacity-100 transition-all duration-500 group-hover:border-opacity-70 resize-none animate-input-glow"
                    placeholder="Special requests or notes..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="group relative bg-linear-to-r from-[#b99a4a] to-[#de6f08] text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl animate-button-hologram flex-1"
                >
                  <span className="relative z-10">BOOK A TABLE</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:skew-x-0 transition-all duration-700"></div>
                </button>
                
                <button
                  type="button"
                  className="group relative border-2 border-[#b99a4a] text-[#b99a4a] px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-500 animate-button-magnetic flex-1"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">BOOK A TABLE</span>
                  <div className="absolute inset-0 bg-[#b99a4a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-[#b99a4a] border-opacity-30 shadow-2xl h-full">
              <h3 className="text-2xl font-serif text-white mb-8 font-semibold animate-text-glow">Contact Us</h3>
              
              {/* Contact Items */}
              <div className="space-y-8">
                {/* Booking Request */}
                <div className="group animate-contact-item-1">
                  <p className="text-[#b99a4a] text-sm font-semibold mb-2">Booking request</p>
                  <p className="text-xl text-white font-mono transform group-hover:scale-105 transition-transform duration-300">+234-701-183-75355</p>
                  <div className="w-16 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Location */}
                <div className="group animate-contact-item-2">
                  <p className="text-[#b99a4a] text-sm font-semibold mb-2">Location</p>
                  <p className="text-lg text-[#f0e6c8] transform group-hover:translate-x-2 transition-transform duration-300">
                    Restaurant St, Delicious City, London 9578, UK
                  </p>
                  <div className="w-16 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Lunch Time */}
                <div className="group animate-contact-item-3">
                  <p className="text-[#b99a4a] text-sm font-semibold mb-2">Lunch Time</p>
                  <p className="text-lg text-[#f0e6c8] transform group-hover:translate-x-2 transition-transform duration-300">
                    Monday to Sunday<br />
                    <span className="text-[#b99a4a] font-semibold">11.00 am - 2.30pm</span>
                  </p>
                  <div className="w-16 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Dinner Time */}
                <div className="group animate-contact-item-4">
                  <p className="text-[#b99a4a] text-sm font-semibold mb-2">Dinner Time</p>
                  <p className="text-lg text-[#f0e6c8] transform group-hover:translate-x-2 transition-transform duration-300">
                    Monday to Sunday<br />
                    <span className="text-[#b99a4a] font-semibold">05.00 pm - 10.00pm</span>
                  </p>
                  <div className="w-16 h-0.5 bg-linear-to-r from-[#b99a4a] to-transparent mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 pt-8 border-t border-[#b99a4a] border-opacity-30">
                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-[#b99a4a] rounded-full animate-ping-slow"></div>
                  <div className="w-3 h-3 bg-[#de6f08] rounded-full animate-ping-slower"></div>
                  <div className="w-3 h-3 bg-[#f0e6c8] rounded-full animate-ping-slowest"></div>
                </div>
                <p className="text-center text-[#f0e6c8] text-sm mt-4 animate-pulse-gentle">
                  🕒 We're looking forward to serving you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom advanced animations */}
      <style jsx>{`
        @keyframes text-shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes subtitle-glow {
          0%, 100% { text-shadow: 0 0 0px rgba(185, 154, 74, 0); }
          50% { text-shadow: 0 0 20px rgba(185, 154, 74, 0.6); }
        }
        
        @keyframes label-float {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes input-glow {
          0%, 100% { box-shadow: 0 0 0px rgba(185, 154, 74, 0); }
          50% { box-shadow: 0 0 15px rgba(185, 154, 74, 0.3); }
        }
        
        @keyframes button-hologram {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        @keyframes button-magnetic {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        
        @keyframes contact-item-1 {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes contact-item-2 {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes contact-item-3 {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes contact-item-4 {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes float-shape-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 15px) rotate(180deg); }
        }
        
        @keyframes float-shape-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 10px) scale(1.1); }
        }
        
        @keyframes float-shape-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        
        @keyframes float-shape-4 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(-20px, -10px) rotate(225deg); }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        @keyframes orb-pulse-1 {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.15; }
        }
        
        @keyframes orb-pulse-2 {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.3); opacity: 0.12; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(185, 154, 74, 0.3); }
          50% { text-shadow: 0 0 15px rgba(185, 154, 74, 0.6); }
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
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #f0e6c8, #b99a4a, #de6f08, #b99a4a, #f0e6c8);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .animate-subtitle-glow {
          animation: subtitle-glow 4s ease-in-out infinite;
        }
        
        .animate-label-float {
          animation: label-float 1s ease-out forwards;
        }
        
        .animate-input-glow {
          animation: input-glow 3s ease-in-out infinite;
        }
        
        .animate-button-hologram {
          animation: button-hologram 2s ease-in-out infinite;
        }
        
        .animate-button-magnetic {
          animation: button-magnetic 3s ease-in-out infinite;
        }
        
        .animate-contact-item-1 {
          animation: contact-item-1 1s ease-out 0.6s forwards;
        }
        
        .animate-contact-item-2 {
          animation: contact-item-2 1s ease-out 0.8s forwards;
        }
        
        .animate-contact-item-3 {
          animation: contact-item-3 1s ease-out 1s forwards;
        }
        
        .animate-contact-item-4 {
          animation: contact-item-4 1s ease-out 1.2s forwards;
        }
        
        .animate-float-shape-1 {
          animation: float-shape-1 8s ease-in-out infinite;
        }
        
        .animate-float-shape-2 {
          animation: float-shape-2 10s ease-in-out infinite;
        }
        
        .animate-float-shape-3 {
          animation: float-shape-3 12s ease-in-out infinite;
        }
        
        .animate-float-shape-4 {
          animation: float-shape-4 15s ease-in-out infinite;
        }
        
        .animate-grid-pulse {
          animation: grid-pulse 6s ease-in-out infinite;
        }
        
        .animate-orb-pulse-1 {
          animation: orb-pulse-1 8s ease-in-out infinite;
        }
        
        .animate-orb-pulse-2 {
          animation: orb-pulse-2 10s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 4s ease-out infinite;
        }
        
        .animate-ping-slowest {
          animation: ping-slowest 5s ease-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Reservation;