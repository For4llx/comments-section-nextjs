import { IComment } from "@/interfaces/comment";
import Image from "next/image";
import { useContext } from "react";
import { AppTextarea } from "../AppTextArea";
import { CommentContext } from "../Comment/CommentProvider";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddSubmit } from "./CommentAddSubmit";

interface IProps {
  comment?: IComment;
  onsubmit: any;
  id: number;
  targetId: number;
}

export const AppAdd = ({ onsubmit, comment, id, targetId }: IProps) => {
  const { currentUser } = useContext(CommentContext);
  return (
    <CommentAddContainer targetId={targetId} onsubmit={onsubmit}>
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
