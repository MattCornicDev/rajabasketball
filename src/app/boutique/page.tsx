"use client"

export default function BoutiquePage() {
  const produits = [
    {
      titre: "Maillot Domicile",
      prix: "39,99 €",
      description: "Maillot officiel RCA pour la saison 2025–2026",
      image: "/images/maillot-domicile.jpg",
      alt: "Maillot Domicile",
    },
    {
      titre: "Maillot Extérieur",
      prix: "39,99 €",
      description: "Maillot extérieur officiel RCA pour la saison 2025–2026",
      image: "/images/maillot-exterieur.jpg",
      alt: "Maillot Extérieur",
    },
    {
      titre: "Pantalon Domicile",
      prix: "49,99 €",
      description: "Pantalon officiel RCA pour la saison 2025–2026",
      image: "/images/pantalon-domicile.jpg",
      alt: "Pantalon Domicile",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-14">Boutique</h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {produits.map((produit, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <div className="h-64 mb-6 overflow-hidden rounded-xl">
                <img
                  src={produit.image}
                  alt={produit.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{produit.titre}</h3>
              <span className="text-xl text-gray-300 mb-2">{produit.prix}</span>
              <p className="text-gray-400">{produit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
