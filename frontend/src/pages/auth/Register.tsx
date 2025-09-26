import React, { useState } from "react";

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "India", "Germany",
  "France", "Japan", "China", "Brazil", "Mexico", "Italy", "South Korea",
  "Russia", "South Africa", "Spain", "Netherlands", "Sweden", "Switzerland",
  "New Zealand", "Norway", "Denmark", "Finland", "Ireland", "Singapore",
  "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Argentina",
  "Chile", "Colombia", "Peru", "Venezuela", "Saudi Arabia", "UAE", "Turkey",
  "Egypt", "Nigeria", "Kenya", "Ethiopia", "Pakistan", "Bangladesh", "Sri Lanka"
];

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setError("");
    }
  };

  const handleCountrySelect = (country: string) => {
    setForm({ ...form, country });
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log("Form Submitted", form);
    alert("Registration Successful!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          {/* Country */}
          <div className="relative">
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Country"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            {showSuggestions && form.country && (
              <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg max-h-40 overflow-y-auto z-10">
                {countries
                  .filter((c) =>
                    c.toLowerCase().includes(form.country.toLowerCase())
                  )
                  .slice(0, 5)
                  .map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCountrySelect(c)}
                      className="p-2 hover:bg-gold hover:text-white cursor-pointer"
                    >
                      {c}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gold hover:text-black transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-gold font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
