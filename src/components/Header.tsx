import Link from "next/link";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { SheetSide } from "./Sheet";
import { NavigationMenuDemo } from "./NaviagationMenu";

const Header = () => {
  return (
    <header className="flex h-[70px] w-full justify-between items-center">
      <div className="flex justify-center items-center">
        <SheetSide />
        <h1 className=" text-xl sm:text-3xl font-extrabold pl-2">SHOP.CO</h1>
      </div>
      <ul className="hidden lg:block ">
        <li className="font-light flex items-center space-x-7 ">
          <Link href={""}>
            <NavigationMenuDemo />
          </Link>
          <Link href={""}>On Sale</Link>
          <Link href={""}>New Arrivals</Link>
          <Link href={""}>Brands</Link>
        </li>
      </ul>
      <div className="hidden md:block">
        {" "}
        <div className="flex justify-between items-center rounded-[62px] bg-[#F0F0F0] h-[45px]  xl:w-[545px] ">
          <IoSearchSharp className=" text-2xl ml-4 text-slate-400" />
          <input
            placeholder="Search for products..."
            className=" h-full w-full ml-2 outline-none bg-[#F0F0F0] rounded-[62px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-7 mr-6">
        <IoSearchSharp className=" text-2xl ml-4 md:hidden" />
        <LuShoppingCart className="text-2xl" />
        <RiAccountCircleLine className="text-2xl" />
      </div>
    </header>
  );
};

//
export default Header;
