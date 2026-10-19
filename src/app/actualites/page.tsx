import Image from 'next/image';

const articles = [
  {
    title: 'Victoire éclatante du Raja face au FUS Rabat',
    date: '2025-04-21',
    dateLabel: '21 avril 2025',
    excerpt: 'Le Raja Basketball s’impose 89-72 dans un match intense au Palais des Sports. Retour sur les moments forts de la rencontre.',
    image: '/photos/smatch.jpeg',
  },
  {
    title: 'Stage de perfectionnement U18 : immersion totale',
    date: '2025-04-14',
    dateLabel: '14 avril 2025',
    excerpt: 'Nos jeunes talents ont participé à un stage intensif de cinq jours, encadré par des coachs certifiés FIBA.',
    image: '/photos/preparation.jpeg',
  },
  {
    title: 'Le Raja lance sa nouvelle boutique en ligne',
    date: '2025-04-05',
    dateLabel: '5 avril 2025',
    excerpt: 'Maillots, survêtements et accessoires aux couleurs du club : découvrez l’offre Raja Basketball.',
    image: '/photos/equipements/veste-raja.jpeg',
  },
];

export default function ActualitesPage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Dans les coulisses du club</p>
        <h1 className="page-title">Actualités du Raja.</h1>
        <p className="page-intro">Les temps forts, les équipes et les histoires qui font vivre le Raja Basketball.</p>
      </header>

      <section className="news-grid" aria-label="Articles et actualités">
        {articles.map((article) => (
          <article className="news-card" key={article.title}>
            <div className="news-image">
              <Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
            </div>
            <div className="news-copy">
              <time dateTime={article.date}>{article.dateLabel}</time>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
      <p className="archive-note">Archives des actualités publiées en 2025.</p>
    </main>
  );
}
