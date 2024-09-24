"use client";
import React from "react";
import { CartItemProps } from "@/interfaces/products";
import CartItem from "@/components/cart/cart-item";
import useCart from "@/hooks/useCart";
import clsx from "clsx";
import EmptyCart from "@/assets/empty_cart.svg";
import Image from "next/image";

function CartList() {
  const { cart } = useCart();
  return (
    <div
      className={clsx("flex w-full flex-1 items-center justify-center", {
        "grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4":
          cart.data.length >= 1,
      })}
    >
      {cart.data.length > 0 ? (
        cart.data.map((item: CartItemProps) => {
          return (
            <div key={item.id}>
              <CartItem data={item} />
            </div>
          );
        })
      ) : (
        <div className="flex w-full flex-1 flex-col items-center justify-center space-y-4">
          <Image
            src={EmptyCart}
            alt="Carrinho vazio"
            className="size-36 animate-fade-down-in"
          />
          <p className="text-center">Seu carrinho está vazio no momento ...</p>
        </div>
      )}
    </div>
  );
}

export default CartList;
