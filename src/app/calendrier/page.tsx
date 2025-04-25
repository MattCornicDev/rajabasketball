"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function CalendrierPage() {
  const matchs = [
    {
      date: "2025-04-28",
      time: "20:00",
      opponent: "FUS Rabat",
      location: "Palais des Sports - Casablanca",
      home: true,
    },
    {
      date: "2025-05-03",
      time: "18:30",
      opponent: "AS Salé",
      location: "Complexe Sportif - Salé",
      home: false,
    },
    {
      date: "2025-05-10",
      time: "17:00",
      opponent: "KAC Kénitra",
      location: "Palais des Sports - Casablanca",
      home: true,
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10">Calendrier des Matchs</h1>

        <div className="space-y-6">
          {matchs.map((match, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-400 hover:bg-gray-100 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">
                  {match.home ? " Raja Casablanca" : match.opponent} vs {match.home ? match.opponent : " Raja Casablanca"}
                </h2>
                <span className="text-gray-400 text-sm">{new Date(match.date).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex items-center text-gray-300 space-x-6">
                <div>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-400" />
                  {match.time}
                </div>
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-400" />
                  {match.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
