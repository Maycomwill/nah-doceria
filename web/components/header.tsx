import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import { ShoppingBagIcon } from "lucide-react";

function Header() {
  return (
    <div className="dark:text-secondary-900 text-secondary-950 dark:bg-primary-200 bg-primary-300 sticky left-0 top-6 z-20 flex h-24 w-[80%] rounded-[2rem]">
      <ul className="relative flex h-full w-full items-center justify-between px-28">
        <li className="font-title hover:text-secondary-600 flex min-w-20 items-center justify-center text-xl transition-colors duration-150 ease-in-out">
          <Link href="#">Home</Link>
        </li>
        <li className="font-title hover:text-secondary-600 flex min-w-20 items-center justify-center text-xl transition-colors duration-150 ease-in-out">
          <Link href="#menu">Cardápio</Link>
        </li>
        <li className="pt-14">
          <Link href="#">
            <Image src={Logo} height={120} width={120} alt="Logo image" />
          </Link>
        </li>
        <li className="font-title hover:text-secondary-600 flex min-w-20 items-center justify-center text-xl transition-colors duration-150 ease-in-out">
          <Link href="#contact">Contato</Link>
        </li>
        <li className="hover:text-secondary-600 flex min-w-20 items-center justify-center text-xl transition-colors duration-150 ease-in-out">
          <Link
            href="https://www.instagram.com/nah.doceriaa/"
            rel="noreferrer"
            target="_blank"
          >
            <ShoppingBagIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
