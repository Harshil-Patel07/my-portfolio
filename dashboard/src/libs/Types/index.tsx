// types.ts
export interface BlogType {
    _id: string;
    title?: string;
    description?: string;
    author?: string;
    tags?: string[];
    categories?: string[];
    likes?: string[];
    comments?: any[];
    createdAt?: string;
    updatedAt?: string;
}
export interface BlogDataTableProps {
    blogs: BlogType[];
    totalBlogs:number;
    success:boolean
}
