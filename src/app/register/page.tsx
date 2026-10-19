"use client";

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AuthResponse {
  message?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', name, email, password }),
      });
      const data = await response.json() as AuthResponse;
      if (!response.ok) {
        setError(data.message || 'La création du compte a échoué.');
        return;
      }
      router.push('/dashboard');
    } catch {
      setError('Le service est momentanément indisponible. Réessayez dans un instant.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <p className="eyebrow">Rejoignez la famille Raja</p>
        <h1 id="register-title" className="auth-title">Créer mon compte.</h1>
        <p className="auth-description">Quelques informations suffisent pour rejoindre votre espace membre.</p>

        <form onSubmit={handleRegister} className="auth-form">
          <label htmlFor="name">Nom complet</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Votre nom"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            maxLength={100}
          />
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="8 caractères minimum"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
            maxLength={72}
          />
          {error && <p className="form-message form-message-error" role="alert">{error}</p>}
          <button className="button button-primary auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Création en cours…' : 'Créer mon compte'}
          </button>
        </form>

        <p className="auth-switch">
          Déjà membre ? <Link href="/login">Se connecter</Link>
        </p>
      </section>
    </main>
  );
}
