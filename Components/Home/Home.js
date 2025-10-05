import HeroSection from '@/Components/Home/HeroSection';
import WhatWeOffer from './WhatWeOffer';
import Cake from './Cake';
import WhyChooseUs from './WhyChooseUs';
import ContactUs from './ContactUs';
import WhatsaAppIcon from './WhatsaAppIcon';

// Revalidate every 60 seconds (you can adjust this)
export const revalidate = 60; 

async function getCake() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cake`, {
    // Use ISR caching strategy
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch cakes');
  }

  return res.json();
}

export default async function Home() {
  const data = await getCake();

  return (
    <div className="relative font-nota">
     
      <HeroSection />
      <Cake cakes={data.cakes || []} />
      <WhyChooseUs />
      <WhatWeOffer />
      <ContactUs />
    </div>
  );
}
