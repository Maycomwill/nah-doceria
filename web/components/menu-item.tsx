import Image, { StaticImageData } from "next/image";
import React from "react";
import BuyDialog from "./diologs/BuyDialog";
import clsx from "clsx";

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
    new_product?: boolean;
  };
  className?: string;
}

function MenuItem({ data, className, ...props }: MenuItemProps) {
  const {
    name,
    description,
    picture,
    price,
    discount,
    new_product,
    available,
    category,
    id,
  } = data;
  return (
    <div
      {...props}
      className={clsx(
        "flex w-[240px] max-w-[240px] flex-col items-center space-y-2 bg-transparent px-4 py-6",
        className,
      )}
    >
      <div className="group relative">
        <Image
          className="size-[120px] rounded-full border-[3px] border-primary-400 bg-cover shadow-md transition-all duration-150 ease-in-out group-hover:scale-110"
          src={picture}
          alt="Menu item image"
        />
        {new_product && (
          <div className="absolute -top-4 right-0 rounded-lg bg-primary-400 p-1 shadow-md">
            <span className="text-xs font-bold text-slate-50">Novidade</span>
          </div>
        )}
        {discount && (
          <div
            className={clsx(
              "absolute -top-4 rounded-lg bg-red-500 p-1 shadow-md",
              { "left-0": new_product, "right-0": !new_product },
            )}
          >
            <span className="text-xs font-bold text-slate-50">
              -{discount * 100}%
            </span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-center justify-between space-y-1">
        <span className="text-center text-lg capitalize">{name}</span>
        {description && (
          <span className="w-[60%] text-center text-sm font-light md:w-[80%] lg:w-full">
            {description}
          </span>
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
