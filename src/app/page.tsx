import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className=" px-4 text-center">
        <div className="text-4xl font-bold text-[#333] h-14 text-justify border-b-2 w-4/5 border-black hover:text-5xl transition duration-700">
          Welcome Fud Blog
        </div>
        {/* この下にいいねの多い記事を表示。。？ */}
        <h1>Title</h1>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text{" "}
          Text TextText TextText TextText TextText TextText Text Text TextText TextText TextText
          TextText TextText Text Text TextText TextText TextText Text Text TextText TextText Text
          Text TextText TextText TextText TextText TextText TextText TextText Text Text TextText
          TextText TextText TextText TextText TextText TextText TextText Text Text TextText TextText
          TextText TextText TextText TextText Text Text TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText Text
          <br />
          <br />
          <br />
          <br />
          Text TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText Text
          <br />
          <br />
          <br />
          Text TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText TextText Text
        </p>
      </main>
    </>
  );
}
