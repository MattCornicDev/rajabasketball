"use client"

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10">À propos du Raja Basketball</h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-600">
            Fondé à Casablanca, le <span className="font-semibold text-blue-500">Raja Club Athletic - Section Basketball</span> est une institution sportive emblématique du Maroc. À travers ses valeurs d’excellence, de rigueur et de passion, le club s’engage à former les talents de demain tout en promouvant les valeurs du sport au sein de la jeunesse marocaine.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
          <p className="text-lg text-gray-600">
            Offrir un encadrement sportif et humain de qualité aux jeunes basketteurs marocains, développer leur potentiel, et promouvoir la pratique du basketball au niveau local et national.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="text-blue-500 font-medium">Engagement</span> — chaque joueur représente les couleurs du Raja avec fierté et discipline.</li>
            <li><span className="text-blue-500 font-medium">Solidarité</span> — l’esprit d’équipe est au cœur de chaque entraînement et match.</li>
            <li><span className="text-blue-500 font-medium">Excellence</span> — viser l’élite tout en restant fidèle à nos racines et notre communauté.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Mot du coach</h2>
          <p className="text-lg text-gray-600 italic">
            “Au Raja Basketball, nous croyons au pouvoir du sport pour changer des vies. Chaque entraînement est une opportunité, chaque match un défi, chaque joueur un avenir à construire.”
          </p>
        </section>
      </div>
    </div>
  )
}
