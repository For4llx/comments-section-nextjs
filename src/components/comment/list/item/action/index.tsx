import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListItemActionContainer } from "./CommentListItemActionContainer";
import { CommentListItemActionDelete } from "./CommentListItemActionDelete";
import { CommentListItemActionEdit } from "./CommentListItemActionEdit";
import { CommentListItemActionReply } from "./CommentListItemActionReply";

interface IProps {
  comment: IComment;
  currentUser: IUser;
  isEditing: boolean;
  setIsEditing: any;
  isReplying: boolean;
  setIsReplying: any;
}

export const CommentListItemAction = ({
  comment,
  currentUser,
  isEditing,
  setIsEditing,
  isReplying,
  setIsReplying,
}: IProps) => {
  return (
    <CommentListItemActionContainer>
      {comment.user.username === currentUser.username && (
        <>
          <CommentListItemActionDelete />
          <CommentListItemActionEdit action={() => setIsEditing(!isEditing)} />
        </>
      )}
      <CommentListItemActionReply action={() => setIsReplying(!isReplying)} />
    </CommentListItemActionContainer>
  );
};
