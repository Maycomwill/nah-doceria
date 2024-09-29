import React from "react";
import MenuItem from "@/components/menu-item";
import { data } from "@/lib/fakeData";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-12">
      <section
        className="flex w-full items-start justify-start pt-14 md:min-h-[250px]"
        id="/"
      >
        <div className="mx-auto flex select-none flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-start">
            <span className="text-2xl">Bem vindo(a) a</span>
            <h1 className="flex flex-col items-center">
              <span className="font-title text-[7rem] leading-[8rem] text-primary-400">
                Nah
              </span>{" "}
              <span className="font-detail text-[12rem] font-medium leading-[4rem] text-secondary-900">
                doceria
              </span>
            </h1>
          </div>
          <div className="">
            <p className="text-primary-300">Adoçando o seu dia</p>
          </div>
        </div>
      </section>
      <section
        className="flex w-full flex-col items-center justify-start px-6 md:px-12"
        id="menu"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          <div className="flex w-full flex-col space-y-2">
            <h2 className="text-center font-title text-4xl font-bold uppercase tracking-wider md:text-left">
              Doces
            </h2>
            <div className="grid w-full grid-cols-2 place-content-start place-items-center items-start gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
              {data.doces.map((item, index) => {
                return (
                  <MenuItem
                    className={`${index === data.doces.length - 1 && data.doces.length % 2 !== 0 ? "col-span-2 md:col-span-1 lg:col-span-1" : "col-span-1"}`}
                    data={item}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex w-full flex-col space-y-2">
            <h2 className="text-center font-title text-4xl font-bold uppercase tracking-wider md:text-left">
              Trufas
            </h2>
            <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
              {data.trufas.map((item, index) => {
                return (
                  <MenuItem
                    className={`${index === data.trufas.length - 1 && data.trufas.length % 2 !== 0 ? "col-span-2 md:col-span-1 lg:col-span-1" : "col-span-1"}`}
                    data={item}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex w-full flex-col space-y-2">
            <h2 className="text-center font-title text-4xl font-bold uppercase tracking-wider md:text-left">
              Brownies
            </h2>
            <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
              {data.brownies.map((item, index) => {
                return (
                  <MenuItem
                    className={`${index === data.brownies.length - 1 && data.brownies.length % 2 !== 0 ? "col-span-2 md:col-span-1 lg:col-span-1" : "col-span-1"}`}
                    data={item}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex w-full flex-col items-center justify-center px-12 md:items-start"
        id="contact"
      >
        <h2 className="text-center font-title text-4xl font-bold uppercase tracking-wider md:text-left">
          Contato
        </h2>
        <div className="flex w-full flex-col items-center justify-center space-y-2 pt-6 text-center md:items-start md:space-y-6 md:text-left">
          <p>Você pode me encontrar nas redes sociais</p>

          <div className="flex flex-row items-center justify-center space-x-4">
            <Link
              href={"https://www.instagram.com/nah.doceriaa/"}
              rel="noopener"
              target="_blank"
              className="group flex cursor-pointer items-center justify-center rounded-full bg-transparent p-4 hover:bg-primary-200/50"
            >
              <FaInstagram className="size-10 text-primary-400 transition-all duration-200 ease-in-out group-hover:text-primary-500" />
            </Link>
            <Link
              href={"https://api.whatsapp.com/send?phone=5581984120544"}
              rel="noopener"
              target="_blank"
              className="group flex cursor-pointer items-center justify-center rounded-full bg-transparent p-4 hover:bg-primary-200/50"
            >
              <FaWhatsapp className="size-10 text-primary-400 transition-all duration-200 ease-in-out group-hover:text-primary-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
