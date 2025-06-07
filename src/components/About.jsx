import React, { useState, useEffect } from 'react';
import { Heart, Users, Award, Clock, Leaf, ShoppingCart, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    customers: 0,
    products: 0,
    growth: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { years: 15, customers: 1000, products: 100, growth: 25.5 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const increment = targets[key] / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });
    }
  }, [isVisible]);

  const milestones = [
    { year: '2010', title: 'Humble Beginning', desc: 'Started as a small village store' },
    { year: '2013', title: 'Community Trust', desc: 'Became the neighborhood favorite' },
    { year: '2020', title: 'Wider Choices', desc: 'Introduced personal care and household products' },
    { year: '2024', title: 'Digital Era', desc: 'Online presence & modern systems' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm20-20l20-20v20h-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div id="about-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart size={16} />
            <span className="font-semibold">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Hari Om Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-serif">
            A journey from a small village store to your trusted neighborhood grocery partner
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Three Generations of Trust
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Started in 2010 by our grandfather, Hari Om Store began as a small village shop with a simple mission: 
                  to provide fresh, quality groceries to our neighbors. What started with just basic essentials has grown 
                  into a comprehensive grocery destination.
                </p>
                <p>
                  Today, we combine traditional values with modern convenience. Our deep-rooted relationships with local 
                  farmers ensure the freshest produce, while our commitment to quality means every product meets our 
                  family standards before reaching yours.
                </p>
                <p className="font-semibold text-green-700">
                  "गुणवत्ता में कोई समझौता नहीं" - No compromise on quality, just like grandmother's kitchen.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { key: 'years', label: 'Years', suffix: '+', icon: Clock },
                { key: 'customers', label: 'Happy Families', suffix: '+', icon: Users },
                { key: 'products', label: 'Products', suffix: '+', icon: ShoppingCart },
                { key: 'growth', label: 'Growth Rate', suffix: '+', icon: TrendingUp }
              ].map(({ key, label, suffix, icon: Icon }) => (
                <div key={key} className="bg-white rounded-xl p-4 text-center shadow-lg border border-green-50">
                  <Icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">
                    {counts[key]}{suffix}
                  </div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 hover:shadow-lg ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex-1 shadow-md border border-green-50">
                    <h4 className="font-bold text-gray-800">{milestone.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{milestone.desc}</p>
                    {/* <div className="text-xs text-green-600 font-semibold mt-2">{milestone.year}</div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;