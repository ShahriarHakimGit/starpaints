// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <p className="text-gray-700 text-lg">
        Get in touch with us for any inquiries or to place an order. We are here to help you with all your paint needs.
      </p>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
