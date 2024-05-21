"use client";
import React from "react";
import * as Icons from "react-icons/md";
import ButtonContainer from "../Common/Main/ButtonContainer";

interface Comment {
  text: string;
  author: string;
}

interface CommentProps {
  comment: Comment;
  index: number;
  onDeleteComment: (index: number) => void;
  onLikeComment: (index: number) => void;
}

const CommentComponent: React.FC<CommentProps> = ({
  comment,
  index,
  onDeleteComment,
  onLikeComment,
}) => {
  return (
    <div key={index} className="mb-2">
      <p className="text-gray-800">{comment.text}</p>
      <p className="text-gray-600">By: {comment.author}</p>
      <div className="flex justify-between mt-2">
        <ButtonContainer
          onClick={() => onDeleteComment(index)}
          fontSize="small"
          color="red"
        >
          Delete
        </ButtonContainer>

        <button
          className="text-gray-500 hover:text-purple-500"
          onClick={() => onLikeComment(index)}
        >
          <Icons.MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default CommentComponent;
