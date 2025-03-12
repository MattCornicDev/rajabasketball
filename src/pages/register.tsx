import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, action: 'register' }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Inscription réussie !');
            console.log('Token:', data.token);
        } else {
            setMessage(data.message || 'Erreur lors de l\'inscription.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <form onSubmit={handleRegister} className="bg-gray-700 p-6 rounded shadow-md w-80">
            <h1 className="text-white text-lg font-bold mb-4">S'inscrire</h1>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full p-2 mb-4 rounded bg-gray-600 text-white"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 mb-4 rounded bg-gray-600 text-white"
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 mb-4 rounded bg-gray-600 text-white"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded text-white">
                Se connecter
            </button>
            {message && <p className="text-red-500 mt-4">{message}</p>}
        </form>
    </div>
    );
};

export default Register;