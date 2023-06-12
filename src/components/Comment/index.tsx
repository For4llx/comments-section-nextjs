"use client";

import { CommentList } from "../CommentList";
import { CommentAdd } from "../CommentAdd";
import { CommentContainer } from "./CommentContainer";
import { CommentContext } from "./CommentProvider";
import { useContext, useEffect, useState } from "react";
import { IComment } from "@/interfaces/comment";
import commentsData from "@/data/comments.json";

export const Comment = () => {
  const { currentUser } = useContext(CommentContext);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(commentsData);
  }, []);

  return (
    <CommentContext.Provider value={{ currentUser }}>
      <CommentContainer>
        <CommentList comments={comments} />
        <CommentAdd setComments={setComments} />
      </CommentContainer>
    </CommentContext.Provider>
  );
};
