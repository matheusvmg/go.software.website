"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import menu from "../../../public/menu.svg";

export function NavigationHeader() {
  return (
    <section className="bg-standard-blue h-[56px] lg:h-[72px] w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={logo}
          alt="logo da empresa"
          className="h-[54px] w-[54px] lg:h-[72px] lg:w-[72px]"
        />
        <h1 className="text-white font-semibold text-[14px] md:text-xl">
          Go&Software
        </h1>
      </div>
      <div>
        <div className="flex-row mr-8 gap-4 hidden md:hidden lg:block">
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            Sobre
          </a>
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            Soluções web
          </a>
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            Aplicativos
          </a>
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            Serviços
          </a>
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-white poppins-light text-[16px] p-2 hover:underline decoration-solid"
          >
            Contato
          </a>
        </div>
        <div className="lg:hidden mr-4">
          <Image src={menu} alt="menu" height={24} width={24} />
        </div>
      </div>
    </section>
  );
}
