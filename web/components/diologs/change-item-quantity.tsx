"use client";
import { CartItemProps } from "@/interfaces/products";
import React, { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import useCart from "@/hooks/useCart";

function ChangeItemQuantity({ item }: { item: CartItemProps }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [isOpen, setIsOpen] = useState(false);
  const { changeQuantity } = useCart();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    changeQuantity(item, quantity);
    setIsOpen(false);
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="absolute right-0 top-0 rounded-xl border-none bg-red-500 px-2 font-bold text-white shadow-md outline-none ring-red-800 hover:bg-red-700 focus-visible:bg-red-700 focus-visible:ring-2">
          -
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">
            {item.name.split("-").join(" ")}
          </DialogTitle>
          <DialogDescription>
            Altere a quantidade de itens que deseja comprar
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantity">Quantidade</label>
            <input
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="number"
              id="quantity"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              min={1}
              max={100}
              required
            />
          </div>
          <div className="flex w-full items-center justify-center pt-6">
            <Button type="submit">Alterar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeItemQuantity;
