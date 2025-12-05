"use client";
import { createContext, useContext, useState } from "react";
type CartContextType = {
  cart: any[];
  addToCart: (item: any) => void;
  removeItem: (id: string) => void;
  // removeItem: (id: number) => void;  
   incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void; 

};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number; // new property

};

const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(i => i.id === item.id);
    if (existingItem) {
      // If item exists, just increment quantity
      return prevCart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      // If item not in cart, add with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
};


  const removeItem  = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  const incrementQuantity = (id: string) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (id: string) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) // remove if quantity goes to 0
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, decrementQuantity, incrementQuantity   }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};