import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { useContext } from "react";
import { CommentContext } from "../Comment/context";
import { CommentListItemActionContainer } from "./CommentListItemActionContainer";
import { CommentListItemActionDelete } from "./CommentListItemActionDelete";
import { CommentListItemActionEdit } from "./CommentListItemActionEdit";
import { CommentListItemActionReply } from "./CommentListItemActionReply";

interface IProps {
  comment: IComment;
  isEditing: boolean;
  setIsEditing: any;
  isReplying: boolean;
  setIsReplying: any;
  commentModal: any;
}

export const CommentListItemAction = ({
  comment,
  isEditing,
  setIsEditing,
  isReplying,
  setIsReplying,
  commentModal,
}: IProps) => {
  const { currentUser } = useContext(CommentContext);

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
