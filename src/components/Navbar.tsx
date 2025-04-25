"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import Link from "next/link";

type SubMenuKeys =
  | "home"
  | "boutique"
  | "calendrier"
  | "equipe"
  | "actualites"
  | "galerie"
  | "billeterie"
  | "partenaires"
  | "fanZone"
  | "aPropos"
  | "contact";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState<{
    [key in SubMenuKeys]: boolean;
  }>({
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
    setSubMenuStates((prev) => ({
      ...prev,
      [menu as SubMenuKeys]: !prev[menu as SubMenuKeys],
    }));
  };

  const menuItems = [
    {
      name: "Accueil",
      display: "Accueil",
      submenu: [
        "Actualités",
        "Prochains Matchs",
        "Résultats récents",
        "Bannière",
      ],
      // icon: "fa-home",
      route: "/"
    },
    {
      name: "Calendrier",
      display: "Calendrier",
      submenu: [
        "Prochains Matchs",
        "Résultats récents",
        "Classements",
        "Télécharger le calendrier",
      ],
      // icon: "fa-calendar",
      route: "calendrier"
    },
    {
      name: "Equipe",
      display: "Equipe",
      submenu: ["Joueurs", "Staff", "Histoire"],
      // icon: "fa-users",
      route: "equipe"
    },
    {
      name: "Actualités",
      display: "Actualités",
      submenu: [
        "Les transferts",
        "Évènements",
        "Performances",
        "Communiqués officiels",
      ],
      // icon: "fa-newspaper",
      route: "actualites"
    },
    // {
    //   name: "Galerie",
    //   display: "Galerie",
    //   submenu: ["Photos", "Vidéos"],
    //   icon: "fa-images",
    //   route: "galerie"
    // },
    {
      name: "Billeterie",
      display: "Billeterie",
      submenu: [
        "Tarifs et emplacements",
        "Lien pour acheter un billet",
        "Point de vente physique",
      ],
      // icon: "fa-ticket",
      route: "billeterie"
    },
    {
      name: "Boutique",
      display: "Boutique",
      submenu: [
        "Maillots de l'équipe",
        "Équipement sportifs",
        "Produits dérivés",
      ],
      // icon: "fa-shopping-cart",
      route: "boutique"
    },
    // {
    //   name: "Partenaires",
    //   display: "Partenaires",
    //   submenu: ["Les partenaires"],
    //   icon: "fa-handshake",
    //   route: "partenaires"
    // },
    // {
    //   name: "Fan Zone",
    //   display: "Fan Zone",
    //   submenu: [
    //     "Forum de discussion",
    //     "Quiz et jeux interactifs",
    //     "Concours",
    //     "Informations sur les groupes de supporters",
    //   ],
    //   icon: "fa-heart",
    //   route: "fan-zone"
    // },
    {
      name: "À propos",
      display: "À propos",
      submenu: [
        "Histoire du club",
        "Valeurs et vision",
        "Information de contact",
      ],
      // icon: "fa-info-circle",
      route: "a-propos"
    },
    {
      name: "Contact",
      display: "Contact",
      submenu: [
        "Formulaire de contact",
        "Adresse du club",
        "Téléphones et email",
      ],
      // icon: "fa-envelope",
      route: "contact"
    }
  ];

  return (
    <nav className="p-2">
      <div className="flex items-center justify-center">
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-start focus:outline-none text-3xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="flex">
          <div className="logo">
            <Image
              src="/logo-raja-mini.png"
              alt="logo raja athletic"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => toggleSubMenu(item.name.toLowerCase())}
              onMouseLeave={() => toggleSubMenu(item.name.toLowerCase())}
            >
              <Link
                href={`/${item.route}`}
                className="px-4 py-2 flex items-center"
              >
                <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                <span className="ml-2">{item.name}</span>
              </Link>
              {subMenuStates[item.name.toLowerCase() as SubMenuKeys] && (
                <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem}
                      href={`/${item.route}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative flex justify-center text-lg">
          <Link href="/login" className="px-4 py-2 flex items-center">
            <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
