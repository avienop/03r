import React, { useState, useRef } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import bg2 from '../assets/imges/bg2.jpg';
import bread from '../assets/imges/bread.jpg';
import pho from '../assets/imges/pho.jpg';
import springRolls from '../assets/imges/springRolls.jpg';
import bubbleTea from '../assets/imges/bubbleTea.jpg';
import chicken from '../assets/imges/chicken.jpg';
import beef from '../assets/imges/beef.jpg';
import shrimp from '../assets/imges/shrimp.jpg';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const menuSectionRef = useRef(null);

  const scrollToMenu = () => {
    menuSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

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
    <>
      <Navbar />
      
      <section className="relative w-full min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src={bg2} 
            alt="Shanghai Cafe Interior"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative top-34 md:top-43 lg:top-43 z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-black">Wok-Seared Traditions Since 1928</h1>
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 text-black">20% Off Your First Taste of History</p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={scrollToMenu}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium text-white transition"
            >
              See Menu
            </button>
            <button className="px-6 py-2 bg-amber-100 text-red-600 hover:bg-gray-100 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

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

      {/* Menu Section with ref */}
      <section 
        ref={menuSectionRef}
        className="py-12 px-4 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
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
      
     
    </>
  );
};

export default Home;