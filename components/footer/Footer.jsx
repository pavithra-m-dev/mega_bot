"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 text-[14px]">
      <div className="mx-auto max-w-7xl flex flex-col gap-3 items-center text-center sm:flex-row sm:justify-between sm:text-left">

        <div className="text-gray-600">
          © 2025 Lamamia. All rights reserved.
        </div>

        <div className="flex items-center gap-1">
          <Image src="/1.png" width={18} height={18} className="opacity-80 hover:opacity-100 cursor-pointer transition" alt="Social icon" />
          <Image src="/2.png" width={18} height={18} className="opacity-80 hover:opacity-100 cursor-pointer transition" alt="Social icon" />
          <Image src="/3.png" width={18} height={18} className="opacity-80 hover:opacity-100 cursor-pointer transition" alt="Social icon" />
          <Image src="/4.jpg" width={18} height={18} className="opacity-80 hover:opacity-100 cursor-pointer transition" alt="Social icon" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;


// h-[50px] -  h-12.5                /* height: 50px; */
// text-[14px]                       /* font-size: 14px; */
// gap-[5px]  - gap-1.25             /* gap: 5px; */ 