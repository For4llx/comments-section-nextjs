import { CommentActionContainer } from "./CommentActionContainer";
import { CommentActionDelete } from "./CommentActionDelete";
import { CommentActionEdit } from "./CommentActionEdit";
import { CommentActionReply } from "./CommentActionReply";

export const CommentAction = () => {
  return (
    <CommentActionContainer>
      <CommentActionDelete />
      <CommentActionEdit />
      <CommentActionReply />
    </CommentActionContainer>
  );
};
