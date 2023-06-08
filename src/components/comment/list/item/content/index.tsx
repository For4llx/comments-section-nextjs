import { AppButton } from "@/components/app/button";
import { Paragraph } from "@/components/app/paragraph";
import { CommentAddTextarea } from "@/components/comment/add/CommentAddTextarea";
import { IComment } from "@/interfaces/comment";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";

interface IProps {
  comment: IComment;
}

export const CommentListItemContent = ({ comment }: IProps) => {
  return (
    <CommentListItemContentContainer>
      <Paragraph>{comment.content}</Paragraph>
      <CommentAddTextarea />
      <AppButton>Update</AppButton>
    </CommentListItemContentContainer>
  );
};
