import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Users, DollarSign } from 'lucide-react';
import { mockRooms } from '@/data/mockData';
import { Room } from '@/types';
import { RoomModal } from '@/components/Rooms/RoomModal';

export const Rooms = () => {
  const [rooms, setRooms] = useState<Room[]>(mockRooms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  const handleAddRoom = () => {
    setEditingRoom(null);
    setIsModalOpen(true);
  };

  const handleEditRoom = (room: Room) => {
    setEditingRoom(room);
    setIsModalOpen(true);
  };

  const handleDeleteRoom = (id: string) => {
    setRooms(prev => prev.filter(room => room.id !== id));
  };

  const handleSaveRoom = (roomData: Omit<Room, 'id'>) => {
    if (editingRoom) {
      setRooms(prev => prev.map(room => 
        room.id === editingRoom.id 
          ? { ...roomData, id: editingRoom.id }
          : room
      ));
    } else {
      const newRoom: Room = {
        ...roomData,
        id: (rooms.length + 1).toString()
      };
      setRooms(prev => [...prev, newRoom]);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rooms</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage hotel rooms and their details
          </p>
        </div>
        <button
          onClick={handleAddRoom}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add Room</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {room.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {room.type}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  room.available
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {room.available ? 'Available' : 'Occupied'}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {room.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users size={16} className="mr-1" />
                  <span className="text-sm">{room.capacity} guests</span>
                </div>
                <div className="flex items-center text-gray-900 dark:text-white">
                  <DollarSign size={16} />
                  <span className="text-lg font-bold">{room.price}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">/night</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditRoom(room)}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 rounded-lg transition-colors"
                >
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDeleteRoom(room.id)}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <RoomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRoom}
        room={editingRoom}
      />
    </motion.div>
  );
};