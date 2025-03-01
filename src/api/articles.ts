import Article, { Article as ArticleType } from '@/models/Article'; // Importation du modèle Mongoose

// Fonction pour récupérer tous les articles
export const getArticles = async (): Promise<ArticleType[]> => {
    const articles = await Article.find({}).lean(); // Utilisation de Mongoose pour récupérer les articles
    return articles as ArticleType[]; // Assurez-vous que le type est correct
};

// Fonction pour créer un nouvel article
export const createArticle = async (articleData: Omit<ArticleType, 'createdAt' | 'updatedAt'>): Promise<ArticleType> => {
    const newArticle = new Article(articleData);
    await newArticle.save(); // Enregistrement de l'article dans la base de données
    return newArticle as ArticleType; // Assurez-vous que le type est correct
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
};