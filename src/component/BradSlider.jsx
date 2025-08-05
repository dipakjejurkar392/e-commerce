import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BrandSlider = () => {
  const brands = [
    { img: 'https://images.meesho.com/images/marketing/1743159415385.webp' },
    { img: 'https://images.meesho.com/images/marketing/1744636558884.webp' },
    { img: 'https://images.meesho.com/images/marketing/1744636599446.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159322237.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159377598.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159302944.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159363205.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159377598.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159393231.webp' },
     { img: 'https://images.meesho.com/images/marketing/1743159415385.webp' },
    { img: 'https://images.meesho.com/images/marketing/1744636558884.webp' },
    { img: 'https://images.meesho.com/images/marketing/1744636599446.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159322237.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159377598.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159302944.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159363205.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159377598.webp' },
    { img: 'https://images.meesho.com/images/marketing/1743159393231.webp' },
   
  ];

  return (
    <div className="py-6 bg-violet-50 mt-10">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded shadow p-4 flex items-center justify-center h-28 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <img src={brand.img} alt="Brand" className="max-h-12 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
