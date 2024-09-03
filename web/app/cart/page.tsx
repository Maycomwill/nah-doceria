"use client";
import CartList from "@/components/cart/cart-list";
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
        <div className="group relative flex w-32 cursor-pointer items-center justify-start rounded-lg bg-primary-400 px-6 py-2 hover:shadow-lg">
          <span className="font-medium text-slate-50 transition-colors duration-100 ease-in-out">
            Finalizar
          </span>
          <HiArrowSmRight
            size={24}
            color="#f8fafc"
            className="group:hover:translate-x-2 absolute right-3 transition-all duration-150 ease-in-out group-hover:right-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
