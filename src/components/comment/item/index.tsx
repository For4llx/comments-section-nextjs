import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { Counter } from "../../counter";
import { CommentAction } from "../action";
import { CommentItemContainer } from "./CommentItemContainer";
import { CommentProfile } from "../profile";
import { Paragraph } from "@/components/app/paragraph";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentItem = ({ comment, currentUser }: IProps) => {
  return (
    <CommentItemContainer
      counter={<Counter value={comment.score} />}
      profile={<CommentProfile currentUser={currentUser} comment={comment} />}
      action={<CommentAction currentUser={currentUser} comment={comment} />}
      paragraph={<Paragraph>{comment.content}</Paragraph>}
    />
  );
};
