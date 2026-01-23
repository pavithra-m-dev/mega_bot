import BlogList from "./BlogList";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <BlogList blogs={blogs} />;
}