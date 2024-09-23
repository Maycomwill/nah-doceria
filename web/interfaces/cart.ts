import { CartItemProps } from "./products";

export interface CartProps {
  data: CartItemProps[];
  delivery: boolean;
}
