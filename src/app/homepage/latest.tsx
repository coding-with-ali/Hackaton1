// import React from 'react'
// import Image from 'next/image'

// export default function Latest() {
//   return (
//     <div className="py-10 px-10 md:px-20 lg:px-28 xl:px-40">
//     <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-[700]">
//       Latest Products
//      </h2>
//     <div className='m-auto my-5 md:my-10 flex justify-between items-center w-[350px] h-auto md:w-[527px] md:h-[22px] text-[#151875]'>
//         <p className=' hover:text-[#FB2E86] hover:underline'>New Arrival</p>
//         <p className=' hover:text-[#FB2E86] hover:underline'>Best Seller</p>
//         <p className=' hover:text-[#FB2E86] hover:underline'>Featured</p>
//         <p className=' hover:text-[#FB2E86] hover:underline'>Special Offers</p>
//     </div>

//     <div className='flex justify-center items-center flex-wrap gap-5'>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//             <div>
//             <Image
//                 src='/vector 1.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[60px] h-[40px] relative -top-20 -right-2'
//                 /> 
//                 <p className='text-white relative -top-28 -right-2'>Sale</p>
//              </div>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[290px] h-[306px] md:w-[320px] lg:w-[365px]'>
//             <div className='bg-[#F7F7F7] flex justify-center items-center'>
//                 <Image
//                 src='/item5.png'
//                 alt='Product Image'
//                 width="900"
//                 height="900"
//                 className='w-[223px] h-[229px]'
//                 />  
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h3 className='text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
//                 <div className='flex justify-center items-center gap-1'>
//                 <p className='text-[12px]'>$42.00</p>
//                 <p className='line-through text-[#FB2448] text-[12px]'>$65.00</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }


import React from "react";
import Image from "next/image";

const productList = [
  {
    id: 1,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item4.png",
    isOnSale: true,
  },
  {
    id: 2,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item5.png",
    isOnSale: false,
  },
  {
    id: 3,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item6.png",
    isOnSale: false,
  },
  {
    id: 4,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item3.png",
    isOnSale: true,
  },
  {
    id: 5,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item2.png",
    isOnSale: false,
  },
  {
    id: 6,
    name: "Comfort Handy Craft",
    price: "$42.00",
    originalPrice: "$65.00",
    image: "/item1.png",
    isOnSale: true,
  },
];

export default function Latest() {
  return (
    <div className="py-10 md:px-20 lg:px-28 xl:px-40">
      <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-bold">
        Latest Products
      </h2>
      <div className="flex justify-between items-center w-[350px] md:w-[527px] m-auto my-5 md:my-10 text-[#151875]">
        {["New Arrival", "Best Seller", "Featured", "Special Offers"].map(
          (tab) => (
            <p
              key={tab}
              className="hover:text-[#FB2E86] hover:underline cursor-pointer"
            >
              {tab}
            </p>
          )
        )}
      </div>

      <div className="flex justify-center items-center flex-wrap gap-5">
        {productList.map((product) => (
          <div
            key={product.id}
            className="w-[290px] h-[320px] md:w-[320px] lg:w-[365px]"
          >
            <div className="relative bg-[#F7F7F7] flex justify-center items-center rounded-lg overflow-hidden">
              {product.isOnSale && (
                <div className="absolute top-2 left-2 bg-[#3F509E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Sale
                </div>
              )}
              <Image
                src={product.image}
                alt={`${product.name} Image`}
                width={223}
                height={229}
                className="w-[223px] h-[229px] object-cover"
              />
            </div>

            <div className="flex justify-between items-center mt-3">
              <h3 className="text-[#151875] text-[16px] font-medium">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-semibold">{product.price}</p>
                <p className="text-[12px] text-[#FB2448] line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
