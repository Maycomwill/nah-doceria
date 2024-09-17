import Image from "next/image";
import React from "react";
import { CartItemProps } from "@/interfaces/products";
import RemoveItemFromCart from "../diologs/remove-item-from-cart";
import ChangeItemQuantity from "../diologs/change-item-quantity";

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
        <RemoveItemFromCart item={data} />
        <ChangeItemQuantity item={data} />
        {discount && (
          <div className="absolute -bottom-1 -left-4 rounded-xl bg-red-500 px-2 py-1 shadow-md">
            <span className="text-xs font-bold text-slate-50">
              -{discount * 100}%
            </span>
          </div>
        )}
        {quantity && (
          <div className="absolute -bottom-1 -right-2 py-1">
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
