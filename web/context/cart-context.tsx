import { CartItemProps } from "@/interfaces/products";
import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { CartProps } from "@/interfaces/cart";

export interface CartContextProps {
  isLoading: boolean;
  cart: CartProps;
  addToCart: (item: CartItemProps) => void;
  removeFromCart: (item: CartItemProps) => void;
  changeQuantity: (item: CartItemProps, quantity: number) => void;
  sendRequestToWhatsapp: () => void;
  clearCart: () => void;
  handleDeliveryOption: (option: boolean) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartProps>({} as CartProps);
  const [delivery, setDelivery] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    verifyPreviousData();
  }, []);
  function verifyPreviousData() {
    setIsLoading(true);
    const data = localStorage.getItem("nd_cart");
    if (!data || data === null) {
      localStorage.removeItem("nd_cart");
      setCart({ delivery: true, data: [] });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }
    setIsLoading(false);
    return setCart(JSON.parse(data));
  }

  async function addToCart(item: CartItemProps) {
    setIsLoading(true);
    const newId = nanoid();
    const newItem = { ...item, id: newId };

    //Check if item is from candy category
    if (item.category === "doces") {
      // Check if item already exists
      const a = cart.data.filter((i) => {
        return i.name === item.name;
      });

      // Get the original item
      let originalItem = a.filter((item, index) => {
        return a.findIndex((i) => i.name === item.name) === index;
      })[0];

      // If item already exists, add quantity
      if (originalItem) {
        originalItem.quantity += item.quantity;
        // console.log("List without duplicates", originalItem);
        const filteredCart = cart.data.filter((i) => {
          return i.id !== originalItem.id;
        });
        // console.log("List without original item", filteredCart);

        // Set cart with new quantity of same item
        setCart({ ...cart, data: [...filteredCart, originalItem] });
        localStorage.setItem(
          "nd_cart",
          JSON.stringify({ ...cart, data: [...filteredCart, originalItem] }),
        );
        return setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }

    // Check if item is from truffles category
    if (item.category === "trufas") {
      // Check if item already exists
      const a = cart.data.filter((i) => {
        return i.name === item.name;
      });

      // Get the original item
      let originalItem = a.filter((item, index) => {
        return a.findIndex((i) => i.name === item.name) === index;
      })[0];
    }

    setCart({ ...cart, data: [...cart.data, newItem] });
    // console.log("newItem", newItem);
    localStorage.setItem(
      "nd_cart",
      JSON.stringify({ ...cart, data: [...cart.data, newItem] }),
    );
    return setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  async function removeFromCart(item: CartItemProps) {
    setIsLoading(true);
    setCart({ ...cart, data: [...cart.data.filter((i) => i.id !== item.id)] });
    localStorage.setItem(
      "nd_cart",
      JSON.stringify({
        ...cart,
        data: [...cart.data.filter((i) => i.id !== item.id)],
      }),
    );
    setIsLoading(false);
    return;
  }

  function changeQuantity(item: CartItemProps, quantity: number) {
    setCart({
      ...cart,
      data: [
        ...cart.data.map((i) =>
          i.id === item.id
            ? {
                ...item,
                quantity,
                value:
                  (item.discount
                    ? item.price - item.price * item.discount
                    : item.price) * quantity,
              }
            : i,
        ),
      ],
    });
    console.log("cart-context: chamou a função de alterar quantidade");
    localStorage.setItem(
      "nd_cart",
      JSON.stringify({
        ...cart,
        data: [
          ...cart.data.map((i) =>
            i.id === item.id ? { ...item, quantity } : i,
          ),
        ],
      }),
    );
    return;
  }

  function sendRequestToWhatsapp() {
    const phone = "5581984120544";
    let total = 0;

    cart.data.forEach((item) => {
      total += item.value;
    });

    console.log(total);
    let message =
      "Olá, gostaria de fazer o meu pedido com os seguintes itens:\n";

    cart.data.forEach((item) => {
      message += `\n⚪ ${item.name} ${item.filling ? `*(${item.filling})*` : ""} x${item.quantity} - ${item.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}\n`;
    });

    message += `\nTotal: *${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}*`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(url, "_blank");
    return;
  }

  function clearCart() {
    setIsLoading(true);
    setCart({ delivery: true, data: [] });
    localStorage.removeItem("nd_cart");
    setIsLoading(false);
    return;
  }

  function handleDeliveryOption(option: boolean) {
    console.log("delivery option", option);
    setCart({ ...cart, delivery: option });
    localStorage.setItem(
      "nd_cart",
      JSON.stringify({ ...cart, delivery: option }),
    );
    return;
  }

  return (
    <CartContext.Provider
      value={{
        handleDeliveryOption,
        clearCart,
        changeQuantity,
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
