import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: React.Key;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            Новинка
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-violet-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            Хит продаж
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {/* Quick Actions overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-violet-500/30"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">В корзину</span>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white text-slate-900 hover:bg-slate-50 rounded-xl flex items-center justify-center transition-colors shadow-lg"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-medium text-violet-600 mb-2 tracking-wide uppercase">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block flex-grow">
          <h3 className="text-lg font-semibold text-slate-900 leading-tight mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>
    </motion.div>
  );
}
