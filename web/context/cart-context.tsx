import { CartItemProps } from "@/interfaces/products";
import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export interface CartContextProps {
  isLoading: boolean;
  cart: CartItemProps[];
  addToCart: (item: CartItemProps) => void;
  removeFromCart: (item: CartItemProps) => void;
  sendRequestToWhatsapp: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    verifyPreviousData();
  }, []);
  function verifyPreviousData() {
    const data = localStorage.getItem("nd_cart");
    if (!data || data === null) {
      localStorage.removeItem("nd_cart");
      setCart([]);
      return;
    }
    return setCart(JSON.parse(data));
  }

  async function addToCart(item: CartItemProps) {
    setIsLoading(true);
    const newId = nanoid();
    const newItem = { ...item, id: newId };
    setCart([...cart, newItem]);
    console.log("newItem", newItem);
    localStorage.setItem("nd_cart", JSON.stringify([...cart, newItem]));
    return setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  async function removeFromCart(item: CartItemProps) {
    setIsLoading(true);
    setCart(cart.filter((i) => i.id !== item.id));
    localStorage.setItem(
      "nd_cart",
      JSON.stringify(cart.filter((i) => i.id !== item.id)),
    );
    setIsLoading(false);
    return;
  }

  function sendRequestToWhatsapp() {
    const phone = "5581984120544";
    let total = 0;

    cart.forEach((item) => {
      total += item.value;
    });

    console.log(total);
    let message =
      "Olá, gostaria de fazer o meu pedido com os seguintes itens:\n";

    cart.forEach((item) => {
      message += `\n⚪ ${item.name} ${item.filling ? `*(${item.filling})*` : ""} x${item.quantity} - ${item.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}\n`;
    });

    message += `\nTotal: *${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}*`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(url);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        sendRequestToWhatsapp,
        cart,
        isLoading,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
