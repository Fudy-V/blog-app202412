import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Serif_JP } from "next/font/google";
import "@/style/globals.css";
import Header from "@/components/layout/Header";

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

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
      <body className={`${mincho.className} ${notoSerif.className} bg-[#efefef] text-[#37474F]`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
