"use client";
import { useState } from "react";

// import { useCart } from "@/app/context/cart-context";
import Image from "next/image";

import MenuFilter from "./menu-filter";
 

export default function MenuCards() {
  // const { addToCart } = useCart();
  
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Crispy Tikki",
      price: 9.99,
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "/tikki.jpg",
      category: "Breakfast" 
    },
    {
      id: 2,
      name: "Hawaiian Pizza",
      price: 15.99,
      desc: "Made with eggs, ruti, ada, salt, oil and other ingredients.",
      img: "/pizza.jpeg",
      category: "Breakfast" 
    },
    {
      id: 3,
      name: "Ice Cream",
      price: 7.25,
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "/ice.jpg",
      category: "Desserts" 
    },
    {
      id: 4,
      name: "Spicy Vda",
      price: 20.99,
      desc: "Made with eggs, flour, salt, oil and other ingredients.",
      img: "/pkode.jpeg",
      category: "Breakfast" 
    },
    {
      id: 5,
      name: "Plain Dosa",
      price: 20.99,
      desc: "Made with eggs, flour, salt, oil and other ingredients.",
      img: "/plain-Dosa.webp",
      category: "Main Dishes" 
    },
    {
      id: 6,
      name: "Aperol and Apple Cider Cocktail",
      price: 20.99,
      desc: "Refresh Your Taste Buds.",
      img: "/drink.jpeg",
      category: "Drinks" 
    },
  ]);

  const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleFilter = (category: string) => {
    if (category === "All") setFilteredItems(menuItems);
    else setFilteredItems(menuItems.filter(item => item.category === category));
  };


  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>

       <MenuFilter menuItems={menuItems} onFilter={handleFilter} />
      
      {/* Responsive Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6
        
      ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
          >
            {/* Image */}
            <div className="w-full h-48 relative">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center flex flex-col h-full">
              <p className="text-red-600 font-bold text-lg">${item.price}</p>
              <h3 className="font-semibold text-xl mt-2">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              <button
                // onClick={() => addToCart(item)}
                className="
                   
                 mt-2 border border-black text-black bg-white px-4 py-2 rounded-full hover:bg-red-600 transition w-full text-sm md:text-base
                "
              >
                Add to Cart
              </button>

             
            </div>
             {/* Add to Cart Button */}
              
          </div>
        ))}
        
      </div>
    </div>
  );
}
