export interface Booking {
  id: string;
  guestName: string;
  email: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  total: number;
  createdAt: string;
}

export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  amenities: string[];
  available: boolean;
  capacity: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  avatar: string;
  createdAt: string;
  lastLogin: string;
}

export interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}