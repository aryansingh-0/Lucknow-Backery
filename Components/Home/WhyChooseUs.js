"use client";
import React from "react";
import {
  Star,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  ThumbsUp,
  Clock,
  Cake,
  MessageCircle,
  Landmark,
  BadgeDollarSign,
} from "lucide-react"; // Lucide icons

// Map icons dynamically based on your JSON keys
const icons = {
  clock: Clock,
  cake: Cake,
  star: Star,
  shield: ShieldCheck,
  heart: HeartHandshake,
  sparkles: Sparkles,
  users: Users,
  thumbs: ThumbsUp,
  message: MessageCircle,
  city: Landmark,
  pricing: BadgeDollarSign,
};

const data = {
  title: "Why Choose Us?",
  reasons: [
    {
      heading: "Same-Day & Midnight Delivery",
      description:
        "Whether it's a last-minute surprise or a midnight birthday bash, we deliver fresh cakes right on time, anywhere in Lucknow.",
      icon: "clock",
    },
    {
      heading: "100% Fresh & Premium Quality",
      description:
        "Every cake is handcrafted by expert bakers using premium ingredients to ensure every bite is delicious, moist, and memorable.",
      icon: "cake",
    },
    {
      heading: "Wide Variety of Cakes",
      description:
        "From classic chocolate to designer cakes, eggless options, and customized photo cakes, we’ve got something for every taste and occasion.",
      icon: "star",
    },
    {
      heading: "Easy Online Ordering",
      description:
        "With our smooth and secure online platform, sending cakes to your loved ones in Lucknow takes just a few clicks.",
      icon: "message",
    },
    {
      heading: "Local Experts, Local Love",
      description:
        "We know Lucknow like the back of our hand. That’s why we ensure timely delivery and a personal touch that only a local bakery can offer.",
      icon: "city",
    },
    {
      heading: "Affordable Pricing with Amazing Offers",
      description:
        "Celebrate more for less! Our cakes are not only scrumptious but also budget-friendly, with exciting discounts and festive offers.",
      icon: "pricing",
    },
  ],
  conclusion:
    "So whether you're far away or nearby, make every occasion sweeter with Lucknow Bakers – delivering love, one cake at a time! ",
};

function WhyChooseUs() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-20">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-highlight">
        {data.title} 
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.reasons.map((reason, index) => {
          const Icon = icons[reason.icon] || Sparkles; // fallback icon
          return (
            <div
              key={index}
              className="group bg-red-100 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-violet-300 transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-highlight/20 text-highlight mb-6 group-hover:bg-violet-100 transition">
                <Icon size={28} strokeWidth={2.2} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Conclusion */}
      <p className="text-center text-lg text-gray-700 mt-16 max-w-2xl mx-auto">
        {data.conclusion}
      </p>
    </section>
  );
}

export default WhyChooseUs;
