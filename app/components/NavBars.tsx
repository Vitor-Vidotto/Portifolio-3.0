"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Quem Sou", path: "#about" },
  { title: "Projetos", path: "#projects" },
  { title: "Serviços", path: "#servicos" },
  { title: "Contato", path: "#contato" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => setNavbarOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="#home" className="text-2xl md:text-4xl font-semibold text-white">
          Fólio.
        </Link>

        {/* Botão de Menu Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-blue hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#121212] md:relative md:flex md:items-center md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 items-center mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full md:w-auto">
                <Link href={link.path} onClick={closeMenu}>
                  <span className="block py-2 px-4 text-white hover:bg-blue-500 rounded md:inline md:p-0 md:hover:bg-transparent">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
