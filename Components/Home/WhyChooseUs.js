import React from 'react'
import data from '@/public/JsonData/WhyChooseUs.json'

function WhyChooseUs() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16  ">
      <h2 className="text-3xl sm:text-4xl font-bold text-highlight text-center mb-10">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-clean hover:bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.heading}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-700 mt-12 max-w-3xl mx-auto">
        {data.conclusion}
      </p>
    </section>
  )
}

export default WhyChooseUs
