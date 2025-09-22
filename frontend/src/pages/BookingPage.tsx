import React from "react";
import BookingForm from "../components/BookingForm"; // adjust path if needed



const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <BookingForm className="max-w-lg w-full" />
    </div>
  );
};

export default BookingPage;
