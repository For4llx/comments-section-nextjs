"use client";

import { CommentList } from "../CommentList";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentAdd } from "../CommentAdd";
import { CommentModal } from "../CommentModal";
import { CommentContainer } from "./CommentContainer";

interface IProps {
  comments: Array<IComment>;
  currentUser: IUser;
}

export const Comment = ({ comments, currentUser }: IProps) => {
  return (
    <CommentContainer>
      <CommentModal />
      <CommentList comments={comments} currentUser={currentUser} />
      <CommentAdd currentUser={currentUser} />
    </CommentContainer>
  );
};
