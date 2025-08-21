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
    description: {
      type: String,
      required: [true, "Article description is required"],
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
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model<ArticleDocument>("Article", ArticleSchema);
export default Article;
