import React from "react";

const posts = [
  {
    id: "1",
    title: "Test1",
    content: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
    authorId: "123",
    createdAt: "2022-1-3",
    updatedAt: "2022-2-14",
  },
  {
    id: "2",
    title: "Test2",
    content: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
    authorId: "123",
    createdAt: "2022-1-3",
    updatedAt: "2022-2-14",
  },
  {
    id: "3",
    title: "Test3",
    content: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
    authorId: "123",
    createdAt: "2022-1-3",
    updatedAt: "2022-2-14",
  },
];

const page = () => {
  return (
    <div className="pt-[15vh]">
      <ul className="w-[100%] overflow-hidden">
        {posts.map((post) => {
          return (
            <li key={post.id} className="block w-[80%] my-10 mx-2 bg-[#E3F2FD]">
              <div className=" flex flex-row w-[80%] justify-between">
                <h3 className=" inline-block text-xl">Title:{post.title}</h3>
                <span className="inline-block text-sm">{post.createdAt}</span>
              </div>
              <p className="py-5">{post.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
