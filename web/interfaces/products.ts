import { StaticImageData } from "next/image";

export interface MenuItemProps {
  id: string;
  name: string;
  description?: string;
  picture: string | StaticImageData;
  price: number;
  discount: number;
  available: boolean;
  category: string;
}

export interface CartItemProps {
  id: string;
  name: string;
  picture: string | StaticImageData;
  price: number;
  available: boolean;
  category: string;
  quantity: number;
  filling?: string;
  description?: string;
  discount?: number;
  value: number;
}
