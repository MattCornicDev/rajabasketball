"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  role: string;
  name: string;
}

interface UserResponse {
  user?: User;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        const response = await fetch('/api/user', { signal: controller.signal });
        if (response.status === 401) {
          router.replace('/login');
          return;
        }
        if (!response.ok) {
          throw new Error('Impossible de charger votre profil. Réessayez plus tard.');
        }

        const data = await response.json() as UserResponse;
        if (!data.user) throw new Error('Les informations de votre compte sont indisponibles.');
        setUser(data.user);
      } catch (fetchError) {
        if (fetchError instanceof Error && fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void fetchUser();
    return () => controller.abort();
  }, [retryCount, router]);

  async function handleSignOut() {
    setIsSigningOut(true);
    try {
      const response = await fetch('/api/auth', { method: 'DELETE' });
      if (!response.ok) throw new Error('La déconnexion a échoué. Réessayez.');
      router.replace('/login');
    } catch (signOutError) {
      setError(signOutError instanceof Error ? signOutError.message : 'La déconnexion a échoué.');
      setIsSigningOut(false);
    }
  }

  function retry() {
    setError('');
    setIsLoading(true);
    setRetryCount((count) => count + 1);
  }

  return (
    <main className="page-shell dashboard-page">
      <section className="dashboard-card">
        {isLoading ? (
          <p className="dashboard-status" role="status">Chargement de votre espace…</p>
        ) : error ? (
          <div className="dashboard-status">
            <p className="form-message form-message-error" role="alert">{error}</p>
            <button className="button button-secondary" onClick={retry}>Réessayer</button>
          </div>
        ) : user ? (
          <>
            <div className="dashboard-heading">
              <div>
                <p className="eyebrow">Espace membre</p>
                <h1 className="page-title">Bienvenue, {user.name}.</h1>
                <p className="page-intro">Retrouvez ici les informations de votre compte Raja.</p>
              </div>
              <button className="button button-secondary" onClick={handleSignOut} disabled={isSigningOut}>
                {isSigningOut ? 'Déconnexion…' : 'Se déconnecter'}
              </button>
            </div>
            <dl className="profile-details">
              <div><dt>Nom</dt><dd>{user.name}</dd></div>
              <div><dt>Adresse e-mail</dt><dd>{user.email}</dd></div>
              <div><dt>Statut</dt><dd>Membre Raja</dd></div>
            </dl>
          </>
        ) : null}
      </section>
    </main>
  );
}
