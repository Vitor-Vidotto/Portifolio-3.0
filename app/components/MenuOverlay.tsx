import React from "react";
import NavLink from "./NavLink";

type Link = {
  path: string;
  title: string;
};

type MenuOverlayProps = {
  links: Link[];
  closeMenu: () => void; // Função para fechar o menu
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-20">
      <ul className="flex flex-col py-4 items-center space-y-6">
        {links.map((link, index) => (
          <li key={index} onClick={closeMenu}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
