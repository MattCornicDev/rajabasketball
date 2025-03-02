import mongoose, { Document, Schema } from 'mongoose';

export interface Article extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    content: string;
    authorId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ArticleType = Article; 

const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Article || mongoose.model<Article>('Article', ArticleSchema);