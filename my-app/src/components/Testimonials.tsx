import Image from "next/image";
import React from "react";

const testimonials = [
  {
    quote: "The best restaurant",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    img: "/sophie.jpg",
  },
  {
    quote: "Simply delicious",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    img: "/max.jpg",
  },
  {
    quote: "One of a kind restaurant",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    img: "/andy.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-red-600 font-semibold text-lg mb-3">“{t.quote}”</h3>
            <p className="text-gray-700 mb-4">{t.text}</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
