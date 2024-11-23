import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "@/components/ui/Buttton/Dropdown";

const Header = () => {
  return (
    <div className=" fixed z-10 mt-1 mb-3 px-5 flex flex-row justify-between items-center ">
      <Link href="/">
        <Image src="/fud_favicon.png" alt="ロゴアイコン" width={100} height={100}></Image>
      </Link>
      <nav>
        <ul className=" h-[80%]">
          <li className=" py-1  m-1 rounded-md  hover:bg-[#a9daf3b0] ">
            <Link href="/post">
              <span className=" block cursor-pointer w-[100%]">投稿一覧</span>
            </Link>
          </li>
          <li className=" py-1  m-1 rounded-md  hover:bg-[#a9daf3b0] ">
            <Dropdown url={"/dashboard"} title={"プロフィール"} />
          </li>
          <li className=" py-1  m-1 rounded-md  hover:bg-[#a9daf3b0] ">
            <Link href="/">このサイトについて</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
