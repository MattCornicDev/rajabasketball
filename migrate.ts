import mongoose from 'mongoose';
import User from './models/User'; // Assurez-vous que le chemin est correct

const MONGODB_URI = process.env.MONGODB_URI; // Assurez-vous que votre URI est configuré

async function migrate() {
    if (!MONGODB_URI) {
        throw new Error("La variable d'environnement MONGODB_URI n'est pas définie.");
    }

    await mongoose.connect(MONGODB_URI); // Connexion sans options obsolètes

    const users = await User.find({});
    for (const user of users) {
        user.name = user.email.split('@')[0]; // Exemple : définir le nom comme la partie avant l'email
        await user.save();
    }

    console.log('Migration terminée');
    mongoose.connection.close();
}

migrate().catch(err => {
    console.error(err);
    process.exit(1);
});