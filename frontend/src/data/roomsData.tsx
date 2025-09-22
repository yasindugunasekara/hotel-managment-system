import { Wifi, Car, Coffee, Eye, AirVent } from "lucide-react";
import { ShowerHeadIcon, Space } from "lucide-react"; // check if these exist or replace

export const rooms = [
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
        
        { icon: <Car size={16} />, name: 'privat balcony' },
      ],
      description:
        'Ultimate luxury with panoramic city views, private terrace, and personalized services.',
    },
    {
      id: 4,
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
        'Perfect for business travelers with dedicated workspace and meeting facilities.'
    }
  ];

  export const categories = [
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
