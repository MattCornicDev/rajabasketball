import React from 'react';
import PromoCard from "@/components/PromoCard";
import VideoCard from "@/components/VideoCard";
import AsideCard from "@/components/AsideCard";
import ArticleCard from "@/components/ArticleCard";
import Image from 'next/image';
import Header from "@/components/Header";

const Page: React.FC = () => {
  const promotions = [
    {
      imageUrl: "/photos/preparation.jpeg",
    },
    {
      imageUrl: "/photos/dribble.jpeg",
    },
    {
      imageUrl: "/photos/smatch.jpeg",
    },
    {
      imageUrl: "/photos/smatch2.jpeg",
    },
    {
      imageUrl: "/photos/direction/partenariat-school.jpeg",
    },
    {
      imageUrl: "/photos/PHOTO-2025-01-23-15-00-48.jpg",
    },
    {
      imageUrl: "/photos/PHOTO-2025-01-23-15-00-49.jpg",
    },
    {
      imageUrl: "/photos/direction/partenariat-school2.jpeg",
    },
  ];
  const videos = [
    {
      iframeUrl:
        "/videos/VIDEO-2025-02-23-16-39-37.mp4",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
    {
      iframeUrl:
        "/videos/Video.mp4",
      title: "Vidéo de l'académie",
      date: "23 février 2025",
    },
    {
      iframeUrl:
        "https://www.youtube.com/embed/e50HuSxlp8A?si=NAo475OtXDLV_4OL",
      title: "Vidéo d'entrainement",
      date: "20 janvier 2024",
    },
    { 
      iframeUrl:
        "https://www.youtube.com/embed/e50HuSxlp8A?si=bcKg1-lsSXL_8nde",
      title: "Vidéo de l'académie",
      date: "1 février 2025",
    },
  ];
  const articles = [
    {
      title: "Hisoire du club",
      imageUrl: "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/441953200_1010712144273916_684655740528958862_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mNbXZoSi3bQQ7kNvgHQwzQ-&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AiYnQ4JWrR736mXiN_jW4ce&oh=00_AYBT3C7fNEUy5bY029ICe-4fjxg6Fdg2OxvzA7FWBhwZng&oe=67A6C916",
      description: "Le Raja Club Athletic, fondé en 1949 à Casablanca, est l'un des clubs de football les plus emblématiques du Maroc et d'Afrique...",
      linkText: "Lire la suite",
      linkHref: "#",
    },
    {
      title: "Du nouveau dans la vie sportive",
      imageUrl: "https://scontent-cdg4-3.xx.fbcdn.net/v/t1.6435-9/130978795_2213767175433526_2092208791089888399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vIZiG2ASJkwQ7kNvgF6YfvY&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AkmjQvhBbd9sX9ZhdpUF6zY&oh=00_AYA8UnUJc-3ny-IpP0D9bqjMLlFksRANdofXU8oUBJSRsQ&oe=67C87958",
      description: "Le Maroc connaît une dynamique croissante dans le domaine du sport...",
      linkText: "Lire la suite",
      linkHref: "#",
    }
  ];

  return (
    <div className="">
      <h2 className="clignote text-3xl font-bold text-center text-red-500 m-10">SITE EN CONSTRUCTION</h2>
      <h6 className="text-md text-center text-black m-10"><Header /></h6>
      <div className="container mx-auto">
        <div className="carousel mt-20">
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Ramadan Moubarak
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Salle comble
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">Casablanca</span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Cite en Construction
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Casa Finance City
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Des victoires sur le terrain
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">Une famille</span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              La jeunesse au rendez-vous
            </span>
          </div>
          <div className="carousel__face rounded-sm">
            <span className="title-carousel text-black -mt-5">
              Street Sport
            </span>
          </div>
        </div>
        <Image
          src="/photos/casa-city-finance.png"
          alt="Description de l'image"
          width={300}
          height={200}
          className="mobile-image"
          style={{ display: "none" }}
        />
      </div>

      <section className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
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

      <div className="logo-background">
          <Image
            src="/logo-raja-background.svg"
            alt="Logo Raja Athletic Club"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-3/4 mx-auto">
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
    {promotions.map((promo, index) => (
      <div className="" key={index}>
        <PromoCard imageUrl={promo.imageUrl} />
      </div>
    ))}
  </div>
</div>

  <div className="mx-auto m-10">
  <Image src="/photos/rca.jpeg" className="w-full h-40 object-cover" alt="Description" width={300} height={200} />
  </div>

      <div className="aside flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 p-4 mt-4 sm:mt-0 sm:ml-0">
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
        <aside className="w-full sm:w-3/4 lg:w-2/4 p-4 m-0 sm:mt-0 sm:ml-0">
          {/* Exemple d'utilisation de ArticleCard */}
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              imageUrl={article.imageUrl}
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
