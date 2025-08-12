import mongoose, { Schema, Document } from "mongoose";
import { TArticle } from "./article.interface";

interface ArticleDocument extends TArticle, Document {}

const ArticleSchema = new Schema<ArticleDocument>(
  {
    title: {
      type: String,
      required: [true, "Article title is required"],
      unique: true,
    },
    excerpt: {
      type: String,
      required: [true, "Article excerpt is required"],
    },
    date: {
      type: String,
      required: [true, "Article date is required"],
    },
    readTime: {
      type: String,
      required: [true, "Read time is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    category: {
      type: String,
      required: [true, "Article category is required"],
    },
    image: {
      type: String,
      required: [true, "Article image is required"],
    },
    href: {
      type: String,
      required: [true, "Article link is required"],
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt fields
  }
);

const Article = mongoose.model<ArticleDocument>("Articlesss", ArticleSchema);
export default Article;
