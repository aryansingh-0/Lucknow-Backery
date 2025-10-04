import React from 'react'
import HeroSection from '@/Components/Home/HeroSection'
import WhatWeOffer from './WhatWeOffer'
import Cake from './Cake'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import WhatsaAppIcon from './WhatsaAppIcon'


function Home() {
  
  return (
    <div className='relative'>
     <WhatsaAppIcon/>
      <HeroSection />
      
      <Cake />
      <WhyChooseUs />
      <WhatWeOffer />
      <ContactUs />
    </div>
  )
}

export default Home
