import React, { useState } from 'react';
import { Calendar, Users, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = '' }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const { t } = useLanguage();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I would like to book a room at Calm Rest Hotel:
    
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}

Please let me know about availability and pricing. Thank you!`;
    
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleBookingSubmit} className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-semibold mb-6 text-navy font-serif">Book Your Stay</h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-out Date
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Users size={16} className="inline mr-2" />
          Number of Guests
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          {[1, 2, 3, 4, 5, 6].map(num => (
            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full bg-gold text-white py-3 px-6 rounded hover:bg-opacity-90 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
      >
        <MessageCircle size={18} />
        <span>Book via WhatsApp</span>
      </button>
    </form>
  );
};

export default BookingForm;