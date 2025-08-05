import React from 'react';

const categories = [
  { title: 'Ethnic Wear', img: 'https://images.meesho.com/images/marketing/1744634654837.webp' },
  { title: 'Western Dresses', img: 'https://images.meesho.com/images/marketing/1744634725496.webp' },
  { title: 'Menswear', img: 'https://images.meesho.com/images/marketing/1744634780426.webp' },
  { title: 'Footwear', img: 'https://images.meesho.com/images/marketing/1744634814643.webp' },
  { title: 'Home Decor', img: 'https://images.meesho.com/images/marketing/1744634835018.webp' },
  { title: 'Beauty', img: 'https://images.meesho.com/images/marketing/1744634871107.webp' },
  { title: 'Accessories', img: 'https://images.meesho.com/images/marketing/1744634909968.webp' },
  { title: 'Grocery', img: 'https://images.meesho.com/images/marketing/1744634937295.webp' },
];

const CategoryIcons = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center hover:scale-105 transition">
            <div className=" p-4 mb-2">
              <img src={cat.img} alt={cat.title} className="h-28 w-28 object-contain" />
            </div>
            <p className="text-gray-800 font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
