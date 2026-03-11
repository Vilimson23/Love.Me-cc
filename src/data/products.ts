export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const categories = [
  "Все",
  "Для нее",
  "Для него",
  "Для двоих",
  "Косметика",
  "Белье"
];

export const products: Product[] = [
  {
    id: "1",
    name: "Массажное масло 'Sensual Touch'",
    price: 1500,
    category: "Косметика",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    description: "Натуральное массажное масло с ароматом иланг-иланга и ванили для расслабляющего вечера.",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Кружевной комплект 'Midnight'",
    price: 4500,
    category: "Белье",
    image: "https://images.unsplash.com/photo-1588007375246-3ee823ef4851?auto=format&fit=crop&q=80&w=800",
    description: "Элегантный кружевной комплект черного цвета, подчеркивающий фигуру.",
    isNew: true,
  },
  {
    id: "3",
    name: "Ароматическая свеча 'Passion'",
    price: 1200,
    category: "Косметика",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    description: "Свеча с афродизиаками, создающая романтическую атмосферу.",
  },
  {
    id: "4",
    name: "Подарочный набор 'Perfect Evening'",
    price: 5900,
    category: "Для двоих",
    image: "https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&q=80&w=800",
    description: "Идеальный набор для романтического вечера: масло, свеча и шелковая лента.",
    isBestseller: true,
  },
  {
    id: "5",
    name: "Шелковый халат 'Elegance'",
    price: 7200,
    category: "Белье",
    image: "https://images.unsplash.com/photo-1515347619152-14690c01a471?auto=format&fit=crop&q=80&w=800",
    description: "Нежный шелковый халат, струящийся по телу.",
  },
  {
    id: "6",
    name: "Гель для душа 'Morning Dew'",
    price: 800,
    category: "Косметика",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800",
    description: "Освежающий гель для душа с экстрактом зеленого чая.",
    isNew: true,
  },
  {
    id: "7",
    name: "Набор для него 'Gentleman'",
    price: 3500,
    category: "Для него",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    description: "Премиальный уход для мужчин.",
  },
  {
    id: "8",
    name: "Парфюм 'Secret Desire'",
    price: 8900,
    category: "Для нее",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    description: "Соблазнительный аромат с нотами жасмина и сандала.",
    isBestseller: true,
  }
];
