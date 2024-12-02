import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Sourdough Bread',
    description: 'Traditional fermented sourdough with a perfect crust',
    price: '$6.99',
    image: '/sourdough.jpg'
  },
  {
    id: 2,
    name: 'Artisan Baguette',
    description: 'Crispy exterior, soft and airy interior',
    price: '$4.99',
    image: '/baguette.jpg'
  },
  {
    id: 3,
    name: 'Rustic Rye',
    description: 'Hearty rye bread with a rich, complex flavor',
    price: '$7.99',
    image: '/rye.jpg'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-red-800 text-center mb-12">
          Our Featured Breads
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-red-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-red-700 font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;