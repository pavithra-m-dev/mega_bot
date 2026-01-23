"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { GoMoon } from "react-icons/go";
import { AiFillSun } from "react-icons/ai";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="
        relative cursor-pointer flex items-center justify-between border border-[#53c28b70] rounded-full p-0.5

        /* Mobile */
        w-10 h-5 px-0.5

        /* Tablet */
        sm:w-11 sm:h-6 sm:px-0.5

        /* Desktop */
        md:w-12 md:h-6.5
      "
    >
      <span className="text-[10px] sm:text-[12px] md:text-[14px]"><GoMoon />
      </span>

      <span className="text-[10px] sm:text-[12px] md:text-[14px]"><AiFillSun /></span>

      <div
        className="absolute rounded-full bg-[#53c28b] transition-all duration-300

          /* Mobile */
          w-4 h-4

          /* Tablet */
          sm:w-4.5 sm:h-4.5

          /* Desktop */
          md:w-5 md:h-5
        "
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;



// p-[2px]              -p-0.5                /* padding: 2px; */
// w-[44px] h-[22px]    - w-11 h-5.5          /* width: 44px; height: 22px; */
// w-[48px] h-[25px]    - sm:w-12 sm:h-6.25   /* width: 48px; height: 25px; */
// w-[52px] h-[28px]    - md:w-13 md:h-7      /* width: 52px; height: 28px; */
// w-[16px] h-[16px]    - w-4 h-4             /* width: 16px; height: 16px; */
// w-[18px] h-[18px]    - sm:w-4.5 sm:h-4.5   /* width: 18px; height: 18px; */
// w-[20px] h-[20px]    - md:w-5 md:h-5       /* width: 20px; height: 20px; */


// w-10 h-5 px-0.5
// sm:w-11 sm:h-6 sm:px-0.5
// md:w-12 md:h-6.5
