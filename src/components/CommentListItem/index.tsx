import { IComment } from "@/interfaces/comment";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { Counter } from "@/components/counter";
import { CommentListItemProfile } from "../CommentListItemProfile";
import { CommentListItemAction } from "../CommentListItemAction";
import { CommentAdd } from "../CommentAdd";
import { CommentListItemContent } from "../CommentListItemContent";
import { useRef, useState } from "react";
import { CommentModal } from "../CommentModal";
import { CommentListItemReplies } from "../CommentListItemReplies";

interface IProps {
  comment: IComment;
  isReply: boolean;
  parentId: number;
}

export const CommentListItem = ({ parentId, comment, isReply }: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const commentModal = useRef(null);
  if (isReply) {
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
          {isReplying && (
            <CommentAdd
              id={parentId}
              comment={comment}
              onsubmit={undefined}
              name={"CreateReply"}
            />
          )}
        </CommentListItemContainer>
        <CommentModal commentModal={commentModal} />
      </>
    );
  } else {
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
          {isReplying && (
            <CommentAdd
              name={"CreateReply"}
              comment={comment}
              onsubmit={undefined}
              id={comment.id}
            />
          )}
          {comment.replies && comment.replies.length > 0 && (
            <CommentListItemReplies
              parentId={comment.id}
              replies={comment.replies}
            />
          )}
        </CommentListItemContainer>
        <CommentModal commentModal={commentModal} />
      </>
    );
  }
};
