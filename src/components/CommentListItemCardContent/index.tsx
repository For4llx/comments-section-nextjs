import { IComment } from "@/interfaces/comment";
import { AppParagraph } from "@/components/AppParagraph";
import { CommentListItemContentForm } from "../CommentListItemCardContentForm";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";
import { CommentListItemContentReplyingTo } from "./CommentListItemContentReplyingTo";

interface IProps {
  comment: IComment;
  isEdit: boolean;
  handleEditComment: any;
  content: string;
}

export const CommentListItemCardContent = ({
  comment,
  isEdit,
  handleEditComment,
  content,
}: IProps) => {
  return (
    <CommentListItemContentContainer>
      {isEdit ? (
        <CommentListItemContentForm
          handleEditComment={handleEditComment}
          content={content}
        />
      ) : (
        <AppParagraph>
          {comment.replyingTo && (
            <CommentListItemContentReplyingTo comment={comment} />
          )}{" "}
          {content}
        </AppParagraph>
      )}
    </CommentListItemContentContainer>
  );
};
