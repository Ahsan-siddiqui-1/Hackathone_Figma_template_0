import React from 'react'
import product from '@/../Public/assets/product.png'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../Public/assets/logo.png'
import { CgMenuGridO } from "react-icons/cg";
import top1 from '@/../Public/assets/top1.png'
import top2 from '@/../Public/assets/top2.png'
import top3 from '@/../Public/assets/top3.png'
import top4 from '@/../Public/assets/top4.png'
import { FaGreaterThan } from 'react-icons/fa'
export default function Product() {
  return (
    <div className='w-full' >
      <div className='w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill' style={{ backgroundImage: `url(${product.src})` }}>
        <Image src={logo} alt='logo' className='mx-auto pt-[40px] w-[90px] '></Image>

        <h1 className='text-center text-3xl font-bold pt-[10px]'>Shop</h1>
        {/* //there is a breadcrumb but i dont have time to put this here */}
        <div className='flex justify-center items-center pt-5'>
          <div className='space-x-5 flex items-center'>
            <Link href={'/'} className='font-bold'>Home</Link>
            <FaGreaterThan/>

            <Link href={'/Product'} className='font-semibold'>Products</Link>
          </div>
        </div>


      </div>
      <div className='w-full h-[100px] mx-auto 2xl:w-[1600px] bg-[#FAF4F4] flex justify-between py-8 items-center'>
        <div className='flex ml-24 gap-x-9 '>
          <p>filter</p>
          <CgMenuGridO className='mt-1' />
          <p className=''> | </p>
          <p>Showing 1–16 of 32 results</p>


        </div>
        <div className='justify-between flex gap-x-9 mr-36 items-center '>
          <p>
            Show
          </p>
          <p className='bg-white px-2 pt-1 -mt-'>16</p>
          <p>Short by</p>
          <input type="text" placeholder='Default' className='px-[15px] py-4 rounded' />
        </div>

      </div>

      <div className='mx-auto 2xl:w-[1600px] bg-white'>

        <div className='grid grid-cols-4 px-16 '>

          <Link href={"/SingleProduct"}>
            <div className='hover:-translate-y-1 duration-500'>
              <Image src={top1} alt='top1 ' width={287} height={287}></Image>
              <p className='text-black mt-4'>Trenton modular sofa_3</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top2} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pl-4 -mt-9 hover:-translate-y-1 duration-500' >
              <Image src={top3} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top4} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>

        </div>



        <div className='grid grid-cols-4 px-16 '>
          <Link href={"/SingleProduct"}>
            <div className='hover:-translate-y-1 duration-500'>
              <Image src={top1} alt='top1 ' width={287} height={287}></Image>
              <p className='text-black mt-4'>Trenton modular sofa_3</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top2} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pl-4 -mt-9 hover:-translate-y-1 duration-500' >
              <Image src={top3} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top4} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>

        </div>



        <div className='grid grid-cols-4 px-16 '>
          <Link href={"/SingleProduct"}>
            <div className='hover:-translate-y-1 duration-500'>
              <Image src={top1} alt='top1 ' width={287} height={287}></Image>
              <p className='text-black mt-4'>Trenton modular sofa_3</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top2} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pl-4 -mt-9 hover:-translate-y-1 duration-500' >
              <Image src={top3} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>
            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top4} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>

        </div>



        <div className='grid grid-cols-4 px-16 '>

          <Link href={"/SingleProduct"}>
            <div className='hover:-translate-y-1 duration-500'>
              <Image src={top1} alt='top1 ' width={287} height={287}></Image>
              <p className='text-black mt-4'>Trenton modular sofa_3</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>

            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top2} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>

            <div className='pl-4 -mt-9 hover:-translate-y-1 duration-500' >
              <Image src={top3} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>
          <Link href={"/SingleProduct"}>

            <div className='pt-10 hover:-translate-y-1 duration-500'>
              <Image src={top4} alt='top1' width={287} height={287}></Image>
              <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
              <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
            </div>
          </Link>

        </div>

        <div className='flex justify-center gap-x-5 my-[110px] '>

          <div className='bg-[#FBEBB5] cursor-pointer px-5 py-3 rounded-xl'>1</div>
          <div className='bg-[#FFF9E5] cursor-pointer hover:bg-[#FBEBB5] duration-300 px-5 py-3 rounded-xl'>2</div>
          <div className='bg-[#FFF9E5] cursor-pointer hover:bg-[#FBEBB5] duration-300 px-5 py-3 rounded-xl'>3</div>
          <div className='bg-[#FFF9E5] cursor-pointer hover:bg-[#FBEBB5] duration-300 px-5 py-3 rounded-xl'>Next</div>

        </div>

        <div className='grid grid-cols-3 gap-x-5 bg-secondary py-16'>
          <div className='text-center'>
            <h1 className='text-4xl font-semibold'>Free Delivery</h1>
            <p className='text-[#9F9F9F]'>For all oders over $50, consectetur <br /> adipim scing elit.</p>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-semibold'>90 Days Return</h1>
            <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipim scing elit.</p>
          </div>
          <div className='text-start'>
            <h1 className='text-4xl font-semibold'>Secure Payment</h1>
            <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipim scing elit.</p>
          </div>

        </div>

      </div>

    </div>
  )
}
