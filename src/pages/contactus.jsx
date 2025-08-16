import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">Contact Shanghai Cafe</h1>
        <p className="text-gray-600">We'd love to hear from you!</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Visit Us</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">519 N Tower Ave, Centralia, WA 98531</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">(360) 669-5999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">info@shanghaicafe.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 11AM - 9PM</p>
                <p className="text-gray-600">Weekends: 12PM - 10PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;