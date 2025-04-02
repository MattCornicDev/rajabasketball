"use client"

export default function CalendrierPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Calendrier</h1>
        <p className="text-gray-600">
          Au Maroc, le plus haut niveau de basket-ball professionnel est la Division Excellence, également connue sous le nom de DEX-H. Ce championnat annuel réunit les quatorze meilleures équipes professionnelles du pays, réparties en deux groupes géographiques : le groupe Nord et le groupe Sud. La compétition est organisée par la Fédération Royale Marocaine de Basket-Ball (FRMBB) et bénéficie d'une couverture télévisée sur la chaîne Arryadia.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Clubs les plus titrés</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">FUS de Rabat</h3>
              <p className="text-gray-600">19 titres de champion, dont les saisons 2023 et 2024</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Wydad Athletic Club (WAC)</h3>
              <p className="text-gray-600">10 titres de champion</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Association Sportive de Salé (AS Salé)</h3>
              <p className="text-gray-600">9 titres de champion</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Ces clubs ont marqué l'histoire du basket-ball marocain par leurs performances et leur palmarès impressionnant.
          </p>
        </div>
      </div>
    </div>
  )
}
