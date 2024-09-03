import { CartContext, CartContextProps } from "@/context/cart-context";
import { useContext } from "react";

export default function useCart(): CartContextProps {
  const context = useContext(CartContext);
  return context;
}
