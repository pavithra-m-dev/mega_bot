import fs from "fs";
import path from "path";
import connectToMongoDB from "../../../../lib/mongoose";
import Blog from "../../../../models/Blog";

export async function GET(request, { params }) {
  try {
    const { id } = await params
    await connectToMongoDB();

    const blog = await Blog.findById(id);

    if (!blog) {
      return new Response(
        JSON.stringify({ message: "Blog not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(blog), { status: 200 });

  } catch (error) {
    console.error("Error fetching blog by id:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    await connectToMongoDB();

    const updateData = {
      title: formData.get("title")?.toString(),
      author: formData.get("author")?.toString(),
      description: formData.get("description")?.toString(),
      content: formData.get("content")?.toString(),
      authorImageUrl: formData.get("authorImageUrl")?.toString(),
    };

    const image = formData.get("blogImageFile");

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${image.name}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      fs.writeFileSync(uploadPath, buffer);
      updateData.blogImageFile = `/uploads/${fileName}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    return Response.json(updatedBlog, { status: 200 });

  } catch (error) {
    console.error("Update Error:", error);
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await connectToMongoDB();

    // find the blog first
    const blog = await Blog.findById(id);
    console.log("blog", blog);

    if (!blog) {
      return new Response(
        JSON.stringify({ message: "Blog not found" }),
        { status: 404 }
      )
    }

    // Find the local image path to delete the local files
    
    if (blog.blogImageFile) {

       const fileName = blog.blogImageFile.replace("/uploads/", "");
       const imagePath = path.join( process.cwd(),"public","uploads",fileName);
       
       if(fs.existsSync(imagePath)){
         fs.unlinkSync(imagePath);
       }
    }

    // Delete blog from the db

    await Blog.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ message: "Blog deleted successfully"}),
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

