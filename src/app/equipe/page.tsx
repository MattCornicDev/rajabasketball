import Link from 'next/link';

export default function EquipePage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Vert et blanc sur le terrain</p>
        <h1 className="page-title">La famille Raja.</h1>
        <p className="page-intro">Des équipes, des générations et une même passion pour le basketball.</p>
      </header>
      <section className="content-card empty-state">
        <span className="empty-state-mark" aria-hidden="true">R</span>
        <h2>Les présentations arrivent bientôt.</h2>
        <p>Les effectifs et les informations sur le staff seront publiés ici dès leur confirmation par le club.</p>
        <Link href="/actualites" className="button button-primary">Suivre les actualités</Link>
      </section>
    </main>
  );
}
