import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { Counter } from "@/components/counter";
import { CommentListItemProfile } from "../CommentListItemProfile";
import { CommentListItemAction } from "../CommentListItemAction";
import { CommentAdd } from "../CommentAdd";
import { CommentListItemContent } from "../CommentListItemContent";
import { useContext, useRef, useState } from "react";
import { CommentReplies } from "../CommentListReplies";
import { CommentModal } from "../CommentModal";
import { CommentContext } from "../Comment/CommentProvider";

interface IProps {
  comment: IComment;
}

export const CommentListItem = ({ comment }: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const commentModal = useRef(null);

  return (
    <>
      <CommentListItemContainer>
        <CommentListItemLayout
          counter={<Counter value={comment.score} />}
          profile={<CommentListItemProfile comment={comment} />}
          action={
            <CommentListItemAction
              comment={comment}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              isReplying={isReplying}
              setIsReplying={setIsReplying}
              commentModal={commentModal}
            />
          }
          content={
            <CommentListItemContent comment={comment} isEditing={isEditing} />
          }
        />
        {isReplying && <CommentAdd comment={comment} />}
        {comment.replies && comment.replies.length > 0 && (
          <CommentReplies replies={comment.replies} />
        )}
      </CommentListItemContainer>
      <CommentModal commentModal={commentModal} />
    </>
  );
};
