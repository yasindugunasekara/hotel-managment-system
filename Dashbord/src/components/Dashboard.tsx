import { TrendingUp, TrendingDown, Home, CheckCircle, Clock } from 'lucide-react';

const mockBookings = [
  { id: 'BK001', guest: 'John Smith', room: '101', status: 'Confirmed', date: '2025-10-15', checkIn: '14:00', checkOut: '2025-10-18' },
  { id: 'BK002', guest: 'Emma Wilson', room: '205', status: 'Checked-in', date: '2025-10-14', checkIn: '15:30', checkOut: '2025-10-16' },
  { id: 'BK003', guest: 'Michael Brown', room: '310', status: 'Pending', date: '2025-10-16', checkIn: '12:00', checkOut: '2025-10-20' },
  { id: 'BK004', guest: 'Sarah Davis', room: '112', status: 'Confirmed', date: '2025-10-15', checkIn: '16:00', checkOut: '2025-10-17' },
  { id: 'BK005', guest: 'James Miller', room: '208', status: 'Checked-in', date: '2025-10-13', checkIn: '14:30', checkOut: '2025-10-15' },
];

export default function Dashboard() {
  const todayStats = [
    { label: 'Arrivals', count: 4, icon: TrendingUp, color: 'bg-green-50 text-green-600' },
    { label: 'Departures', count: 2, icon: TrendingDown, color: 'bg-blue-50 text-blue-600' },
    { label: 'Stayovers', count: 8, icon: Home, color: 'bg-orange-50 text-orange-600' },
    { label: 'Free Rooms', count: 12, icon: CheckCircle, color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-blue-100 mb-6">Here's what's happening at your hotel today</p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            New Booking
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Check-in Guest
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {todayStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.count}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Arrivals Today
          </h3>
          <div className="space-y-3">
            {mockBookings.filter((b) => b.date === '2025-10-15').slice(0, 3).map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-medium">{booking.guest}</p>
                  <p className="text-sm text-gray-500">Room {booking.room} • {booking.checkIn}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            Departures Today
          </h3>
          <div className="space-y-3">
            {mockBookings.filter((b) => b.checkOut === '2025-10-15').map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-medium">{booking.guest}</p>
                  <p className="text-sm text-gray-500">Room {booking.room} • {booking.checkOut}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  Check-out
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Booking ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Guest Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Room</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.slice(0, 5).map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{booking.id}</td>
                  <td className="py-3 px-4">{booking.guest}</td>
                  <td className="py-3 px-4">{booking.room}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'Checked-in' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-600" />
          Latest Updates
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">New booking received</p>
              <p className="text-sm text-gray-500">John Smith booked Room 101 for 3 nights</p>
              <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Guest checked in</p>
              <p className="text-sm text-gray-500">Emma Wilson checked into Room 205</p>
              <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Room service request</p>
              <p className="text-sm text-gray-500">Room 310 requested maintenance</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
