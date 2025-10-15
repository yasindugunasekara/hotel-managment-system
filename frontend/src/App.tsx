import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Location from "./pages/Location";
import Testimonials from "./pages/Testimonials";
import WriteReview from "./pages/WriteReview";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import BookingPage from "./pages/BookingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Routes where navbar/footer should be hidden
  const hideRoutes = ["/login", "/register", "/404"];

  // Valid routes (prefix-based check)
  const allowedPrefixes = [
    "/", "/rooms", "/about", "/location",
    "/testimonials", "/write-review", "/contact",
    "/profile", "/book"
  ];

  const isAllowedRoute = allowedPrefixes.some(prefix =>
    location.pathname === prefix || location.pathname.startsWith(prefix + "/")
  );

  const isHiddenRoute = hideRoutes.some(prefix =>
    location.pathname === prefix
  );

  const hideLayout = isHiddenRoute || !isAllowedRoute;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/write-review" element={<WriteReview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book" element={<BookingPage />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </LanguageProvider>
  );
}

export default App;
