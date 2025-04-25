"use client"

export default function ActualitesPage() {
  const articles = [
    {
      title: "Victoire éclatante du Raja face au FUS Rabat",
      date: "21 avril 2025",
      excerpt: "Le Raja Basketball s'impose 89-72 dans un match intense au Palais des Sports. Retour sur les moments forts de la rencontre...",
      image: "/images/match-fus.jpg"
    },
    {
      title: "Stage de perfectionnement U18 : immersion totale",
      date: "14 avril 2025",
      excerpt: "Nos jeunes talents ont participé à un stage intensif de 5 jours, encadré par des coachs certifiés FIBA. Une expérience riche en apprentissage.",
      image: "/images/stage-u18.jpg"
    },
    {
      title: "Le Raja lance sa nouvelle boutique en ligne",
      date: "5 avril 2025",
      excerpt: "Maillots, survêtements et accessoires sont désormais disponibles à l’achat en ligne. Découvrez notre nouvelle boutique officielle.",
      image: "/images/boutique-lancement.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12">Actualités du Raja Basketball</h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-400 mb-4">{article.date}</p>
                <p className="text-gray-300">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
