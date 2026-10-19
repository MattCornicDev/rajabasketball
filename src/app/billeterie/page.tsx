import Link from 'next/link';

export default function BilleteriePage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Vivez le match en direct</p>
        <h1 className="page-title">Billetterie.</h1>
        <p className="page-intro">Les informations pratiques pour retrouver le Raja dans les tribunes.</p>
      </header>

      <section className="content-card empty-state" aria-labelledby="tickets-empty">
        <span className="empty-state-mark" aria-hidden="true">⌑</span>
        <h2 id="tickets-empty">Aucune billetterie ouverte pour le moment.</h2>
        <p>
          Les dates, tarifs et modalités de réservation seront affichés ici dès leur confirmation.
          Nous ne proposons pas encore d’achat de billets en ligne.
        </p>
        <Link href="/calendrier" className="button button-primary">Consulter le calendrier</Link>
      </section>
    </main>
  );
}
