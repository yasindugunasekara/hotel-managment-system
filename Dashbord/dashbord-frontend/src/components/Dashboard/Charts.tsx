import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';
import { chartData } from '@/data/mockData';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export const BookingsChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Monthly Bookings
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData.bookings}>
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
        <Line 
          type="monotone" 
          dataKey="bookings" 
          stroke="#3B82F6" 
          strokeWidth={3}
          dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const RevenueChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Monthly Revenue
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData.revenue}>
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

export const RoomTypesChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Room Types Distribution
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData.roomTypes}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {chartData.roomTypes.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);