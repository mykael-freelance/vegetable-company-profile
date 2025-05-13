import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">From Seed to Table</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, Verdant Farms began with a simple mission: to grow the most nutritious, flavorful vegetables while preserving the health of our soil, water, and ecosystem.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What started as a small family farm has grown into a leader in sustainable agriculture. Today, we cultivate over 30 varieties of vegetables across 100 acres of certified organic farmland, using regenerative practices that build soil health and sequester carbon.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every vegetable we grow is harvested at peak ripeness and delivered within 24 hours to ensure maximum freshness and nutritional value. We're proud to supply restaurants, markets, and families throughout the region with produce that's as good for the planet as it is delicious.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">100+</p>
                <p className="text-sm text-gray-600">Acres Farmed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">30+</p>
                <p className="text-sm text-gray-600">Vegetable Varieties</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">15</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">100%</p>
                <p className="text-sm text-gray-600">Organic</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="Organic farming at Verdant Farms" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/5528999/pexels-photo-5528999.jpeg" 
                  alt="Fresh harvested vegetables" 
                  className="rounded-lg shadow-lg w-48 h-48 object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Sustainability</h4>
              <p className="text-gray-600 text-center">
                We farm in harmony with nature, using practices that protect our resources for future generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Quality</h4>
              <p className="text-gray-600 text-center">
                We grow varieties selected for flavor and nutrition, not shelf life or shipping durability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Community</h4>
              <p className="text-gray-600 text-center">
                We build connections between people and their food, creating a more resilient local food system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;