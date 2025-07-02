import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center px-4 py-6 border-t border-gray-200 text-sm text-gray-600">
      <p className="text-center sm:text-left w-full sm:w-auto mb-2 sm:mb-0">
        © 2025 BlogIt — All Rights Reserved. Developed by <span className="font-medium">Syed Musab Bukhari</span>
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          <FaFacebookF size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
          <FaTwitter size={18} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          <FaInstagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
