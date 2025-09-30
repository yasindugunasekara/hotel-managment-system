import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Home, 
  Users, 
  Settings,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '@/hooks/useSidebar';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Calendar, label: 'Bookings', path: '/bookings' },
  { icon: Calendar, label: 'Messages', path: '/messages' },
  { icon: Home, label: 'Rooms', path: '/rooms' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

export const Sidebar = () => {
  const location = useLocation();
  const { isOpen, isMobile, closeSidebar } = useSidebar();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => console.log('close')}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={isMobile ? 'closed' : 'open'}
        animate={isMobile ? (isOpen ? 'open' : 'closed') : 'open'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 md:relative md:z-0"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Hotel Admin
          </h2>
          {isMobile && (
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          )}
        </div>

        <nav className="">
          <ul className="space-y-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={isMobile ? closeSidebar : undefined}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.aside>
    </>
  );
};