import React from "react";

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 py-4">
        <div className="sponsor-logos py-4">
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="navigation">
            <h4 className="font-bold">Navigation</h4>
            <a href="/about" className="block">
              À propos
            </a>
            <a href="/contact" className="block">
              Contact
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
            <p>Contactez-nous : +212(0)528 71 71 71</p>
            <p>Email : contact@rajaathleticclub.com</p>
          </div>
          <div className="social-media1">
            <h4 className="font-bold">Réseaux Sociaux</h4>
            <a href="https://facebook.com/rajaathleticclub" className="block">
              Facebook
            </a>
            <a href="https://twitter.com/rajaathleticclub" className="block">
              Twitter
            </a>
            <a href="https://instagram.com/rajaathleticclub" className="block">
              Instagram
            </a>
          </div>
          <div className="newsletter">
            <h4 className="font-bold">Inscrivez-vous à notre newsletter</h4>
            <input type="email" placeholder="Votre email" />
            <button>Inscription</button>
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
            <a href="/training-schedule" className="block">Horaires des entraînements</a>
            <a href="/results" className="block">Résultats des matchs</a>
          </div>
        </div>
        

        <div className="flex justify-center m-20">
          <img src="/logo-raja-white.svg" alt="logo raja athletic" width={200} />
        </div>

        <div className="social-media container mx-auto text-center mt-4">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/RcaBasketyouth?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/rcabasketacademy/"
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
          <p style={{ fontSize: '0.5rem' }} className="mt-4">
            &copy; {new Date().getFullYear()} Raja Athletic Club. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    );
};

export default Footer;