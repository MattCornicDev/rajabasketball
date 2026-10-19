import Image from 'next/image';

const photos = [
  { src: '/photos/rca.jpeg', alt: 'Le Raja Basketball en action' },
  { src: '/photos/dribble.jpeg', alt: 'Un joueur du Raja en plein dribble' },
  { src: '/photos/smatch.jpeg', alt: 'Une rencontre de basketball du Raja' },
  { src: '/photos/preparation.jpeg', alt: 'La préparation des joueurs' },
  { src: '/photos/carousel/equipe-feminine.png', alt: 'L’équipe féminine du Raja' },
  { src: '/photos/carousel/street-raja.png', alt: 'Basketball et communauté Raja' },
];

export default function GaleriePage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Instants Raja</p>
        <h1 className="page-title">La galerie.</h1>
        <p className="page-intro">Quelques moments de basketball et de vie au sein du club.</p>
      </header>
      <section className="gallery-grid" aria-label="Photographies du Raja Basketball">
        {photos.map((photo) => (
          <figure className="gallery-photo" key={photo.src}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
          </figure>
        ))}
      </section>
    </main>
  );
}
