import React, { useState } from 'react';
import {categories} from "../data/roomsData";

const WriteReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
        name,
        rating,
        review,
        date: new Date().toLocaleDateString(),
    };
    console.log('Submitted review:', newReview);
    alert('Review submitted successfully!');
    setName('');
    setReview('');
    setRating(5);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col md:flex-row md:space-x-8 -translate-y-7"
      >
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Write Your Review</h2>

          <label className="block mb-2">Name</label>
          <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full"
        placeholder="Your Name"
        required
          />

          <label className="block mb-2">Country</label>
          <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Your Country"
        required
          />

          <label className="block mb-2">Rating (1-5)</label>
          <input
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 mb-4 w-full"
        required
          />

          <label className="block mb-2">Review Title</label>
          <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Review Title"
        required
          />
        </div>

        <div className="flex-1">
          <label className="block mb-2">Review</label>
          <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="border p-2 mb-4 w-full"
        rows={5}
        placeholder="Write your review here..."
        required
          />

          <label className="block mb-2">Room Type</label>
          <select
        className="border p-2 mb-4 w-full"
        required
          >
        <option value="" disabled selected>
          Select Room Type
        </option>
        {categories
          .filter((category) => category.id !== "all")
          .map((category, index) => (
            <option key={index} value={category.name}>
          {category.name}
            </option>
          ))}
          </select>

          <label className="block mb-2">Stay Duration</label>
          <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Stay Duration (e.g., 2 nights)"
        required
          />

          <button
        type="submit"
        className="bg-gold text-white px-4 py-2 rounded hover:bg-opacity-90 w-full"
          >
        Submit Review
          </button>
        </div>
      </form>

      <button
        onClick={() => window.location.href = '/testimonials'}
        className="mt-4  text-navy px-4 py-2 rounded hover:text-opacity-80 flex items-center justify-center"
      >
        <span className="mr-2">←</span>
        Back to Reviews
      </button>
    </div>
  );
};

export default WriteReview;
