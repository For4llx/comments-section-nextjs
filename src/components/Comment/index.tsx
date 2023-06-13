"use client";

import { CommentList } from "../CommentList";
import { CommentAdd } from "../CommentAdd";
import { CommentContainer } from "./CommentContainer";
import { useContext, useState } from "react";
import { CommentContext } from "./CommentProvider";
import commentsInitialData from "@/data/comments.json";
export const Comment = () => {
  const { currentUser } = useContext(CommentContext);
  const [comments, setComments] = useState(commentsInitialData);

  const handleCreateComment = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.name === "createComment") {
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
    }
  };

  return (
    <CommentContext.Provider value={{ currentUser }}>
      <CommentContainer>
        <CommentList comments={comments} />
        <CommentAdd
          name={"createComment"}
          onsubmit={handleCreateComment}
          id={0}
        />
      </CommentContainer>
    </CommentContext.Provider>
  );
};
