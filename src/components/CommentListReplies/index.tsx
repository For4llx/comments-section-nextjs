import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentList } from "../CommentList";
import { CommentListRepliesContainer } from "./CommentListRepliesContainer";

interface IProps {
  replies?: Array<IComment>;
}

export const CommentReplies = ({ replies }: IProps) => {
  return (
    <CommentListRepliesContainer>
      <CommentList comments={replies} />
    </CommentListRepliesContainer>
  );
};
