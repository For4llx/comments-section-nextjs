import { Paragraph } from "@/components/app/paragraph";
import { IComment } from "@/interfaces/comment";
import { CommentAddTextarea } from "../AppAdd/CommentAddTextarea";
import { CommentListItemContentForm } from "../CommentListItemCardContentForm";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";
import { CommentListItemContentReplyingTo } from "./CommentListItemContentReplyingTo";

interface IProps {
  comment: IComment;
  isEdit: boolean;
  id: number;
  handleEditComment: any;
  content: string;
}

export const CommentListItemCardContent = ({
  id,
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
          id={id}
        />
      ) : (
        <Paragraph>
          {comment.replyingTo && (
            <CommentListItemContentReplyingTo comment={comment} />
          )}
          {content}
        </Paragraph>
      )}
    </CommentListItemContentContainer>
  );
};
