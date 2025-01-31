"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuHomeOpen, setIsSubMenuHomeOpen] = useState(false);
  const [isSubMenuBoutiqueOpen, setIsSubMenuBoutiqueOpen] = useState(false);
  const [isSubMenuCalendrierOpen, setIsSubMenuCalendrierOpen] = useState(false);
  const [isSubMenuEquipeOpen, setIsSubMenuEquipeOpen] = useState(false);
  const [isSubMenuActualitesOpen, setIsSubMenuActualitesOpen] = useState(false);
  const [isSubMenuGalerieOpen, setIsSubMenuGalerieOpen] = useState(false);
  const [isSubMenuBilleterieOpen, setIsSubMenuBilleterieOpen] = useState(false);
  const [isSubMenuPartenairesOpen, setIsSubMenuPartenairesOpen] =
    useState(false);
  const [isSubMenuFanZoneOpen, setIsSubMenuFanZoneOpen] = useState(false);
  const [isSubMenuAProposOpen, setIsSubMenuAProposOpen] = useState(false);
  const [isSubMenuContactOpen, setIsSubMenuContactOpen] = useState(false);

  return (
    <nav className="p-1">
      <div className="flex">
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-start focus:outline-none text-3xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="logo flex justify-center flex-grow">
          <img src="./logo-raja.svg" alt="logo raja athletic" width={50} />
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          {/* Sous-menu Accueil */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuHomeOpen(true)}
            onMouseLeave={() => setIsSubMenuHomeOpen(false)}
          >
            <a href="#" className="px-4 py-2">
              Accueil
            </a>
            {isSubMenuHomeOpen && (
              <div className="submenu absolute left-10 top-full mt-2 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2">
                  Actualités
                </a>
                <a href="#" className="block px-4 py-2">
                  Prochains Matchs
                </a>
                <a href="#" className="block px-4 py-2">
                  Résultats récents
                </a>
                <a href="#" className="block px-4 py-2">
                  Bannière
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Calendrier */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuCalendrierOpen(true)}
            onMouseLeave={() => setIsSubMenuCalendrierOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Calendrier
            </a>
            {isSubMenuCalendrierOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2 ">
                  Prochains Matchs
                </a>
                <a href="#" className="block px-4 py-2 ">
                  Resultats récents
                </a>
                <a href="#" className="block px-4 py-2 ">
                  Classements
                </a>
                <a href="#" className="block px-4 py-2 ">
                  Telecharger le calendrier
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Équipe */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuEquipeOpen(true)}
            onMouseLeave={() => setIsSubMenuEquipeOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Équipe
            </a>
            {isSubMenuEquipeOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Joueurs
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Staff
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Histoire
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Actualités */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuActualitesOpen(true)}
            onMouseLeave={() => setIsSubMenuActualitesOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Actualités
            </a>
            {isSubMenuActualitesOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Les transferts
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Evènements
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Performances
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Communiqués officiels
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Galerie */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuGalerieOpen(true)}
            onMouseLeave={() => setIsSubMenuGalerieOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Galerie
            </a>
            {isSubMenuGalerieOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Photos
                </a>
                <a href="#" className="block px-4 py-2 ">
                  Vidéos
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Billeterie */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuBilleterieOpen(true)}
            onMouseLeave={() => setIsSubMenuBilleterieOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Billeterie
            </a>
            {isSubMenuBilleterieOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Tarifs et emplacements
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Lien pour acheter un billet
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Point de vente physique
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Boutique */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuBoutiqueOpen(true)}
            onMouseLeave={() => setIsSubMenuBoutiqueOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Boutique
            </a>
            {isSubMenuBoutiqueOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Maillots de l'équipe
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Équipement sportifs
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Produits dérivés
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Partenaires */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuPartenairesOpen(true)}
            onMouseLeave={() => setIsSubMenuPartenairesOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Partenaires
            </a>
            {isSubMenuPartenairesOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Les partenaires
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Fan Zone */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuFanZoneOpen(true)}
            onMouseLeave={() => setIsSubMenuFanZoneOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Fan Zone
            </a>
            {isSubMenuFanZoneOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Forum de discussion
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Quiz et jeux interactifs
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Concours pour gagner des places ou produits dérivés
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Informations sur les groupes de supporters
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu À propos */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuAProposOpen(true)}
            onMouseLeave={() => setIsSubMenuAProposOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              À propos
            </a>
            {isSubMenuAProposOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  Histoire du club Raja de Casablanca Basketball
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Valeurs et vision du club
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Information de contact
                </a>
              </div>
            )}
          </div>

          {/* Sous-menu Contact */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuContactOpen(true)}
            onMouseLeave={() => setIsSubMenuContactOpen(false)}
          >
            <a href="#" className=" px-4 py-2 ">
              Contact
            </a>
            {isSubMenuContactOpen && (
              <div className="submenu absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2  ">
                  formulaire de contact
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Adresse du club et installations sportives
                </a>
                <a href="#" className="block px-4 py-2  ">
                  Téléphones et email
                </a>
              </div>
            )}
          </div>
        </div>
         {/* Lien de Connexion */}
      <div className="relative flex justify-end">
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
