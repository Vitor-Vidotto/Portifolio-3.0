"use client"; // Certifique-se de que isso esteja no topo

import { useState, useEffect } from "react";

const ActiveTooltip = ({
  children,
  tooltipText = "Precisa de ajuda?",
  displayTime = 60000, // 1 minuto (60000ms)
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Função para exibir o tooltip após o tempo de 1 minuto
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true); // Exibe o tooltip após 1 minuto
    }, displayTime);

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, [displayTime]);

  // Função para esconder o tooltip ao ser clicado
  const handleTooltipClick = () => {
    setShowTooltip(false); // Esconde o tooltip ao clicar nele
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip posicionado acima */}
      {showTooltip && (
        <div
          className="absolute -top-10 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg cursor-pointer"
          onClick={handleTooltipClick} // Adiciona o clique para fechar o tooltip
        >
          <span className="whitespace-nowrap">{tooltipText}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default ActiveTooltip;
