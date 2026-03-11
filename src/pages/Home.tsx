import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Heart, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-violet-200/40 to-fuchsia-200/40 blur-3xl mix-blend-multiply"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-pink-200/40 to-violet-200/40 blur-3xl mix-blend-multiply"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Новая коллекция 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Открой для себя <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                  новые грани
                </span>
                <br/>удовольствия
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Эксклюзивные товары для ярких эмоций и незабываемых моментов. Позвольте себе больше с love.me.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/catalog" 
                  className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1"
                >
                  <span>В каталог</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/catalog?category=Для двоих" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-sm border border-slate-200 hover:border-slate-300"
                >
                  <span>Для двоих</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1615397323146-566085189736?auto=format&fit=crop&q=80&w=1200" 
                  alt="Hero" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">10k+</div>
                  <div className="text-sm text-slate-500 font-medium">Счастливых пар</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Анонимно", desc: "Конфиденциальная доставка без опознавательных знаков" },
              { icon: Star, title: "Премиум качество", desc: "Только проверенные бренды и безопасные материалы" },
              { icon: Heart, title: "С любовью", desc: "Индивидуальный подход к каждому клиенту" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-violet-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Хиты продаж
              </h2>
              <p className="text-lg text-slate-600">То, что выбирают наши клиенты чаще всего</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group">
              Смотреть все
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/catalog" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold border border-slate-200 w-full">
              Смотреть все
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-12 text-center">
            Категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/catalog?category=Для нее" className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1515347619152-14690c01a471?auto=format&fit=crop&q=80&w=800" alt="Для нее" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Для нее</h3>
                  <p className="text-slate-200">Раскрой свою чувственность</p>
                </div>
              </div>
            </Link>
            <Link to="/catalog?category=Для него" className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="Для него" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Для него</h3>
                  <p className="text-slate-200">Уверенность и сила</p>
                </div>
              </div>
            </Link>
            <Link to="/catalog?category=Для двоих" className="group relative aspect-[4/3] rounded-3xl overflow-hidden md:col-span-2 lg:col-span-1">
              <img src="https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&q=80&w=800" alt="Для двоих" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Для двоих</h3>
                  <p className="text-slate-200">Незабываемые моменты вместе</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
