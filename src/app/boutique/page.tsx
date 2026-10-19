import Image from 'next/image';
import Link from 'next/link';

export default function BoutiquePage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Les couleurs du Raja</p>
        <h1 className="page-title">La boutique.</h1>
        <p className="page-intro">Les équipements du Raja Basketball, pour les joueurs comme pour les supporters.</p>
      </header>

      <section className="shop-feature content-card">
        <div className="shop-image">
          <Image
            src="/photos/equipements/veste-raja.jpeg"
            alt="Veste aux couleurs du Raja"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="shop-copy">
          <p className="eyebrow">Équipement Raja</p>
          <h2>Affichez les couleurs du club.</h2>
          <p>
            Retrouvez la sélection Raja auprès de notre équipementier. Les disponibilités et tarifs
            sont communiqués directement par la boutique partenaire.
          </p>
          <a
            href="https://www.majestee.fr/"
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter la boutique partenaire <span className="sr-only">(nouvel onglet)</span>
          </a>
          <p className="shop-contact">Une question ? <Link href="/contact">Écrivez-nous.</Link></p>
        </div>
      </section>
    </main>
  );
}
