

import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 md:px-8"> {/* Added pt-20 for navbar space */}
      {/* Page Header */}
      <div className="text-center mb-12 pt-4"> {/* Added pt-4 for extra spacing */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">About Shanghai Cafe</h1>
        <p className="text-gray-600">Serving authentic flavors since 1928</p>
      </div>

      {/* About Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Story Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-3">Our Story</h2>
          <p className="text-gray-700">
            Founded in 1928 by Kan Chinn, we're Centralia's oldest Chinese restaurant, now blending 
            traditional recipes with modern Asian flavors.
          </p>
        </div>

        {/* Kitchen Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-3">Our Kitchen</h2>
          <p className="text-gray-700">
            Every dish is wok-seared using techniques passed down through generations of chefs.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-3">Today's Vision</h2>
          <p className="text-gray-700">
            We've expanded to include Vietnamese Pho, Thai curries, and artisanal bubble tea - 
            always honoring our roots.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;