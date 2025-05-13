import React from 'react';
import { teamMembers } from '../data/team';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who make our mission possible. Our team combines expertise in sustainable agriculture, nutrition, and food systems.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who share our commitment to sustainable farming and high-quality produce.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            View Careers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;