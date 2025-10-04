import React from 'react'
import HeroImage from "@/public/assets/HeroSection/cakeaman.jpg"
import MobileImage from "@/public/assets/HeroSection/cakemobile.jpeg"
import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
    return (
        <div className="w-full bg-amber-600 pt-2 sm:pt-0 h-[50vh]  sm:h-[70vh] md:h-[90vh] lg:h-screen  relative flex">

            <Image src={HeroImage}
                className='hidden md:block   w-full h-full'
                alt='Hero Image' />
            <Image src={MobileImage}
                className='   md:hidden  w-full h-full'
                alt='Hero Image md:hidden' />
             
            <div className="hidden md:flex  absolute h-full w-full md:w-1/2  md:px-12  items-center justify-center top-2  left-0  ">

                <div className="text-highlight  ">
                    <h1 className='hidden md:block md:text-6xl md:text-start tracking-tighter leading-14 text-center font-bold'>
                        Delicious Cake for You !
                    </h1>
                    <p className=' mt-6 hidden md:block md:text-base text-sm'>Enjoy our freshly baked, handcrafted cakes made with love.</p>
                    <div className=" w-full flex items-center justify-center mt-6">
                        <Link className='w-full' href={"/cakes"}> 
                        <button className='bg-red-600 p-3 w-full font-bold text-white cursor-pointer rounded-2xl '>Order Now</button>
                        </Link>

                    </div>

                </div>


            </div>


        </div>

    )
}

export default HeroSection
