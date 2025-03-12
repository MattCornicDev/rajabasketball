import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, action: 'login' }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Connexion réussie !');
            localStorage.setItem('token', data.token);
            console.log('Token:', data.token);
            router.push('/dashboard');
        } else {
            setMessage(data.message || 'Erreur lors de la connexion.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Se connecter</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Login;