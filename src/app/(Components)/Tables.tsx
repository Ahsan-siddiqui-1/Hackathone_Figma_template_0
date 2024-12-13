import Image from 'next/image'
import React from 'react'
import Table from '@/../Public/assets/table.png'
import sofa from '@/../Public/assets/sofa.png'
// import Link from 'next/link'

export default function Tables() {
  return (
    <div className='w-full h-full place-items-center bg-[#FAF4F4] md:flex justify-between md:px-[10%]'>
      <div className=' py-9 w-full lg:w-[605px] h-full lg:h-[562px] relative'>
        <div className=''>
        <Image src={Table} alt='table' width={600} className='h-full object-fill'></Image>
        </div>
        <div className='absolute bottom-10 left-10 lg:bottom-32 lg:left-24 w-full'>
          <p className='text-3xl'>Side table</p>
          <p className='text-xl mt-[20px] border-b-4 border-black w-[115px] pb-3'>View more</p>
        </div>
      </div>
      <div className=' py-9 w-full lg:w-[605px] h-full lg:h-[562px] relative'>
        <div className=''>
        <Image src={sofa} alt='table' width={600} className='h-full object-fill'></Image>
        </div>
        <div className='absolute bottom-5 left-10 lg:bottom-32 lg:left-24 w-full'>
          <p className='text-3xl'>Side table</p>
          <p className='text-xl mt-[20px] border-b-4 border-black w-[115px] pb-3'>View more</p>
        </div>
      </div>
      
    </div>
  )
}
