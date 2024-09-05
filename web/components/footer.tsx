import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center space-y-2 py-4">
      <p className="font-sans text-xs md:text-sm">
        Copyright © 2024 - Todos os direitos reservados a Nah Doceria
      </p>

      <p className="font-sans text-xs md:text-sm">
        Desenvolvido por{" "}
        <Link
          href={"https://api.whatsapp.com/send?phone=5581984317191"}
          rel="noopener"
          target="_blank"
        >
          <span className="select-none bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950 bg-clip-text font-medium text-transparent transition-all duration-200 ease-in-out hover:cursor-pointer hover:from-violet-500 hover:via-cyan-500 hover:to-emerald-500">
            Maycom Willams
          </span>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
