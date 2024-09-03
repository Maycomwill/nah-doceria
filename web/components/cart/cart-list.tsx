"use client";
import React, { useState } from "react";
import { CartItemProps } from "@/interfaces/products";
import CartItem from "@/components/cart/cart-item";

interface CartListInterface extends React.HTMLAttributes<HTMLDivElement> {
  data: CartItemProps[];
}

function CartList({ data }: CartListInterface) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>(data);
  // console.log(cartItems);
  return (
    <div className="grid w-full grid-cols-2 place-items-center pb-12 md:grid-cols-3 lg:grid-cols-4">
      {cartItems &&
        cartItems.map((item: CartItemProps) => {
          return (
            <div key={item.id}>
              <CartItem data={item} />
            </div>
          );
        })}
    </div>
  );
}

export default CartList;
