import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Eye } from 'lucide-react';
import { mockBookings } from '@/data/mockData';
import { Booking } from '@/types';

const getStatusBadge = (status: string) => {
  const styles = {
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const handleApprove = (id: string) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { ...booking, status: 'confirmed' as const }
          : booking
      )
    );
  };

  const handleReject = (id: string) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { ...booking, status: 'cancelled' as const }
          : booking
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Bookings</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and track all hotel bookings
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Guest Information
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Room & Dates
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Guests
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Total
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <motion.tr
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.guestName}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {booking.email}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.room}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900 dark:text-white">
                    {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                  </td>
                  <td className="py-4 px-6">
                    {getStatusBadge(booking.status)}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    ${booking.total}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(booking.id)}
                            className="p-2 text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900 rounded-lg transition-colors"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleReject(booking.id)}
                            className="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900 rounded-lg transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};