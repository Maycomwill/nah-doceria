import { Address } from "./address";
import { CartItemProps } from "./products";

export interface CartProps {
  data: CartItemProps[];
  delivery: {
    option: boolean;
    address?: Address;
  };
}
