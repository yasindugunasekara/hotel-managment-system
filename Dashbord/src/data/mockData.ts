import { Booking, Room, User, KPI } from '@/types';

export const mockKPIs: KPI[] = [
  {
    title: 'Total Bookings',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: 'Calendar'
  },
  {
    title: 'Active Rooms',
    value: '156',
    change: '+3.2%',
    trend: 'up',
    icon: 'Home'
  },
  {
    title: 'Total Revenue',
    value: '$284,760',
    change: '+8.1%',
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    title: 'Occupancy Rate',
    value: '87.4%',
    change: '-2.1%',
    trend: 'down',
    icon: 'TrendingUp'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    guestName: 'John Smith',
    email: 'john.smith@email.com',
    room: 'Deluxe Suite 401',
    checkIn: '2024-01-15',
    checkOut: '2024-01-18',
    guests: 2,
    status: 'confirmed',
    total: 750,
    createdAt: '2024-01-10'
  },
  {
    id: '2',
    guestName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    room: 'Standard Room 204',
    checkIn: '2024-01-20',
    checkOut: '2024-01-22',
    guests: 1,
    status: 'pending',
    total: 320,
    createdAt: '2024-01-12'
  },
  {
    id: '3',
    guestName: 'Michael Brown',
    email: 'michael.brown@email.com',
    room: 'Executive Suite 501',
    checkIn: '2024-01-25',
    checkOut: '2024-01-30',
    guests: 4,
    status: 'completed',
    total: 1250,
    createdAt: '2024-01-08'
  }
];

export const mockRooms: Room[] = [
  {
    id: '1',
    name: 'Ocean View Suite',
    category: 'Luxury',
    type: 'Suite',
    price: 300,
    image: '/images/room1.jpg',
    rating: 4.8,
    size: '50m²',
    guests: 2,
    bed: 'King',
    amenities: ['WiFi', 'AC', 'TV'],
    features: [
      { name: 'Sea View', icon: 'Waves' },
      { name: 'Balcony', icon: 'Home' },
    ],
    available: true,
    capacity: 2,
    description: 'Spacious suite with ocean view and premium amenities',
  },
  {
    id: '2',
    name: 'Standard Room',
    category: 'Standard',
    type: 'Room',
    price: 150,
    image: '/images/room2.jpg',
    rating: 4.3,
    size: '30m²',
    guests: 2,
    bed: 'Queen',
    amenities: ['WiFi', 'TV'],
    features: [{ name: 'City View', icon: 'Building' }],
    available: true,
    capacity: 2,
    description: 'Comfortable standard room with essential amenities',
  },
  {
    id: '3',
    name: 'Executive Suite',
    category: 'Executive',
    type: 'Suite',
    price: 500,
    image: '/images/room3.jpg',
    rating: 4.9,
    size: '60m²',
    guests: 3,
    bed: 'King',
    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'],
    features: [{ name: 'Lounge Access', icon: 'Coffee' }],
    available: false,
    capacity: 3,
    description: 'Luxury executive suite with premium services',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@hotel.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    createdAt: '2023-06-15',
    lastLogin: '2024-01-14'
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob@hotel.com',
    role: 'manager',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    createdAt: '2023-08-20',
    lastLogin: '2024-01-13'
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol@hotel.com',
    role: 'staff',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    createdAt: '2023-09-10',
    lastLogin: '2024-01-12'
  }
];

export const chartData = {
  bookings: [
    { month: 'Jan', bookings: 186 },
    { month: 'Feb', bookings: 305 },
    { month: 'Mar', bookings: 237 },
    { month: 'Apr', bookings: 273 },
    { month: 'May', bookings: 209 },
    { month: 'Jun', bookings: 214 }
  ],
  revenue: [
    { month: 'Jan', revenue: 24500 },
    { month: 'Feb', revenue: 35200 },
    { month: 'Mar', revenue: 28900 },
    { month: 'Apr', revenue: 31800 },
    { month: 'May', revenue: 26700 },
    { month: 'Jun', revenue: 29400 }
  ],
  roomTypes: [
    { name: 'Standard', value: 45 },
    { name: 'Deluxe', value: 30 },
    { name: 'Suite', value: 20 },
    { name: 'Executive', value: 5 }
  ]
};