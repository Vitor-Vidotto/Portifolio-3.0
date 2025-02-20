"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-white skills-list">
        <li>Desenvolvimento Frontend (React, Next.js, Vue, Nuxt.js, Flutter, HTML, CSS, JavaScript)</li>
        <li>Desenvolvimento Backend (Node.js, Express, Django, Rust, API REST)</li>
        <li>Desenvolvimento Mobile (React Native, Flutter)</li>
        <li>Banco de Dados (MySQL, MongoDB, Firebase)</li>
        <li>Automação de Processos (Python)</li>
        <li>Desenvolvimento de Software (Tauri, Electron, .NET)</li>
        <li>Desenvolvimento de Ambientes virtuais e Jogos (Unity e Unreal Engine)</li>
        <li>Infraestrutura Básica e Suporte (Instalações, Configurações, Redes e Servidores)</li>
        <li>Sistemas Linux</li>
        <li>Docker</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false); // Controla se a seção está visível na tela
  const [isItemVisible, setIsItemVisible] = useState(false); // Controla a animação dos itens

  // Função que verifica se a seção está visível na tela
  const handleScroll = () => {
    const section = document.getElementById("about");
    const rect = section?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight * 0.7) {
      setIsVisible(true); // Ativa a visibilidade da seção quando ela entra na tela
    }
  };

  // Detecta quando a seção se torna visível
  useEffect(() => {
    // Detecta o evento de rolagem
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Limpa o listener ao desmontar o componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ativar a animação dos itens após a seção ficar visível
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsItemVisible(true); // Ativar a visibilidade dos itens
      }, 500); // Delay para a animação dos itens
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      className={`text-white transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Quem Sou</h2>
          <p className="text-base lg:text-lg text-white">
            Sou um desenvolvedor de software com experiência de Fullstack, Desevolvimento Mobile & Softwere desktop. Ao longo da minha jornada profissional, passei por empresas que me ajudaram a desenvolver minhas habilidades e enfrentar novos desafios.
          </p>
          <br />
          <p className="text-base lg:text-lg text-white">
          Transformo ideias em soluções inovadoras, desenvolvendo sites, aplicativos, softwares personalizados e automações de processos. Confira meu portfólio e descubra como posso agregar valor ao seu projeto!
           </p>
          <div className="mt-8">
            {/* Aqui os itens da lista só ficam visíveis se isItemVisible for verdadeiro */}
            <ul className="list-disc pl-2 text-white">
              {TAB_DATA.find((t) => t.id === tab).content.props.children.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    isItemVisible
                      ? "opacity-100 translate-x-0" // Quando visível, anima de volta à posição normal
                      : "opacity-0 translate-x-10" // Quando não visível, fica fora da tela
                  } transition-all duration-500 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }} // Delay para animar um item por vez
                >
                  {item.props.children}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-2xl font-bold text-white mt-8">Linha do Tempo</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
