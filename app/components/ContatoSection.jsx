"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ContatoSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Criando o IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Quando o elemento entra na viewport, a animação é ativada
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2, // Define o quanto do elemento precisa estar visível
            }
        );

        // Selecionando a seção de contato
        const section = document.getElementById("contato");
        if (section) {
            observer.observe(section);
        }

        // Limpeza do observer quando o componente for desmontado
        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section
            id="contato"
            className={`flex flex-col justify-center items-center min-h-screen transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            style={{ paddingBottom: "20vh" }}
        >
            <h1 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                Entre em contato comigo
            </h1>
            <div className="flex flex-col sm:flex-row gap-10 text-center items-center">
                <a
                    href="https://www.linkedin.com/in/vitor-vidotto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center transition-transform duration-1000 transform ${isVisible ? "translate-x-0" : "translate-x-20"} opacity-${isVisible ? "100" : "0"} hover:scale-110`}
                >
                    <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow">
                        <Image
                            src="/linkedin-icon.svg"
                            alt="LinkedIn Icon"
                            width={48}
                            height={48}
                        />
                    </div>
                    <span className="text-gray-800 dark:text-white mt-4 text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300">
                        LinkedIn
                    </span>
                </a>

                <a
                    href="https://www.instagram.com/soy.vidotto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center transition-transform duration-1000 transform ${isVisible ? "translate-x-0" : "translate-x-20"} opacity-${isVisible ? "100" : "0"} hover:scale-110`}
                    style={{ transitionDelay: "200ms" }} // Adiciona um atraso para o segundo item
                >
                    <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow">
                        <Image
                            src="/instagram-icon.svg"
                            alt="Instagram Icon"
                            width={48}
                            height={48}
                        />
                    </div>
                    <span className="text-gray-800 dark:text-white mt-4 text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300">
                        Instagram
                    </span>
                </a>

                <a
                    href="https://wa.me/5515992609453?text=Ol%C3%A1%2C%20tudo%20bem%3F%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center transition-transform duration-1000 transform ${isVisible ? "translate-x-0" : "translate-x-20"} opacity-${isVisible ? "100" : "0"} hover:scale-110`}
                    style={{ transitionDelay: "400ms" }} // Adiciona um atraso para o terceiro item
                >
                    <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow">
                        <Image
                            src="/whatsapp-icon.svg"
                            alt="Form Icon"
                            width={48}
                            height={48}
                        />
                    </div>
                    <span className="text-gray-800 dark:text-white mt-4 text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300">
                        WhatsApp
                    </span>
                </a>
            </div>
        </section>
    );
};

export default ContatoSection;
