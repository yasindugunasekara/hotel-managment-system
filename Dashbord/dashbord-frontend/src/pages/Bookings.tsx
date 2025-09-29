import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  specialRequest?: string;
}

interface Room {
  _id: string;
  name: string;
  price: number;
}

export const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    // fetch bookings
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const json = await res.json();
        setBookings(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setBookings([]);
      }
    };

    // fetch rooms (contains price)
    const fetchRooms = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/rooms");
        const json = await res.json();
        setRooms(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setRooms([]);
      }
    };

    fetchBookings();
    fetchRooms();
  }, []);

  // Normalize strings for matching: remove extra whitespace/newlines and lowercase
  const normalize = (s?: string) =>
    (s || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  // Robust parse: try Date(), if invalid fall back to manual parse (YYYY-MM-DD or YYYY/MM/DD)
  const parseDateSafe = (dateStr: string): Date => {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;

    // try manual extraction
    const m = dateStr.match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/);
    if (m) {
      const y = Number(m[1]);
      const mo = Number(m[2]) - 1;
      const day = Number(m[3]);
      return new Date(y, mo, day);
    }

    // fallback -> Invalid Date
    return new Date(NaN);
  };

  // Return UTC milliseconds for the date's Y/M/D (strip time-of-day) to avoid timezone shifts
  const utcDayMillis = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());

  // Count nights as difference in whole days (UTC)
  const nightsBetween = (checkInStr: string, checkOutStr: string): number => {
    const inD = parseDateSafe(checkInStr);
    const outD = parseDateSafe(checkOutStr);
    if (isNaN(inD.getTime()) || isNaN(outD.getTime())) return 0;

    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = utcDayMillis(outD) - utcDayMillis(inD);
    const nights = diff / msPerDay;
    return nights > 0 ? Math.round(nights) : 0; // nights should be integer >= 0
  };

  // Find room by matching names more flexibly:
  // 1) exact normalized match
  // 2) room name includes booking name or booking name words contained in room name
  const findRoomByType = (roomType: string): Room | undefined => {
    const target = normalize(roomType);
    if (!target) return undefined;

    // 1) exact normalized match
    let room = rooms.find((r) => normalize(r.name) === target);
    if (room) return room;

    // 2) direct containment (e.g. "sea view deluxe room" contains "deluxe room")
    room = rooms.find((r) => normalize(r.name).includes(target) || target.includes(normalize(r.name)));
    if (room) return room;

    // 3) match by words: require all words in booking.roomType exist in room.name (order-insensitive)
    const words = target.split(" ").filter(Boolean);
    room = rooms.find((r) => {
      const rn = normalize(r.name);
      return words.every((w) => rn.includes(w));
    });
    return room;
  };

  // Format currency nicely
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Guest Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Room Type</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Check-in</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Check-out</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Guests</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Price / Night</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Total Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, idx) => {
                const checkInDate = parseDateSafe(booking.checkIn);
                const checkOutDate = parseDateSafe(booking.checkOut);

                // number of nights (integer)
                const nights = nightsBetween(booking.checkIn, booking.checkOut);

                // find matching room object
                const room = findRoomByType(booking.roomType);

                // compute total price: nights * room.price
                const pricePerNight = room?.price ?? 0;
                const totalPrice = nights > 0 && pricePerNight > 0 ? nights * pricePerNight : 0;

                // For debugging (uncomment if needed)
                // console.log("Booking:", booking.roomType, "normalized:", normalize(booking.roomType));
                // console.log("Matched room:", room);
                // console.log("checkIn/out:", checkInDate, checkOutDate, "nights:", nights, "price/night:", pricePerNight, "total:", totalPrice);

                const displayCheckIn =
                  !isNaN(checkInDate.getTime()) ? `${checkInDate.getFullYear()}/${String(checkInDate.getMonth() + 1).padStart(2, "0")}/${String(checkInDate.getDate()).padStart(2, "0")}` : "-";
                const displayCheckOut =
                  !isNaN(checkOutDate.getTime()) ? `${checkOutDate.getFullYear()}/${String(checkOutDate.getMonth() + 1).padStart(2, "0")}/${String(checkOutDate.getDate()).padStart(2, "0")}` : "-";

                return (
                  <motion.tr
                    key={booking._id || idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="py-2 px-4 font-medium text-gray-900 dark:text-white">
                      {booking.firstName} {booking.lastName}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400">{booking.email}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.roomType}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{displayCheckIn}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{displayCheckOut}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.guests}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">
                      {pricePerNight > 0 ? formatCurrency(pricePerNight) : "-"}
                    </td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{totalPrice > 0 ? formatCurrency(totalPrice) : "-"}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{booking.specialRequest || "-"}</td>
                  </motion.tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9} className="py-4 text-center text-gray-500 dark:text-gray-400">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
