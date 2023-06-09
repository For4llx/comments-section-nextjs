import { AppButton } from "@/components/app/button";
import { Paragraph } from "@/components/app/paragraph";
import { CommentAddTextarea } from "@/components/CommentAdd/CommentAddTextarea";
import { IComment } from "@/interfaces/comment";
import { useState } from "react";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";

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
        <Paragraph>{comment.content}</Paragraph>
      )}
    </CommentListItemContentContainer>
  );
};
