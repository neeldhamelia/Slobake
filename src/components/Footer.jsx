import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Slobake</h3>
            <p className="text-red-100">
              Artisanal bakehouse crafting the finest breads using traditional methods.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p className="text-red-100">Monday - Friday: 7am - 7pm</p>
            <p className="text-red-100">Saturday: 8am - 6pm</p>
            <p className="text-red-100">Sunday: 8am - 3pm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <SocialIcon Icon={FaFacebook} href="#" />
              <SocialIcon Icon={FaInstagram} href="#" />
              <SocialIcon Icon={FaTwitter} href="#" />
            </div>
          </div>
        </div>
        <div className="border-t border-red-700 mt-8 pt-8 text-center text-red-100">
          © 2023 Slobake. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="text-white hover:text-red-200 transition-colors duration-200"
  >
    <Icon className="text-2xl" />
  </a>
);

export default Footer;