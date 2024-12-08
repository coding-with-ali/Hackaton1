import Link from 'next/link'
import Image from 'next/image'
import Brand from '../homepage/brand'

export default function shops() {
  const products = [
    {
      id: 1,
      image: "/blog1.png",
      title: "Accumsan tincidunt",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "In nulla",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "Vel sem",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/blog1.png",
      title: "Porttitor cum",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/blog2.png",
      title: "Porttitor cum",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/blog3.png",
      title: "Porttitor cum",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/blog1.png",
      title: "Porttitor cum",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/blog3.png",
      title: "Porttitor cum",
      price: "$26.00",
      discountPrice: "$50.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];  
    return (
        <div>
          <div className="w-full h-[286px] bg-[#F6F5FF]">
            <div className='absolute top-48 left-10 md:top-60 md:left-60'>
              <h2 className='text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]'>Shop Grid Default</h2>
              <Link href="" className='px-2 '>Home.</Link>
              <Link href="">Page.</Link>
              <Link href="" className='text-[#FB2E86] text-[16px] font-[500] px-2'>Shop Grid Default</Link>
            </div>
          </div>
    
    
          <div className="flex flex-wrap items-center justify-around gap-4 p-4 border-b border-purple-500 bg-white">
          <h1 className="text-lg font-bold text-purple-700">
            Ecommerce Accessories & Fashion Item
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                className="w-16 px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="10"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-medium text-gray-700">
                View:
              </label>
              <div className="flex gap-1">
                <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="grid grid-cols-2 gap-1 w-4 h-4 bg-gray-200" />
                </button>
                <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="w-4 h-4 bg-gray-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="max-w-6xl mx-auto p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row items-start gap-4 p-4 mb-4 border rounded-lg shadow-sm border-gray-200"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-full md:w-48 h-32 object-cover rounded-md"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-purple-700">
              {product.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-gray-800">
                {product.price}
              </span>
              <span className="text-sm line-through text-gray-500">
                {product.discountPrice}
              </span>
              <div className="flex items-center ml-2">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            <div className="flex items-center gap-2 mt-4">
              <button className="p-2 text-purple-500 border rounded-full hover:bg-purple-100">
                🛒
              </button>
              <button className="p-2 text-purple-500 border rounded-full hover:bg-purple-100">
                ❤️
              </button>
              <button className="p-2 text-purple-500 border rounded-full hover:bg-purple-100">
                🔍
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        <Brand />
    </div>
  )
}
