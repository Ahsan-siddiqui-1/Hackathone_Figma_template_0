import Image from 'next/image'
import React from 'react'
import NewArrival from '@/../Public/assets/NewArrivals.png'

export default function NewArrivial() {
  return (
    <div className="md:flex bg-[#FFF9E5] h-full place-items-center md:h-[639px] w-full place-content-center">
      <div className="">
        <Image src={NewArrival} alt='New Arrival' width={836} height={400}></Image>
        </div>
        <div className='md:mt-[250px] md:ml-[50px] pb-10 md:pb-0'>
            <h3 className='text-center text-xl font-semibold'>New Arrivals</h3>
            <h1 className='font-extrabold text-5xl  pt-[20px]'>Asgaard sofa</h1>
            <button className='border-2 border-black mt-[40px]  w-[236px] h-[58px] ml-[40px] rounded-md font-bold hover:bg-[#dfb278] duration-300'>Order Now</button>
        </div>
    </div>
  )
}