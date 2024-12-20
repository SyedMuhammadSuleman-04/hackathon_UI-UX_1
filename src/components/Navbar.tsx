import React from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <main className=" bg-[#000] w-full h-[38px] flex justify-center items-center relative">
      <div className="flex justify-center items-center text-white">
        <h3 className=" text-xs sm:font-medium sm:text-sm ">
          Sign up and get 20% off to your first order.{" "}
        </h3>
        <button className="ml-2 text-xs sm:text-lg underline">
          Sign Up Now
        </button>
      </div>
      <RxCross2 className="hidden sm:block right-[90px] font-extrabold text-white absolute" />
    </main>
  );
};

export default Navbar;
