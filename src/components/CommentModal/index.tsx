import { HeadingLarge } from "@/components/app/headingLarge";
import { Paragraph } from "@/components/app/paragraph";
import { CommentModalActions } from "./CommentModalActions";
import { CommentModalCancel } from "./CommentModalCancel";
import { CommentModalContainer } from "./CommentModalContainer";
import { CommentModalDanger } from "./CommentModalDanger";

export const CommentModal = () => {
  return (
    <CommentModalContainer>
      <HeadingLarge>Delete comment</HeadingLarge>
      <Paragraph>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </Paragraph>
      <CommentModalActions>
        <CommentModalCancel>No, cancel</CommentModalCancel>
        <CommentModalDanger>Yes, delete</CommentModalDanger>
      </CommentModalActions>
    </CommentModalContainer>
  );
};
