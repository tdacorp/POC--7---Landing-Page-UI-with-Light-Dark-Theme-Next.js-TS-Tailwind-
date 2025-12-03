// components/MenuCards.tsx
import React from "react";
import { Coffee, Utensils, GlassWater, Cake } from "lucide-react";

const menuItems = [
  {
    title: "Breakfast",
    icon: <Coffee className="w-8 h-8 text-gray-700" />,
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Main Dishes",
    icon: <Utensils className="w-8 h-8 text-gray-700" />,
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Drinks",
    icon: <GlassWater className="w-8 h-8 text-gray-700" />,
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Desserts",
    icon: <Cake className="w-8 h-8 text-gray-700" />,
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

const MenuCards = () => {
  return (
    <div className="py-12 bg-white mt-5">
      <h2 className="text-2xl font-serif text-center mb-8">Browse Our Menu</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <a href="#" className="text-red-600 font-medium">
              Explore Menu
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
