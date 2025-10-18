import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, ParkingCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  Wifi: <Wifi size={16} />,
  Car: <Car size={16} />,
  Coffee: <Coffee size={16} />,
  Dumbbell: <Dumbbell size={16} />,
  Utensils: <Utensils size={16} />,
  Waves: <Waves size={16} />,
  ParkingCircle: <ParkingCircle size={16} />,
  Star: <Star size={16} />,
};

const Home = () => {
  const { t } = useLanguage();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rooms/`);
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const featuredRooms = rooms.slice(0, 3);

  const services = [
    { icon: <Wifi className="w-8 h-8" />, title: 'Free Wi-Fi', description: 'Stay connected with high-speed internet' },
    { icon: <Car className="w-8 h-8" />, title: 'Airport Shuttle', description: 'Transport to and from the airport' },
    { icon: <Star className="w-8 h-8" />, title: '24/7 Service', description: 'Round-the-clock assistance for your needs' },
    { icon: <ParkingCircle className="w-8 h-8" />, title: 'Parking Space', description: 'Secure and spacious parking' },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* 🌅 Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center text-white px-6 md:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gold text-white px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-opacity-90 rounded transition-transform duration-300 hover:scale-105"
              onClick={() => (window.location.href = "/login")}
            >
              {t("bookNow")}
            </button>
            <button
              className="border-2 border-white text-white px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-navy transition-all rounded"
              onClick={() =>
                window.open(
                  "https://www.booking.com/hotel/lk/the-calm-rest.en-gb.html",
                  "_blank"
                )
              }
            >
              {t("learnMore")}
            </button>
          </div>
        </div>
      </section>
      {/* 🏨 About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-navy font-serif">
                {t("aboutTitle")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                {t("aboutText")}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8 text-center">
                {[
                  { num: "10+", label: "Rooms" },
                  { num: "15+", label: "Years Experience" },
                  { num: "9/10", label: "Guest Satisfaction" },
                  { num: "24/7", label: "Concierge Service" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold">
                      {item.num}
                    </h3>
                    <p className="text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>

              <button
                className="bg-gold text-white px-6 sm:px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium"
                onClick={() => (window.location.href = "/about")}
              >
                {t("learnMore")}
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel Interior"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 right-0 bg-white p-5 rounded-lg shadow-lg w-max mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={18} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-600 mt-1 text-center">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Updated Featured Rooms Section (Fetch from MongoDB) */}{" "}
      <section className="py-20 bg-cream">
        {" "}
        <div className="max-w-7xl mx-auto px-4">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">
              {t("featuredRooms")}
            </h2>{" "}
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {" "}
              Discover our carefully curated selection of luxury accommodations{" "}
            </p>{" "}
          </div>{" "}
          {loading ? (
            <p className="text-center text-gray-600 text-lg">
              Loading rooms...
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {" "}
              {featuredRooms.map((room) => (
                <div
                  key={room._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  {" "}
                  <div className="relative overflow-hidden">
                    {" "}
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />{" "}
                    <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 font-semibold rounded">
                      {" "}
                      ${room.price}/night{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-6">
                    {" "}
                    <h3 className="text-xl font-semibold mb-3 text-navy ">
                      {room.name}
                    </h3>{" "}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {" "}
                      {room.features?.map((feature, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 text-gray-600 rounded-full flex items-center space-x-1"
                        >
                          {" "}
                          {iconMap[feature.icon] || <Star size={16} />}{" "}
                          <span>{feature.name}</span>{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>
          )}{" "}
          <div className="text-center mt-12">
            {" "}
            <button
              className="bg-navy text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center space-x-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
                setTimeout(() => {
                  window.location.href = "/rooms";
                }, 500);
              }}
            >
              {" "}
              <span>{t("viewAll")}</span> <ArrowRight size={18} />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* 💼 Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-navy font-serif">
            {t("ourServices")}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Experience world-class amenities designed for your comfort and
            convenience
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-cream p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 💬 Testimonials */}
      <section className="py-16 md:py-20 bg-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            What Our Guests Say
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-10">
            Testimonials from our valued guests
          </p>

          <div className="bg-navy/90 backdrop-blur-sm rounded-lg p-6 sm:p-10">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="currentColor"
                  className="text-gold w-5 h-5 sm:w-6 sm:h-6"
                />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl italic mb-6">
              "Absolutely exceptional service and breathtaking views. A truly
              luxurious experience that exceeded all expectations."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                alt="Guest"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-white/70 text-sm sm:text-base">
                  New York, USA 🇺🇸
                </p>
              </div>
            </div>
          </div>

          <button
            className="mt-8 bg-navy text-white px-6 sm:px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center space-x-2"
            onClick={() => (window.location.href = "/testimonials")}
          >
            <span>Read More Reviews</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
