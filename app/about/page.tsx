import Button from "@/components/Button/Button";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="w-full h-75 relative">
        <Image
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
          fill
          alt=""
          className="object-cover grayscale"
        />

        <div className="absolute bottom-5 left-5 bg-[#53c28b] p-1.25">
          <h1 className="text-[20px] font-bold">Digital Storytellers</h1>
          <h2 className="font-bold">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className="flex gap-25 flex-col md:flex-row">

        <div className="flex-1 mt-12.5 flex flex-col gap-7.5">
          <h1 className="text-[24px] font-bold">Who Are We?</h1>
          <p className="text-[16px] font-light text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className="flex-1 mt-12.5 flex flex-col gap-7.5">
          <h1 className="text-[24px] font-bold">What We Do?</h1>
          <p className="text-[16px] font-light text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            <br /> - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy Mobile Apps
          </p>

          <Button url="/contact" text="Contact" />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;



// h-[300px] -  h-75               /* height: 300px; */
// gap-[100px] - gap-25            /* gap: 100px; */
// mt-[50px]   - mt-12.5           /* margin-top: 50px; */
// gap-[30px]  - gap-7.5           /* gap: 30px; */
// text-[24px]                     /* font-size: 24px; */
// text-[16px]                     /* font-size: 16px; */
// p-1.25                          /* padding: 5px; */