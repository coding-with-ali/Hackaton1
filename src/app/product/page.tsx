"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Brand from "../homepage/brand";

export default function product() {
  // Sample data for the product details
  const product = {
    name: "Playwood arm chair",
    price: 32.0,
    oldPrice: 50.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    colors: ["#6C63FF", "#FF5757", "#FFD700"], // Hex color codes
    categories: ["Furniture", "Chair"],
    tags: ["Modern", "Luxury"],
    images: [
      "/product1.png", // Main product image
      "/product2.png",
      "/product3.png",
      "/product4.png",
    ],
    reviews: 93,
    rating: 4, // Out of 5
    tabs: ["Description", "Additional Info", "Reviews", "Video"],
    details: [
      "Aliquam duis vulputate vulputate integer sagittis. Faucibus dolor ornare.",
      "Aliquam duis vulputate vulputate integer sagittis. Faucibus dolor ornare.",
      "Aliquam duis vulputate vulputate integer sagittis. Faucibus dolor ornare.",
    ],
  };

  // State for selected image and tab
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedTab, setSelectedTab] = useState(product.tabs[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className="absolute top-48 left-10 md:top-60 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
          Product Details
          </h2>
          <Link href="" className="px-2">
            Home.
          </Link>
          <Link href="">Page.</Link>
          <Link href="" className="text-[#FB2E86] text-[16px] font-[500] px-2">
          Product Details
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto p-6 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div className="flex justify-between items-center flex-row-reverse gap-5">
            <div className="w-full h-[400px] border rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Main Product"
                width="900"
                height="900"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-rows-4 gap-2 mt-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-full h-28 border rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === image
                      ? "ring-2 ring-purple-500"
                      : "hover:ring-2 hover:ring-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-fit"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-4">
            <h1 className="text-[36px] font-semibold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-[12px]">
                {"★".repeat(product.rating)}{" "}
                {"☆".repeat(5 - product.rating)}
              </span>
              <span className="text-[12px] text-gray-500">
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[16px] font-semibold text-gray-800">
                ${product.price.toFixed(2)}
              </span>
              <span className="line-through text-[16px] text-[#FB2E86]">
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-[#A9ACC6] text-[16px]">{product.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Color:</span>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <Link href="/cart" className="w-[89px] py-3 text-[#151875] rounded-l">
              Add To Cart
            </Link>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Categories:</strong> {product.categories.join(", ")}
              </p>
              <p>
                <strong>Tags:</strong> {product.tags.join(", ")}
              </p>
              <div>
                <strong>Share:</strong>
                <div className="flex space-x-4 mt-4">
                  <FaFacebookF className="text-[#151875] hover:text-[#FB2E86] transition" />
                  <FaTwitter className="text-[#151875] hover:text-[#FB2E86] transition" />
                  <FaInstagram className="text-[#151875] hover:text-[#FB2E86] transition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#F9F8FE] py-14 my-10 md:pl-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start items-center space-x-8 border-b">
            {product.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(tab)}
                className={`pb-2 ${
                  selectedTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-4 text-gray-600">
            {selectedTab === "Description" && (
              <>
                <h4 className="text-[#151875] text-[22px]">Varius tempor.</h4>
                <p className="text-[#A9ACC6] text-[16px]">
                  Aliquam duis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                </p>
                <ul className="list-disc pl-5">
                  <h4 className="text-[#151875] text-[22px] py-3">
                    More details
                  </h4>
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-[#A9ACC6] text-[16px] pb-2"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <Brand />
    </div>
  );
}
