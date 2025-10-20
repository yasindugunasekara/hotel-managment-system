import { useEffect, useState } from "react";
import axios from "axios";

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
  status?: string;
}

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get<Booking[]>(`${API_BASE_URL}/bookings`);
        const dataWithStatus = response.data.map((b) => ({
          ...b,
          status: b.status || "Pending",
        }));
        setBookings(dataWithStatus);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const confirmDelete = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!selectedBooking) return;

    try {
      const response = await axios.delete(`${API_BASE_URL}/bookings/${selectedBooking._id}`);
      if (response.data.success) {
        setBookings((prev) => prev.filter((b) => b._id !== selectedBooking._id));
      } else {
        alert(response.data.error || "Failed to delete booking.");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking. Please try again.");
    } finally {
      setShowDeleteModal(false);
      setSelectedBooking(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          New Booking
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            Hotel Bookings
            <p className="mt-1 text-sm font-normal text-gray-500">
              Browse a list of all hotel bookings with guest details, room types, and check-in/out dates.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Guest Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Room Type</th>
              <th scope="col" className="px-6 py-3">Check-in</th>
              <th scope="col" className="px-6 py-3">Check-out</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{b._id.slice(-6).toUpperCase()}</th>
                  <td className="px-6 py-4">{b.firstName} {b.lastName}</td>
                  <td className="px-6 py-4">{b.email}</td>
                  <td className="px-6 py-4">{b.roomType}</td>
                  <td className="px-6 py-4">{b.checkIn}</td>
                  <td className="px-6 py-4">{b.checkOut}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="font-medium text-red-600 hover:underline"
                      onClick={() => confirmDelete(b)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Delete Booking</h2>
            <p className="mb-6">
              Are you sure you want to delete the booking of <strong>{selectedBooking.firstName} {selectedBooking.lastName}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
