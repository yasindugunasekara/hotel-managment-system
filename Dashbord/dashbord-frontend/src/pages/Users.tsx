import { motion } from 'framer-motion';
import { Eye, Shield, User } from 'lucide-react';
import { mockUsers } from '@/data/mockData';

const getRoleBadge = (role: string) => {
  const styles = {
    admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    staff: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  };

  const icons = {
    admin: Shield,
    manager: User,
    staff: User
  };

  const Icon = icons[role as keyof typeof icons];

  return (
    <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${styles[role as keyof typeof styles]}`}>
      <Icon size={12} />
      <span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
    </span>
  );
};

export const Users = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage system users and their roles
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  User
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Role
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Last Login
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Member since {new Date(user.createdAt).getFullYear()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900 dark:text-white">
                    {user.email}
                  </td>
                  <td className="py-4 px-6">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="py-4 px-6 text-gray-900 dark:text-white">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};