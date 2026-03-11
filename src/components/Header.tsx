import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setIsOpen } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-violet-500 fill-current">
              <path d="M50 85C50 85 15 55 15 35C15 20 28 10 40 15C45 17 50 22 50 22C50 22 55 17 60 15C72 10 85 20 85 35C85 55 50 85 50 85Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M35 50C35 50 50 85 50 85C50 85 65 50 65 50C75 30 50 15 50 15C50 15 25 30 35 50Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            love.me
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/catalog" className="text-sm font-medium text-slate-700 hover:text-violet-600 transition-colors">
            Каталог
          </Link>
          <Link to="/catalog?category=Для нее" className="text-sm font-medium text-slate-700 hover:text-violet-600 transition-colors">
            Для нее
          </Link>
          <Link to="/catalog?category=Для него" className="text-sm font-medium text-slate-700 hover:text-violet-600 transition-colors">
            Для него
          </Link>
          <Link to="/catalog?category=Для двоих" className="text-sm font-medium text-slate-700 hover:text-violet-600 transition-colors">
            Для двоих
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 z-50">
          <button className="p-2 text-slate-700 hover:text-violet-600 transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-slate-700 hover:text-violet-600 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 bg-violet-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button 
            className="p-2 text-slate-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <Link 
                to="/catalog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
              >
                Каталог
              </Link>
              <Link 
                to="/catalog?category=Для нее" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
              >
                Для нее
              </Link>
              <Link 
                to="/catalog?category=Для него" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
              >
                Для него
              </Link>
              <Link 
                to="/catalog?category=Для двоих" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
              >
                Для двоих
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
