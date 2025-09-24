export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Manager';
  status: 'Active' | 'Inactive';
  avatar?: string;
  joinDate: string;
}

export interface Room {
  id: string;
  name: string;
  type: 'Standard' | 'Deluxe' | 'Suite' | 'Presidential';
  price: number;
  status: 'Available' | 'Occupied' | 'Maintenance';
  image: string;
  capacity: number;
  amenities: string[];
  description: string;
}

export interface Booking {
  id: string;
  guestName: string;
  roomType: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  duration: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Completed';
  totalAmount: number;
  guestEmail: string;
  phone: string;
  createdAt: string;
}

export interface DashboardStats {
  totalBookings: number;
  activeRooms: number;
  revenue: number;
  occupancyRate: number;
}

export interface ChartData {
  name: string;
  value: number;
  month?: string;
  bookings?: number;
  revenue?: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}