import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { Counter } from "@/components/counter";
import { CommentListItemProfile } from "../CommentListItemProfile";
import { CommentListItemAction } from "../CommentListItemAction";
import { CommentAdd } from "../CommentAdd";
import { CommentListItemContent } from "../CommentListItemContent";
import { useState } from "react";
import { CommentReplies } from "../CommentListReplies";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentListItem = ({ comment, currentUser }: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  return (
    <CommentListItemContainer>
      <CommentListItemLayout
        counter={<Counter value={comment.score} />}
        profile={
          <CommentListItemProfile currentUser={currentUser} comment={comment} />
        }
        action={
          <CommentListItemAction
            currentUser={currentUser}
            comment={comment}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isReplying={isReplying}
            setIsReplying={setIsReplying}
          />
        }
        content={
          <CommentListItemContent comment={comment} isEditing={isEditing} />
        }
      />
      {isReplying && <CommentAdd currentUser={currentUser} />}
      {comment.replies && comment.replies.length > 0 && (
        <CommentReplies replies={comment.replies} currentUser={currentUser} />
      )}
    </CommentListItemContainer>
  );
};
