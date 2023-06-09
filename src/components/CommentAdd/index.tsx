import { AppButton } from "@/components/app/button";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import Image from "next/image";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddTextarea } from "./CommentAddTextarea";

interface IProps {
  currentUser: IUser;
  comment?: IComment;
}

export const CommentAdd = ({ currentUser, comment }: IProps) => {
  return (
    <CommentAddContainer>
      <CommentAddLayout
        avatar={
          <Image
            src={`/${currentUser.image.png}`}
            alt={currentUser.username}
            height={40}
            width={40}
          />
        }
        textarea={
          <CommentAddTextarea
            defaultValue={comment ? `@${comment.user.username}` : ""}
          />
        }
        button={<AppButton>Send</AppButton>}
      />
    </CommentAddContainer>
  );
};
