"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Search, ShoppingCart, Heart, CircleUserRound } from "lucide-react";

interface Navlinks {
    name: string;
    link: string;
}
function Navbar() { 
  return (
    <>
      {/* upper nav  */}
      <div className="bg-white h-20 flex  py-2.5 font-mulish justify-between px-4 sm:px-0 sm:justify-around">
        <Link href="/">
          <Image
            src="/images/dahlia-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="h-12 w-[60%] lg:ml-10 xl:ml-16 my-auto rounded relative hidden sm:block">
          <input
            type="text"
            className="w-full h-full pl-6 focus:outline-none focus:shadow rounded border border-primary-titleColor"
            placeholder="What are you looking for ?"
            name="navSearch"
          />
          <Search className="absolute right-4 top-2.5 text-primary-titleColor" />
        </div>

        <div className="flex items-center justify">
          <ShoppingCart className="text-primary-titleColor rotate" />
          <Heart className="ml-4 text-primary-titleColor rotate" />
          <CircleUserRound className="ml-4 text-primary-titleColor rotate" />
        </div>
      </div>

      {/* lower nav */}
    </>
  );
}

export default Navbar;
