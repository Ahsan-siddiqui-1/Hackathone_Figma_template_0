import Image from 'next/image'
import React from 'react'
import Blog1 from '@/../Public/assets/blog1.png'
import Blog2 from '@/../Public/assets/blo2.png'
import Blog3 from '@/../Public/assets/blog3.png'
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

export default function Blogs() {
  return (
    <div className='h-full bg-white px-[2%] md:px-[10%]'>
      <div>
        <h1 className='text-center text-4xl font-semibold mt-11'>Our Blogs</h1>
        <p className='text-center text-[#9F9F9F] mt-3'>Find a bright ideal to suit your taste with our great selection</p>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-8 gap-8'>
        <div className='place-items-center pb-5 lg:pb-0'>
          <Image src={Blog1} alt='Blog1' width={393} height={393}></Image>
          <p className='text-center mt-2 text-xl'>Going all-in with millennial design</p>
          <h2 className='text-2xl text-center mt-4 pb-3 font-semibold border-b-4 border-black w-[120px] '>Read More</h2>
          <div className='flex gap-x-3 mt-3'>
            <FaRegClock className='mt-1' />
            <p>5 min</p>
            <CiCalendar className='mt-1 size-4' />
            <p>12th Oct 2022</p>
          </div>

        </div>
        <div className='place-items-center'>
          <Image src={Blog2} alt='Blog2' width={393} height={393}></Image>
          <p className='text-center mt-2 text-xl'>Going all-in with millennial design</p>
          <h2 className='text-2xl text-center mt-4 pb-3 font-semibold border-b-4 border-black w-[120px] '>Read More</h2>
          <div className='flex gap-x-3 mt-3'>
            <FaRegClock className='mt-1' />
            <p>5 min</p>
            <CiCalendar className='mt-1 size-4' />
            <p>12th Oct 2022</p>
          </div>
        </div>
        <div className='place-items-center'>
          <Image src={Blog3} alt='Blog3' width={393} height={393}></Image>
          <p className='text-center mt-2 text-xl'>Going all-in with millennial design</p>
          <h2 className='text-2xl text-center mt-4 pb-3 font-semibold border-b-4 border-black w-[120px] '>Read More</h2>
          <div className='flex gap-x-3 mt-3'>
            <FaRegClock className='mt-1' />
            <p>5 min</p>
            <CiCalendar className='mt-1 size-4' />
            <p>12th Oct 2022</p>
          </div>
        </div>

      </div>
      <div className='w-full flex justify-center items-center pt-5 mb-16'>
        <p className='text-xl mt-[20px] border-b-4 border-black w-[130px] pb-3 pl-2 cursor-pointer'>View All Post</p>
      </div>
    </div>
  )
}
