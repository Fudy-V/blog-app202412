import CreatePostButton from "@/components/ui/Buttton/CreatePostButton";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen relative z-0">
        {/* サイドバー */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col pt-[15vh]">
          <div className="p-4 text-lg font-bold">My Dashboard</div>
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-white ">
              ホーム
            </Link>
            <Link href="#" className="block text-gray-300 hover:text-white ">
              プロファイル
            </Link>
            <Link href="#" className="block text-gray-300 hover:text-white ">
              設定
            </Link>
            <Link href="#" className="block text-red-500 hover:text-red-700 ">
              ログアウト
            </Link>
          </nav>
        </aside>

        {/* メインコンテンツ */}
        <main className="flex-1 p-8 bg-gray-50 pt-[15vh]">
          <h1 className="text-2xl font-bold">ダッシュボード</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded">ウィジェット 1</div>
            <div className="p-4 bg-white shadow rounded">ウィジェット 2</div>
            <div className="p-4 bg-white shadow rounded">ウィジェット 3</div>
          </div>
          <CreatePostButton />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
