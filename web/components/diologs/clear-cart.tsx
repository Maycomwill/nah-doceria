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
import useCart from "@/hooks/useCart";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function ClearCart() {
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const { clearCart } = useCart();
  const router = useRouter();
  function handleSubmit() {
    clearCart();
    setOpen(false);
    window.location.reload();
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild onClick={() => setOpen(true)}>
        <Button variant={"outline"}>Limpar carrinho</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Limpar carrinho</AlertDialogTitle>
          <AlertDialogDescription>
            Você deseja limpar seu carrinho? Essa operação não pode ser
            desfeita.
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

export default ClearCart;
