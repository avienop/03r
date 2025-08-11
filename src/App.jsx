import React, { useState } from 'react';

// Corrected image imports with proper extensions and paths
import heroBg from './assets/imges/hero-bg.jpeg';  // .jpeg extension
import bread from './assets/imges/bread.jpg';
import pho from './assets/imges/pho.jpg';  // Removed extra slash
import springRolls from './assets/imges/springRolls.jpg';  // Fixed filename case
import bubbleTea from './assets/imges/bubbleTea.jpg';  // Fixed filename case
import chicken from './assets/imges/chicken.jpg';
import beef from './assets/imges/beef.jpg';  // Removed extra slash
import shrimp from './assets/imges/shrimp.jpg';  // Removed extra slash
import Navbar from './NavBar';
const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Menu data
  const menuItems = [
    { id: 1, name: 'Pho Special', price: 15.99, category: 'noodles', image: pho },
    { id: 2, name: 'Spring Rolls', price: 7.99, category: 'appetizers', image: springRolls },
    { id: 3, name: 'Bubble Tea', price: 5.99, category: 'drinks', image: bubbleTea },
    { id: 4, name: 'Whole Grain Bread', price: 4.99, category: 'bakery', image: bread },
    { id: 5, name: 'General Tso Chicken', price: 14.99, category: 'chicken', image: chicken },
    { id: 6, name: 'Beef Noodle Soup', price: 16.99, category: 'beef', image: beef },
    { id: 7, name: 'Shrimp Fried Rice', price: 15.99, category: 'shrimp', image: shrimp },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'beef', name: 'Beef' },
    { id: 'shrimp', name: 'Shrimp' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="font-sans bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      {/* <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sweet Treats, Perfect Eats</h1>
          <p className="text-xl md:text-2xl mb-6">20% Off Your First Order</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition">
              Order Now
            </button>
            <button className="px-6 py-2 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
<section className="relative w-full min-h-[500px] md:min-h-[600px]">
  {/* Background Image Container */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img 
      src={heroBg} 
      alt="Shanghai Cafe Interior"
      className="w-full h-full object-cover object-center"
    />
  </div>
  

  
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sweet Treats, Perfect Eats</h1>
    <p className="text-xl md:text-2xl mb-6">20% Off Your First Order</p>
    <div className="flex gap-4 justify-center">
      <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition">
        Order Now
      </button>
      <button className="px-6 py-2 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-medium transition">
        Learn More
      </button>
    </div>
  </div>
</section>
      {/* Top Products */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.slice(0, 4).map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-600 font-bold">${item.price}</span>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
          
          {/* Category Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category.id 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-gray-800 hover:bg-gray-200'
                  } transition`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 mt-1">{item.category}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-red-600 font-bold">${item.price}</span>
                    <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shanghai Cafe</h3>
            <p>519 N Tower Ave, Centralia, WA 98531</p>
            <p>(360) 669-5999</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 11am - 9pm</p>
            <p>Saturday - Sunday: 10am - 10pm</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition">Facebook</a>
              <a href="#" className="hover:text-red-400 transition">Instagram</a>
              <a href="#" className="hover:text-red-400 transition">Yelp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;