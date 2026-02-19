import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  price: string;
  discount?: string;
  image: string;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  discount,
  image,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-[#111927] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold z-10">
            {discount}
          </span>
        )}
        <div className="h-32 bg-gradient-to-br from-blue-900 to-[#111927] flex items-center justify-center overflow-hidden group-hover:scale-110 transition duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%232563eb%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold mb-1">{name}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-500 font-bold">{price}</span>
          <button className="text-gray-400 hover:text-white transition">
            🛒
          </button>
        </div>
      </div>
    </motion.div>
  );
};
