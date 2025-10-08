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
  id?: string;           // or _id if using MongoDB
  _id?: string;          // add this if using MongoDB
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  size: string;
  guests: number;
  bed: string;
  amenities: string[];
  features: { name: string; icon: string }[];
  description: string;
  type: string;
  available: boolean;
  capacity: number;
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