import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentList } from "..";
import { CommentListRepliesContainer } from "./CommentListRepliesContainer";

interface IProps {
  replies?: Array<IComment>;
  currentUser: IUser;
}

export const CommentReplies = ({ currentUser, replies }: IProps) => {
  return (
    <CommentListRepliesContainer>
      <CommentList comments={replies} currentUser={currentUser} />
    </CommentListRepliesContainer>
  );
};
