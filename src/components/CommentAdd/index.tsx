import { IComment } from "@/interfaces/comment";
import Image from "next/image";
import { useContext } from "react";
import { CommentContext } from "../Comment/CommentProvider";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddSubmit } from "./CommentAddSubmit";
import { CommentAddTextarea } from "./CommentAddTextarea";

interface IProps {
  comment?: IComment;
  onsubmit: any;
  id: number;
  parentId: number | false;
}

export const CommentAdd = ({ onsubmit, comment, id, parentId }: IProps) => {
  const { currentUser } = useContext(CommentContext);
  return (
    <CommentAddContainer parentId={parentId} onsubmit={onsubmit}>
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
        button={<CommentAddSubmit id={id} />}
      />
    </CommentAddContainer>
  );
};
