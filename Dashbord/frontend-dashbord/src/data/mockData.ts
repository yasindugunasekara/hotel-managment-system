import { User, Room, Booking, DashboardStats, ChartData, Notification } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    joinDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    joinDate: '2024-02-20'
  },
  {
    id: '3',
    name: 'Mike Davis',
    email: 'mike@example.com',
    role: 'User',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    joinDate: '2024-03-10'
  }
];

export const mockRooms: Room[] = [
  {
    id: '1',
    name: 'Ocean View Suite',
    type: 'Suite',
    price: 299,
    status: 'Available',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    capacity: 4,
    amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Ocean View'],
    description: 'Luxurious suite with stunning ocean views'
  },
  {
    id: '2',
    name: 'Presidential Suite',
    type: 'Presidential',
    price: 599,
    status: 'Occupied',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    capacity: 6,
    amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Jacuzzi', 'Butler Service'],
    description: 'Ultimate luxury with premium amenities'
  },
  {
    id: '3',
    name: 'Deluxe Room',
    type: 'Deluxe',
    price: 199,
    status: 'Available',
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    capacity: 2,
    amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Fridge'],
    description: 'Comfortable room with modern amenities'
  },
  {
    id: '4',
    name: 'Standard Room',
    type: 'Standard',
    price: 129,
    status: 'Available',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    capacity: 2,
    amenities: ['Wi-Fi', 'TV', 'AC'],
    description: 'Cozy room with essential amenities'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    guestName: 'Alice Brown',
    roomType: 'Suite',
    roomId: '1',
    checkIn: '2025-01-20',
    checkOut: '2025-01-25',
    duration: 5,
    status: 'Confirmed',
    totalAmount: 1495,
    guestEmail: 'alice@example.com',
    phone: '+1-555-0123',
    createdAt: '2025-01-10'
  },
  {
    id: '2',
    guestName: 'Robert Wilson',
    roomType: 'Deluxe',
    roomId: '3',
    checkIn: '2025-01-18',
    checkOut: '2025-01-22',
    duration: 4,
    status: 'Pending',
    totalAmount: 796,
    guestEmail: 'robert@example.com',
    phone: '+1-555-0124',
    createdAt: '2025-01-12'
  },
  {
    id: '3',
    guestName: 'Emma Garcia',
    roomType: 'Presidential',
    roomId: '2',
    checkIn: '2025-01-15',
    checkOut: '2025-01-20',
    duration: 5,
    status: 'Completed',
    totalAmount: 2995,
    guestEmail: 'emma@example.com',
    phone: '+1-555-0125',
    createdAt: '2025-01-08'
  }
];

export const dashboardStats: DashboardStats = {
  totalBookings: 156,
  activeRooms: 42,
  revenue: 89750,
  occupancyRate: 78
};

export const bookingsOverTime: ChartData[] = [
  { name: 'Jan', bookings: 12 },
  { name: 'Feb', bookings: 19 },
  { name: 'Mar', bookings: 25 },
  { name: 'Apr', bookings: 22 },
  { name: 'May', bookings: 28 },
  { name: 'Jun', bookings: 35 }
];

export const revenuePerMonth: ChartData[] = [
  { name: 'Jan', revenue: 15400 },
  { name: 'Feb', revenue: 18200 },
  { name: 'Mar', revenue: 22100 },
  { name: 'Apr', revenue: 19800 },
  { name: 'May', revenue: 24500 },
  { name: 'Jun', revenue: 28900 }
];

export const roomTypeDistribution: ChartData[] = [
  { name: 'Standard', value: 45 },
  { name: 'Deluxe', value: 30 },
  { name: 'Suite', value: 18 },
  { name: 'Presidential', value: 7 }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Booking',
    message: 'Alice Brown booked Ocean View Suite',
    type: 'success',
    read: false,
    createdAt: '2025-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Payment Received',
    message: 'Payment of $1,495 received for booking #1234',
    type: 'success',
    read: false,
    createdAt: '2025-01-15T09:15:00Z'
  },
  {
    id: '3',
    title: 'Room Maintenance',
    message: 'Room 205 scheduled for maintenance',
    type: 'warning',
    read: true,
    createdAt: '2025-01-14T16:45:00Z'
  }
];