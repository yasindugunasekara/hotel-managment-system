import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
}

export const KPICard = ({ title, value, change, trend, icon: Icon }: KPICardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          <div className={`flex items-center mt-2 ${getTrendColor()}`}>
            <TrendIcon size={16} className="mr-1" />
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <Icon size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
};