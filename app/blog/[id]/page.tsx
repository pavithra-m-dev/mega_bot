import { notFound } from "next/navigation";
import Image from "next/image";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store", // SSR (good for detail page)  
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data;
}

type BlogPostProps = {
  params: {
    id: string
  }
}

const BlogPost = async ({ params }: BlogPostProps) => {

  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-w-300 mx-auto px-2 py-3">
      <div className="flex flex-col gap-8 md:flex-row md:gap-6">

        <div className="flex-1 flex flex-col justify-between gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-gray-500">
            {data.title}
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base font-sans text-gray-500 leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={data.authorImageUrl}
                alt="Author"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>

            <span className="text-sm font-medium text-gray-500 leading-none"> {data.author} </span>
          </div>
        </div>

        {data.blogImageFile && (
          <div className="w-full relative h-50 sm:h-60 md:h-75 md:flex-1">
            <Image
              src={data.blogImageFile}
              alt="Blog"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
      </div>

      <div className="mt-12">
        <p className="mt-8 text-xs sm:text-sm md:text-base font-serif text-gray-500 leading-relaxed text-justify">
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;


// max-w-[1200px]    - max-w-300            /* max-width: 1200px; */
// px-[24px]         - px-6                 /* padding-left: 24px; padding-right: 24px; */
// py-[32px]         - py-8                 /* padding-top: 32px; padding-bottom: 32px; */
// gap-[32px]        - gap-8                /* gap: 32px; */
// gap-[24px]        - md:gap-6             /* gap: 24px; */
// text-[24px]       - text-[24px]          /* font-size: 24px; */
// text-[28px]       - sm:text-[28px]       /* font-size: 28px; */
