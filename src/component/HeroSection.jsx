import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="w-full  text-white mt-10  py-16"
      style={{
        backgroundImage: ` url('https://images.meesho.com/images/marketing/1744698265981.webp')`,
        backgroundSize: '',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Side */}
        <div className='mt-99 ml-20'>
             <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-2 w-60 h-20  rounded transition">
           <h2>Shop Now</h2>
          </button>
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-99">
        
         
        </div>

        {/* Right Side Categories */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0 justify-items-center">
          {[
            { title: 'Lehengas', img: 'https://images.meesho.com/images/marketing/1744722796811.webp' },
            { title: 'Menwear', img: 'https://images.meesho.com/images/marketing/1744635113661.webp' },
            { title: 'Sarees', img: 'https://images.meesho.com/images/marketing/1744635139351.webp' },
            { title: 'Jewellery', img: 'https://images.meesho.com/images/marketing/1744635189897.webp' },
          ].map((cat, index) => (
            <div key={index} className="p-3 flex flex-col items-center hover:scale-105 transition">
              <img src={cat.img} alt={cat.title} className="h-35 w-32 object-cover mb-2 " />
              <p className="text-yellow-300 font-semibold">{cat.title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
