import React from "react";
import MenuItem from "@/components/menu-item";
import { data } from "@/lib/fakeData";
function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <section
        className="flex min-h-[550px] w-full items-start justify-start pt-14"
        id="/"
      >
        <div className="mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-start">
            <span className="text-2xl">Bem vindo(a) a</span>
            <h1 className="flex flex-col items-center">
              <span className="font-title text-[7rem] leading-[8rem] text-primary-400">
                Nah
              </span>{" "}
              <span className="font-detail text-[12rem] leading-[4rem] text-secondary-900">
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
        className="flex min-h-[550px] w-full flex-col items-center justify-start px-12"
        id="menu"
      >
        <div className="w-full">
          <h2 className="font-title text-4xl font-bold uppercase tracking-wider">
            Doces
          </h2>
          <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
            {data.doces.map((item) => {
              return <MenuItem data={item} key={item.name} />;
            })}
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-title text-4xl font-bold uppercase tracking-wider">
            Trufas
          </h2>
          <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
            {data.trufas.map((item) => {
              return <MenuItem data={item} key={item.name} />;
            })}
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-title text-4xl font-bold uppercase tracking-wider">
            Brownies
          </h2>
          <div className="grid w-full grid-cols-2 place-content-start place-items-center items-baseline gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
            {data.brownies.map((item) => {
              return <MenuItem data={item} key={item.name} />;
            })}
          </div>
        </div>
      </section>
      <section className="min-h-[550px]" id="contact">
        contato
      </section>
    </div>
  );
}

export default Home;
