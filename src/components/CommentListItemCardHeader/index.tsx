import { Heading } from "@/components/app/heading";
import { Paragraph } from "@/components/app/paragraph";
import Image from "next/image";
import { CommentListItemHeaderContainer } from "./CommentListItemHeaderContainer";
import { CommentListItemHeaderOwner } from "./CommentListItemHeaderOwner";
import { IUser } from "@/interfaces/user";
import { IComment } from "@/interfaces/comment";
import { CommentContext } from "../Comment/CommentProvider";
import { useContext } from "react";

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
      <Heading>{comment.user.username}</Heading>
      {comment.user.username === currentUser.username && (
        <CommentListItemHeaderOwner />
      )}
      <Paragraph>{comment.createdAt}</Paragraph>
    </CommentListItemHeaderContainer>
  );
};
