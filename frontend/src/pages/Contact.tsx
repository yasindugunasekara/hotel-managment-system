import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+94 4122 51712', '+94 710363054 (Reservations)'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@calmrest.com', 'reservations@calmrest.com'],
      action: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Luxury Avenue', 'Downtown District', 'Metropolitan City, State 12345'],
      action: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['24/7'],
      action: 'View Schedule'
    },
  ];

  const departments = [
    'General Inquiry',
    'Reservations',
    'Events & Weddings',
    'Spa Services',
    'Dining Reservations',
    'Guest Services',
    'Billing & Accounts',
    'Feedback & Complaints',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            We're here to assist you with any questions or requests
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <button className="text-gold hover:text-navy transition-colors font-medium text-sm">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4 font-serif">Get in Touch</h2>
                <p className="text-lg text-gray-700">
                  Send us a message and we'll respond within 24 hours
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4 font-serif">Find Us</h2>
                <p className="text-lg text-gray-700">
                  Located in the heart of the city with easy access to major attractions
                </p>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-8">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                    <button
                    className="mt-4 bg-gold text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
                    onClick={() => window.open('https://www.google.com/maps/place/Calm+Rest/@5.9624924,80.3948997,17z/data=!4m9!3m8!1s0x3ae114e826db1595:0x7689ea709c4b1cf2!5m2!4m1!1i2!8m2!3d5.9624924!4d80.3974746!16s%2Fg%2F11cn2zv5kz?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                    >
                    Open in Google Maps
                    </button>
                </div>
              </div>
              
              {/* Additional Contact Options */}
              <div className="space-y-4">
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy mb-3">Quick Contact Options</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/15551234567"
                      className="flex items-center space-x-3 text-gray-700 hover:text-gold transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp: +1 (555) 123-4567</span>
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="flex items-center space-x-3 text-gray-700 hover:text-gold transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Emergency Line: 24/7 Available</span>
                    </a>
                  </div>
                </div>
                
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gold text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-gold text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-gold text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-navy mb-2">What are your check-in/check-out times?</h3>
              <p className="text-gray-600 text-sm">Check-in: 3:00 PM | Check-out: 11:00 AM. Early check-in and late check-out may be available upon request.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-navy mb-2">Do you offer airport transportation?</h3>
              <p className="text-gray-600 text-sm">Yes, we provide luxury airport shuttle service. Please contact our concierge to arrange transportation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-navy mb-2">Is parking available?</h3>
              <p className="text-gray-600 text-sm">We offer complimentary valet parking for hotel guests and paid parking for restaurant and event visitors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-navy mb-2">What dining options are available?</h3>
              <p className="text-gray-600 text-sm">We have three restaurants, a rooftop bar, room service, and can arrange private dining experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;