import React from 'react';
import { Star, Leaf, Award, Shield, ShoppingBasket, TrendingUp, Users, Clock, Heart } from 'lucide-react';

const Products = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Fresh Cold-Drinks',
      category: 'Cold Drinks',
      rating: 4.9,
      badge: 'Refreshing',
      description: 'Refreshing cold drinks for every occasion',
      color: 'from-blue-400 to-cyan-500',
      image: '/images/cold-drinks.jpg'
    },
    {
      id: 2,
      name: 'Quality Grains',
      category: 'Grocery & Grains',
      rating: 4.8,
      badge: 'Premium',
      description: 'High-quality grains and grocery essentials',
      color: 'from-amber-400 to-orange-500',
      image: '/images/grocery.png'
    },
    {
      id: 3,
      name: 'Pure Dairy',
      category: 'Dairy Products',
      rating: 4.9,
      badge: 'Pure & Fresh',
      description: 'Farm-fresh dairy products daily',
      color: 'from-green-400 to-emerald-500',
      image: '/images/dairy-products.png'
    },
    {
      id: 4,
      name: 'Premium Snacks',
      category: 'Snack Products',
      rating: 4.6,
      badge: 'Healthy Choice',
      description: 'Delicious snacks and chips for everyone',
      color: 'from-purple-400 to-indigo-500',
      image: '/images/snack-products.webp'
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-700 px-6 py-3 rounded-full mb-6 shadow-lg border border-green-100">
            <Leaf size={18} className="text-green-600" />
            <span className="font-semibold text-sm">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fresh <span className="text-green-600">Daily Essentials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-serif">
            रोज़ाना की ज़रूरतें - Quality products for your daily needs
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mb-16">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Side - Hero Images */}
            <div className="col-span-5 relative">
              <div className="space-y-6">
                {/* Main Large Card */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/images/main-products.avif" 
                        alt="Fresh Products Collection"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold text-gray-800">Fresh Daily</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Premium Quality</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Images Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="aspect-square relative overflow-hidden rounded-xl mb-3">
                      <img 
                        src="/images/vegetables.avif" 
                        alt="Fresh Vegetables"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Fresh Vegetables</h4>
                      <p className="text-xs text-gray-600">Farm Fresh Daily</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="aspect-square relative overflow-hidden rounded-xl mb-3">
                      <img 
                        src="/images/chips-products.webp" 
                        alt="Premium Snacks"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Premium Snacks</h4>
                      <p className="text-xs text-gray-600">Quality Assured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Simplified 2x2 Product Grid */}
            <div className="col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`relative group hover:scale-[1.02] transition-all duration-300`}
                  >
                    <div className="bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                      {/* Product Image */}
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        
                        {/* Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs font-bold text-gray-800">{product.badge}</span>
                        </div>
                        
                        {/* Rating */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-1 flex items-center space-x-1">
                          <Star size={10} className="text-yellow-400 fill-current" />
                          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Hero Section */}
            <div className="col-span-2">
              <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 rounded-2xl p-6 shadow-xl">
                <div className="aspect-[16/9] relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="/images/main-products.avif" 
                    alt="Fresh Products Collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-lg font-bold text-gray-900">Premium Quality</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-xs font-bold text-gray-800">{product.badge}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-1 flex items-center space-x-1">
                    <Star size={10} className="text-yellow-400 fill-current" />
                    <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mb-12">
          {/* Mobile Hero */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 rounded-2xl p-4 shadow-lg">
              <div className="aspect-[16/10] relative overflow-hidden rounded-xl mb-4">
                <img 
                  src="/images/main-products.avif" 
                  alt="Fresh Products Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <h3 className="text-sm font-bold text-gray-900">Premium Quality</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg mb-2 overflow-hidden">
                    <img 
                      src="/images/vegetables.avif" 
                      alt="Fresh Vegetables"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Fresh Vegetables</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mb-2 overflow-hidden">
                    <img 
                      src="/images/chips-products.webp" 
                      alt="Premium Snacks"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Premium Snacks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Product Cards */}
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="flex">
                  <div className="w-24 h-24 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star size={10} className="text-yellow-400 fill-current" />
                        <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;