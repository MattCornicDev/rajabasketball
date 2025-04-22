"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Ici vous pouvez ajouter votre logique d'authentification
      // Par exemple, envoyer les données à une API
      console.log('Login attempt:', formData)
      
      // Simuler une réussite
      router.push('/dashboard')
    } catch {
      setError('Erreur lors de la connexion')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded shadow-md w-80">
        <h1 className="text-white text-lg font-bold mb-4">Connexion</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full p-2 mb-4 rounded bg-gray-600 text-white"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="block w-full p-2 mb-4 rounded bg-gray-600 text-white"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? 'Connexion...' : 'Se connecter'}
        </button>
        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  )
}
