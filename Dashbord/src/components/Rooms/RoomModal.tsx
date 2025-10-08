import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Room } from "@/types";

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (room: Omit<Room, "id">) => void;
  room: Room | null;
}

export const RoomModal = ({ isOpen, onClose, onSave, room }: RoomModalProps) => {
  // Form state matches roomSchema fields
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    rating: 0,
    size: "",
    guests: 1,
    bed: "",
    amenities: [] as string[],
    features: [] as { name: string; icon: string }[],
    description: "",
    type: "standard",
    available: true,
    capacity: 2,
  });

  // Load room data into form if editing
  useEffect(() => {
    if (room) {
      setFormData({
        name: room.name,
        category: room.category || "",
        image: room.image,
        price: room.price,
        rating: room.rating || 0,
        size: room.size || "",
        guests: room.guests || 1,
        bed: room.bed || "",
        amenities: room.amenities || [],
        features: room.features || [],
        description: room.description || "",
        type: room.type || "standard",
        available: room.available !== undefined ? room.available : true,
        capacity: room.capacity || 2,
      });
    } else {
      // Reset to empty when adding new room
      setFormData({
        name: "",
        category: "",
        image: "",
        price: 0,
        rating: 0,
        size: "",
        guests: 1,
        bed: "",
        amenities: [],
        features: [],
        description: "",
        type: "standard",
        available: true,
        capacity: 2,
      });
    }
  }, [room]);

  // Submit form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  // Amenities toggle handler
  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, amenity]
        : prev.amenities.filter((a) => a !== amenity),
    }));
  };

  if (!isOpen) return null;

  // Common amenities list
  const commonAmenities = [
    "WiFi",
    
    "Ocean View",
    "Balcony",
    "Room Service",
    "Air Conditioning",
    "Hot Water",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with title + close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {room ? "Edit Room" : "Add New Room"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-100 rounded-lg" // Close button hover bg red
          >
            <X size={20} className="text-red-600" /> {/* Red close icon */}
          </button>
        </div>

        {/* Form starts */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Grid for inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Room Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Room Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Air Conditioned"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Price per night ($)
              </label>
              <input
                type="number"
                min="0"
                required
                value={formData.price}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rating: Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <input
                type="text"
                value={formData.size}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, size: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 25 sqm"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Guests Allowed
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    guests: Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bed */}
            <div>
              <label className="block text-sm font-medium mb-2">Bed Type</label>
              <input
                type="text"
                value={formData.bed}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bed: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. King Bed"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              required
              value={formData.image}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium mb-3">Amenities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {commonAmenities.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={(e) =>
                      handleAmenityChange(amenity, e.target.checked)
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Features (dynamic fields) */}
          <div>
            <label className="block text-sm font-medium mb-3">Features</label>
            {formData.features.map((feature, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature.name}
                  placeholder="Feature Name"
                  onChange={(e) => {
                    const updated = [...formData.features];
                    updated[idx].name = e.target.value;
                    setFormData((prev) => ({ ...prev, features: updated }));
                  }}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                />
                {/* <input
                  type="text"
                  value={feature.icon}
                  placeholder="Icon name"
                  onChange={(e) => {
                    const updated = [...formData.features];
                    updated[idx].icon = e.target.value;
                    setFormData((prev) => ({ ...prev, features: updated }));
                  }}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                /> */}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  features: [...prev.features, { name: "", icon: "" }],
                }))
              }
              className="text-white bg-blue-600 text-sm mt-2"
            >
              + Add Feature
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {room ? "Update Room" : "Add Room"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
