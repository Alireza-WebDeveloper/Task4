"use client";
import React from "react";
import * as Icons from "react-icons/md";
import CommentComponent from "./comment";

interface Comment {
  text: string;
  author: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  //   !! Action
  const handleDeleteComment = (commentId: number) => {
    console.log(`Deleting comment with ID ${commentId}`);
  };

  const handleLikeComment = (commentId: number) => {
    console.log(`Liking comment with ID ${commentId}`);
  };

  //   Renders
  const renderComments = () => {
    return post.comments.map((comment, index) => (
      <CommentComponent
        key={index}
        comment={comment}
        index={index}
        onDeleteComment={handleDeleteComment}
        onLikeComment={handleLikeComment}
      />
    ));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md mb-4">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6">{post.content}</p>
        <div className="flex items-center justify-between">
          <button className="flex items-center text-gray-600 hover:text-purple-500">
            <Icons.MdFavorite className="mr-1" size={"22"} />
            <span>Like</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-purple-500">
            <Icons.MdComment className="mr-1" size={"22"} />
            <span>Comment</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-4">{renderComments()}</div>
    </div>
  );
};

export default Post;
