import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Users,
  X,
  BedDouble,
  Wind,
  Tv,
  UtensilsCrossed,
  Wifi,
  Bath,
} from "lucide-react";

// --- HELPER COMPONENTS ---

// Amenity Icon Component
const AmenityIcon = ({ amenity }: { amenity: keyof typeof iconMap }) => {
  const iconMap = {
    wifi: <Wifi size={18} />,
    airConditioning: <Wind size={18} />,
    tv: <Tv size={18} />,
    roomService: <UtensilsCrossed size={18} />,
    balcony: <BedDouble size={18} />,
    hotWater: <Bath size={18} />,
  };
  return iconMap[amenity] || null;
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

  // --- API & CRUD HANDLERS ---

  // Fetch rooms on page load
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/rooms`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      console.error("Failed to fetch rooms:", err);
    }
  };

  // Add new room
  const handleAddRoom = () => {
    setEditingRoom(null);
    setIsModalOpen(true);
  };

  // Edit room
  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setIsModalOpen(true);
  };

  // Set up room for deletion
  const handleDeleteClick = (room) => {
    setRoomToDelete(room);
    setIsDeleteConfirmOpen(true);
  };

  // Confirm and execute deletion
  const confirmDelete = async () => {
    if (!roomToDelete) return;
    try {
      await fetch(`${API_BASE_URL}/rooms/${roomToDelete._id}`, {
        method: "DELETE",
      });
      fetchRooms(); // Refresh the room list
    } catch (err) {
      console.error("Failed to delete room:", err);
    } finally {
      setIsDeleteConfirmOpen(false);
      setRoomToDelete(null);
    }
  };

  // Save (add or update) a room
  const handleSaveRoom = async (roomData) => {
    try {
      const url = editingRoom
        ? `${API_BASE_URL}/rooms/${editingRoom._id}`
        : `${API_BASE_URL}/rooms`;

      const method = editingRoom ? "PUT" : "POST";

      await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roomData),
      });

      fetchRooms(); // Refresh the room list
    } catch (err) {
      console.error("Failed to save room:", err);
    } finally {
      setIsModalOpen(false);
      setEditingRoom(null);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Rooms</h1>
          <p className="text-gray-500 mt-1">
            Manage hotel rooms and their details
          </p>
        </header>

        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddRoom}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <Plus size={20} />
            Add Room
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room._id}
              room={room}
              onEdit={handleEditRoom}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <RoomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveRoom}
          room={editingRoom}
        />
      )}

      {isDeleteConfirmOpen && (
        <DeleteConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setIsDeleteConfirmOpen(false)}
        />
      )}
    </div>
  );
}

// --- Room Card Component ---
const RoomCard = ({ room, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={
          room.image || "https://placehold.co/600x400/EEE/31343C?text=No+Image"
        }
        alt={room.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{room.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{room.category}</p>
        <p className="text-gray-600 text-sm mb-4 h-10">{room.description}</p>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Users size={16} className="mr-2" />
          <span>{room.guests} guests</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-600">
            ${room.price}
            <span className="text-sm text-gray-500 font-normal">/night</span>
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(room)}
              className="bg-blue-100 text-blue-700 p-2 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => onDelete(room)}
              className="bg-red-100 text-red-700 p-2 rounded-full hover:bg-red-200 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Add/Edit Room Modal ---
const RoomModal = ({ isOpen, onClose, onSave, room }) => {
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    rating: 0,
    size: 0,
    guests: 1,
    bedType: "",
    image: "",
    description: "",
    amenities: [],
    features: [],
  });

  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    if (room) {
      setFormData({ ...room });
    } else {
      setFormData({
        name: "",
        category: "",
        price: 0,
        rating: 0,
        size: 0,
        guests: 1,
        bedType: "",
        image: "",
        description: "",
        amenities: [],
        features: [],
      });
    }
  }, [room]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "amenities") {
      const currentAmenities = formData.amenities || [];
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          amenities: [...currentAmenities, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          amenities: currentAmenities.filter((a) => a !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseFloat(value) : value,
      }));
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...(formData.features || []), newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: (formData.features || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleUpload = () => {
    if (window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: CLOUDINARY_CLOUD_NAME,
          uploadPreset: CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "camera", "url"],
          multiple: false,
          folder: "Rooms",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            // Update image in formData
            setFormData((prev) => ({
              ...prev,
              image: result.info.secure_url,
            }));
            console.log("✅ Uploaded:", result.info.secure_url);
          }
        }
      );
      widget.open();
    } else {
      alert("Cloudinary widget not loaded. Please refresh the page.");
    }
  };

  const allAmenities = [
    "wifi",
    "airConditioning",
    "tv",
    "roomService",
    "balcony",
    "hotWater",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b z-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {room ? "Edit Room" : "Add New Room"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Room Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Deluxe Suite"
            />
            <InputField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Air Conditioned"
            />
            <InputField
              label="Price per night ($)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            <InputField
              label="Rating"
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
            />
            <InputField
              label="Size (sqm)"
              name="size"
              type="number"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g. 25"
            />
            <InputField
              label="Guests Allowed"
              name="guests"
              type="number"
              value={formData.guests}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <InputField
              label="Bed Type"
              name="bedType"
              value={formData.bedType}
              onChange={handleChange}
              placeholder="e.g. King Bed"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <button
              type="button"
              onClick={handleUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Upload Image
            </button>

            {formData.image && (
              <div className="mt-4">
                <img
                  src={formData.image}
                  alt="Uploaded"
                  className="w-40 h-40 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {allAmenities.map((amenity) => (
                <label key={amenity} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    checked={(formData.amenities || []).includes(amenity)}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="capitalize flex items-center gap-1.5 text-gray-600">
                    <AmenityIcon amenity={amenity} />{" "}
                    {amenity.replace(/([A-Z])/g, " $1")}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            <div className="space-y-2">
              {(formData.features || []).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 p-2 rounded-md"
                >
                  <span className="flex-grow text-gray-700">{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add a feature"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white p-6 border-t mt-8 -mx-6 -mb-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
            >
              {room ? "Update Room" : "Save Room"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <div>
    <label
      htmlFor={props.name}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {label}
    </label>
    <input
      id={props.name}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

// --- Delete Confirmation Modal ---
const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-bold text-gray-900">Delete Room</h3>
        <p className="mt-2 text-sm text-gray-600">
          Are you sure you want to delete this room? This action cannot be
          undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
