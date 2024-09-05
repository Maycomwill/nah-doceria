import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import { ShoppingBagIcon } from "lucide-react";

function Header() {
  return (
    <div className="sticky z-20 flex h-20 w-full items-center justify-center rounded-none bg-primary-300 text-secondary-950 dark:bg-primary-200 dark:text-secondary-900 md:top-6 md:h-24 md:w-[90%] md:rounded-[2rem] lg:left-0 lg:z-20 lg:w-[80%]">
      <ul className="relative flex h-full w-full items-center justify-between px-12 md:px-28">
        <li className="hidden min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600 md:flex">
          <Link href="/#">Home</Link>
        </li>
        <li className="hidden min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600 md:flex">
          <Link href="/#menu">Cardápio</Link>
        </li>
        <li className="md:pt-14">
          <Link href="/#" className="md:shadow-2xl">
            <Image src={Logo} className="size-16 md:size-32" alt="Logo image" />
          </Link>
        </li>
        <li className="hidden min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600 md:flex">
          <Link href="/#contact">Contato</Link>
        </li>
        <li className="flex min-w-20 items-center justify-center text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600">
          <Link href="/cart" rel="noreferrer">
            <ShoppingBagIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
