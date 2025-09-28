import React, { useState, useEffect } from "react";

interface Category {
  _id: string;
  name: string;
}

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = "" }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch room categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/rooms"); // your API endpoint
        const data: Category[] = await res.json();
        setCategories(data);
        if (data.length > 0) setRoomType(data[0].name);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Submit booking form
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      firstName,
      lastName,
      email,
      checkIn,
      checkOut,
      guests,
      roomType,
      specialRequest,
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Booking submitted successfully!");
        // Clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setCheckIn("");
        setCheckOut("");
        setGuests(2);
        setRoomType(categories[0]?.name || "");
        setSpecialRequest("");
      } else {
        alert("Failed to submit booking: " + data.error);
      }
    } catch (err) {
      console.error("Error submitting booking:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleBookingSubmit}
      className={`bg-white p-8 rounded shadow-xl w-full max-w-screen-lg mx-auto ${className}`}
    >
      <h3 className="text-2xl font-semibold mb-8 text-center">
      Book Your Stay
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-6">
        <div>
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />
        </div>

        <div>
        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />
        </div>

        <div>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />
        </div>

        <div>
        <label className="block mb-2">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />
        </div>

        <div>
        <label className="block mb-2">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div>
        <label className="block mb-2">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        >
          {categories.map((cat) => (
          <option key={cat._id} value={cat.name}>
            {cat.name}
          </option>
          ))}
        </select>
        </div>

        <div>
        <label className="block mb-2">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full border px-4 py-2 rounded"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <option key={num} value={num}>
            {num} Guest{num > 1 ? "s" : ""}
          </option>
          ))}
        </select>
        </div>

        <div>
        <label className="block mb-2">Special Requests</label>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          rows={5}
          className="w-full border px-4 py-2 rounded"
          placeholder="e.g. Late check-in, extra bed..."
        />
        </div>
      </div>
      </div>

      <div className="mt-8">
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
      >
        Book Now
      </button>
      </div>
    </form>
  );
};

export default BookingForm;
