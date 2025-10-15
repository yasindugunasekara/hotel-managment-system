const mockBookings = [
  { id: 'BK001', guest: 'John Smith', room: '101', status: 'Confirmed', date: '2025-10-15', checkIn: '14:00', checkOut: '2025-10-18' },
  { id: 'BK002', guest: 'Emma Wilson', room: '205', status: 'Checked-in', date: '2025-10-14', checkIn: '15:30', checkOut: '2025-10-16' },
  { id: 'BK003', guest: 'Michael Brown', room: '310', status: 'Pending', date: '2025-10-16', checkIn: '12:00', checkOut: '2025-10-20' },
  { id: 'BK004', guest: 'Sarah Davis', room: '112', status: 'Confirmed', date: '2025-10-15', checkIn: '16:00', checkOut: '2025-10-17' },
  { id: 'BK005', guest: 'James Miller', room: '208', status: 'Checked-in', date: '2025-10-13', checkIn: '14:30', checkOut: '2025-10-15' },
];

export default function Bookings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          New Booking
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">All</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">Confirmed</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">Checked-in</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">Pending</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Booking ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Guest Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Room</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Check-in</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Check-out</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{booking.id}</td>
                  <td className="py-3 px-4">{booking.guest}</td>
                  <td className="py-3 px-4">{booking.room}</td>
                  <td className="py-3 px-4">{booking.date} {booking.checkIn}</td>
                  <td className="py-3 px-4">{booking.checkOut}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'Checked-in' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
