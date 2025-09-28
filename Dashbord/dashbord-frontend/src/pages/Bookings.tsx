import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  specialRequest?: string;
}

export const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        console.log("Fetched bookings:", json); // Debug log
        setBookings(Array.isArray(json) ? json : []); // backend returns array directly
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setBookings([]);
      }
    };
    fetchBookings();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Guest Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Room Type</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Check-in</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Check-out</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Guests</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, idx) => (
                <motion.tr
                  key={booking._id || idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-2 px-4 font-medium text-gray-900 dark:text-white">{booking.firstName} {booking.lastName}</td>
                  <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400">{booking.email}</td>
                  <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.roomType}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{new Date(booking.checkIn).getFullYear()}/{new Date(booking.checkIn).getMonth() + 1}/{new Date(booking.checkIn).getDate()}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{new Date(booking.checkOut).getFullYear()}/{new Date(booking.checkOut).getMonth() + 1}/{new Date(booking.checkOut).getDate()}</td>
                  <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.guests}</td>
                  <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.specialRequest || "-"}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 text-center text-gray-500 dark:text-gray-400">No bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
