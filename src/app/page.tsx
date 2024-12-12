import Image from "next/image";
import React from "react";
import Banner from '@/../Public/assets/image.png'
import Tables from "./(Components)/Tables";
import Topick from "./(Components)/Topick";
import NewArrivial from "./(Components)/NewArrivial";
import Blogs from "./(Components)/Blogs";
import Instagram from "./(Components)/Instagram";


export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full h-full bg-[#FBEBB5] flex justify-between items-center md:px-[10%] px-[2%]">

          <div className="w-[640px] h-auto z-10">
            <h1 className="text-3xl md:text-xl lg:text-6xl font-medium">
              Rocket single <br /> <span>Seater</span>
            </h1>
            <p className="mt-[40px] w-[115px] pb-4 font-semibold text-2xl border-b-4 border-black" >Shop Now </p>

          </div>
          <div className="-mt-8 -ml-9 ">
            <Image src={Banner} alt="Banner" width={700} height={900} className="lg:w-[700px] lg:h-[900px] md:w-[500px] sm:w-[400px] h-auto object-cover -z-50" ></Image>
          </div>

        </div>
        <Tables />
        <Topick />
        <NewArrivial />
        <Blogs />
        <Instagram />
      </div>
    </>
  );
}
