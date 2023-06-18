import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { useContext } from "react";
import { CommentContext } from "../Comment/CommentProvider";
import { CommentListItemActionContainer } from "./CommentListItemActionContainer";
import { CommentListItemActionDelete } from "./CommentListItemActionDelete";
import { CommentListItemActionEdit } from "./CommentListItemActionEdit";
import { CommentListItemActionReply } from "./CommentListItemActionReply";

interface IProps {
  comment: IComment;
  setIsEdit: any;
  setIsDelete: any;
  setIsReply: any;
}

export const CommentListItemActions = ({
  comment,
  setIsReply,
  setIsEdit,
  setIsDelete,
}: IProps) => {
  const { currentUser } = useContext(CommentContext);

  return (
    <CommentListItemActionContainer>
      {comment.user.username === currentUser.username && (
        <>
          <CommentListItemActionDelete setIsDelete={setIsDelete} />
          <CommentListItemActionEdit setIsEdit={setIsEdit} />
        </>
      )}
      <CommentListItemActionReply setIsReply={setIsReply} />
    </CommentListItemActionContainer>
  );
};
