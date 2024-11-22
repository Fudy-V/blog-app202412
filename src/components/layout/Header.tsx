import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="../../public/fud_favicon.png" alt="ロゴアイコン" width={20} height={20}></Image>
      <nav>
        <ul>
          <li>
            <Link href={"@/app/post"}>投稿一覧</Link>
          </li>
          <li>
            <Link href={"@/app/dashboard"}>ダッシュボード</Link>
          </li>
          <li>
            <Link href={"@/app"}>このサイトについて</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
