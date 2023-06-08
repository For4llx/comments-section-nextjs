"use client";

import { CommentList } from "./list";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentAdd } from "./add";
import { CommentModal } from "./modal";
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
