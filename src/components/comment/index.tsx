import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { Paragraph } from "../app/Paragraph";
import { Counter } from "../counter";
import { CommentAction } from "./action";
import { CommentContainer } from "./CommentContainer";
import { CommentProfile } from "./profile";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const Comment = ({ comment, currentUser }: IProps) => {
  return (
    <CommentContainer>
      <CommentProfile currentUser={currentUser} comment={comment} />
      <CommentAction currentUser={currentUser} comment={comment} />
      <Paragraph>{comment.content}</Paragraph>
      <Counter value={comment.score} />
    </CommentContainer>
  );
};
