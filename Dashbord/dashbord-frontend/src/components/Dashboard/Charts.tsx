// Charts.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  LineChart, Line, 
  BarChart, Bar, 
  PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

// Colors for charts
const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F472B6'];

// ----------------- TypeScript Types -----------------
interface BookingType {
  id: string;
  guestName: string;
  room: string;
  total: number;
  status: string;
  createdAt: string;
}

interface RevenueType {
  month: string;
  revenue: number;
}

interface RoomType {
  category?: string;
}

interface PieData {
  name: string;
  value: number;
}

// ----------------- Bookings Chart -----------------
export const BookingsChart = ({ bookingsData }: { bookingsData: BookingType[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Monthly Bookings
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={bookingsData}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="createdAt" className="text-gray-600 dark:text-gray-400" />
        <YAxis className="text-gray-600 dark:text-gray-400" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgb(31 41 55)',
            border: 'none',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="total" 
          stroke="#3B82F6" 
          strokeWidth={3}
          dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// ----------------- Revenue Chart -----------------
export const RevenueChart = ({ revenueData }: { revenueData: RevenueType[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Monthly Revenue
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
        <YAxis className="text-gray-600 dark:text-gray-400" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgb(31 41 55)',
            border: 'none',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// ----------------- Room Types Pie Chart -----------------
export const RoomTypesChart = () => {
  const [roomTypesData, setRoomTypesData] = useState<PieData[]>([]);

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await axios.get<RoomType[]>('http://localhost:5000/api/rooms/');
        const rooms = response.data;

        // Count rooms by category
        const categoryCount: { [key: string]: number } = {};
        rooms.forEach((room: RoomType) => {
          const category = room.category || 'Uncategorized';
          categoryCount[category] = (categoryCount[category] || 0) + 1;
        });

        // Convert to array suitable for Recharts Pie
        const pieData: PieData[] = Object.keys(categoryCount).map((key) => ({
          name: key,
          value: categoryCount[key],
        }));

        setRoomTypesData(pieData);
      } catch (error) {
        console.error('Error fetching room types:', error);
      }
    };

    fetchRoomTypes();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Room Types Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roomTypesData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#706dafff"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {roomTypesData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
