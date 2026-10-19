import Link from 'next/link';

export default function CalendrierPage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Rendez-vous sportifs</p>
        <h1 className="page-title">Le calendrier.</h1>
        <p className="page-intro">Les prochaines rencontres et les informations pour venir encourager le Raja.</p>
      </header>

      <section className="content-card empty-state" aria-labelledby="schedule-empty">
        <span className="empty-state-mark" aria-hidden="true">⌁</span>
        <h2 id="schedule-empty">Les prochaines dates arrivent.</h2>
        <p>
          Le calendrier de la prochaine série de rencontres sera publié ici dès que les informations
          officielles du club seront disponibles.
        </p>
        <Link href="/contact" className="button button-primary">Contacter le club</Link>
      </section>
    </main>
  );
}
