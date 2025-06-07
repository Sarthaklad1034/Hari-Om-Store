// import React, { useState, useEffect } from 'react';
// import { ShoppingBasket, Truck, Clock, Star, ArrowRight, Leaf } from 'lucide-react';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       title: "Fresh From Farm to Your Table",
//       subtitle: "खेत से सीधे आपकी रसोई तक",
//       description: "Experience the authentic taste of village-fresh groceries delivered with modern convenience",
//       bg: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
//       accent: "from-yellow-300 to-orange-400"
//     },
//     {
//       title: "Traditional Quality, Modern Service",
//       subtitle: "पारंपरिक गुणवत्ता, आधुनिक सेवा",
//       description: "Your trusted neighborhood store now serving with enhanced quality and faster delivery",
//       bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-red-500",
//       accent: "from-green-300 to-green-400"
//     },
//     {
//       title: "Daily Essentials, Always Fresh",
//       subtitle: "रोज़ाना की ज़रूरतें, हमेशा ताज़ा",
//       description: "From spices to vegetables, milk to grains - everything you need for your daily cooking",
//       bg: "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600",
//       accent: "from-yellow-300 to-amber-400"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const features = [
//     { icon: Truck, text: "Free Delivery", desc: "Above ₹500" },
//     { icon: Clock, text: "Quick Service", desc: "30 Min Delivery" },
//     { icon: Leaf, text: "Fresh Products", desc: "Farm Direct" },
//     { icon: Star, text: "Quality Assured", desc: "100% Genuine" }
//   ];

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='30' cy='30' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//         }}></div>
//       </div>

//       {/* Animated Background */}
//       <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].bg}`}>
//         <div className="absolute inset-0 bg-black/20"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
//               <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${slides[currentSlide].accent} animate-pulse`}></div>
//               <span className="text-sm font-medium">Trusted Since 2010</span>
//             </div>

//             {/* Main Title */}
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="block">{slides[currentSlide].title}</span>
//               </h1>
//               <p className="text-xl md:text-2xl font-semibold text-yellow-200 font-serif">
//                 {slides[currentSlide].subtitle}
//               </p>
//               <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
//                 {slides[currentSlide].description}
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
//                 <ShoppingBasket size={20} />
//                 <span>Shop Now</span>
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2">
//                 <span>View Products</span>
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
//                   <feature.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
//                   <h3 className="font-semibold text-sm">{feature.text}</h3>
//                   <p className="text-xs text-white/80">{feature.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Village Store Illustration */}
//           <div className="relative">
//             <div className="relative">
//               {/* Main Store Building */}
//               <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
//                 <div className="space-y-6">
//                   {/* Store Front */}
//                   <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200/50 rounded-full -translate-y-10 translate-x-10"></div>
//                     <div className="relative z-10">
//                       <h3 className="text-2xl font-bold text-gray-800 mb-2">Village Store</h3>
//                       <p className="text-gray-600 mb-4">आपका पास-पड़ोसी दुकान</p>
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                           <ShoppingBasket className="text-white" size={20} />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">100+ Products</p>
//                           <p className="text-sm text-gray-600">Daily Fresh Stock</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-green-50 rounded-xl p-4 text-center">
//                       <div className="text-2xl font-bold text-green-600">15+</div>
//                       <div className="text-sm text-gray-600">Years Experience</div>
//                     </div>
//                     <div className="bg-orange-50 rounded-xl p-4 text-center">
//                       <div className="text-2xl font-bold text-orange-600">500+</div>
//                       <div className="text-sm text-gray-600">Happy Families</div>
//                     </div>
//                   </div>

//                   {/* Popular Items */}
//                   <div className="space-y-3">
//                     <h4 className="font-semibold text-gray-800">Today's Special</h4>
//                     <div className="space-y-2">
//                       {['Fresh Cold-Drinks', 'Pure Diary Products', 'Organic Grocery'].map((item, i) => (
//                         <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
//                           <span className="text-gray-700">{item}</span>
//                           <span className="text-green-600 font-semibold">Fresh</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//               <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
//               <div className="absolute top-1/2 -right-8 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
//             </div>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="flex justify-center space-x-3 mt-12">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index 
//                   ? 'bg-white scale-125' 
//                   : 'bg-white/50 hover:bg-white/75'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
//         <div className="flex flex-col items-center space-y-2">
//           <span className="text-sm">Scroll Down</span>
//           <div className="w-1 h-8 bg-white/50 rounded-full">
//             <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import { ShoppingBasket, Store, Clock, Star, ArrowRight, Leaf, User, Shield } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Fresh From Farm to Your Store",
      subtitle: "खेत से सीधे आपकी रसोई तक",
      description: "Experience the authentic taste of village-fresh groceries with traditional shopping experience",
      bg: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
      accent: "from-yellow-300 to-orange-400"
    },
    {
      title: "Traditional Quality, Personal Service",
      subtitle: "पारंपरिक गुणवत्ता, वैयक्तिक सेवा",
      description: "Your trusted neighborhood store serving with traditional care and premium quality products",
      bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-red-500",
      accent: "from-green-300 to-green-400"
    },
    {
      title: "Daily Essentials, Always Fresh",
      subtitle: "रोज़ाना की ज़रूरतें, हमेशा ताज़ा",
      description: "From spices to vegetables, milk to grains - everything you need available fresh in our store",
      bg: "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600",
      accent: "from-yellow-300 to-amber-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Store, text: "In-Store Shopping", desc: "Personal Service" },
    { icon: Clock, text: "Always Open", desc: "8AM - 9PM Daily" },
    { icon: Leaf, text: "Fresh Products", desc: "Farm Direct" },
    { icon: Star, text: "Quality Assured", desc: "100% Genuine" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='30' cy='30' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].bg}`}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${slides[currentSlide].accent} animate-pulse`}></div>
              <span className="text-sm font-medium">Trusted Since 2010</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">{slides[currentSlide].title}</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-yellow-200 font-serif">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingBasket size={20} />
                <span>Shop Now</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <h3 className="font-semibold text-sm">{feature.text}</h3>
                  <p className="text-xs text-white/80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Village Store Illustration */}
          <div className="relative">
            <div className="relative">
              {/* Main Store Building */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50">
                <div className="space-y-6">
                  {/* Store Front with Owner Details */}
                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200/50 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10 space-y-4">
                      {/* Store Header */}
                      <div className="text-center border-b border-orange-200/50 pb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">Hari Om General Store</h3>
                        <p className="text-gray-600 text-sm">तुमचं शेजारचं दुकान</p>
                      </div>
                      
                      {/* Owner Details */}
                      <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">Proprietor: Mr. Sandip Sundar Lad</p>
                          <p className="text-sm text-gray-600">15+ Years Experience</p>
                        </div>
                      </div>

                      {/* Certification */}
                      <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <Shield className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">Licensed & Certified</p>
                          <p className="text-sm text-gray-600">Food Safety License: FS/2024/001</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">100+</div>
                      <div className="text-sm text-gray-600">Fresh Products</div>
                    </div>
                  </div>

                  {/* Popular Items */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Today's Special</h4>
                    <div className="space-y-2">
                      {['Fresh Cold-Drinks', 'Pure Diary Products'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <span className="text-gray-700">{item}</span>
                          <span className="text-green-600 font-semibold">Fresh</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Image */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 bg-gradient-to-br from-green-100 to-orange-100">
                <img 
                  src="/images/store-front.jpg" 
                  alt="Hari Om Store Front"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a gradient background with store icon if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-orange-200 flex items-center justify-center" style={{display: 'none'}}>
                  <Store className="w-16 h-16 text-green-600" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;