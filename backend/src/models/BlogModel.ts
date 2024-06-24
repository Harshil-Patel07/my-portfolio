import mongoose, { Schema, Document } from 'mongoose';

export interface BlogTypes extends Document {
  title: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  comments: Comment[];
}

export interface Comment {
  text: string;
  commenter: string;
  commentedAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  comments: { type: [{ text: String, commenter: String, commentedAt: { type: Date, default: Date.now } }], default: [] },
}, { timestamps: true });

const Blog = mongoose.model<BlogTypes>('Blog', BlogSchema);

export default Blog;
