import { AppHeadingLarge } from "../AppHeadingLarge";
import { AppParagraph } from "../AppParagraph";
import { CommentModalActions } from "./CommentModalActions";
import { CommentModalCancel } from "./CommentModalCancel";
import { CommentModalContainer } from "./CommentModalContainer";
import { CommentModalDanger } from "./CommentModalDanger";

interface IProps {
  id: number;
  setIsDelete: any;
  handleDeleteComment: any;
  targetId: any;
  targetType: any;
}

export const CommentListItemModal = ({
  id,
  setIsDelete,
  handleDeleteComment,
  targetId,
  targetType,
}: IProps) => {
  return (
    <CommentModalContainer
      targetId={targetId}
      targetType={targetType}
      handleDeleteComment={handleDeleteComment}
    >
      <AppHeadingLarge>Delete comment</AppHeadingLarge>
      <AppParagraph>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </AppParagraph>
      <CommentModalActions>
        <CommentModalCancel setIsDelete={setIsDelete}>
          No, cancel
        </CommentModalCancel>
        <CommentModalDanger id={id} />
      </CommentModalActions>
    </CommentModalContainer>
  );
};
