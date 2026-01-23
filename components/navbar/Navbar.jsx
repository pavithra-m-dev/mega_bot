"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/darkModeToggle";
import { LuMenu } from "react-icons/lu";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-20 flex items-center justify-between w-full sticky top-0 z-50 px-4 py-1">
      <Link href="/about" className="font-bold text-[22px]"> Next Dev </Link>

      <div className="hidden md:flex items-center gap-5">
        <DarkModeToggle />

        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        <button onClick={() => console.log("Logged out")} className="px-3 py-1 bg-[#53c28b] text-white rounded">
          Log out
        </button>
      </div>

      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}> <LuMenu /> </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <DarkModeToggle />

          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setOpen(false)} className="text-lg"> {link.title} </Link>
          ))}

          <button onClick={() => { setOpen(false); console.log("Logged out"); }}
            className="px-4 py-2 bg-[#53c28b] text-white rounded"
          > Log out </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


//  /* h-25 */ height: 100px;
//  /* px-[9px]  - px-2.25 */ padding-left: 9px; padding-right: 9px;
//  /* py-[3px]  - py-0.75 */ padding-top: 3px; padding-bottom: 3px;
//  /* text-[22px] */ font-size: 22px;
//  /* bg-[#53c28b] */ background-color: #53c28b;