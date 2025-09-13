import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Aribisala Ibrahim. All rights reserved.</p>
        <p className="mt-2">Built with React, Vite, Tailwind CSS, and Ant Design</p>
      </div>
    </footer>
  );
};

export default Footer;