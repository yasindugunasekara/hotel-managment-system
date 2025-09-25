import React, { useState } from "react";
import { Calendar, Users, BookA, MessageCircle, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { rooms } from "../data/roomsData";

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = "" }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(rooms[0]?.name || "");
  const [specialRequest, setSpecialRequest] = useState("");
  const { t } = useLanguage();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello! I would like to book a room at Calm Rest Hotel:

Name: ${firstName} ${lastName}
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}
Room Type: ${roomType}

Special Request: ${specialRequest || "None"}

Please let me know about availability and pricing. Thank you!`;

    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleBookingSubmit}
      className={`bg-white p-6 rounded-2xl shadow-lg ${className}
                  max-w-5xl mx-auto`} 
      // 📌 Added for desktop landscape view: centered large container
    >
      <h3 className="text-xl font-semibold mb-6 text-navy font-serif text-center">
        Book Your Stay
      </h3>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* 📌 Added for desktop landscape view: 
            md:grid-cols-2 ensures two-column side-by-side layout on desktop
            gap-16 for spacing */}
        
        {/* Left side (Guest info + dates) */}
        <div className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              required
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Check-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              required
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Check-out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Right side (Room, Guests, Message) */}
        <div className="space-y-6">
          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              required
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users size={16} className="inline mr-2" />
              Number of Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Guest{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageCircle size={16} className="inline mr-2" />
              Special Requirements
            </label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="e.g. Late check-in, extra bed..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              rows={5} // 📌 Increased for better landscape view
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-gold text-white py-3 px-6 rounded-xl 
                     hover:bg-opacity-90 transition-all duration-300 font-medium 
                     flex items-center justify-center space-x-2"
        >
          <BookA size={18} />
          <span>Book Now</span>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
