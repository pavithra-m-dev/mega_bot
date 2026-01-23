import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    author: String,
    blogImageFile: String,
    authorImageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
