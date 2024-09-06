import Image, { StaticImageData } from "next/image";
import React from "react";
import BuyDialog from "./diologs/BuyDialog";

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    name: string;
    picture: string | StaticImageData;
    description?: string;
    price: number;
    discount?: number;
    available: boolean;
    id: string;
    category: string;
  };
}

function MenuItem({ data, ...props }: MenuItemProps) {
  const {
    name,
    description,
    picture,
    price,
    discount,
    available,
    category,
    id,
  } = data;
  return (
    <div
      {...props}
      className="flex w-[240px] max-w-[240px] flex-col items-center space-y-2 bg-transparent px-4 py-6"
    >
      <div className="group relative">
        <Image
          className="size-[120px] rounded-full border-[3px] border-primary-400 bg-cover shadow-md transition-all duration-150 ease-in-out group-hover:scale-110"
          src={picture}
          alt="Menu item image"
        />
        {discount && (
          <div className="absolute -top-4 right-0 rounded-xl bg-red-500 p-2 shadow-md">
            <span className="text-xs font-bold text-slate-50">
              -{discount * 100}%
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-between space-y-1">
        <span className="text-center text-lg font-medium capitalize">
          {name}
        </span>
        {description && (
          <span className="text-center text-sm">{description}</span>
        )}
        <span className="font-medium">
          {discount
            ? (price - price * discount).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </span>
      </div>
      <div>
        <BuyDialog data={data} />
      </div>
    </div>
  );
}

export default MenuItem;
