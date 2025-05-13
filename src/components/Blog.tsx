import React from 'react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our farming practices, seasonal produce, and educational resources.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-block text-green-600 hover:text-green-700 font-medium"
                >
                  Read More
                  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-white hover:bg-green-50 text-green-600 font-bold py-3 px-8 rounded-full border-2 border-green-600 transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;