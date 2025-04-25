"use client"

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'

export default function BilleteriePage() {
  const [matchSelected, setMatchSelected] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  const matches = [
    {
      id: '1',
      date: '2025-04-28',
      time: '20:00',
      opponent: 'RCA',
      stadium: 'Palais des Sports'
    },
    {
      id: '2',
      date: '2025-05-03',
      time: '18:30',
      opponent: 'RCA',
      stadium: 'Palais des Sports'
    }
  ]

  const handlePurchase = () => {
    if (!matchSelected) {
      alert('Veuillez sélectionner un match')
      return
    }

    alert('Fonctionnalité en cours de développement')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-14">Billetterie</h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {matches.map(match => (
            <div
              key={match.id}
              className={`p-6 rounded-2xl shadow-lg transition-all cursor-pointer border-2 
                ${matchSelected === match.id ? "border-blue-500 bg-gray-700" : "border-transparent bg-gray-800 hover:bg-gray-700"}`}
              onClick={() => setMatchSelected(match.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={faTicket} className="text-2xl text-blue-500" />
                <span className="text-sm text-gray-400">{match.stadium}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{match.opponent}</h3>
              <div className="flex justify-between text-gray-300">
                <div>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  {new Date(match.date).toLocaleDateString('fr-FR')}
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {match.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {matchSelected && (
          <div className="mt-14 bg-gray-800 p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center">Détails de la commande</h3>
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg">Quantité de billets</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="bg-gray-700 text-white rounded p-3 w-40"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handlePurchase}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              Acheter
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
