import React, { useState, useEffect } from 'react';
import { Star, Wifi, Car, Coffee, Users, Bed, Bath, Eye, ShowerHeadIcon, AirVent, Space } from 'lucide-react';

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Standard Double Room',
      category: 'standard',
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 149,
      rating: 4.7,
      size: '25 sqm',
      guests: 2,
      bed: 'king Bed',
      amenities: ['Free WiFi','Hot water'],
      features: [
        { icon: <Wifi size={16} />, name: 'Free WiFi' },
        { icon: <ShowerHeadIcon size={16} />, name: 'Hot Water' },
        { icon: <Car size={16} />, name: 'Parking' },
      ],
      description:
        'Elegant and comfortable room with modern amenities and rooftop view.',
    },
    {
      id: 2,
      name: 'Sea view Deluxe Room',
      category: 'sea view',
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 299,
      rating: 4.8,
      size: '25 sqm',
      guests: 2,
      bed: 'King Bed',
      amenities: [
        'Ocean View',
        'Balcony',
      ],
      features: [
        { icon: <Eye size={16} />, name: 'Ocean View' },
        { icon: <Wifi size={16} />, name: 'WiFi' },
        
      ],
      description:
        'Spacious suite with breathtaking ocean views and luxury amenities.',
    },
    {
      id: 3,
      name: 'Air Conditioned Double Room',
      category: 'Air Conditioned',
      image:
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 199,
      rating: 4.6,
      size: '25 sqm',
      guests: 2,
      bed: 'King Bed',
      amenities: [
        'Work Desk',
        'Hot Water',
        'High-Speed WiFi',
        'Air Conditioning',
      ],
      features: [
        { icon: <Wifi size={16} />, name: 'High-Speed WiFi' },
        { icon: <AirVent size={16} />, name: 'Air Conditioning' },
        { icon: <Space size={16} />, name: 'Balcony' },
      ],
      description:
        'Perfect for business travelers with dedicated workspace and meeting facilities.',
    },
    {
      id: 4,
      name: 'large Family Room',
      category: 'family',
      image:
        'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 699,
      rating: 5.0,
      size: '45 sqm',
      guests: 3,
      bed: 'Master Suite + 1 Bedrooms',
      amenities: [
        'Panoramic View',
        'Private Terrace',
        "large space"
      ],
      features: [
        { icon: <Eye size={16} />, name: 'Panoramic Views' },
        { icon: <Coffee size={16} />, name: 'Personal Butler' },
        { icon: <Car size={16} />, name: 'Limousine Service' },
      ],
      description:
        'Ultimate luxury with panoramic city views, private terrace, and personalized services.',
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rooms', count: rooms.length },
    {
      id: 'standard',
      name: 'Standard',
      count: rooms.filter((r) => r.category === 'standard').length,
    },
    {
      id: 'sea view',
      name: 'Sea View',
      count: rooms.filter((r) => r.category === 'sea view').length,
    },
    {
      id: 'Air Conditioned',
      name: 'Air Conditioned',
      count: rooms.filter((r) => r.category === 'Air Conditioned').length,
    },
    
    {
      id: 'family',
      name: 'Family',
      count: rooms.filter((r) => r.category === 'family').length,
    }
  ];

  const filteredRooms =
    selectedCategory === 'all'
      ? rooms
      : rooms.filter((room) => room.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Rooms & Suites
          </h1>
          <p className="text-xl text-white/90">
            Discover luxury accommodations tailored to your needs
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded font-medium transition-all duration-300 relative ${
                  selectedCategory === category.id
                  ? 'text-gold '
                  : 'bg-white text-navy hover:text-gold'
                }`}
                >
                {category.name}
                {selectedCategory === category.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold "></span>
                )}
                </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-semibold">
                    ${room.price}/night
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star
                      fill="currentColor"
                      className="text-gold w-4 h-4"
                    />
                    <span className="font-semibold text-sm">
                      {room.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-navy font-serif">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Bed size={14} />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath size={14} />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    {room.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-gold flex items-center space-x-1"
                      >
                        {feature.icon}
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="text-xs bg-cream px-2 py-1 rounded-full text-gray-600"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs text-gold">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gold text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium text-sm">
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-white transition-all duration-300 text-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Special Offers
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Limited time offers for our luxury accommodations
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">
                Early Bird Discount
              </h3>
              <p className="text-white/90 mb-4">
                Book 30 days in advance and save 25% on all room
                categories
              </p>
              <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
                Book Early
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">
                Extended Stay
              </h3>
              <p className="text-white/90 mb-4">
                Stay 5 nights or more and receive complimentary spa
                access
              </p>
              <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
                Extended Stay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
