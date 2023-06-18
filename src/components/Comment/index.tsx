"use client";

import { CommentList } from "../CommentList";
import { CommentContainer } from "./CommentContainer";
import { useContext, useState } from "react";
import { CommentContext } from "./CommentProvider";
import commentsInitialData from "@/data/comments.json";
import { AppAdd } from "../AppAdd";
export const Comment = () => {
  const { currentUser } = useContext(CommentContext);
  const [comments, setComments] = useState(commentsInitialData);

  const handleCreateComment = (e) => {
    e.preventDefault();
    const newComment = {
      id: 5,
      content: e.target[0].value,
      createdAt: "1 week ago",
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
    };
    setComments((previousComments) => [...previousComments, newComment]);
  };

  return (
    <CommentContext.Provider value={{ currentUser }}>
      <CommentContainer>
        <CommentList setComments={setComments} comments={comments} />
        <AppAdd onsubmit={handleCreateComment} id={0} parentId={0} />
      </CommentContainer>
    </CommentContext.Provider>
  );
};
