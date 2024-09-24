"use client";
import { AddressContextProvider } from "@/context/address-context";
import { CartContextProvider } from "@/context/cart-context";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <AddressContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </AddressContextProvider>
  );
}
