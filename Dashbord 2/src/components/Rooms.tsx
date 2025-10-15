import { DoorOpen } from 'lucide-react';

const mockRooms = [
  { number: '101', type: 'Deluxe Single', price: 120, status: 'Occupied' },
  { number: '102', type: 'Deluxe Single', price: 120, status: 'Available' },
  { number: '205', type: 'Suite', price: 250, status: 'Occupied' },
  { number: '208', type: 'Suite', price: 250, status: 'Occupied' },
  { number: '310', type: 'Standard Double', price: 150, status: 'Reserved' },
  { number: '112', type: 'Deluxe Single', price: 120, status: 'Reserved' },
  { number: '405', type: 'Penthouse', price: 450, status: 'Available' },
  { number: '302', type: 'Standard Double', price: 150, status: 'Available' },
];

export default function Rooms() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Rooms</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Add Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockRooms.map((room) => (
          <div key={room.number} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <DoorOpen className="w-5 h-5 text-gray-600" />
                <p className="font-bold text-lg">{room.number}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                room.status === 'Available' ? 'bg-green-100 text-green-700' :
                room.status === 'Occupied' ? 'bg-red-100 text-red-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {room.status}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{room.type}</p>
            <p className="text-2xl font-bold text-blue-600">${room.price}<span className="text-sm text-gray-500 font-normal">/night</span></p>
            <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
