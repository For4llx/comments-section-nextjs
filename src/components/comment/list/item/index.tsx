import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { Paragraph } from "@/components/app/paragraph";
import { AppButton } from "@/components/app/button";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { CommentReplies } from "../replies";
import { Counter } from "@/components/counter";
import { CommentListItemProfile } from "./profile";
import { CommentListItemAction } from "./action";
import { CommentAdd } from "../../add";
import { CommentAddTextarea } from "../../add/CommentAddTextarea";
import { CommentListItemContent } from "./content";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentListItem = ({ comment, currentUser }: IProps) => {
  return (
    <CommentListItemContainer>
      <CommentListItemLayout
        counter={<Counter value={comment.score} />}
        profile={
          <CommentListItemProfile currentUser={currentUser} comment={comment} />
        }
        action={
          <CommentListItemAction currentUser={currentUser} comment={comment} />
        }
        content={<CommentListItemContent comment={comment} />}
      />
      <CommentAdd currentUser={currentUser} />
      {comment.replies && comment.replies.length > 0 && (
        <CommentReplies replies={comment.replies} currentUser={currentUser} />
      )}
    </CommentListItemContainer>
  );
};
