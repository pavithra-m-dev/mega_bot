import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  const data = items[cat as keyof typeof items];
  if (data) return data;
  return notFound();
};

const CategoryPage = async ({ params}: { params: Promise<{ category: string }>}) => {
  const { category } = await params;
  const data = getData(category);

  return (
    <div className="w-full max-w-none">
      <h1 className="text-[#53c28b] text-3xl mb-10 capitalize">
        {category}
      </h1>

      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col gap-7.5 mt-12.5 mb-25 sm:flex-row sm:gap-12.5 ${index % 2 !== 0 ? "sm:flex-row-reverse" : ""} `}>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-[28px] sm:text-[40px]"> {item.title} </h1>
            <p className="text-[16px] sm:text-[20px] leading-relaxed"> {item.desc} </p>
            <Button text="See More" url="#" />
          </div>

          <div className="flex-1 relative min-w-0 h-55 sm:h-100 md:h-125">
            <Image src={item.image} alt="" height={450} width={450} className="object-cover rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

// gap-[30px]         - gap-7.5             gap: 30px;
// mt-[50px]          - mt-10               margin-top: 50px;
// mb-[100px]         - mb-25               margin-bottom: 100px;
// h-[220px]          - h-55                height: 220px;
// h-[400px]          - sm:h-100            height: 400px;
// h-[500px]          - md:h-125            height: 500px;


