import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-violet-600" />
                <h2 className="text-xl font-bold text-slate-900">Корзина</h2>
                <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-12 h-12 text-violet-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Ваша корзина пуста</h3>
                  <p className="text-slate-500 max-w-[250px]">
                    Добавьте товары из каталога, чтобы начать покупки
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-8 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
                  >
                    Перейти в каталог
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="flex gap-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="font-medium text-slate-900 line-clamp-2 text-sm">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-slate-900">
                            {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-slate-100 p-6 bg-slate-50/50">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-500 font-medium">Итого</span>
                  <span className="text-2xl font-bold text-slate-900">
                    {total.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-violet-500/30 group">
                  <span>Оформить заказ</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
