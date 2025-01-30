import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="sponsor-logo bg-gray-900 py-10">
        <div className="flex justify-center space-x-4">
          <img
            src="/photos/sponsors/logo-infinicode.svg"
            alt="Sponsor infinicode"
            className="h-6"
          />
          <img
            src="/photos/sponsors/majestee.png"
            alt="Sponsor majestee"
            className="h-6"
          />
          {/* Ajoutez d'autres logos selon vos besoins */}
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div className="newsletter bg-gray-900 p-1 rounded-md">
          <h4 className="text-md mb-2">Inscrivez-vous à notre newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow p-2 bg-gray-500 border border-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-5 placeholder-white"
            />
            <button className="bg-gray-800 flex items-center justify-center h-5 px-4 rounded-r-md hover:bg-gray-600">
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
            Conditions d'utilisation
          </a>
          <a href="/sitemap" className="block">
            Carte du site
          </a>
          <a href="/faq" className="block">
            FAQ
          </a>
          <a href="/conditions-generales" className="block">
            Conditions génerales d'utilisation
          </a>
          <a href="/cookies" className="block">
            politique des cookies
          </a>
        </div>

        <div className="contact-info">
          <h4 className="font-bold">Contact</h4>
          <p>
  <span className="font-bold">Contactez-nous :</span> 
  <a href="tel:+2120658618726">{"+212 (0)658-618726"}</a>
</p>
          <p><span className="font-bold">Email :</span> contact@rajaathleticclub.com</p>
          <p><span className="font-bold">Siège :</span> Complexe Sportif Raja-Oasis <br />
        Rue Omar El Khayam (anciennement Mermoz) <br />
        Oasis, BP 8094 <br />
        Casablanca 21121 <br />
        Maroc</p>
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
            <a href="https://www.instagram.com/rcabasketacademy/" className="block">
              Instagram Academie
            </a>
            <a href="https://www.facebook.com/RcaBasketyouth?mibextid=LQQJ4d" className="block">
              Facebook
            </a>
          </div>
        
      </div>

      <div className="flex justify-center m-5">
        <img src="/logo-raja-white.svg" alt="logo raja athletic" width={200} />
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
