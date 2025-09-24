import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { RoomGrid } from '@/components/rooms/RoomGrid';
import { mockRooms } from '@/data/mockData';
import { Room } from '@/types';

export function Rooms() {
  const [rooms, setRooms] = useState(mockRooms);

  const handleEdit = (room: Room) => {
    console.log('Edit room:', room);
    // TODO: Implement edit modal
  };

  const handleDelete = (roomId: string) => {
    setRooms(rooms.filter(r => r.id !== roomId));
  };

  const handleAdd = () => {
    console.log('Add new room');
    // TODO: Implement add modal
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rooms</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your hotel rooms and availability</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Room
        </Button>
      </motion.div>

      <RoomGrid
        rooms={rooms}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}