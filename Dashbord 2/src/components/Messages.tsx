import { User } from 'lucide-react';

const mockMessages = [
  { id: 1, from: 'John Smith', subject: 'Late check-in request', time: '10 min ago', unread: true },
  { id: 2, from: 'Emma Wilson', subject: 'Room service inquiry', time: '1 hour ago', unread: true },
  { id: 3, from: 'Michael Brown', subject: 'Booking modification', time: '3 hours ago', unread: false },
  { id: 4, from: 'Sarah Davis', subject: 'Special amenities', time: '5 hours ago', unread: false },
];

export default function Messages() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Messages</h1>

      <div className="bg-white rounded-xl shadow-md">
        {mockMessages.map((message) => (
          <div key={message.id} className={`p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{message.from}</p>
                    {message.unread && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                  </div>
                  <p className="text-gray-700 mt-1">{message.subject}</p>
                  <p className="text-sm text-gray-500 mt-1">{message.time}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
