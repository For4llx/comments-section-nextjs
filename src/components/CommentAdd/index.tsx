import { AppButton } from "@/components/app/button";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import Image from "next/image";
import { useContext } from "react";
import { CommentContext } from "../Comment/context";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddTextarea } from "./CommentAddTextarea";

interface IProps {
  comment?: IComment;
}

export const CommentAdd = ({ comment }: IProps) => {
  const { currentUser } = useContext(CommentContext);
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
        button={<AppButton onClick={() => {}}>Send</AppButton>}
      />
    </CommentAddContainer>
  );
};
