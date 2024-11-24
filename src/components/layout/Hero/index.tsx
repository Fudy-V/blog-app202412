import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0">
      <Image
        src="/hero.jpg"
        alt="Hero画像"
        width={1500}
        height={1000}
        className=" w-[100vw] relative z-0"
      ></Image>
      <strong className=" inset-center z-10 text-xl text-[#eef] text-nowrap cursor-default">
        Fud Blog 〜音楽情緒溢れる日常〜
      </strong>
    </div>
  );
};

export default Hero;
