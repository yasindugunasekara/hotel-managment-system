import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Services from './pages/Services';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import WriteReview from './pages/WriteReview';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import { LanguageProvider } from './contexts/LanguageContext';
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/about" element={<About />} />

              <Route path="/write-review" element={<WriteReview/>} />

              <Route path="/location" element={<Location />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/book" element={<BookingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;