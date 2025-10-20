import { TrendingUp, TrendingDown, Home, CheckCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  type Booking = {
    _id: string;
    guest: string;
    firstName: string;
    lastName: string;
    room: string;
    roomType?: string;
    status?: string;
    date: string; // booking created date
    checkIn: string;
    checkOut: string;
    createdAt: string; // booking creation timestamp
  };

  const timeAgo = (dateString: string) => {
  const now = new Date();
  const bookingDate = new Date(dateString);
  const diffMs = now.getTime() - bookingDate.getTime();
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} sec ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  const getToday = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Booking[]>(
          `${import.meta.env.VITE_API_BASE_URL}/bookings`
        );

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

  const today = getToday();

  const arrivals = bookings.filter((b) => b.checkIn === today).length;
  const departures = bookings.filter((b) => b.checkOut === today).length;
  const stayovers = bookings.filter(
    (b) => b.checkIn < today && b.checkOut > today
  ).length;
  const totalRooms = 20;
  const freeRooms = totalRooms - (arrivals + stayovers);

  const todayStats = [
    {
      label: "Arrivals",
      count: arrivals,
      icon: TrendingUp,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Departures",
      count: departures,
      icon: TrendingDown,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Stayovers",
      count: stayovers,
      icon: Home,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Free Rooms",
      count: freeRooms >= 0 ? freeRooms : 0,
      icon: CheckCircle,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-blue-100 mb-6">
          Here's what's happening at your hotel today
        </p>
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

      {/* Today’s Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {todayStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold mt-2">
                  {loading ? "..." : stat.count}
                </p>
              </div>
              <div className={`${stat.color} p-4 rounded-xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrivals & Departures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Arrivals */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Arrivals Today
          </h3>
          <div className="space-y-3">
            {bookings
              .filter((b) => b.checkIn === today)
              .slice(0, 3)
              .map((booking) => (
                <div
                  key={booking._id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium">{booking.guest}</p>
                    <p className="text-sm text-gray-500">
                      Room {booking.room} • {booking.checkIn}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {booking.status}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Departures */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            Departures Today
          </h3>
          <div className="space-y-3">
            {bookings
              .filter((b) => b.checkOut === today)
              .slice(0, 3)
              .map((booking) => (
                <div
                  key={booking._id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium">{booking.guest}</p>
                    <p className="text-sm text-gray-500">
                      Room {booking.room} • {booking.checkOut}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Check-out
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ✅ Recent Bookings (Fixed) */}
      {/* Recent Bookings */}
<div className="bg-white rounded-xl shadow-md p-6">
  <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="text-left py-3 px-4 font-medium text-gray-600">Booking ID</th>
          <th className="text-left py-3 px-4 font-medium text-gray-600">Guest Name</th>
          <th className="text-left py-3 px-4 font-medium text-gray-600">Room</th>
          <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
          <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
  {bookings.length > 0 ? (
    bookings
      .sort((a, b) => new Date(b.checkIn).getTime() - new Date(a.checkIn).getTime()) // latest checkIn first
      .slice(0, 5)
      .map((booking) => {
        // Compute status based on dates
        const today = new Date().toISOString().split("T")[0];
        let status = "Pending";
        if (booking.checkIn === today) status = "Arriving Today";
        else if (booking.checkOut === today) status = "Checking Out";
        else if (booking.checkIn < today && booking.checkOut > today) status = "Stayover";

        return (
          <tr key={booking._id} className="border-b hover:bg-gray-50 transition-colors">
            <td className="py-3 px-4 font-medium">{booking._id.slice(-6).toUpperCase()}</td>
            <td className="py-3 px-4">{booking.firstName} {booking.lastName}</td>
            <td className="py-3 px-4">{booking.roomType}</td>
            <td className="py-3 px-4">{booking.checkIn}</td>
            <td className="py-3 px-4">
             <td className="py-3 px-4">
  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
    {timeAgo(booking.createdAt)}
  </span>
</td>

            </td>
          </tr>
        );
      })
  ) : (
    <tr>
      <td colSpan={5} className="text-center text-gray-500 py-6 italic">
        No recent bookings found.
      </td>
    </tr>
  )}
</tbody>

    </table>
  </div>
</div>

      {/* Latest Updates */}
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
              <p className="text-sm text-gray-500">
                John Smith booked Room 101 for 3 nights
              </p>
              <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Guest checked in</p>
              <p className="text-sm text-gray-500">
                Emma Wilson checked into Room 205
              </p>
              <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Room service request</p>
              <p className="text-sm text-gray-500">
                Room 310 requested maintenance
              </p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
