"use client";

import { CommentList } from "../CommentList";
import { CommentAdd } from "../CommentAdd";
import { CommentContainer } from "./CommentContainer";
import { CommentContext } from "./context";
import { useContext } from "react";
export const Comment = () => {
  const { comments, currentUser } = useContext(CommentContext);
  return (
    <CommentContext.Provider value={{ comments, currentUser }}>
      <CommentContainer>
        <CommentList comments={comments} />
        <CommentAdd />
      </CommentContainer>
    </CommentContext.Provider>
  );
};
