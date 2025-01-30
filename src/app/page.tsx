const Page: React.FC = () => {
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

      <div className="bg-white shadow-lg rounded-lg p-4 mt-10">
        <h3 className="text-lg font-bold mb-2">Publicité</h3>
        <p className="mb-4">Découvrez nos offres spéciales !</p>
        <img
          src="/path/to/ad-image.jpg"
          alt="Publicité"
          className="w-full h-auto rounded-md"
        />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default Page;
