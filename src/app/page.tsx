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
      description: "Description de la vidéo d'entrainement",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/HuV-gF7UcAA?si=r5Sni9oraq87JhVK",
      title: "Vidéo d'entrainement",
      description: "Description de la vidéo d'entrainement",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/HuV-gF7UcAA?si=r5Sni9oraq87JhVK",
      title: "Vidéo d'entrainement",
      description: "Description de la vidéo d'entrainement",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/HuV-gF7UcAA?si=r5Sni9oraq87JhVK",
      title: "Vidéo d'entrainement",
      description: "Description de la vidéo d'entrainement",
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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {promotions.map((promo, index) => (
          <PromoCard key={index} imageUrl={promo.imageUrl} />
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
  {videos.map((video, index) => (
    <div className="video-card" key={index}>
      <VideoCard
        iframeUrl={video.iframeUrl}
        title={video.title}
        description={video.description}
      />
    </div>
  ))}
</section>

      
      <div className="aside flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 p-4 mt-4 sm:mt-0 sm:ml-4">
          <AsideCard
            title="Liens Connexes"
            content="Découvrez nos articles connexes."
            linkText="Article 1"
            linkHref="#"
          />
          <AsideCard
            title="Publicité"
            content="Découvrez notre dernière offre !"
            linkText="En savoir plus"
            linkHref="#"
          />
          {/* Example ArticleCard usage */}
          <ArticleCard
            title="Article Title"
            description="A brief description of the article."
            linkText="Read more"
            linkHref="https://example.com/article"
          />
          {/* Example ArticleCard usage */}
          <ArticleCard
            title="Article Title"
            description="A brief description of the article."
            linkText="Read more"
            linkHref="https://example.com/article"
          />
        </aside>
      </div>
    </div>
  );
};

export default Page;
