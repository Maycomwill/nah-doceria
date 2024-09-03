import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import { ShoppingBagIcon } from "lucide-react";

function Header() {
  return (
    <div className="sticky left-0 top-6 z-20 flex h-24 w-[80%] rounded-[2rem] bg-primary-300 text-secondary-950 dark:bg-primary-200 dark:text-secondary-900">
      <ul className="relative flex h-full w-full items-center justify-between px-28">
        <li className="flex min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600">
          <Link href="/#">Home</Link>
        </li>
        <li className="flex min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600">
          <Link href="/#menu">Cardápio</Link>
        </li>
        <li className="pt-14">
          <Link href="/#" className="shadow-2xl">
            <Image src={Logo} height={120} width={120} alt="Logo image" />
          </Link>
        </li>
        <li className="flex min-w-20 items-center justify-center font-title text-xl transition-colors duration-150 ease-in-out hover:text-secondary-600">
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
