import { HeadingLarge } from "@/components/app/headingLarge";
import { Paragraph } from "@/components/app/paragraph";
import { CommentModalActions } from "./CommentModalActions";
import { CommentModalCancel } from "./CommentModalCancel";
import { CommentModalContainer } from "./CommentModalContainer";
import { CommentModalDanger } from "./CommentModalDanger";

interface IProps {
  id: number;
  setIsDelete: any;
  handleDeleteComment: any;
  parentId: any;
}

export const CommentListItemModal = ({
  id,
  setIsDelete,
  handleDeleteComment,
  parentId,
}: IProps) => {
  return (
    <CommentModalContainer
      parentId={parentId}
      handleDeleteComment={handleDeleteComment}
    >
      <HeadingLarge>Delete comment</HeadingLarge>
      <Paragraph>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </Paragraph>
      <CommentModalActions>
        <CommentModalCancel setIsDelete={setIsDelete}>
          No, cancel
        </CommentModalCancel>
        <CommentModalDanger id={id} />
      </CommentModalActions>
    </CommentModalContainer>
  );
};
