import { HeadingLarge } from "@/components/app/headingLarge";
import { Paragraph } from "@/components/app/paragraph";
import { CommentModalActions } from "./CommentModalActions";
import { CommentModalCancel } from "./CommentModalCancel";
import { CommentModalContainer } from "./CommentModalContainer";
import { CommentModalDanger } from "./CommentModalDanger";

interface IProps {
  commentModal: any;
}

export const CommentModal = ({ commentModal }: IProps) => {
  return (
    <CommentModalContainer commentModal={commentModal}>
      <HeadingLarge>Delete comment</HeadingLarge>
      <Paragraph>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </Paragraph>
      <CommentModalActions>
        <CommentModalCancel action={() => commentModal.current.close()}>
          No, cancel
        </CommentModalCancel>
        <CommentModalDanger>Yes, delete</CommentModalDanger>
      </CommentModalActions>
    </CommentModalContainer>
  );
};
