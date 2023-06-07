import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentList } from "..";
import { CommentRepliesContainer } from "./CommentRepliesContainer";

interface IProps {
  replies?: Array<IComment>;
  currentUser: IUser;
}

export const CommentReplies = ({ currentUser, replies }: IProps) => {
  return (
    <CommentRepliesContainer>
      <CommentList comments={replies} currentUser={currentUser} />
    </CommentRepliesContainer>
  );
};
