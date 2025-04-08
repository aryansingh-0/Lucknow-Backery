import React from 'react'
import HeroImage from "@/public/assets/HeroSection/cake2.jpg"
import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
    return (
        <div className="w-full pt-4 sm:pt-0 h-[50vh]  sm:h-[80vh] md:h-screen bg-gradient-to-br from-[#FDEBE5] via-[#F5D8C8] to-[#BA8966] relative flex">

            <Image src={HeroImage}
                className='   w-full h-full'
                alt='Hero Image' />
            <div style={{ backgroundColor: 'rgba(255, 242, 231, 0.5)' }} className="hidden md:flex bg-opacity-20  absolute h-full w-full md:px-12  items-center justify-center top-0 left-0  ">

                <div className="text-highlight ">
                    <h1 className='hidden md:block md:text-8xl md:text-start text-center font-bold'>
                        Delicious Cake for You.
                    </h1>
                    <p className='text-center hidden md:block text-2xl'>Enjoy our freshly baked, handcrafted cakes made with love.</p>
                    <div className="button w-full flex items-center justify-center mt-6">
                        <Link href={"/cakes"}> <button className='bg-link p-3 font-bold text-white cursor-pointer rounded-2xl '>Order Now</button>
                        </Link>
                     
                </div>
                  
                </div>
                

            </div>


        </div>

    )
}

export default HeroSection
