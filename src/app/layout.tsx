import type { Metadata } from "next";
import "@/style/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "はじまりのBlog",
  description: "本格的に制作経験積んでいくその1歩目!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={` shippori-mincho-regular shippori-mincho-bold bg-[#efefef] text-[#37474F]`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
