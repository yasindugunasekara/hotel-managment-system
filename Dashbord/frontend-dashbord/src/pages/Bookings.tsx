import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookingTable } from '@/components/bookings/BookingTable';
import { mockBookings } from '@/data/mockData';
import { Booking } from '@/types';

export function Bookings() {
  const [bookings, setBookings] = useState(mockBookings);

  const handleEdit = (booking: Booking) => {
    console.log('Edit booking:', booking);
    // TODO: Implement edit modal
  };

  const handleDelete = (bookingId: string) => {
    setBookings(bookings.filter(b => b.id !== bookingId));
  };

  const handleAdd = () => {
    console.log('Add new booking');
    // TODO: Implement add modal
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bookings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage all your hotel bookings</p>
      </motion.div>

      <BookingTable
        bookings={bookings}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
}