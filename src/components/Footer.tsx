import React from "react";
import Image from 'next/image'; // Ajoutez cette ligne


const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="sponsor-logo  py-10">
        <div className="flex justify-center space-x-2 flex-wrap">
          <Image
            src="/photos/sponsors/logo-infinicode.svg"
            alt="Sponsor infinicode"
            className="partenaire w-1/4 sm:w-1/6 md:w-1/5 max-w-[200px]" // Ajustez les largeurs selon vos besoins
            width={150}
            height={50}
          />
          <Image
            src="/photos/sponsors/majestee.png"
            alt="Sponsor majestee"
            className="partenaire w-1/4 sm:w-1/6 md:w-1/5 max-w-[300px]"
            width={200}
            height={100}
          />
          <Image
            src="/photos/sponsors/logo-school.jpeg"
            alt="Sponsor school"
            className="partenaire w-1/4 sm:w-1/6 md:w-1/5 max-w-[300px]"
            width={300}
            height={200}
          />
          {/* Ajoutez d'autres logos selon vos besoins */}
        </div>
        <div className="flex justify-center">
        <div className="flex justify-center m-5">
          <Image
            src="/photos/sponsors/armoiries-du-Maroc.png"
            alt="logo Armoiries du Maroc"
            width={100}
            height={50}
          />
        </div>
        <div className="flex justify-center m-5">
          <Image
            src="photos/sponsors/Casablanca.svg"
            alt="logo Casablanca"
            width={100}
            height={50}
          />
        </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="newsletter p-1 rounded-md">
          <h4 className="text-md mb-2">Inscrivez-vous à notre newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow p-2 bg-green-900 border border-green-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-700 h-5 placeholder-white"
            />
            <button className="bg-green-900 flex items-center justify-center h-5 px-4 rounded-r-md hover:bg-green-200">
              Inscription
            </button>
          </div>
        </div>

        <div className="navigation">
          <h4 className="font-bold">Navigation</h4>
          <a href="/about" className="block">
            À propos
          </a>
          <a href="/privacy-policy" className="block">
            Politique de confidentialité
          </a>
          <a href="/terms" className="block">
            Conditions d&apos;utilisation
          </a>
          <a href="/sitemap" className="block">
            Carte du site
          </a>
          <a href="/faq" className="block">
            FAQ
          </a>
          <a href="/conditions-generales" className="block">
            Conditions génerales d&apos;utilisation
          </a>
          <a href="/cookies" className="block">
            Politique des cookies
          </a>
        </div>

        <div className="contact-info">
          <h4 className="font-bold">Contact</h4>
          <p>
            <span className="font-bold">Contactez-nous : </span>
            <a href="tel:+2120658618726">{"+212 (0)658-618726"}</a>
          </p>
          <p>
            <span className="font-bold">Email :</span>
            <a href="mailto:teamtechmanager@aol.com"> teamtechmanager@aol.com</a>
          </p>
          <p>
            <span className="font-bold">Siège :</span> Complexe Sportif
            Raja-Oasis <br />
            Rue Omar El Khayam (anciennement Mermoz) <br />
            Oasis, BP 8094 <br />
            Casablanca 21121 <br />
            Maroc
          </p>
        </div>

        <div className="events">
          <h4 className="font-bold">Événements à venir</h4>
          <ul>
            <li>Match de basket le 15 février</li>
            <li>Journée portes ouvertes le 20 mars</li>
          </ul>
        </div>
        <div className="quick-access">
          <h4 className="font-bold">Accès rapide</h4>
          <a href="/training-schedule" className="block">
            Horaires des entraînements
          </a>
          <a href="/results" className="block">
            Résultats des matchs
          </a>
        </div>
        <div className="social-media1">
          <h4 className="font-bold">Autres Réseaux Sociaux</h4>
          <a href="https://www.instagram.com/rcabasketwomen/" className="block">
            Instagram Féminin
          </a>
          <a
            href="https://www.instagram.com/rcabasketacademy/"
            className="block"
          >
            Instagram Academie
          </a>
          <a
            href="https://www.facebook.com/RcaBasketyouth?mibextid=LQQJ4d"
            className="block"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="flex justify-center m-5">
        <Image
          src="/logo-raja-white.svg"
          alt="logo raja athletic"
          width={200}
          height={100}
        />
      </div>

      <div className="social-media mx-auto text-center mt-4">
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/RcaBasketyouth?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/rcabasketofficiel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://x.com/RcaBasket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@Rcabasket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube"></i>
          </a>
        </div>
        <p style={{ fontSize: "0.5rem" }} className="mt-4">
          &copy; {new Date().getFullYear()} Raja Athletic Club. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
