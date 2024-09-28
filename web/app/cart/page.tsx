"use client";
import CartList from "@/components/cart/cart-list";
import ClearCart from "@/components/diologs/clear-cart";
import FinishCart from "@/components/diologs/finish-cart";
import Loading from "@/components/loading";
import useCart from "@/hooks/useCart";
import { CartItemProps } from "@/interfaces/products";
import React, { useEffect } from "react";

function Cart() {
  const { cart, isLoading } = useCart();
  const [subtotal, setSubtotal] = React.useState<number>(0);
  useEffect(() => {
    handleSubtotal(cart.data);
  }, [cart]);

  function handleSubtotal(data: CartItemProps[]) {
    setSubtotal(0);
    let subtotal = 0;
    if (data === undefined) return;
    data.forEach((item) => {
      subtotal += item.value;
    });
    setSubtotal(subtotal);
    return;
  }

  return (
    <div className="flex h-full min-h-[80vh] w-full flex-col items-start justify-start pb-14 pt-14">
      <h1 className="px-12 font-title text-4xl font-bold tracking-wider">
        Carrinho
      </h1>
      <div className="flex min-h-96 w-full items-center justify-center">
        {isLoading ? <Loading size={56} /> : <CartList />}
      </div>
      <div className="flex w-full flex-col items-end justify-end space-y-4 px-12 pb-2">
        <h2 className="font-title text-4xl font-bold leading-6 tracking-wider">
          Subtotal
        </h2>

        <span className="font-title text-xl font-bold leading-6 text-primary-500">
          {subtotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <FinishCart />
        <ClearCart />
      </div>
    </div>
  );
}

export default Cart;
