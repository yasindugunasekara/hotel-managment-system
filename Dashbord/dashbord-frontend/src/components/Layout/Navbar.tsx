import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  Bell, 
  Moon, 
  Sun, 
  User, 
  Settings, 
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useSidebar } from '@/hooks/useSidebar';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { toggleSidebar, isMobile } = useSidebar();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Messages', path: '/messages' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Users', path: '/users' },
    { name: 'Settings', path: '/settings' }
  ];

  const notifications = [
    { id: 1, message: 'New booking from John Smith', time: '5 min ago' },
    { id: 2, message: 'Room 204 maintenance completed', time: '1 hour ago' },
    { id: 3, message: 'Weekly report is ready', time: '2 hours ago' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        )}
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white p-9">
          Calm Rest
        </h1>
      </div>

      {!isMobile && (
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800  transition-colors bg-transparent"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon size={20} className="text-gray-600 dark:text-gray-400" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors relative bg-transparent"
          >
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {isNotificationOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <p className="text-sm text-gray-900 dark:text-white">{notification.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
            <button
            onClick={(e) => {
              e.stopPropagation();
              setIsProfileOpen(!isProfileOpen);
            }}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800"
            >
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
              Admin User
            </span>
            <ChevronDown size={16} className="text-gray-600 dark:text-gray-400" />
            </button>
            {isProfileOpen && (
            <div
              onClick={() => setIsProfileOpen(false)}
              className="fixed inset-0 z-40"
            ></div>
            )}

          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
            >
              <div className="p-2">
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg bg-transparent">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg bg-transparent">
                  <Settings size={16} />
                  <span>Change Password</span>
                </button>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg bg-transparent">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};