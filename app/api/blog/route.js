import connectToMongoDB from "../../../lib/mongoose";
import Blog from "../../../models/Blog";
import fs from "fs/promises";


export async function POST(req) {
  try {
    await connectToMongoDB();

    const data = await req.formData();
    const file = data.get("blogImageFile");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await fs.writeFile(`public/uploads/${file.name}`, buffer)

    const blog = await Blog.create({
      title: data.get("title"),
      author: data.get("author"),
      description: data.get("description"),
      content: data.get("content"),
      authorImageUrl: data.get("authorImageUrl"),
      blogImageFile: `/uploads/${file.name}`,
    });

    return Response.json(blog, { status: 201 });

  } catch (error) {
    console.error("POST blog error:", error);
    return Response.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    
    await connectToMongoDB();

    const blogs = await Blog.find({}, "title description blogImageFile");

    return new Response(JSON.stringify(blogs), { status: 200 })

  } catch (error) {

    return new Response(JSON.stringify({ message: "Failed to Fetch blogs" }), { status: 500 })

  }
}
