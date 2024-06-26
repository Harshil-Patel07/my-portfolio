import mongoose, { Schema } from 'mongoose';


const BlogSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  comments: { type: [{ text: String, commenter: String, commentedAt: { type: Date, default: Date.now } }], default: [] },
}, { timestamps: true });

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
