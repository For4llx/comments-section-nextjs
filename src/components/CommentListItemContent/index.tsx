import { AppButton } from "@/components/app/button";
import { Paragraph } from "@/components/app/paragraph";
import { CommentAddTextarea } from "@/components/CommentAdd/CommentAddTextarea";
import { IComment } from "@/interfaces/comment";
import { useState } from "react";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";
import { CommentListItemContentReplyingTo } from "./CommentListItemContentReplyingTo";

interface IProps {
  comment: IComment;
  isEditing: boolean;
  onSubmit: any;
  id?: number;
}

export const CommentListItemContent = ({
  onSubmit,
  comment,
  isEditing,
  id,
}: IProps) => {
  return (
    <CommentListItemContentContainer>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <CommentAddTextarea defaultValue={comment.content} />
          <input id={`${id}`} value="Update" type="submit" />
        </form>
      ) : (
        <Paragraph>
          {comment.replyingTo && (
            <>
              <CommentListItemContentReplyingTo comment={comment} />
            </>
          )}
          {comment.content}
        </Paragraph>
      )}
    </CommentListItemContentContainer>
  );
};
