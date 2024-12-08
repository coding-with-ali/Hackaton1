import React from 'react';
import Image from 'next/image';

export default function Featured() {
  // Array of product data
  const products = [
    { name: 'Cantilever Chair', code: 'Y523201', price: '$42.00', image: '/item1.png' },
    { name: 'Stylish Sofa', code: 'Y523202', price: '$75.00', image: '/item2.png' },
    { name: 'Modern Lamp', code: 'Y523203', price: '$30.00', image: '/item3.png' },
    { name: 'Wooden Table', code: 'Y523204', price: '$120.00', image: '/item4.png' },
  ];

  return (
    <div className="py-10 px-10 md:px-20 lg:px-28 xl:px-40">
      <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-[700]">
        Featured Products
      </h2>
      <div className="flex justify-around items-center flex-wrap gap-5 mt-10 md:mt-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[270px] h-[360px] shadow-lg text-center group relative transition-transform duration-300 hover:scale-105">

            <div className="absolute inset-0 bg-[#2F1AC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
              <Image
                src={product.image}
                alt={product.name}
                width="900"
                height="900"
                className="w-[178px] h-[178px]"
              />
            </div>
            <div className="relative z-10 transition-colors duration-300">
              <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-1">
                <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px]"></div>
              </div>
              <p className="text-[#151875] text-[14px] font-[400] py-2 group-hover:text-white">
                Code - {product.code}
              </p>
              <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
                {product.price}
              </p>
            </div>
            <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#05E6B7] text-white text-[14px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              View Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
