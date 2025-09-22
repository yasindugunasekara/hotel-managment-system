// src/data/gestreviwe.ts
import { Star, Quote } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  image: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  roomType: string;
  stayDuration: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'New York, USA',
    flag: '🇺🇸',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    title: 'Absolutely Exceptional Experience',
    review: 'The level of service at Calm Rest exceeded all my expectations. From the moment I walked in, I felt like royalty. The attention to detail, the luxurious amenities, and the breathtaking views made this stay unforgettable. The staff went above and beyond to ensure every need was met.',
    date: 'March 2024',
    roomType: 'Presidential Suite',
    stayDuration: '3 nights'
  },
  {
    id: 2,
    name: 'Hans Mueller',
    country: 'Berlin, Germany',
    flag: '🇩🇪',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    title: 'Perfect Business Trip',
    review: 'As a frequent business traveler, I can confidently say Calm Rest sets the gold standard. The executive lounge, high-speed WiFi, and professional meeting facilities made my work seamless. The concierge team was incredibly helpful with local recommendations.',
    date: 'February 2024',
    roomType: 'Executive Suite',
    stayDuration: '5 nights'
  },
  {
    id: 3,
    name: 'Aiko Tanaka',
    country: 'Tokyo, Japan',
    flag: '🇯🇵',
    image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    title: 'A Tranquil Escape',
    review: 'Calm Rest provided the perfect getaway from the hustle and bustle of city life. The serene environment, coupled with top-notch service, made my stay truly relaxing. I especially enjoyed the spa treatments and the beautiful garden.',
    date: 'January 2024',
    roomType: 'Garden View Room',
    stayDuration: '2 nights'
  },

];

export const stats = [
  { number: '4.9/5', label: 'Average Rating', icon: Star },
  { number: '2,847', label: 'Total Reviews', icon: Quote },
  { number: '98%', label: 'Would Recommend', icon: Star },
  { number: '94%', label: 'Return Guests', icon: Star },
];
2