"use client"
import Link from 'next/link';
import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='flex px-[2%] md:w-full h-[100px] items-center lg:pl-[370px] pl-[20px] justify-between'>
        <div className='lg:w-[430px] h-full items-center flex'>
          <ul className='sm:flex lg:gap-x-[75px] gap-[25px] justify-end mx-auto font-bold hidden '>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/Product'}><li>Shop</li></Link>
            <Link href={'/About'}><li>About</li></Link>
            <Link href={'/MyAccount'}><li>Contact</li></Link>
          </ul>
          <div className='block sm:hidden'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#0caf6b"
              className="md:hidden cursor-pointer"
              onClick={toggleSidebar}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
          {/* #FBEBB5 */}
          {isSidebarOpen && (

            <div className="w-full h-[532px] bg-white fixed top-[82px] bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out">
              <div className="w-full h-screen" onClick={toggleSidebar}>
                <ul className="flex flex-col w-full text-[#737373] text-[30px] justify-center items-center py-24 space-y-[30px] font-bold">
                  <li>
                    <Link href="/" className="active:text-[#737373]" onClick={toggleSidebar}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/Product" className="active:text-[#737373]" onClick={toggleSidebar}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/About" className="active:text-[#737373]" onClick={toggleSidebar}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/MyAccount" className="active:text-[#737373]" onClick={toggleSidebar}>
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          )}
        </div>


        <div className='lg:w-[247px] h-full items-center flex'>
          <ul className='flex lg:gap-x-[30px] gap-[15px] '>
            <li><IoIosContact size={28} className='cursor-pointer hover:-translate-y-1 duration-500' /></li>
            <li><BsCart3 size={28} className='cursor-pointer hover:-translate-y-1 duration-500' /></li>
            <li><CiSearch size={28} className='cursor-pointer hover:-translate-y-1 duration-500' /></li>
            <li><FaRegHeart size={28} className='cursor-pointer hover:-translate-y-1 duration-500' /></li>
          </ul>
        </div>

      </div>
    </>
  )
}
