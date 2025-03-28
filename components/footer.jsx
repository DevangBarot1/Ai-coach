import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {currentYear} AI Career Coach. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

