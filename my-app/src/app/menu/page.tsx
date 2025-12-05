"use client";
import { useState } from "react";

import { useCart } from "../cart/cart-context";
import Image from "next/image";

import MenuFilter from "./menu-filter";
import { menuItems } from "../data/menu-data"; 

 

export default function MenuCards() {
  const { addToCart } = useCart();
  
 
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
            <div className="p-4 text-center flex flex-col h-full" style={{ background: "var(--bg)", color: "var(--text)" }}>
              <p className="text-red-600 font-bold text-lg">₹{item.price}</p>
              <h3 className="font-semibold text-xl mt-2">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1"style={{ background: "var(--bg)", color: "var(--text)" }}>{item.desc}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => {addToCart(item);  alert("Item added to cart!");}}
                className="
                 mt-2 border border-black text-black bg-white px-4 py-2 rounded-full hover:bg-red-600 transition w-full text-sm md:text-base
                "
              >
                Add to Cart
              </button>

             
            </div>
             
              
          </div>
        ))}
        
      </div>
    </div>
  );
}
