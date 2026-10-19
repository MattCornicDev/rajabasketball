import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { src: '/logo-codexium.png', alt: 'Codexium' },
  { src: '/photos/sponsors/majestee.png', alt: 'Majestee' },
  { src: '/photos/sponsors/logo-school.jpeg', alt: 'Partenaire School' },
  { src: '/photos/sponsors/Casablanca.svg', alt: 'Ville de Casablanca' },
];

export default function PartenairePage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Ensemble, plus forts</p>
        <h1 className="page-title">Nos partenaires.</h1>
        <p className="page-intro">Merci aux organisations qui accompagnent le Raja Basketball et soutiennent le sport.</p>
      </header>
      <section className="partner-grid" aria-label="Partenaires du Raja Basketball">
        {partners.map((partner) => (
          <div className="content-card partner-card" key={partner.src}>
            <Image src={partner.src} alt={partner.alt} width={220} height={110} />
          </div>
        ))}
      </section>
      <p className="partner-contact">Vous souhaitez devenir partenaire ? <Link href="/contact">Contactez le club.</Link></p>
    </main>
  );
}
