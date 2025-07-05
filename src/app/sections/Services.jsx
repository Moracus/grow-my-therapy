// src/components/services.js

import Image from "next/image";

const focusItems = [
  {
    title: "Anxiety & Stress Management ",
    description:
      "The care you provide for others may be driving you to seek support for yourself — therapy can help you navigate that stress and burnout.",
    image:
      "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/25a4d543-1f55-46b7-ba06-c571a0c2b806/pexels-tima-miroshnichenko-6011667.jpg?format=1000w", // Place your image in /public folder
  },
  {
    title: "Relationship Counseling ",
    description:
      "Life’s challenges, whether a difficult childhood, a traumatic event or loss, can be processed and healed through guided care.",
    image:
      "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/11e69e15-d9e7-4182-aeb0-aacd9fc81e02/pexels-raphael-brasileiro-1687007.jpg?format=750w",
  },
  {
    title: "Trauma Recovery",
    description:
      "Second-generation individuals in immigrant families often navigate cultural identity and belonging — therapy provides clarity and support.",
    image:
      "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/eeca6997-7fd7-4376-b0a4-df60a0f368e5/pexels-polina-tankilevitch-8202906.jpg?format=1000w",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#f3f0e8] text-center px-4">
      <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16">
        Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {focusItems.map((item, index) => (
          <div key={index}>
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto overflow-hidden rounded-full shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 px-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
