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
  commentModal: any;
}

export const CommentListItemAction = ({
  comment,
  currentUser,
  isEditing,
  setIsEditing,
  isReplying,
  setIsReplying,
  commentModal,
}: IProps) => {
  return (
    <CommentListItemActionContainer>
      {comment.user.username === currentUser.username && (
        <>
          <CommentListItemActionDelete
            action={() => commentModal.current.showModal()}
          />
          <CommentListItemActionEdit action={() => setIsEditing(!isEditing)} />
        </>
      )}
      <CommentListItemActionReply action={() => setIsReplying(!isReplying)} />
    </CommentListItemActionContainer>
  );
};
