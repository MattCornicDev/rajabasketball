import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { label: 'Facebook Raja Basketball', href: 'https://www.facebook.com/RcaBasketyouth?mibextid=LQQJ4d' },
  { label: 'Instagram Raja Basketball', href: 'https://www.instagram.com/rcabasketofficiel/' },
  { label: 'X Raja Basketball', href: 'https://x.com/RcaBasket' },
  { label: 'YouTube Raja Basketball', href: 'https://www.youtube.com/@Rcabasket' },
];

const partnerLogos = [
  { src: '/logo-codexium.png', alt: 'Codexium' },
  { src: '/photos/sponsors/majestee.png', alt: 'Majestee' },
  { src: '/photos/sponsors/logo-school.jpeg', alt: 'School' },
  { src: '/photos/sponsors/armoiries-du-Maroc.png', alt: 'Armoiries du Maroc' },
  { src: '/photos/sponsors/Casablanca.svg', alt: 'Casablanca' },
];

export default function Footer() {
  return (
    <>
      <section className="partner-strip" aria-labelledby="partner-strip-title">
        <div className="partner-strip-inner">
          <div className="partner-strip-heading">
            <p className="eyebrow">Ensemble, plus forts</p>
            <h2 id="partner-strip-title">Ils accompagnent le Raja.</h2>
          </div>
          <div className="partner-strip-logos">
            {partnerLogos.map((partner) => (
              <div className="partner-strip-logo" key={partner.src}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="(max-width: 700px) 125px, 155px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/logo-raja-white.svg"
              alt="Raja Athletic Club"
              width={140}
              height={70}
              style={{ width: 'auto', height: 'auto' }}
            />
            <p>La passion du basketball, l’esprit Raja.</p>
          </div>
          <div>
            <h2>Explorer</h2>
            <Link href="/calendrier">Calendrier</Link>
            <Link href="/actualites">Actualités</Link>
            <Link href="/equipe">Notre équipe</Link>
            <Link href="/boutique">Boutique</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/partenaire">Partenaires</Link>
          </div>
          <div>
            <h2>Nous contacter</h2>
            <a href="tel:+212658618726">+212 (0)658-618726</a>
            <a href="mailto:teamtechmanager@aol.com">teamtechmanager@aol.com</a>
            <p>Complexe Sportif Raja-Oasis<br />Casablanca, Maroc</p>
          </div>
          <div>
            <h2>Suivez le club</h2>
            <div className="footer-socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Raja Athletic Club. Tous droits réservés.</p>
          <Link href="/a-propos">À propos du club</Link>
        </div>
      </footer>
    </>
  );
}
