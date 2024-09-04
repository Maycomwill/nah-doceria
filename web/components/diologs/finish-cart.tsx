"use client";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogProps } from "@radix-ui/react-dialog";
import { CartItemProps } from "@/interfaces/products";
import useCart from "@/hooks/useCart";
import Loading from "../loading";
import { HiArrowSmRight } from "react-icons/hi";

interface FinishCartProps extends DialogProps {
  data: CartItemProps[];
}

function FinishCart({ data, ...props }: FinishCartProps) {
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const { sendRequestToWhatsapp } = useCart();

  function handleSubtotal(data: CartItemProps[]) {
    setSubTotal(0);
    let subtotal = 0;
    data.forEach((item) => {
      subtotal += item.value;
    });
    setSubTotal(subtotal);
  }

  useEffect(() => {
    handleSubtotal(data);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    sendRequestToWhatsapp();
  }
  return (
    <Dialog {...props} open={open} onOpenChange={setOpen}>
      <DialogTrigger onClick={() => setOpen(true)}>
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Finalizar</DialogTitle>
          <DialogDescription>
            Confira seu carrinho e confirme a compra.
          </DialogDescription>
        </DialogHeader>
        <div>
          {data.map((item: CartItemProps) => {
            return (
              <div key={item.id}>
                <div className="flex w-full items-center justify-between">
                  <p className="capitalize">
                    {item.name} -{" "}
                    <span className="lowercase">x{item.quantity}</span>
                  </p>
                  <span className="font-bold">
                    {item.discount
                      ? (
                          item.price *
                          item.discount *
                          item.quantity
                        ).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : (item.price * item.quantity).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="my-4 h-px rounded-full bg-primary-400"></div>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex w-full flex-col items-end justify-center">
              <p className="font-title font-bold">Subtotal</p>
              <span>
                {subTotal !== undefined ? (
                  <span className="font-title text-xl font-bold leading-6 text-primary-500">
                    {subTotal.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                ) : (
                  <Loading />
                )}
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <Button type="submit">Finalizar</Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FinishCart;
