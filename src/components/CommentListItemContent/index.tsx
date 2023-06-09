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
}

export const CommentListItemContent = ({ comment, isEditing }: IProps) => {
  return (
    <CommentListItemContentContainer>
      {isEditing ? (
        <>
          <CommentAddTextarea defaultValue={comment.content} />
          <AppButton>Update</AppButton>
        </>
      ) : (
        <Paragraph>
          {comment.replyingTo && (
            <>
              <CommentListItemContentReplyingTo comment={comment} />{" "}
            </>
          )}
          {comment.content}
        </Paragraph>
      )}
    </CommentListItemContentContainer>
  );
};
