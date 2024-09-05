"use client";
import React, { useState } from "react";
import { CartItemProps } from "@/interfaces/products";
import CartItem from "@/components/cart/cart-item";
import useCart from "@/hooks/useCart";

function CartList() {
  const { cart } = useCart();
  return (
    <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
      {cart &&
        cart.map((item: CartItemProps) => {
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
