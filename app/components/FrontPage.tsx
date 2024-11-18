'use client';

import Image from "next/image";
import TypewriterLoop from "./typeloop";
import Navbar from "./NavBars";

export default function FrontPage() {
  return (
    <section
      id="home"
    >

    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src="/Vitor Vidotto.png"
            alt="Vitor Vidotto Logo"
            width={320}
            height={48}
            priority
            />
          <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <TypewriterLoop />
            </li>
            <li>Priorize seu tempo com minhas facilitações.</li>
          </ol>

          <a
            href="https://www.linkedin.com/in/vitor-vidotto"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 m-4 rounded-full flex items-center justify-center text-sm sm:text-base"
            title="Entrar em contato"
            >
          </a>

          <div className="flex flex-col items-center">
            <div className="flex gap-2">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="#projects"
                rel="noopener noreferrer"
                >
                <Image
                  className="dark"
                  src="/website.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                  />
                Meus projetos!
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="#about"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark"
                  src="/person.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                  />
                Me Conheça!
              </a>
            </div>
            <a
              className="mt-2 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://drive.google.com/file/d/1L3qRZ01JxPr1vs457VIfkjnzQTr71uWh/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                className="dark"
                src="/curriculum.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
              Baixar Currículo!
            </a>
          </div>
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://br.linkedin.com/in/vitor-vidotto"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="File icon"
              width={16}
              height={16}
              />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://wa.me/5515992609453?text=Ol%C3%A1%2C%20tudo%20bem%3F%20"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              aria-hidden
              src="/whatsapp.svg"
              alt="Window icon"
              width={16}
              height={16}
              />
            WhatsApp
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.instagram.com/soy.vidotto/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              aria-hidden
              src="/instagram.svg"
              alt="Globe icon"
              width={16}
              height={16}
              />
            Instagram →
          </a>
        </footer>
      </div>
    </div>
              </section>
  );
}
