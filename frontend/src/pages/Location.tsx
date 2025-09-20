import React from 'react';
import { MapPin, Plane, Car, Utensils, ShoppingBag, Camera, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const attractions = [
    {
      icon: <Camera className="w-6 h-6" />,
      name: 'City Museum',
      distance: '0.5 km',
      walkTime: '6 min walk',
      description: 'World-renowned art and cultural exhibits'
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      name: 'Grand Shopping Mall',
      distance: '1.2 km',
      walkTime: '15 min walk',
      description: 'Premium shopping and dining destination'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      name: 'Restaurant District',
      distance: '0.8 km',
      walkTime: '10 min walk',
      description: 'Finest culinary experiences in the city'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      name: 'Waterfront Park',
      distance: '2.0 km',
      walkTime: '25 min walk',
      description: 'Beautiful waterfront views and activities'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      name: 'International Airport',
      distance: '15 km',
      walkTime: '20 min drive',
      description: 'Major international airport with global connections'
    },
    {
      icon: <Car className="w-6 h-6" />,
      name: 'Central Train Station',
      distance: '3.5 km',
      walkTime: '8 min drive',
      description: 'High-speed rail connections to major cities'
    },
  ];

  const transportOptions = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Hotel Shuttle',
      description: 'Complimentary shuttle service to key destinations',
      schedule: 'Every 30 minutes, 7 AM - 11 PM'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Taxi Service',
      description: '24/7 taxi service available at hotel entrance',
      schedule: 'Available on demand'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Rental',
      description: 'Premium car rental services through our concierge',
      schedule: 'Available with advance booking'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Location & Directions
          </h1>
          <p className="text-xl text-white/90">
            Perfectly positioned in the heart of the city
          </p>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gold p-4 rounded-full">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-navy font-serif">Calm Rest Hotel</h2>
            <div className="text-lg text-gray-700 space-y-2 mb-8">
              <p>123 Luxury Avenue</p>
              <p>Downtown District</p>
              <p>Metropolitan City, State 12345</p>
              <p>United States</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-gray-700">info@calmrest.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps would be embedded here</p>
                  <div className="mt-4">
                    <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy font-serif">Prime Location</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Calm Rest Hotel is strategically located in the prestigious downtown district, 
                offering unparalleled access to the city's finest attractions, business centers, 
                and cultural landmarks. Our central location ensures that whether you're here 
                for business or leisure, everything you need is within reach.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-2 rounded-full mt-1">
                    <Car className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Transportation Hub</h3>
                    <p className="text-gray-600">Easy access to airports, train stations, and major highways</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-2 rounded-full mt-1">
                    <ShoppingBag className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Shopping & Dining</h3>
                    <p className="text-gray-600">Walking distance to premium shopping and world-class restaurants</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-2 rounded-full mt-1">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Cultural Attractions</h3>
                    <p className="text-gray-600">Minutes away from museums, galleries, and historic landmarks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">Nearby Attractions</h2>
            <p className="text-lg text-gray-700">
              Discover the best of the city from our convenient location
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-3 rounded-full text-white flex-shrink-0">
                    {attraction.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy mb-1">{attraction.name}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                      <span className="font-medium">{attraction.distance}</span>
                      <span>•</span>
                      <span>{attraction.walkTime}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">Transportation Options</h2>
            <p className="text-lg text-gray-700">
              Multiple convenient ways to travel around the city
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gold">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{option.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-serif">Getting Here</h2>
            <p className="text-xl text-white/90">
              Detailed directions to reach Calm Rest Hotel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Plane className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-semibold">From Airport</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• Take Airport Express to Central Station (15 min)</li>
                <li>• Transfer to Metro Line 2 towards Downtown (8 min)</li>
                <li>• Exit at Luxury District Station</li>
                <li>• Hotel is 200m from station exit</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Car className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-semibold">By Car</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• Take Highway 1 to Downtown Exit 15</li>
                <li>• Follow signs to Luxury District</li>
                <li>• Turn right on Luxury Avenue</li>
                <li>• Valet parking available at hotel entrance</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium">
              Get Detailed Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;