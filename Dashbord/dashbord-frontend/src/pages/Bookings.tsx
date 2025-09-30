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
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("30"); // default "Last 30 days"
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
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

  const normalize = (s?: string) =>
    (s || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const parseDateSafe = (dateStr: string): Date => {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
    const m = dateStr.match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/);
    if (m) {
      return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    }
    return new Date(NaN);
  };

  const utcDayMillis = (d: Date) =>
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());

  const nightsBetween = (checkInStr: string, checkOutStr: string): number => {
    const inD = parseDateSafe(checkInStr);
    const outD = parseDateSafe(checkOutStr);
    if (isNaN(inD.getTime()) || isNaN(outD.getTime())) return 0;

    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = utcDayMillis(outD) - utcDayMillis(inD);
    return diff > 0 ? diff / msPerDay : 0;
  };

  const findRoomByType = (roomType: string): Room | undefined => {
    const target = normalize(roomType);
    if (!target) return undefined;

    let room = rooms.find((r) => normalize(r.name) === target);
    if (room) return room;

    room = rooms.find(
      (r) =>
        normalize(r.name).includes(target) || target.includes(normalize(r.name))
    );
    if (room) return room;

    const words = target.split(" ").filter(Boolean);
    return rooms.find((r) => {
      const rn = normalize(r.name);
      return words.every((w) => rn.includes(w));
    });
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  // ✅ Filter bookings by search + date range
  const filteredBookings = bookings.filter((b) => {
    const term = normalize(searchTerm);
    const inDate = parseDateSafe(b.checkIn);

    let withinRange = true;
    if (filter !== "all") {
      const now = new Date();
      const days = Number(filter);
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - days);
      withinRange = inDate >= pastDate;
    }

    return (
      withinRange &&
      (normalize(b.firstName + " " + b.lastName).includes(term) ||
        normalize(b.email).includes(term) ||
        normalize(b.roomType).includes(term))
    );
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 ">
      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          >
            Filter: Last {filter} days
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-40 bg-white rounded-lg shadow dark:bg-gray-700">
              <ul className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                {["1", "7", "30", "90", "365", "all"].map((val) => (
                  <li key={val}>
                    <button
                      onClick={() => {
                        setFilter(val);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {val === "all" ? "All time" : `Last ${val} days`}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8A4 4 0 008 4zM2 8a6 6 0 1110.89 3.48l4.82 4.82a1 1 0 01-1.42 1.42l-4.82-4.82A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-80 p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Guest Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Room Type</th>
            <th className="px-6 py-3">Check-in</th>
            <th className="px-6 py-3">Check-out</th>
            <th className="px-6 py-3">Guests</th>
            <th className="px-6 py-3">Price/Night</th>
            <th className="px-6 py-3">Total Price</th>
            <th className="px-6 py-3">Special Request</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((b, idx) => {
              const checkIn = parseDateSafe(b.checkIn);
              const checkOut = parseDateSafe(b.checkOut);
              const nights = nightsBetween(b.checkIn, b.checkOut);
              const room = findRoomByType(b.roomType);
              const pricePerNight = room?.price ?? 0;
              const total = nights * pricePerNight;

              return (
                <motion.tr
                  key={b._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {b.firstName} {b.lastName}
                  </td>
                  <td className="px-6 py-4">{b.email}</td>
                  <td className="px-6 py-4">{b.roomType}</td>
                  <td className="px-6 py-4">{checkIn.toDateString()}</td>
                  <td className="px-6 py-4">{checkOut.toDateString()}</td>
                  <td className="px-6 py-4">{b.guests}</td>
                  <td className="px-6 py-4">
                    {pricePerNight ? formatCurrency(pricePerNight) : "-"}
                  </td>
                  <td className="px-6 py-4">
                    {total > 0 ? formatCurrency(total) : "-"}
                  </td>
                  <td className="px-6 py-4">{b.specialRequest || "-"}</td>
                </motion.tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={9}
                className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
              >
                No bookings found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
