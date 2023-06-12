import { AppButton } from "@/components/app/button";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import Image from "next/image";
import { useContext } from "react";
import { CommentContext } from "../Comment/CommentProvider";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddLayout } from "./CommentAddLayout";
import { CommentAddSubmit } from "./CommentAddSubmit";
import { CommentAddTextarea } from "./CommentAddTextarea";

interface IProps {
  comment?: IComment;
  setComments: any;
}

export const CommentAdd = ({ comment, setComments }: IProps) => {
  const { currentUser } = useContext(CommentContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newComment = {
      id: 5,
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "maxblagun",
      user: {
        image: {
          png: "./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp",
        },
        username: "ramsesmiron",
      },
    };
    setComments((prevComments: IComment[]) => [...prevComments, newComment]);
  };
  return (
    <CommentAddContainer onsubmit={handleSubmit}>
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
        button={<CommentAddSubmit />}
      />
    </CommentAddContainer>
  );
};
