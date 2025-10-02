import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: "me" | "them";
  Email: string;   // e.g. "iPhone Inquiry"
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "them", Email: "iPhone Inquiry", text: "Hello! How can I help you?", time: "10:00 AM" },
  { id: 2, sender: "me", Email: "Booking", text: "I want to confirm my booking.", time: "10:05 AM" },
  { id: 3, sender: "them", Email: "Booking", text: "Sure, let me check that.", time: "10:06 AM" },
];

export const MessagesPage = () => {
  const handleReply = (msg: Message) => {
    alert(`Replying to ${msg.Email} (${msg.sender}) at ${msg.time}`);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto bg-white dark:bg-gray-800   p-6 overflow-x-auto"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Customer Messages
        </h2>

        <table className="w-full border-collapse text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <th className="p-3">Sender</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              <th className="p-3">Time</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {initialMessages.map((msg) => (
              <motion.tr
                key={msg.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * msg.id }}
                className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3 font-medium text-gray-900 dark:text-gray-100">
                  {msg.sender === "me" ? "Me" : "Customer"}
                </td>
                <td className="p-3">{msg.Email}</td>
                <td className="p-3 max-w-xs">{msg.text}</td>
                <td className="p-3">{msg.time}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleReply(msg)}
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    <Send size={14} /> Reply
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MessagesPage;
