import React, { useState } from 'react';

// FilterSidebar.jsx
const FilterSidebar = ({
  categories = [],
  onCategoryChange,
  onPriceChange,
  onRatingChange,
  onBrandChange,
}) => {
  const [price, setPrice] = useState(60000);
  const [openSections, setOpenSections] = useState({
    brand: false,
    ratings: false,
    offers: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white border rounded shadow">
      <h4 className="  mb-4">Filters</h4>

      {/* Categories */}
      <div className="mb-4">
        <h5 className=" text-gray-700 mb-2">CATEGORIES</h5>
        <div className="text-sm flex flex-col gap-1">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => onCategoryChange(cat)}
              className="text-left hover:underline"
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => onCategoryChange('')}
            className="text-left text-green-600 hover:underline font-semibold"
          >
            All Products
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h5 className=" text-gray-700 mb-2">PRICE</h5>
        <input
          type="range"
          min={0}
          max={60000}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            onPriceChange(e.target.value);
          }}
          className="w-full"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Min</span>
          <span>₹{price}+</span>
        </div>
      </div>

      {/* बाकीचे Filters... */}
    </div>
  );
};

export default FilterSidebar;
