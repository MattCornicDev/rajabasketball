const Aside: React.FC = () => {
    return (
      <div className="aside flex">
        <main className="flex-1">
          <h1>Articles</h1>
          <p>Ceci est le contenu de l'article.</p>
        </main>
        <aside className="w-1/4 p-4">
          <h2>Liens Connexes</h2>
          <ul>
            <li><a href="#">Article 1</a></li>
            <li><a href="#">Article 2</a></li>
          </ul>
          <h2>Publicité</h2>
          <p>Découvrez notre dernière offre !</p>
        </aside>
      </div>
    );
  };
  
  export default Aside;