"use client";
import CartList from "@/components/cart/cart-list";
import FinishCart from "@/components/diologs/finish-cart";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { CartItemProps } from "@/interfaces/products";
import React, { useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";

function Cart() {
  const { cart } = useCart();
  const [subtotal, setSubtotal] = React.useState<number | undefined>(undefined);
  useEffect(() => {
    handleSubtotal(cart);
  }, [subtotal]);

  function handleSubtotal(data: CartItemProps[]) {
    setSubtotal(0);
    let subtotal = 0;
    data.forEach((item) => {
      subtotal +=
        (item.discount ? item.price - item.price * item.discount : item.price) *
        item.quantity;
    });
    setSubtotal(subtotal);
  }

  return (
    <div className="flex h-full w-full flex-col items-start justify-center px-12 pb-14 pt-14">
      <h1 className="font-title text-4xl font-bold tracking-wider">Carrinho</h1>
      <CartList data={cart} />
      <div className="flex w-full flex-col items-end justify-end space-y-4 pb-2">
        <h2 className="font-title text-4xl font-bold leading-6 tracking-wider">
          Subtotal
        </h2>
        {subtotal !== undefined ? (
          <span className="font-title text-xl font-bold leading-6 text-primary-500">
            {subtotal.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        ) : (
          <Loading />
        )}
        <FinishCart data={cart} />
      </div>
    </div>
  );
}

export default Cart;
