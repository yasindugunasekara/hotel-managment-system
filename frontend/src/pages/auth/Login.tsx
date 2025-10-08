import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login Successful!");
        // You need to import useNavigate from react-router-dom and initialize it:
        // import { useNavigate } from "react-router-dom";
        // const navigate = useNavigate();
        // Then you can use it to redirect:
        // navigate("/bookingForm");
        // For now, we'll just log to the console as a placeholder for navigation.
        // Add a class to the body for a fade-out effect
        document.body.classList.add("fade-out");

        // Wait for the animation to complete before redirecting
        setTimeout(() => {
          console.log("Redirecting to booking form...");
          window.location.href = "/book"; // Or use react-router's navigate
        }, 500); // This duration should match the CSS animation duration
        
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Server error, try again later");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white max-w-sm">
          <h2 className="text-3xl font-bold mb-2">Find your sweet home</h2>
          <p className="text-lg">Schedule visits in just a few clicks.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Welcome Back to Calm Rest
          </h2>
          <p className="text-center text-gray-500 mb-6">Sign in your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Remember Me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
