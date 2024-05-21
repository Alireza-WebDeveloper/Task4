import React from "react";
import Post from "@/app/Components/post";

const Page = () => {
  const comments = [
    { text: "Great post!", author: "John Doe" },
    { text: "I enjoyed reading this.", author: "Jane Smith" },
  ];

  const post = {
    id: 1,
    title: "10 Tips for Better Productivity",
    content:
      "In this article, we'll explore 10 practical tips to boost your productivity and get more done.",
    comments,
  };

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default Page;
