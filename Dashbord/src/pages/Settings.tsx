import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Globe, Shield } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

export const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8"
    >
      <div className="max-w-4xl mx-auto space-y-8 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your application preferences and settings
          </p>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Moon className="mr-3" size={20} />
              Appearance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Customize how the dashboard looks and feels
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                {isDarkMode ? (
                  <Sun className="text-yellow-500" size={20} />
                ) : (
                  <Moon className="text-gray-600 dark:text-gray-400" size={20} />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Toggle between light and dark theme
                  </p>
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    isDarkMode ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Bell className="mr-3" size={20} />
              Notifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Manage when and how you receive notifications
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {[
              { title: 'New Bookings', description: 'Get notified when new bookings are made' },
              { title: 'Booking Updates', description: 'Notifications for booking modifications' },
              { title: 'System Alerts', description: 'Important system and security alerts' },
              { title: 'Email Reports', description: 'Weekly and monthly email reports' }
            ].map((setting, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{setting.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500">
                  <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform translate-x-6 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Shield className="mr-3" size={20} />
              System
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              System-wide preferences and security settings
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <Globe className="text-gray-600 dark:text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Language</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred language</p>
                </div>
              </div>
              <select className="w-full sm:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
              </div>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};