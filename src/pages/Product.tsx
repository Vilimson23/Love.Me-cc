import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft, Heart, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Товар не найден</h1>
        <Link to="/catalog" className="text-violet-600 hover:text-violet-700 font-medium flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Назад в каталог
        </Link>

        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Новинка
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-violet-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Хит продаж
                  </span>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-violet-600 tracking-wide uppercase">
                  {product.category}
                </span>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {product.name}
              </h1>

              <div className="text-3xl font-bold text-slate-900 mb-8">
                {product.price.toLocaleString('ru-RU')} ₽
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-2 w-full sm:w-32 border border-slate-200">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-slate-900 w-8 text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1"
                >
                  <ShoppingBag className="w-6 h-6" />
                  <span>Добавить в корзину</span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Анонимно</h4>
                    <p className="text-sm text-slate-500">Скрытая упаковка без логотипов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Доставка</h4>
                    <p className="text-sm text-slate-500">Быстро и конфиденциально</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Возврат</h4>
                    <p className="text-sm text-slate-500">Гарантия качества 14 дней</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
