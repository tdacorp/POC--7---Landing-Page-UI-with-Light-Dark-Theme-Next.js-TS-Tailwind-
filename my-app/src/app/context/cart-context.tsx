"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

// 2️⃣ Define context type
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

// 3️⃣ Create Context with correct type
const CartContext = createContext<CartContextType | undefined>(undefined);



export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);


  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};