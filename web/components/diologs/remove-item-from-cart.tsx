"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import { CartItemProps } from "@/interfaces/products";
import Image from "next/image";
import useCart from "@/hooks/useCart";

function RemoveItemFromCart({ item }: { item: CartItemProps }) {
  const [open, setOpen] = useState(false);
  const { removeFromCart } = useCart();

  function handleSubmit() {
    setOpen(false);
    removeFromCart(item);
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild onClick={() => setOpen(true)}>
        <div className="relative hover:cursor-pointer">
          <Image
            className="size-[120px] rounded-full border-[3px] border-primary-400 border-opacity-100 bg-cover shadow-md transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:border-opacity-100 group-hover:opacity-45"
            src={item.picture}
            alt="Menu item image"
          />
          <p className="invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-title font-bold uppercase text-slate-950 opacity-15 transition-all duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
            remover
          </p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remover</AlertDialogTitle>
          <AlertDialogDescription>
            Você deseja remover <span className="font-medium">{item.name}</span>{" "}
            do seu carrinho?.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RemoveItemFromCart;
