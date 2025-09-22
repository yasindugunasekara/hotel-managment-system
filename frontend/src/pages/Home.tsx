import React, { useEffect } from 'react';
import { ArrowRight, Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, ParkingCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BookingForm from '../components/BookingForm';
import { rooms} from "../data/roomsData";


const Home = () => {
  const { t } = useLanguage();

  // Scroll to top on component mount
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  const featuredRooms = rooms.slice(0, 3); // Get first 3 rooms as featured
  const services = [
    { icon: <Wifi className="w-8 h-8" />, title: 'Free Wi-Fi', description: 'Stay connected with high-speed internet' },
    { icon: <Car className="w-8 h-8" />, title: 'Airport Shuttle', description: 'Convenient transport services to and from the airport' },
    { icon: <Star className="w-8 h-8" />, title: '24/7 Service', description: 'Round-the-clock assistance for all your needs' },
    { icon: <ParkingCircle className="w-8 h-8" />, title: 'Parking Space', description: 'Secure and spacious parking area for your vehicles' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gold text-white px-20 py-4  text-lg font-medium hover:bg-opacity-90 rounded transition-all duration-300 transform hover:scale-105"
              onClick={() => {
              window.location.href = '/book';
              }}
            >
              {t('bookNow')}
            </button>
            <button
              className="border-2 border-white text-white px-20 py-4  text-lg font-medium hover:bg-white hover:text-navy transition-all duration-300 rounded"
              onClick={() => window.open('https://www.booking.com/hotel/lk/the-calm-rest.en-gb.html', '_blank')}
            >
              {t('learnMore')}
            </button>
          </div>
        </div>
      </section>

      

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-navy font-serif">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('aboutText')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gold">10+</h3>
                  <p className="text-gray-600">Rooms</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gold">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gold">9/10</h3>
                  <p className="text-gray-600">Guest Satisfaction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gold">24/7</h3>
                  <p className="text-gray-600">Concierge Service</p>
                </div>
              </div>
              <button className="bg-gold text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium">
                {t('learnMore')}
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel Interior"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-600 mt-1">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">
              {t('featuredRooms')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our carefully curated selection of luxury accommodations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1  font-semibold rounded">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-navy">{room.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, index) => (
                      <span key={index} className="text-sm  px-3 py-1  text-gray-600 rounded-full flex items-center space-x-1">
                        {feature.icon} <span>{feature.name}</span>
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              className="bg-navy text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center space-x-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
              setTimeout(() => {
                window.location.href = '/rooms';
              }, 500); // Adjust delay as needed
              }}
            >
              <span>{t('viewAll')}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
     

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">
              {t('ourServices')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience world-class amenities designed for your comfort and convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-cream p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-serif">What Our Guests Say</h2>
          <p className="text-xl text-white/90 mb-12">Testimonials from our valued guests</p>
          
          <div className="bg-navy/90 backdrop-blur-sm rounded-lg p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="text-gold w-6 h-6" />
              ))}
            </div>
            <blockquote className="text-xl italic mb-6">
              "Absolutely exceptional service and breathtaking views. The attention to detail at Calm Rest is unmatched.
              A truly luxurious experience that exceeded all expectations."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                alt="Guest"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-white/70">New York, USA 🇺🇸</p>
              </div>
            </div>
          </div>
          
          <button className="mt-8 bg-navy text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center space-x-2">
            <span onClick={() => window.location.href = '/testimonials'}>Read More Reviews</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
