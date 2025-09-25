import { motion } from 'framer-motion';
import { 
  Calendar, 
  Home, 
  DollarSign, 
  TrendingUp 
} from 'lucide-react';
import { KPICard } from '@/components/Dashboard/KPICard';
import { BookingsChart, RevenueChart, RoomTypesChart } from '@/components/Dashboard/Charts';
import { RecentBookings } from '@/components/Dashboard/RecentBookings';
import { mockKPIs } from '@/data/mockData';

const iconMap = {
  Calendar,
  Home,
  DollarSign,
  TrendingUp
};

export const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mockKPIs.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <KPICard
              {...kpi}
              icon={iconMap[kpi.icon as keyof typeof iconMap]}
            />
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BookingsChart />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <RevenueChart />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <RecentBookings />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <RoomTypesChart />
        </motion.div>
      </div>
    </motion.div>
  );
};