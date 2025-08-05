import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideData = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description: `Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat...`,
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg',
  },
  {
    place: 'Japan Alps',
    title: 'NANGANO',
    title2: 'PREFECTURE',
    description: `Nagano Prefecture, set within the majestic Japan Alps...`,
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg',
  },
  // Add more slides here...
];

const Slider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-screen"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <img
                src={slide.image}
                alt={slide.place}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-10 text-white">
                <h3 className="text-xl uppercase mb-2">{slide.place}</h3>
                <h1 className="text-5xl font-bold">{slide.title}</h1>
                <h2 className="text-5xl font-bold mb-4">{slide.title2}</h2>
                <p className="max-w-md mb-4">{slide.description}</p>
                <div className="flex gap-4">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">
                    Bookmark
                  </button>
                  <button className="border border-white px-4 py-2 rounded-full">
                    Discover Location
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
