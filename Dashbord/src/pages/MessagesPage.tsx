import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

interface Message {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/messages`);
        // Ensure we get an array no matter what
        const data = Array.isArray(response.data) ? response.data : (response.data as { data?: Message[] }).data || [];
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setMessages([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleReply = (msg: Message) => {
    alert(`Replying to ${msg.fullName} (${msg.email})`);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-300">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center pt-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative shadow-lg sm:rounded-lg w-full max-w-[95vw] h-full max-h-[95vh] bg-white dark:bg-gray-800 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white p-4 border-b border-gray-200 dark:border-gray-700">
          Customer Messages
        </h2>

        {/* Table wrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="p-4 w-10"></th>
                <th className="px-6 py-3 w-32">Name</th>
                <th className="px-6 py-3 w-40">Email</th>
                <th className="px-6 py-3 w-[40%]">Message</th>
                <th className="px-6 py-3 w-28">Time</th>
                <th className="px-6 py-3 w-28">Action</th>
              </tr>
            </thead>
            <tbody>
              {(Array.isArray(messages) ? messages : []).map((msg, index) => (
                <motion.tr
                  key={msg._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-white bg-white border border-gray-400 rounded-sm focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {msg.fullName}
                  </td>
                  <td className="px-6 py-4 truncate">{msg.email}</td>
                  <td className="px-6 py-4 break-words max-w-[400px]">{msg.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleReply(msg)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
                    >
                      <Send size={14} /> Reply
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default MessagesPage;
