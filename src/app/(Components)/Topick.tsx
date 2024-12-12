import Image from 'next/image'
import React from 'react'
import top1 from '@/../Public/assets/top1.png'
import top2 from '@/../Public/assets/top2.png'
import top3 from '@/../Public/assets/top3.png'
import top4 from '@/../Public/assets/top4.png'
import Link from 'next/link'

export default function Topick() {
  return (
    <div className=' w-full h-full bg-white px-[5%] lg:px-[12%]'>
      <h1 className='text-5xl text-center my-9'>Top Pick for you</h1>
      <p className='text-[#9F9F9F] py-1 mx-auto text-center w-[400px] lg:w-full'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center '>

        <Link href={"/SingleProduct"}>
          <div className='hover:-translate-y-1 duration-500 w-full place-items-center sm:place-items-start '>
            <Image src={top1} alt='top1 'className='w-[full]'></Image>
            <p className='text-black mt-4'>Trenton modular sofa_3</p>
            <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
          </div>
        </Link>
        <Link href={"/SingleProduct"}>

          <div className='hover:-translate-y-1 duration-500 '>
            <Image src={top2} alt='top1' width={287} height={287}></Image>
            <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
            <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
          </div>
        </Link>

        <Link href={"/SingleProduct"}>

          <div className='hover:-translate-y-1 duration-500 ' >
            <Image src={top3} alt='top1' width={287} height={287}></Image>
            <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
            <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
          </div>
        </Link>

        <Link href={"/SingleProduct"}>

          <div className='hover:-translate-y-1 duration-500 '>
            <Image src={top4} alt='top1' width={287} height={287}></Image>
            <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
            <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
          </div>
        </Link>


      </div>
      <div className='w-full flex justify-center items-center pt-5 mb-16'>
        <p className='text-xl mt-[20px] border-b-4 border-black w-[115px] pb-3 pl-1 cursor-pointer'>View more</p>
      </div>


    </div>
  )
}
