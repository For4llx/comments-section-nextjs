import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListItemActionContainer } from "./CommentListItemActionContainer";
import { CommentListItemActionDelete } from "./CommentListItemActionDelete";
import { CommentListItemActionEdit } from "./CommentListItemActionEdit";
import { CommentListItemActionReply } from "./CommentListItemActionReply";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentListItemAction = ({ comment, currentUser }: IProps) => {
  return (
    <CommentListItemActionContainer>
      <CommentListItemActionDelete />
      <CommentListItemActionEdit />
      <CommentListItemActionReply />
    </CommentListItemActionContainer>
  );
};
