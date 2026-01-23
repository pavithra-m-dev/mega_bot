import Button from "@/components/Button/Button";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="px-6 max-w-300 mx-auto">
      <h1 className="text-[32px] sm:text-[40px] md:text-[45px] mb-12 text-center font-semibold">
        Let&apos;s Keep in Touch
      </h1>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-25 md:flex-row items-center">

        <div className="flex-1 flex justify-center items-center w-full">
          <Image src="/contact.png"
            alt="Contact"
            width={500}
            height={500}
            className="object-contain w-full max-w-125 h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <form className="flex-1 flex flex-col gap-5 w-full">
          <input
            type="text"
            placeholder="name"
            className="p-2.5 bg-transparent border-2 border-[#bbb] outline-none text-[#bbb] text-[15px] font-bold rounded-sm"
          />

          <input
            type="email"
            placeholder="email"
            className="p-2.5 bg-transparent border-2 border-[#bbb] outline-none text-[#bbb] text-[15px] font-bold rounded-sm"
          />

          <textarea
            placeholder="message"
            rows={5}
            className="p-2.5 bg-transparent border-2 border-[#bbb] outline-none text-[#bbb] text-[15px] font-bold rounded-sm resize-none"
          ></textarea>

          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

// max-w-[1200px]    - max-w-300            /* max-width: 1200px; */
// text-[32px]       - text-[32px]          /* font-size: 32px; */
// text-[40px]       - sm:text-[40px]       /* font-size: 40px; */
// text-[45px]       - md:text-[45px]       /* font-size: 45px; */
// mb-[48px]        - mb-12                /* margin-bottom: 48px; */
// gap-[48px]       - gap-12               /* gap: 48px; */
// gap-[64px]       - md:gap-16            /* gap: 64px; */
// gap-[100px]      - lg:gap-[100px]       /* gap: 100px; */
