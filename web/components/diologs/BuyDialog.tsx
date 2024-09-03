"use client";
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
import { DialogProps } from "@radix-ui/react-dialog";
import { MenuItemProps } from "@/interfaces/products";
import useCart from "@/hooks/useCart";
import Loading from "../loading";

interface BuyDialogProps extends DialogProps {
  data: MenuItemProps;
}

function BuyDialog({ data, ...props }: BuyDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [filling, setFilling] = useState("");
  const { addToCart, isLoading } = useCart();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addToCart({
      ...data,
      quantity,
      filling: filling ? filling : undefined,
    });

    setFilling("");
    setQuantity(1);
    setOpen(false);
    return;
  }
  return (
    <Dialog {...props} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button disabled={data.available === false}>
          {data.available ? "Comprar" : "Indisponível"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comprar {data.name}</DialogTitle>
          <DialogDescription>
            Selecione a quantidade e outras informações para comprar
          </DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <div className="mx-auto flex items-center justify-center">
            <Loading size={48} />
          </div>
        ) : (
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-center space-y-4"
            >
              <div className="flex flex-col">
                <label htmlFor="quantity">Quantidade</label>
                <input
                  className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
                  type="number"
                  id="quantity"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  value={quantity}
                  min={1}
                  max={100}
                />
              </div>
              {data.category === "trufas" && (
                <div>
                  <select
                    className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
                    id="filling"
                    value={filling}
                    onChange={(e) => setFilling(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>
                      Selecione um sabor
                    </option>
                    <option value="chocolate">Chocolate</option>
                    <option value="chocolate-branco">Chocolate Branco</option>
                    <option value="ninho">Ninho</option>
                    <option value="morango">Morango</option>
                    <option value="bem-casado">Bem-casado</option>
                    <option value="maracuja">Maracujá</option>
                    <option value="doce-de-leite">Doce de Leite</option>
                    <option value="limao">Limão</option>
                    <option value="prestigio">Prestígio</option>
                  </select>
                </div>
              )}
              {data.category === "brownies" && (
                <div>
                  <select
                    className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
                    id="filling"
                    value={filling}
                    onChange={(e) => setFilling(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>
                      Selecione uma cobertura
                    </option>
                    <option value="chocolate">Chocolate</option>
                    <option value="morango">Morango</option>
                    <option value="maracuja">Maracujá</option>
                    <option value="doce-de-leite">Doce de Leite</option>
                  </select>
                </div>
              )}
              <div className="mx-auto">
                <Button type="submit">Confirmar</Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BuyDialog;
