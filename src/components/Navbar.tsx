"use client";

import React, { useState } from "react";
import Image from 'next/image'; // Ajoutez cette ligne

type SubMenuKeys = 'home' | 'boutique' | 'calendrier' | 'equipe' | 'actualites' | 'galerie' | 'billeterie' | 'partenaires' | 'fanZone' | 'aPropos' | 'contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState<{ [key in SubMenuKeys]: boolean }>({
    home: false,
    boutique: false,
    calendrier: false,
    equipe: false,
    actualites: false,
    galerie: false,
    billeterie: false,
    partenaires: false,
    fanZone: false,
    aPropos: false,
    contact: false,
  });

  const toggleSubMenu = (menu: string) => {
    setSubMenuStates((prev) => ({ ...prev, [menu as SubMenuKeys]: !prev[menu as SubMenuKeys] }));
  };

  return (
    <nav className="p-2">
      <div className="flex items-center">
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-start focus:outline-none text-3xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="logo flex justify-center flex-grow">
          <Image 
            src="./logo-raja.svg" 
            alt="logo raja athletic" 
            width={70} // Ajustez la largeur selon vos besoins
            height={70} // Ajustez la hauteur selon vos besoins
          />
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          {[
            { name: "Accueil", submenu: ["Actualités", "Prochains Matchs", "Résultats récents", "Bannière"] },
            { name: "Calendrier", submenu: ["Prochains Matchs", "Résultats récents", "Classements", "Télécharger le calendrier"] },
            { name: "Équipe", submenu: ["Joueurs", "Staff", "Histoire"] },
            { name: "Actualités", submenu: ["Les transferts", "Évènements", "Performances", "Communiqués officiels"] },
            { name: "Galerie", submenu: ["Photos", "Vidéos"] },
            { name: "Billeterie", submenu: ["Tarifs et emplacements", "Lien pour acheter un billet", "Point de vente physique"] },
            { name: "Boutique", submenu: ["Maillots de l'équipe", "Équipement sportifs", "Produits dérivés"] },
            { name: "Partenaires", submenu: ["Les partenaires"] },
            { name: "Fan Zone", submenu: ["Forum de discussion", "Quiz et jeux interactifs", "Concours", "Informations sur les groupes de supporters"] },
            { name: "À propos", submenu: ["Histoire du club", "Valeurs et vision", "Information de contact"] },
            { name: "Contact", submenu: ["Formulaire de contact", "Adresse du club", "Téléphones et email"] },
          ].map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => toggleSubMenu(item.name.toLowerCase())}
              onMouseLeave={() => toggleSubMenu(item.name.toLowerCase())}
            >
              <a href="#" className="px-4 py-2">{item.name}</a>
              {subMenuStates[item.name.toLowerCase() as SubMenuKeys] && (
                <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                  {item.submenu.map((subItem) => (
                    <a key={subItem} href="#" className="block px-4 py-2">{subItem}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Lien de Connexion */}
        <div className="relative flex justify-end text-lg">
          <a
            href="/login"
            className="px-4 py-2 flex items-center"
          >
            <i className="fa fa-user" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
