import Image from "next/image";
import React from "react";
import { CartItemProps } from "@/interfaces/products";

interface CartItemInterface extends React.HTMLAttributes<HTMLDivElement> {
  data: CartItemProps;
}

function CartItem({ data, ...props }: CartItemInterface) {
  const { name, picture, price, discount, category, quantity, filling } = data;
  return (
    <div
      {...props}
      className="flex w-[240px] max-w-[240px] flex-col items-center space-y-2 bg-transparent px-4 py-6"
    >
      <div className="group relative">
        <div className="relative hover:cursor-pointer">
          <Image
            className="size-[120px] rounded-full border-[3px] border-primary-400 border-opacity-100 bg-cover shadow-md transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:border-opacity-100 group-hover:opacity-45"
            src={picture}
            alt="Menu item image"
          />
          <p className="invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-title font-bold uppercase text-slate-950 opacity-15 transition-all duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
            alterar
          </p>
        </div>
        {discount && (
          <div className="absolute -top-4 right-0 rounded-xl bg-red-500 p-2 shadow-md">
            <span className="text-xs font-bold text-slate-50">
              -{discount * 100}%
            </span>
          </div>
        )}
        {quantity && (
          <div className="absolute -right-2 bottom-0">
            <span className="text-xs font-bold text-slate-950">
              {quantity}x
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-between space-y-1">
        <span className="text-center text-lg font-medium capitalize">
          {name}
        </span>
        {filling && (
          <p className="text-center text-sm">
            {category === "brownies" ? "Cobertura" : "Recheio"}:{" "}
            <span className="capitalize">{filling.split("-").join(" ")}</span>
          </p>
        )}
        <span className="font-medium">
          {discount
            ? (price - price * discount).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
