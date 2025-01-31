import PromoCard from "@/components/PromoCard";
import VideoCard from "@/components/VideoCard";
import AsideCard from "@/components/AsideCard";
import ArticleCard from "@/components/ArticleCard";

const Page: React.FC = () => {
  const promotions = [
    {
      imageUrl: "/photos/promotions/majestee-pub.png",
    },
    {
      imageUrl: "/photos/promotions/majestee-pub.png",
    },
  ];
  const videos = [
    {
      iframeUrl:
        "https://www.youtube.com/embed/HuV-gF7UcAA?si=r5Sni9oraq87JhVK",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/OiZBstutEWc?si=sm_BTC7D7ZKLMEjB",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/IzytUXV7Nhg?si=YKK6FowCDqgope87",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/e50HuSxlp8A?si=NAo475OtXDLV_4OL",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
  ];
  const articles = [
    {
      title: "Hisoire du club",
      description: "Le Raja Club Athletic, fondé en 1949 à Casablanca, est l'un des clubs de football les plus emblématiques du Maroc et d'Afrique...",
      linkText: "Lire la suite",
      linkHref: "#",
    },
    {
      title: "Du nouveau dans la vie sportive",
      description: "Le Maroc connaît une dynamique croissante dans le domaine du sport...",
      linkText: "Lire la suite",
      linkHref: "#",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="carousel mt-20">
          <div className="carousel__face ">
            <span>Site en construction</span>
          </div>
          <div className="carousel__face">
            <span>Very special</span>
          </div>
          <div className="carousel__face">
            <span>Special is the key</span>
          </div>
          <div className="carousel__face">
            <span>For you</span>
          </div>
          <div className="carousel__face">
            <span>Just give it</span>
          </div>
          <div className="carousel__face">
            <span>A try</span>
          </div>
          <div className="carousel__face">
            <span>And see</span>
          </div>
          <div className="carousel__face">
            <span>How IT Works</span>
          </div>
          <div className="carousel__face">
            <span>Woow</span>
          </div>
        </div>
        <img
          src="/photos/casa-city-finance.png"
          alt="Description of the image"
          className="mobile-image"
          style={{ display: "none" }} // Initially hidden
        />
      </div>

      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-20">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <VideoCard
              iframeUrl={video.iframeUrl}
              title={video.title}
              date={video.date}
            />
          </div>
        ))}
      </section>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-items-center">
        {promotions.map((promo, index) => (
          <PromoCard key={index} imageUrl={promo.imageUrl} />
        ))}
      </div>

      <div className="aside flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 p-4 mt-4 sm:mt-0 sm:ml-4">
          <AsideCard
            title="Nouvel équipement"
            content="Découvrez nos articles."
            linkText="Equipementier Majestee"
            linkHref="#"
            imageUrl="/photos/equipements/veste-raja.jpeg"
          />
          <AsideCard
            title="Publicité"
            content="Pour la journée de l'indépendances !"
            linkText="En savoir plus"
            linkHref="#"
            imageUrl="/photos/exemple.jpg"
          />
        </aside>
        <aside className="w-full sm:w-3/4 p-4 m-4 sm:mt-0 sm:ml-4">
          {/* Exemple d'utilisation de ArticleCard */}
          {articles.map((article, index) => (
            <ArticleCard
              title={article.title}
              description={article.description}
              linkText={article.linkText}
              linkHref={article.linkHref}
            />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Page;
