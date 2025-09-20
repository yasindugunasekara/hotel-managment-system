import React from 'react';
import { Download, Award, Users, Clock, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Profile = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: 'Hospitality Excellence Award', year: '2023' },
    { icon: <Users className="w-6 h-6" />, title: 'Best Customer Service', year: '2022' },
    { icon: <Award className="w-6 h-6" />, title: 'Luxury Hotel of the Year', year: '2021' },
    { icon: <Users className="w-6 h-6" />, title: 'Top Rated Hotel', year: '2020' },
  ];

  const services = [
    'Luxury Accommodation Services',
    'Event & Wedding Planning',
    'Corporate Meeting Facilities',
    'Fine Dining Experiences',
    'Spa & Wellness Services',
    'Concierge & Travel Services',
  ];

  const certifications = [
    'Certified Hotel Administrator (CHA)',
    'Luxury Hotel Management Certification',
    'Sustainable Tourism Certification',
    'Food Safety & Hospitality Standards',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Header Section */}
      <section className="relative py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Hotel Manager"
                className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-gold text-white p-2 rounded-full">
                <Award className="w-5 h-5" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-navy mb-2 font-serif">Michael Anderson</h1>
            <p className="text-xl text-gold font-medium mb-4">General Manager - Calm Rest Hotel</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              With over 15 years of experience in luxury hospitality management, I am dedicated to 
              providing exceptional experiences that exceed our guests' expectations and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-cream rounded-lg">
              <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold text-navy mb-2">Direct Line</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center p-6 bg-cream rounded-lg">
              <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold text-navy mb-2">Email</h3>
              <p className="text-gray-600 text-sm">manager@calmrest.com</p>
            </div>
            
            <div className="text-center p-6 bg-cream rounded-lg">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold text-navy mb-2">Office</h3>
              <p className="text-gray-600 text-sm">Executive Floor</p>
            </div>
            
            <div className="text-center p-6 bg-cream rounded-lg">
              <Linkedin className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold text-navy mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 font-serif">Professional Background</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Leadership Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I believe that exceptional hospitality stems from genuine care, attention to detail, 
                    and a commitment to continuous improvement. My approach focuses on empowering our 
                    team to deliver personalized experiences that make every guest feel truly special.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Career Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <span>15+ years in luxury hospitality management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <span>Led hotel operations generating $50M+ annual revenue</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <span>Managed teams of 200+ hospitality professionals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <span>Achieved 98% guest satisfaction rating consistently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 font-serif">Expertise & Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-4">Core Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-4">Certifications</h3>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-gold" />
                        <span className="text-gray-700 text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4 font-serif">Awards & Recognition</h2>
            <p className="text-lg text-gray-700">
              Recognition for excellence in hospitality management and guest service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <h3 className="font-semibold text-navy mb-2">{achievement.title}</h3>
                <p className="text-gold font-medium">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">50M+</div>
              <div className="text-gray-600">Revenue Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-600">Guest Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">200+</div>
              <div className="text-gray-600">Team Members Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure & CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Experience Calm Rest Excellence</h2>
          <p className="text-xl text-white/90 mb-8">
            Discover what makes our hotel exceptional with our comprehensive service brochure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Hotel Brochure</span>
            </button>
            
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300 font-medium flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Schedule Meeting</span>
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-white/90 italic">
              "My commitment is to ensure every guest at Calm Rest experiences the pinnacle of luxury 
              hospitality. From the moment you arrive until your departure, our team is dedicated to 
              creating memories that will last a lifetime."
            </p>
            <p className="text-gold font-medium mt-3">- Michael Anderson, General Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;