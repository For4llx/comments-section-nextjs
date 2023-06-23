import Image from "next/image";
import { CommentListItemHeaderContainer } from "./CommentListItemHeaderContainer";
import { CommentListItemHeaderOwner } from "./CommentListItemHeaderOwner";
import { IComment } from "@/interfaces/comment";
import { CommentContext } from "../Comment/CommentProvider";
import { useContext } from "react";
import { AppParagraph } from "../AppParagraph";
import { AppHeading } from "../AppHeading";

interface IProps {
  comment: IComment;
}

export const CommentListItemCardHeader = ({ comment }: IProps) => {
  const { currentUser } = useContext(CommentContext);
  return (
    <CommentListItemHeaderContainer>
      <Image
        src={`/${comment.user.image.png}`}
        alt={comment.user.username}
        height={32}
        width={32}
      />
      <AppHeading>{comment.user.username}</AppHeading>
      {comment.user.username === currentUser.username && (
        <CommentListItemHeaderOwner />
      )}
      <AppParagraph>{comment.createdAt}</AppParagraph>
    </CommentListItemHeaderContainer>
  );
};
