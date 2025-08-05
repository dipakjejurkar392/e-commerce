import React from 'react';

const TrendzSection = () => {
  const categories = [
    {
      title: 'Summer Dresses',
      img: 'https://images.meesho.com/images/marketing/1744635893307.webp',
    },
    {
      title: 'Baggy Jeans',
      img: 'https://images.meesho.com/images/marketing/1744635812270.webp',
    },
    {
      title: 'Earrings',
      img: 'https://images.meesho.com/images/marketing/1744635870215.webp',
    },
    {
      title: 'Chic Flats',
      img: 'https://images.meesho.com/images/marketing/1744635846873.webp',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#070207] to-[#100511] py-8 px-16 mb-20 mt-10"
     style={{
        backgroundImage: ` url('https://images.meesho.com/images/marketing/1744698143534.webp')`,
        backgroundSize: '',
        backgroundPosition: 'center',}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/3 text-white text-center md:text-left">
          {/* <h1 className="text-4xl font-bold mb-4">meesho <span className="text-yellow-300">#TRENDZ</span></h1>*/}
          <div className='mt-30 '>
          <button className="bg-white text-purple-800 font-bold px-6 py-2 rounded hover:bg-yellow-300 transition ">
            Shop Now
          </button> 
          </div> 
        </div>

        {/* Right Cards */}
        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-0">
          {categories.map((cat, index) => (
            <div
              key={index}
              className=" shadow-lg p-2 hover:scale-105 transition duration-300"
            >
              <img src={cat.img} alt={cat.title} className="rounded-lg w-40 h-52 object-cover" />
              <p className="text-center text-purple-800 bg-amber-50 border border-amber-50 rounded-2xl font-semibold mt-2">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendzSection;
