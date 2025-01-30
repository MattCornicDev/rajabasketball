import PromoCard from "@/components/PromoCard";
import VideoCard from "@/components/VideoCard";
import Aside from "@/components/Aside";

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
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 justify-items-center">
        {promotions.map((promo, index) => (
          <PromoCard key={index} imageUrl={promo.imageUrl} />
        ))}
      </div>

      <section className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 justify-items-center">
        <div className="video-card">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              iframeUrl={video.iframeUrl}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
        <div className="">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              iframeUrl={video.iframeUrl}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
        <div className="">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              iframeUrl={video.iframeUrl}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
        <div className="">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              iframeUrl={video.iframeUrl}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-green-500 text-white p-4 text-center">
  <h2 className="text-xl font-bold">Annonce Importante</h2>
  <p>Ne manquez pas notre événement ce week-end !</p>
</section>
<div className="flex">
  <main className="flex-1">
    {/* Contenu principal ici */}
  </main>
  <aside className="w-1/4 bg-yellow-500 text-black p-4">
    <h2 className="text-xl font-bold">Nouveau Produit !</h2>
    <p>Découvrez notre dernière collection.</p>
  </aside>
</div>
<Aside />

    </div>
  );
};

export default Page;
