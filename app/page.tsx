import Image from "next/image";
import Hero from "@/public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="flex items-center gap-25 flex-col md:flex-row">
      <div className="flex-1 flex flex-col gap-12.5">
        <h1 className="font-bold text-[52px] leading-[1.2] bg-linear-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>

        <p className="text-[#9ca3af] text-[18px] font-light">
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>

        <Button url="/portfolio" text="See Our Works" />
      </div>

      <div className="flex-1 flex justify-center">
        <Image src={Hero} alt="" width={370} height={370} className="object-cover" />
      </div>
    </div>
  );
}


// gap-[100px]     - gap-25                 /* gap: 100px; */
// leading-[62px]  - leading-normal         /* line-height: 62px; */
// text-[18px]                              /* font-size: 18px; */
// font-[300]      - font-light             /* font-weight: 300; */
