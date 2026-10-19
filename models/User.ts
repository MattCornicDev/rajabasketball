import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    role: { type: String, required: true, default: 'member' },
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);