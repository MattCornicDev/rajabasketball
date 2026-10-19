import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    image: '/photos/smatch.jpeg',
    label: 'Jour de match',
    title: 'Le Raja, toujours au rendez-vous.',
    description: 'Retrouvez les prochaines rencontres et encouragez les Vert et Blanc.',
    href: '/calendrier',
    action: 'Voir le calendrier',
  },
  {
    image: '/photos/preparation.jpeg',
    label: 'La vie du club',
    title: 'Une passion qui se transmet.',
    description: 'Découvrez les actualités, les équipes et les projets qui font vivre le club.',
    href: '/actualites',
    action: 'Explorer les actualités',
  },
  {
    image: '/photos/equipements/veste-raja.jpeg',
    label: 'Boutique officielle',
    title: 'Portez fièrement nos couleurs.',
    description: 'Découvrez les équipements et les produits aux couleurs du Raja.',
    href: '/boutique',
    action: 'Découvrir la boutique',
  },
];

const carouselPhotos = [
  { image: '/photos/ramadan-moubarak.jpg', alt: 'Une célébration aux couleurs du Raja', caption: 'Une famille, une passion' },
  { image: '/photos/salle-comble.jpeg', alt: 'La salle du Raja remplie de supporters', caption: 'Tous derrière le Raja' },
  { image: '/photos/casa-city-finance.png', alt: 'Casablanca, ville du Raja', caption: 'Casablanca' },
  { image: '/photos/carousel/raja-homme.png', alt: 'Les joueurs du Raja Basketball', caption: 'L’équipe masculine' },
  { image: '/photos/smatch.jpeg', alt: 'Une rencontre du Raja Basketball', caption: 'La passion du jeu' },
  { image: '/photos/carousel/equipe-feminine.png', alt: 'Les joueuses du Raja Basketball', caption: 'L’équipe féminine' },
  { image: '/photos/dribble.jpeg', alt: 'Un joueur en plein dribble', caption: 'Sur le terrain' },
  { image: '/photos/carousel/street-raja.png', alt: 'Le basketball Raja au cœur de la ville', caption: 'Le Raja dans la ville' },
  { image: '/photos/preparation.jpeg', alt: 'Les joueurs se préparent pour le match', caption: 'Toujours prêts' },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <Image
          src="/photos/salle-comble.jpeg"
          alt="Les supporters réunis autour du Raja Basketball"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="home-hero-kicker">Raja Athletic Club · Basketball</p>
          <h1>Un club.<br />Une ville.<br /><span>Une passion.</span></h1>
          <p>Le basketball se vit en vert et blanc. Bienvenue dans l’univers du Raja.</p>
          <div className="home-hero-actions">
            <Link href="/calendrier" className="button button-primary">Suivre le Raja</Link>
            <Link href="/a-propos" className="hero-text-link">Découvrir le club <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <span className="hero-side-label" aria-hidden="true">CASABLANCA · DEPUIS 1949</span>
      </section>

      <section className="home-carousel" aria-labelledby="carousel-title">
        <div className="carousel-watermark" aria-hidden="true">
          <Image src="/logo-raja-background.svg" alt="" fill sizes="720px" />
        </div>
        <div className="home-carousel-heading">
          <p className="eyebrow">La passion en images</p>
          <h2 id="carousel-title">Le Raja, en mouvement.</h2>
        </div>
        <div className="carousel-stage">
          <div className="carousel-ring" role="region" aria-label="Carrousel des images du Raja Basketball" tabIndex={0}>
            {carouselPhotos.map((photo, index) => (
              <figure
                className="carousel-face"
                key={photo.image}
                style={{ transform: `rotateY(${index * 40}deg) translateZ(var(--carousel-radius))` }}
              >
                <Image src={photo.image} alt={photo.alt} fill sizes="280px" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="carousel-hint">Survolez les images pour mettre le carrousel en pause</p>
      </section>

      <section className="home-intro page-shell">
        <div className="home-intro-mark" aria-hidden="true">R</div>
        <div>
          <p className="eyebrow">Plus qu’un club</p>
          <h2 className="page-title">Le Raja, au cœur du jeu.</h2>
          <p className="page-intro">
            Héritier d’une grande histoire sportive, le Raja Basketball rassemble joueurs,
            familles et supporters autour d’une même passion : faire grandir le basket à Casablanca.
          </p>
        </div>
      </section>

      <section className="home-highlights">
        <div className="page-shell">
          <div className="page-heading">
            <p className="eyebrow">Au rythme du Raja</p>
            <h2 className="page-title">Vivez le club.</h2>
            <p className="page-intro">Toutes les façons de suivre, soutenir et découvrir le Raja Basketball.</p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.href}>
                <div className="highlight-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <div className="highlight-body">
                  <p className="eyebrow">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href}>{item.action} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-community">
        <div className="home-community-inner">
          <div>
            <p className="eyebrow">Vert et blanc, ensemble</p>
            <h2>La prochaine histoire s’écrit avec vous.</h2>
            <p>Rejoignez la communauté Raja et restez au plus près de la vie du club.</p>
          </div>
          <Link href="/contact" className="button button-primary">Nous contacter</Link>
        </div>
      </section>
    </main>
  );
}
