import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ✅ Scroll to top smoothly when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'New York, USA',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      title: 'Absolutely Exceptional Experience',
      review: 'The level of service at Calm Rest exceeded all my expectations. From the moment I walked in, I felt like royalty. The attention to detail, the luxurious amenities, and the breathtaking views made this stay unforgettable. The staff went above and beyond to ensure every need was met.',
      date: 'March 2024',
      roomType: 'Presidential Suite',
      stayDuration: '3 nights'
    },
    {
      id: 2,
      name: 'Hans Mueller',
      country: 'Berlin, Germany',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      title: 'Perfect Business Trip',
      review: 'As a frequent business traveler, I can confidently say Calm Rest sets the gold standard. The executive lounge, high-speed WiFi, and professional meeting facilities made my work seamless. The concierge team was incredibly helpful with local recommendations.',
      date: 'February 2024',
      roomType: 'Executive Suite',
      stayDuration: '5 nights'
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      country: 'Madrid, Spain',
      flag: '🇪🇸',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      title: 'Romantic Anniversary Getaway',
      review: 'Calm Rest made our 10th anniversary truly magical. The honeymoon suite was beautifully decorated with rose petals, the champagne service was impeccable, and the sunset views from our balcony were breathtaking. We\'ll definitely be back!',
      date: 'January 2024',
      roomType: 'Honeymoon Suite',
      stayDuration: '2 nights'
    },
    {
      id: 4,
      name: 'David Chen',
      country: 'Singapore',
      flag: '🇸🇬',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      title: 'Outstanding Spa Experience',
      review: 'The spa facilities at Calm Rest are world-class. The therapeutic massage and wellness treatments helped me completely unwind from a stressful work period. The spa staff were knowledgeable and professional, creating a truly rejuvenating experience.',
      date: 'December 2023',
      roomType: 'Deluxe Ocean Suite',
      stayDuration: '4 nights'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      country: 'London, UK',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4,
      title: 'Excellent Family Vacation',
      review: 'Traveling with children can be challenging, but Calm Rest made it effortless. The connecting family rooms were spacious, the kids loved the pool area, and the children\'s menu at the restaurant was fantastic. The staff was incredibly patient and accommodating.',
      date: 'November 2023',
      roomType: 'Family Suite',
      stayDuration: '6 nights'
    },
    {
      id: 6,
      name: 'Li Wei',
      country: 'Shanghai, China',
      flag: '🇨🇳',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      title: 'Culinary Excellence',
      review: 'As a food enthusiast, I was blown away by the dining experiences at Calm Rest. The Michelin-starred restaurant delivered exceptional cuisine, and the sommelier\'s wine pairings were perfect. The chef\'s table experience was the highlight of our stay.',
      date: 'October 2023',
      roomType: 'Executive Suite',
      stayDuration: '3 nights'
    },
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: <Star className="w-6 h-6" /> },
    { number: '2,847', label: 'Total Reviews', icon: <Quote className="w-6 h-6" /> },
    { number: '98%', label: 'Would Recommend', icon: <Star className="w-6 h-6" /> },
    { number: '94%', label: 'Return Guests', icon: <Star className="w-6 h-6" /> },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Guest Testimonials
          </h1>
          <p className="text-xl text-white/90">
            Hear from our valued guests about their exceptional experiences
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">Featured Reviews</h2>
            <p className="text-lg text-gray-700">
              Read what our guests are saying about their stay at Calm Rest
            </p>
          </div>
          
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="absolute top-6 right-6">
              <Quote className="w-12 h-12 text-gold opacity-20" />
            </div>
            
            <div className="text-center mb-8">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <div className="flex justify-center mb-2">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <h3 className="text-2xl font-bold text-navy font-serif">
                {testimonials[currentTestimonial].title}
              </h3>
            </div>
            
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 text-center italic">
              "{testimonials[currentTestimonial].review}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-navy text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600 mb-4">
                <span className="mr-2">{testimonials[currentTestimonial].flag}</span>
                {testimonials[currentTestimonial].country}
              </div>
              <div className="flex justify-center space-x-6 text-sm text-gray-500">
                <span>Room: {testimonials[currentTestimonial].roomType}</span>
                <span>Stay: {testimonials[currentTestimonial].stayDuration}</span>
                <span>{testimonials[currentTestimonial].date}</span>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-cream hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-gold' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-cream hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">All Guest Reviews</h2>
            <p className="text-lg text-gray-700">
              Browse through all the wonderful feedback from our guests
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-navy">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="mr-1">{testimonial.flag}</span>
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
                
                <h4 className="font-semibold text-navy mb-2">{testimonial.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {testimonial.review.slice(0, 120)}...
                </p>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Room: {testimonial.roomType}</p>
                  <p>Duration: {testimonial.stayDuration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 font-serif">Share Your Experience</h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to hear about your stay at Calm Rest Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium">
              Write a Review
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300 font-medium">
              Book Your Stay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;