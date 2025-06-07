import React, { useState } from 'react';
import { Store, Clock, Handshake, Shield, Scale, CreditCard, Phone, Star } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Store location coordinates and phone number
  const storeLocation = {
    lat: 18.200968,
    lng: 72.980064,
    address: "Hari Om Store, Velas Agar, Maharashtra, (IN)"
  };
  const phoneNumber = "+919325354647";

  // Handle Get Directions click
  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.lat},${storeLocation.lng}&destination_place_id=&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  // Handle Call Now click
  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const services = [
    {
      icon: Store,
      title: 'In-Store Shopping',
      subtitle: 'दुकान में खरीदारी',
      description: 'Visit our physical store and personally select fresh products. Touch, feel, and choose the best quality items for your family.',
      features: ['Personal Selection', 'Quality Check'],
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      subtitle: 'आसान भुगतान',
      description: 'Pay with cash, card, or UPI. We also offer credit for regular customers based on trust and relationship.',
      features: ['Cash Payment', 'UPI Available'],
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Phone,
      title: 'Phone Orders',
      subtitle: 'फोन से ऑर्डर',
      description: 'Call us to check product availability or reserve items. We can keep products aside for your visit.',
      features: ['Product Inquiry', 'Availability Check'],
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const storeHours = [
    { day: 'Monday - Saturday', hours: '8:00 AM - 9:00 PM', status: 'open' },
    { day: 'Sunday', hours: '9:00 AM - 10:00 PM', status: 'open' },
    { day: 'Festival Days', hours: 'Special Hours', status: 'special' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Store size={16} />
            <span className="font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Traditional <span className="text-blue-600">Store Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            पारंपरिक सेवा - Personal touch with modern convenience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => setActiveService(index)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 font-semibold mb-4 font-serif">{service.subtitle}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Store Hours */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">Store Hours</h3>
            </div>
            <div className="space-y-4">
              {storeHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-800">{schedule.day}</div>
                    <div className="text-sm text-gray-600">{schedule.hours}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    schedule.status === 'open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {schedule.status === 'open' ? 'Open' : 'Special'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                📞 Call us at +91 93253 54647 for any queries
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose Hari Om Store?</h3>
            
            {[
              {
                title: 'Personal Touch',
                desc: 'We know our customers by name and their preferences',
                icon: '👥'
              },
              {
                title: 'Quality First',
                desc: 'Every product is personally checked for freshness',
                icon: '✅'
              },
              {
                title: 'Fair Pricing',
                desc: 'Transparent pricing with no hidden charges',
                icon: '💰'
              },
              {
                title: 'Community Trust',
                desc: '15+ years of serving the neighborhood',
                icon: '🤝'
              }
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                <div className="text-2xl">{reason.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{reason.title}</h4>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Visit Us Today!</h3>
          <p className="text-xl mb-2 font-serif">आज ही हमारी दुकान पर आइए</p>
          <p className="text-lg opacity-90 mb-6">
            Experience the warmth of traditional shopping with modern facilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetDirections}
              className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>📍</span>
              <span>Get Directions</span>
            </button>
            <button 
              onClick={handleCallNow}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>📞</span>
              <span>Call Now: +91 93253 54647</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;