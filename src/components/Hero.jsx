import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-red-50">
      <div className="absolute inset-0 bg-[url('/bread-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-serif text-red-800 mb-4">
            Artisanal Breads Baked with Love
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Experience the warmth and aroma of freshly baked bread, crafted with traditional methods
            and premium ingredients.
          </p>
          <button className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors duration-200">
            View Our Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;