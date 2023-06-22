import { IComment } from "@/interfaces/comment";
import Image from "next/image";
import { FormEventHandler, useContext } from "react";
import { AppTextarea } from "../AppTextArea";
import { CommentContext } from "../Comment/CommentProvider";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddSubmit } from "./CommentAddSubmit";

interface IProps {
  comment?: IComment;
  onsubmit: FormEventHandler<HTMLFormElement>;
  id: number;
  targetId: number;
  targetType: string;
}

export const AppAdd = ({
  onsubmit,
  comment,
  id,
  targetId,
  targetType,
}: IProps) => {
  const { currentUser } = useContext(CommentContext);
  return (
    <CommentAddContainer
      targetType={targetType}
      targetId={targetId}
      onsubmit={onsubmit}
    >
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
          <AppTextarea
            defaultValue={comment ? `@${comment.user.username}` : ""}
          />
        }
        button={<CommentAddSubmit id={id} />}
      />
    </CommentAddContainer>
  );
};
