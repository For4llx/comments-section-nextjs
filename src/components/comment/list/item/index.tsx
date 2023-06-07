import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentItemContainer } from "./CommentItemContainer";
import { Paragraph } from "@/components/app/paragraph";
import { AppButton } from "@/components/app/button";
import { CommentItemLayout } from "./CommentItemLayout";
import { CommentReplies } from "../replies";
import { AppTextarea } from "@/components/app/textarea";
import { Counter } from "@/components/counter";
import { CommentProfile } from "./profile";
import { CommentAction } from "./action";
import { CommentAdd } from "../../add";

interface IProps {
  comment: IComment;
  currentUser: IUser;
}

export const CommentItem = ({ comment, currentUser }: IProps) => {
  return (
    <CommentItemContainer>
      <CommentItemLayout
        counter={<Counter value={comment.score} />}
        profile={<CommentProfile currentUser={currentUser} comment={comment} />}
        action={<CommentAction currentUser={currentUser} comment={comment} />}
        paragraph={<Paragraph>{comment.content}</Paragraph>}
        textarea={<AppTextarea />}
        button={<AppButton>Update</AppButton>}
      />
      <CommentAdd currentUser={currentUser} />
      <CommentReplies replies={comment.replies} currentUser={currentUser} />
    </CommentItemContainer>
  );
};
