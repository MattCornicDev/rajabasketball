import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface User {
    email: string;
    role: string; // Ajoutez d'autres propriétés si nécessaire
    name: string;
}

const Dashboard = () => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // Récupérer le token
            const response = await fetch('/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Envoyer le token dans l'en-tête
                },
            });

            if (response.ok) {
                const userData = await response.json();
                console.log('User data:', userData);
                setUser(userData); // Mettre à jour l'état avec les données de l'utilisateur
            } else {
                console.log('Reponse not ok:', response);
                router.push('/login'); // Redirige vers la page de connexion si non authentifié
            }
        };

        fetchUserData();
    }, [router]);

    return (
        <div>
            <h1>Tableau de Bord</h1>
            {user && <p>Bienvenue, {user.email}!{user.name}</p>}
            <p>Vous pouvez maintenant utiliser l&apos;application.</p>
        </div>
    );
};

export default Dashboard;
