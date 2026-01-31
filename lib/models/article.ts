// lib/models/article.ts

export interface Article {
  id: string;
  title: string;
  author: string;
  label: string;
  imageUrl: string;
  content: string;
  buttonText?: string;
  createdAt: Date;
  updatedAt: Date;
}
