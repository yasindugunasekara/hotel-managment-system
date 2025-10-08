import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bath, Wifi, Car, Lock, ConciergeBell, Luggage } from "lucide-react";


type Feature = {
  name: string;
  icon: string;
};

type Room = {
  _id: string;
  name: string;
  size: string;
  description: string;
  image: string;
  bed: string;
  price: number;
  discountPrice?: number;
  amenities: string[];
  features: Feature[];
};

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/rooms/${id}`);
        const data = await res.json();
        setRoom(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!room) return <div className="text-center mt-10 text-red-500">Room not found</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white  overflow-hidden flex flex-col md:flex-row pt-3 pb-10">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>

      {/* Right - Details */}
      <div className="p-6 md:p-8 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{room.name}</h2>
          <p className="text-gray-500 mb-2">{room.size} m²</p>
          <p className="text-gray-700 mb-4">{room.description}</p>

          {/* Room Amenities */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Room Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600">
            {room.amenities.map((amenity, index) => {
                let icon;
                switch (amenity.toLowerCase()) {
                    case 'wifi':
                        icon = <Wifi size={18} className="mr-1" />;
                        break;
                    case 'bathroom':
                        icon = <Bath size={18} className="mr-1" />;
                        break;
                    case 'parking':
                        icon = <Car size={18} className="mr-1" />;
                        break;
                    case 'security':
                        icon = <Lock size={18} className="mr-1" />;
                        break;
                    case 'service':
                        icon = <ConciergeBell size={18} className="mr-1" />;
                        break;
                    case 'luggage':
                        icon = <Luggage size={18} className="mr-1" />;
                        break;
                    default:
                        icon = null;
                }

                return (
                    <div key={index} className="flex items-center py-1">
                        {icon}
                        <span>{amenity}</span>
                    </div>
                );
            })}
            </div>
          </div>

          {/* Bed Type */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Bed Type</h3>
            <p className="text-gray-600">{room.bed}</p>
          </div>

          {/* Cancellation Rules */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Cancellation Rules</h3>
            <p className="text-gray-600 text-sm">
              Free cancellation until <span className="text-green-600 font-medium">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</span>.
              After <span className="text-red-600 font-medium">{new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</span>, no refund.
            </p>
          </div>
        </div>

        {/* Pricing + Button */}
        <div className="mt-4 border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-lg">
            {room.discountPrice ? (
              <>
                <span className="line-through text-gray-500 mr-2">${room.price}</span>
                <span className="text-yellow-500 font-bold text-xl md:text-2xl">${room.discountPrice}</span>
              </>
            ) : (
              <span className="text-yellow-500 font-bold text-xl md:text-2xl">${room.price}</span>
            )}
            <span className="text-gray-500 text-sm"> / 1 nights</span>
          </div>
          <button
            className="bg-gold text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gold/80 transition-all w-full sm:w-auto text-center"
            onClick={() => { window.location.href = `/login`; }}
          >
            Book
          </button>
        </div>
      </div>
    </div>

  );
};

export default RoomDetails;
