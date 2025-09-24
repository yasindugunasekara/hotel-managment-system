import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bed, DollarSign, TrendingUp } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Charts } from '@/components/dashboard/Charts';
import { RecentBookings } from '@/components/dashboard/RecentBookings';
import {
  dashboardStats,
  bookingsOverTime,
  revenuePerMonth,
  roomTypeDistribution,
  mockBookings
} from '@/data/mockData';

export function Dashboard() {
  const statsCards = [
    {
      title: 'Total Bookings',
      value: dashboardStats.totalBookings,
      change: '12%',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Rooms',
      value: dashboardStats.activeRooms,
      change: '8%',
      changeType: 'positive' as const,
      icon: Bed,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue',
      value: `$${dashboardStats.revenue.toLocaleString()}`,
      change: '15%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      title: 'Occupancy Rate',
      value: `${dashboardStats.occupancyRate}%`,
      change: '3%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening at your hotel.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <StatsCard key={card.title} {...card} index={index} />
        ))}
      </div>

      {/* Charts */}
      <Charts
        bookingsData={bookingsOverTime}
        revenueData={revenuePerMonth}
        roomTypeData={roomTypeDistribution}
      />

      {/* Recent Bookings */}
      <RecentBookings bookings={mockBookings.slice(0, 5)} />
    </div>
  );
}