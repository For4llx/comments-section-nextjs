import { Paragraph } from "@/components/app/paragraph";
import { CommentAddTextarea } from "@/components/CommentAdd/CommentAddTextarea";
import { IComment } from "@/interfaces/comment";
import { CommentListItemContentContainer } from "./CommentListItemContentContainer";
import { CommentListItemContentReplyingTo } from "./CommentListItemContentReplyingTo";

interface IProps {
  comment: IComment;
  isEdit: boolean;
  id: number;
  handleEditComment: any;
  content: string;
}

export const CommentListItemContent = ({
  id,
  comment,
  isEdit,
  handleEditComment,
  content,
}: IProps) => {
  return (
    <CommentListItemContentContainer>
      {isEdit ? (
        <form onSubmit={handleEditComment}>
          <CommentAddTextarea defaultValue={content} />
          <input value={"Update"} id={id.toString()} type="submit" />
        </form>
      ) : (
        <Paragraph>
          {comment.replyingTo && (
            <>
              <CommentListItemContentReplyingTo comment={comment} />{" "}
            </>
          )}
          {content}
        </Paragraph>
      )}
    </CommentListItemContentContainer>
  );
};
