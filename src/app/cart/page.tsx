"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import Brand from "../homepage/brand";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
}

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Ut diam consequat",
      price: 32.0,
      quantity: 1,
      image: "/item4.png",
      color: "Brown",
      size: "XL",
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      price: 32.0,
      quantity: 1,
      image: "/item3.png",
      color: "Brown",
      size: "XL",
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      price: 32.0,
      quantity: 1,
      image: "/item2.png",
      color: "Brown",
      size: "XL",
    },
    {
      id: 4,
      name: "Elit massa diam",
      price: 32.0,
      quantity: 1,
      image: "/item1.png",
      color: "Brown",
      size: "XL",
    },
    {
      id: 5,
      name: "Proin pharetra elementum",
      price: 32.0,
      quantity: 1,
      image: "/item6.png",
      color: "Brown",
      size: "XL",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className="absolute top-48 left-10 md:top-60 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
            Shop Grid Default
          </h2>
          <Link href="" className="px-2 ">
            Home.
          </Link>
          <Link href="">Page.</Link>
          <Link href="" className="text-[#FB2E86] text-[16px] font-[500] px-2">
            Shop Grid Default
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-4 text-blue-700">Product</th>
                  <th className="p-4 text-blue-700">Price</th>
                  <th className="p-4 text-blue-700">Quantity</th>
                  <th className="p-4 text-blue-700">Total</th>
                  <th className="p-4 text-blue-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            Color: {product.color}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {product.size}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">${product.price.toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            product.id,
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        className="w-12 border text-center"
                        min={1}
                      />
                    </td>
                    <td className="p-4">
                      £{(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="col-span-1">
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Cart Totals</h3>
            <div className="mt-4 flex justify-between text-sm md:text-base">
              <p>Subtotal:</p>
              <p>£{subtotal.toFixed(2)}</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
}
