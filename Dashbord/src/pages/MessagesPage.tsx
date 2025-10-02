import { useState } from "react";
import { motion } from "framer-motion";
import { Send, UserCircle2 } from "lucide-react";

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "them", text: "Hello! How can I help you?", time: "10:00 AM" },
  { id: 2, sender: "me", text: "I want to confirm my booking.", time: "10:05 AM" },
  { id: 3, sender: "them", text: "Sure, let me check that.", time: "10:06 AM" },
];

export const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: Date.now(),
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md">
      {/* Header */}
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
        <UserCircle2 className="w-8 h-8 text-gray-600 dark:text-gray-300" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Chat with Support
        </h3>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-[10px] opacity-70 block mt-1">{msg.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
export default MessagesPage;