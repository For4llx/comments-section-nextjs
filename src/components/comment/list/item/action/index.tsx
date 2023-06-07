import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentActionContainer } from "./CommentActionContainer";
import { CommentActionDelete } from "./CommentActionDelete";
import { CommentActionEdit } from "./CommentActionEdit";
import { CommentActionReply } from "./CommentActionReply";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentAction = ({ comment, currentUser }: IProps) => {
  return (
    <CommentActionContainer>
      <CommentActionDelete />
      <CommentActionEdit />
      <CommentActionReply />
    </CommentActionContainer>
  );
};
