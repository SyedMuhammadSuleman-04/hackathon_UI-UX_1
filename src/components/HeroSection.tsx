import Image from "next/image";
import React from "react";

const HeroSection = () => (
  <main className="flex w-full h-full md:h-[500px] justify-between flex-col md:flex-row items-start bg-[#F2F0F1]">
    <div className="w-full md:w-[500px] space-y-5 pl-5 mt-3 md:mt-24 md:ml-24">
      <h1 className=" text-4xl   md:text-5xl font-extrabold ">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="text-sm">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button className="bg-black text-white rounded-[62px] py-3 sm:py-4 px-[120px]  sm:px-[140px] md:px-[70px]">
        Shop Now
      </button>
    </div>
    <div>
      {/* <Image src="" alt = "profile"></Image> */}

      <Image
        src={"/profil.png"}
        alt="profile-pic"
        width={300}
        height={300}
        className="w-[500px] relative mr-10"
      ></Image>
      <Image
        src={"/star.png"}
        alt="profile-pic"
        width={300}
        height={300}
        className="w-[75px] md:w-[90px] absolute  top-[410px] md:top-40 right-[22px] md:right-28"
      ></Image>
      <Image
        src={"/star.png"}
        alt="profile-pic"
        width={300}
        height={300}
        className="w-[40px] md:w-[60px] absolute top-[500px] md:top-[300px] right-[290px] md:right-[500px]"
      ></Image>
    </div>
  </main>
);

export default HeroSection;
