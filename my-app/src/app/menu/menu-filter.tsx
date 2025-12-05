"use client";

import { useState } from "react";

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

export default function MenuFilter({ menuItems, onFilter }: { menuItems: any[], onFilter: (category: string) => void }) {
  const [active, setActive] = useState("All");

  const handleClick = (category: string) => {
    setActive(category);
    onFilter(category); // send selected category to parent to filter items
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`
            px-4 py-2 rounded-full border transition
            text-sm md:text-base
            ${active === category ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-700 border-gray-300"}
            hover:bg-red-600 hover:text-white
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
