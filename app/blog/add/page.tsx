"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

type FormValues = {
  title: string,
  author: string,
  blogImageFile: FileList,
  authorImageUrl: string,
  description: string,
  content: string,
};

const AddBlogPage = () => {


  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      author: "",
      blogImageFile: undefined as FileList | undefined,
      authorImageUrl: "",
      description: "",
      content: "",
    },
  })
  const { register, control, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const isEditMode = Boolean(blogId);


  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      const editBlog = await fetch(`/api/blog/${blogId}`);

      const data = await editBlog.json();
      console.log("fetch data in edit mode", data);

      reset({
        title: data.title,
        author: data.author,
        authorImageUrl: data.authorImageUrl,
        description: data.description,
        content: data.content
      })
    };
    fetchBlog();
  }, [blogId, reset])


  const onSubmit = async (data: FormValues) => {
    if (loading) return;
    setLoading(true);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("authorImageUrl", data.authorImageUrl);


    if (data.blogImageFile && data.blogImageFile.length > 0) {
      formData.append("blogImageFile", data.blogImageFile[0]);
    }

    const url = blogId ? `/api/blog/${blogId}` : "/api/blog";
    const method = blogId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: formData,
    });

    if (res.ok) {
      toast.success(blogId ? "Blog Updated successfully" : "Blog added successfully!");
      router.push("/blog");
    } else {
      toast.error("Failed to add blog");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 m-auto mt-5">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="w-screen max-w-xl bg-black/40 backdrop-blur border border-gray-700 rounded-xl p-6 shadow-lg">

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Add New Blog</h1>
            <button
              onClick={() => router.back()}
              className="text-sm text-gray-300 hover:text-white underline"
            >
              ← Back
            </button>
          </div>

          <div className="space-y-4">
            <input
              placeholder="Blog Title"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 text-white outline-none focus:border-gray-400"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
            <p className="error">{errors.title?.message}</p>

            <input
              placeholder="Author Name"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 text-white outline-none focus:border-gray-400"
              {...register("author", {
                required: {
                  value: true,
                  message: "author is required"
                },
              })}
            />
            <p className="error">{errors.author?.message}</p>

            <input
              type="file"
              accept="image/*"
              placeholder="Blog Image URL"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 text-white outline-none focus:border-gray-400"
              {...register("blogImageFile", {
                required: !isEditMode ? "Blog Image is required" : false,
                validate: (files) => {
                  if (!files || !files[0]) {
                    return isEditMode ? true : "Blog image is required";
                  }
                  if (!files[0].type.startsWith("image/"))
                    return "Only image files are allowed";
                  if (files[0].size > 2 * 1024 * 1024)
                    return "Image size must be less than 2MB";
                  return true;
                },
              })}
            />
            <p className="error">{errors.blogImageFile?.message}</p>

            <input
              type="url"
              placeholder="Author Image URL"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 text-white outline-none focus:border-gray-400"
              {...register("authorImageUrl", {
                required: "Author Image url is required",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Enter a valid URL"
                },
              })}
            />
            <p className="error">{errors.authorImageUrl?.message}</p>


            <textarea
              placeholder="Short Description"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 h-28 text-white outline-none focus:border-gray-400"
              {...register("description", {
                required: "description is required",
                minLength: {
                  value: 20,
                  message: "Description must be at least 20 characters",
                },
              })}
            />
            <p className="error">{errors.description?.message}</p>


            <textarea
              placeholder="Blog Content"
              className="w-full bg-transparent border border-gray-600 rounded-md p-2 h-38 text-white outline-none focus:border-gray-400"
              {...register("content", {
                required: "content is required",
                minLength: {
                  value: 50,
                  message: "Content must be at least 50 characters",
                },
              })}
            />
            <p className="error">{errors.content?.message}</p>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            {isEditMode && (
              <button
                type="button"
                onClick={() => router.back()}
                className="px-5 py-2 rounded-md border border-gray-600 text-gray-300
                  hover:bg-gray-700 hover:text-white transition"
              >
                Cancel
              </button>
            )}

            <button
              disabled={loading}
              className="px-5 py-2 rounded-md bg-green-500 text-black font-medium
                hover:bg-green-400 disabled:opacity-60 transition"
            >
              {loading
                ? "Saving..."
                : isEditMode
                  ? "Update Blog"
                  : "Submit"}
            </button>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AddBlogPage;
