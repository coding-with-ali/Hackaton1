"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top bar */}
      <div className='bg-[#7E33E0] w-full h-[44px] text-white flex justify-around items-center flex-col gap-2 md:flex-row'>
        <div className='md:flex justify-between items-center hidden gap-4 lg:gap-8'>
          <div className='flex justify-between items-center gap-2 lg:gap-3'>
            <MdOutlineMail />
            <p>mhhasanul@gmail.com</p>
          </div>
          <div className='flex justify-between items-center gap-2 lg:gap-3'>
            <LuPhoneCall />
            <p>(12345)67890</p>
          </div>
        </div>
        <div className='flex justify-between items-center gap-4 lg:gap-8'>
          <select name="" id="" className='bg-[#7E33E0]'>
            <option value="">English</option>
          </select>
          <select name="" id="" className='bg-[#7E33E0]'>
            <option value="">USD</option>
          </select>
          <div className='flex justify-between items-center gap-1 lg:gap-2'>
            <Link href="/login">Login</Link>
            <GrUserManager size="16px" />
          </div>
          <div className='flex justify-between items-center gap-1 lg:gap-2'>
            <Link href="">Wishlist</Link>
            <CiHeart size="16px" />
          </div>
          <Link href="/cart"><BsCart2 size="16px"/></Link>
        </div>
      </div>

      {/* Navbar */}
      <div className='w-full h-[80px] flex justify-around items-center border-b-2'>
        <div className='flex justify-center items-center gap-2 w-full px-4 sm:gap-28 sm:px-0'>
          {/* Mobile menu icon */}
          {!isMenuOpen ? (
            <FaBars
              size="24px"
              className='lg:hidden hover:text-[#FB2E86] cursor-pointer'
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <FaTimes
              size="24px"
              className='lg:hidden hover:text-[#FB2E86] cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          {/* Logo */}
          <h3 className='text-[26px] md:text-[34px] font-[Josefin Sans] font-[700]'>Hekto</h3>
          {/* Navigation menu */}
          <div
            className={`${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } fixed top-[120px] left-0 w-[70%] h-auto bg-white shadow-lg z-50 flex flex-col justify-start gap-6 p-6 transition-transform duration-300 lg:static lg:w-auto lg:h-auto lg:flex lg:translate-x-0 lg:bg-transparent lg:shadow-none lg:flex-row lg:items-center`}
          >
            <Link href="/" className='hover:text-[#FB2E86] text-lg'>Home</Link>
            <Link href="/about" className='hover:text-[#FB2E86] text-lg'>About</Link>
            <Link href="/" className='hover:text-[#FB2E86] text-lg'>Pages</Link>
            <Link href="/" className='hover:text-[#FB2E86] text-lg'>Products</Link>
            <Link href="/" className='hover:text-[#FB2E86] text-lg'>Blogs</Link>
            <Link href="/grids" className='hover:text-[#FB2E86] text-lg'>Shops</Link>
            <Link href="/" className='hover:text-[#FB2E86] text-lg'>Contact</Link>
          </div>
          {/* Search bar */}
          <div className='flex w-[220px] md:w-[320px] h-[40px] items-center'>
            <input
              type="search"
              className='w-[180px] md:w-[270px] h-[40px] border-2 rounded-l-md'
            />
            <FaSearch
              size="20px"
              className='w-[40px] md:w-[50px] h-[40px] bg-[#FB2E86] p-2 rounded-r-md cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
