import { motion } from 'framer-motion';
import { mockBookings } from '@/data/mockData';

const getStatusBadge = (status: string) => {
  const styles = {
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const RecentBookings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Bookings
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Guest
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Room
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Check-in
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {mockBookings.slice(0, 5).map((booking, index) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="py-3 px-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {booking.guestName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {booking.email}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                  {booking.room}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                  {new Date(booking.checkIn).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  {getStatusBadge(booking.status)}
                </td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  ${booking.total}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};