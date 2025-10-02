import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: "me" | "them";
  Email: string;
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
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden pt-4 flex flex-col ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative shadow-lg sm:rounded-lg w-full h-full max-w-[100vw] max-h-[100vh] bg-white dark:bg-gray-800 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white p-4 border-b border-gray-200 dark:border-gray-700">
          Customer Messages
        </h2>

        {/* Table wrapper (vertical scroll only) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="p-4 w-10">
                  {/* <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-white bg-white border border-gray-400 rounded-sm focus:ring-blue-500"
                  /> */}
                </th>
                <th className="px-6 py-3 w-24">Sender</th>
                <th className="px-6 py-3 w-40">Email</th>
                <th className="px-6 py-3 w-[40%]">Message</th>
                <th className="px-6 py-3 w-24">Time</th>
                <th className="px-6 py-3 w-28">Action</th>
              </tr>
            </thead>
            <tbody>
              {initialMessages.map((msg) => (
                <motion.tr
                  key={msg.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * msg.id }}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <input
                      id={`checkbox-${msg.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-white bg-white border border-gray-400 rounded-sm focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {msg.sender === "me" ? "Me" : "Customer"}
                  </td>
                  <td className="px-6 py-4 truncate">{msg.Email}</td>
                  <td className="px-6 py-4 truncate">{msg.text}</td>
                  <td className="px-6 py-4">{msg.time}</td>
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
