import Image from 'next/image'
import instagram from '@/../Public/assets/instagram.png'


export default function Instagram() {
  return (
    <div
      className="w-full h-full relative overflow-hidden place-content-center">
      
        <Image src={instagram} alt=''className='w-full'/>
      <div className='text-center absolute top-36 left-[450px] overflow-hidden'>
        <h1 className='text-center font-bold text-7xl '>Our Instagram</h1>
        <p className='pt-6'>Follow our store on Instagram</p>
        <button className='bg-[#FAF4F4] hover:bg-[#e7d5d5] duration-300 rounded-full border px-[30px] py-[10px]'>Follow us</button>
      </div>

    </div>

  )
}
