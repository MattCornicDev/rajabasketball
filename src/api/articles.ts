import Article, { ArticleType } from '@/models/Article'; // Importation du modèle Mongoose

// Fonction pour récupérer tous les articles
export const getArticles = async (): Promise<ArticleType[]> => {
    const articles = await Article.find({}); // Utilisation de Mongoose pour récupérer les articles
    return articles as ArticleType[]; // Casting pour le type correct
};

// Fonction pour créer un nouvel article
export const createArticle = async (articleData: Omit<ArticleType, 'createdAt' | 'updatedAt'>): Promise<ArticleType> => {
    const newArticle = new Article(articleData); // Crée une nouvelle instance d'article
    await newArticle.save(); // Enregistre l'article dans la base de données
    return newArticle as ArticleType; // Retourne l'article créé
};

// Fonction pour mettre à jour un article
export const updateArticle = async (id: string, articleData: Partial<ArticleType>): Promise<ArticleType | null> => {
    const updatedArticle = await Article.findByIdAndUpdate(id, articleData, { new: true }).lean(); // Mise à jour de l'article
    return updatedArticle as ArticleType | null; // Retourne l'article mis à jour
};

// Fonction pour supprimer un article
export const deleteArticle = async (id: string): Promise<ArticleType | null> => {
    const deletedArticle = await Article.findByIdAndDelete(id).lean(); // Suppression de l'article
    return deletedArticle as ArticleType | null; // Retourne l'article supprimé
}