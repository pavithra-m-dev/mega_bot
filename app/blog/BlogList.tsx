import Link from "next/link";
import Image from "next/image";
import BlogActions from "./BlogActions";
import { MdOutlineEditNote } from "react-icons/md";

type Blog = {
    _id: string;
    title: string;
    description: string;
    blogImageFile: string;
};

type BlogListProps = {
    blogs: Blog[];
};

const BlogList = ({ blogs }: BlogListProps) => {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-6">

            <div className="flex justify-end mb-8">
                <Link href="/blog/add">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition">
                        Add Blog
                    </button>
                </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((item) => (
                    <div key={item._id} className="flex flex-col gap-4">

                        <Link href={`/blog/${item._id}`}>
                            <div className="relative w-full h-56">
                                {item.blogImageFile && (
                                    <Image
                                        src={item.blogImageFile}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                )}
                            </div>
                        </Link>

                        <div className="flex flex-col gap-2">
                            <Link href={`/blog/${item._id}`}>
                                <h2 className="text-base font-medium font-sans">
                                    {item.title}
                                </h2>
                            </Link>

                            <p className="text-xs text-gray-500 font-sans line-clamp-3 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex justify-between mt-2">
                                <Link
                                    href={`/blog/${item._id}`}
                                    className="text-xs underline text-gray-400 font-sans"
                                >
                                    Read more
                                </Link>

                                <div className="flex gap-2 items-center">
                                    <Link href={`/blog/add?id=${item._id}`}>
                                        <MdOutlineEditNote size={18} className="text-gray-400" />
                                    </Link>

                                    <BlogActions id={item._id} />
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;


// px-[16px] sm:px-[24px] lg:px-[48px] - px-4 sm:px-6 lg:px-12   /* padding-left & padding-right: 16px, 24px, 48px */
// py-[24px] - py-6                     /* padding-top & padding-bottom: 24px; */
// gap-[24px] - gap-6                   /* gap: 24px; */


