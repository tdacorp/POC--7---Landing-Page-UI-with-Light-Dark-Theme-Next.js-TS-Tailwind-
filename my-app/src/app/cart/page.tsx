"use client";

import { useCart } from "./cart-context";
import Link from "next/link";

export default function CartPage() {
  const cart = useCart();
  if (!cart) return null;

  const { cart: cartList, removeItem, decrementQuantity, incrementQuantity } = cart;

  const total = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">

      <div className="flex justify-center items-center mb-4">
        <h1 className="text-xl font-bold">Your Cart</h1>
      </div>

      {/* Items */}
      <div className="space-y-3"style={{ background: "var(--bg)", color: "var(--text)" }}>
        {cartList.length === 0 && (
          <p className="text-gray-600">Your cart is empty.</p>
        )}

        {cartList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 rounded-lg bg-white shadow"
            style={{ background: "var(--bg)", color: "var(--text)" }}
          >
            <div >
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600 dark:text-white"style={{ background: "var(--bg)", color: "var(--text)" }}>₹{item.price}</p>
            </div>
<div className=" space-x-2 ml-full mr-2 text-sm">
  <button
    onClick={() => decrementQuantity(item.id)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    -
  </button>
  <span>{item.quantity}</span>
  <button
    onClick={() => incrementQuantity(item.id)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    +
  </button>
</div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      {cartList.length > 0 && (
        <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      )}
    </div>
  );
}
