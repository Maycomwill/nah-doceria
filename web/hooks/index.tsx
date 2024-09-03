"use client";
import { CartContextProvider } from "@/context/cart-context";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
