import React, { useState } from 'react';
import { products } from '../data/products';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showOrganic, setShowOrganic] = useState(false);
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const organicMatch = !showOrganic || product.isOrganic;
    return categoryMatch && organicMatch;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From leafy greens to root vegetables, we grow a diverse selection of nutrient-rich produce using sustainable methods. Here's a sampling of what we offer.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-2 md:mr-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={showOrganic}
                  onChange={() => setShowOrganic(!showOrganic)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">Organic Only</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                
                {product.isOrganic && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Organic
                  </div>
                )}
                
                {product.isInSeason && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    In Season
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Nutrition Highlights:</h4>
                  <ul className="space-y-1">
                    {product.nutritionFacts.map((fact, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products match your current filters.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setShowOrganic(false);
              }}
              className="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;