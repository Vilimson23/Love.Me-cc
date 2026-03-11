import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-violet-500 fill-current">
                  <path d="M50 85C50 85 15 55 15 35C15 20 28 10 40 15C45 17 50 22 50 22C50 22 55 17 60 15C72 10 85 20 85 35C85 55 50 85 50 85Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 50C35 50 50 85 50 85C50 85 65 50 65 50C75 30 50 15 50 15C50 15 25 30 35 50Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                love.me
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Ваш проводник в мир чувственности и удовольствия. Мы создаем моменты, которые остаются навсегда.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Каталог</h3>
            <ul className="space-y-4">
              <li><Link to="/catalog?category=Для нее" className="hover:text-violet-400 transition-colors">Для нее</Link></li>
              <li><Link to="/catalog?category=Для него" className="hover:text-violet-400 transition-colors">Для него</Link></li>
              <li><Link to="/catalog?category=Для двоих" className="hover:text-violet-400 transition-colors">Для двоих</Link></li>
              <li><Link to="/catalog?category=Косметика" className="hover:text-violet-400 transition-colors">Косметика</Link></li>
              <li><Link to="/catalog?category=Белье" className="hover:text-violet-400 transition-colors">Белье</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Информация</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-violet-400 transition-colors">О нас</Link></li>
              <li><Link to="#" className="hover:text-violet-400 transition-colors">Доставка и оплата</Link></li>
              <li><Link to="#" className="hover:text-violet-400 transition-colors">Возврат товара</Link></li>
              <li><Link to="#" className="hover:text-violet-400 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="#" className="hover:text-violet-400 transition-colors">Публичная оферта</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 123, офис 45</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-500 shrink-0" />
                <a href="tel:+79991234567" className="hover:text-violet-400 transition-colors">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-500 shrink-0" />
                <a href="mailto:hello@lovemarket.cc" className="hover:text-violet-400 transition-colors">hello@lovemarket.cc</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} love.me. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <span>Разработано с ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
