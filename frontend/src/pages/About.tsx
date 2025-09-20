import React from 'react';
import { Award, Users, Clock, Shield, Leaf, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1999', event: 'Hotel Foundation', description: 'Calm Rest opened its doors with 50 luxury rooms' },
    { year: '2005', event: 'First Expansion', description: 'Added spa facilities and presidential suite' },
    { year: '2012', event: 'Green Certification', description: 'Received eco-friendly hospitality certification' },
    { year: '2018', event: 'Major Renovation', description: 'Complete modernization of all facilities' },
    { year: '2023', event: '150 Rooms Milestone', description: 'Expanded to 150 luxury accommodations' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hospitality Excellence',
      description: 'We believe in creating memorable experiences through genuine care and attention to detail.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices while maintaining luxury standards.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent quality and dependable service.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Continuous Innovation',
      description: 'Always evolving to exceed expectations and set new standards in hospitality.'
    },
  ];

  const team = [
    {
      name: 'Michael Anderson',
      role: 'General Manager',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years in luxury hospitality management'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Guest Services',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Hospitality excellence and guest satisfaction expert'
    },
    {
      name: 'James Rodriguez',
      role: 'Executive Chef',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michelin-trained chef with international cuisine expertise'
    },
    {
      name: 'Emily Thompson',
      role: 'Spa Director',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Wellness and therapeutic treatments specialist'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="absolute inset-0 bg-navy bg-opacity-70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            About Calm Rest
          </h1>
          <p className="text-xl text-white/90">
            A legacy of luxury hospitality since 1999
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-navy font-serif">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 1999 with a vision to redefine luxury hospitality, Calm Rest began as a boutique 
                hotel with just 50 rooms. Our founders believed that true luxury lies not just in opulent 
                surroundings, but in the personal connections and unforgettable experiences we create for 
                every guest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we have grown from a small luxury hotel to a renowned destination, 
                consistently recognized for excellence in service, sustainability, and innovation. 
                Every expansion and renovation has been guided by our commitment to maintaining the 
                intimate, personalized experience that defines Calm Rest.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-cream rounded-lg">
                  <div className="text-3xl font-bold text-gold mb-2">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-cream rounded-lg">
                  <div className="text-3xl font-bold text-gold mb-2">50K+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel History"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy font-serif">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional hospitality experiences that exceed expectations, creating 
                lasting memories for our guests while maintaining the highest standards of luxury, 
                sustainability, and personal service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy font-serif">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the world's most beloved luxury hotel brand, recognized for our commitment 
                to excellence, innovation in hospitality, and positive impact on the communities 
                we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide every decision and interaction at Calm Rest
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-cream p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Our Journey</h2>
            <p className="text-xl text-white/90">
              Key milestones in our path to hospitality excellence
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gold text-white px-4 py-2 rounded-full font-bold min-w-[80px] text-center">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gold">{milestone.event}</h3>
                  <p className="text-white/90">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy font-serif">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the passionate professionals dedicated to making your stay exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-navy">{member.name}</h3>
                <p className="text-gold font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">150+</div>
              <div className="text-gray-600">Luxury Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-600">Guest Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">25</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-gray-600">Concierge Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;