import React from 'react'
import Image from 'next/image'
import BirthdayGirl from '@/public/assets/WhatWeOffer/BirthdayGirl.jpg'
 import FlowerCake from '@/public/assets/WhatWeOffer/FlowerCake.jpg'
import AnniversaryCake from '@/public/assets/WhatWeOffer/AnniversaryCake.png'


function WhatWeOffer() {
  const cakeOffers = [
    {
      title: "Happy Birthday Cake",
      description: "Celebrate birthdays with our delicious and beautifully crafted cakes.",
      image: BirthdayGirl ,
    },
    {
      title: "Anniversary Cake",
      description: "Make your special day even sweeter with our elegant anniversary cakes.",
      image: AnniversaryCake,
    },
    {
      title: "Flower Cake",
      description: "Aesthetic flower-themed cakes perfect for gifting and celebrations.",
      image: FlowerCake,
    },
  ];

  return (
    <div className='py-6'>
      <h1 className='text-6xl text-center font-bold'>What We Offer</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center pt-6'>
        {cakeOffers.map((cake, index) => (
          <div key={index} className="offer pb-2   w-[90vw] md:w-[25vw] text-center bg-clean rounded-t-full rounded-2xl shadow-lg">
            <div className="image h-[80%] w-full rounded-t-full overflow-hidden bg-red-300">
              <Image
                src={cake.image}
                alt={cake.title}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 duration-300 transition-all ease-in-out"
              />
            </div>
            <div className="title font-bold text-2xl mt-2">{cake.title}</div>
            <div className="desc text-paragraph px-4">{cake.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer
