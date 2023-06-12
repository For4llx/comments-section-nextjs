import { Heading } from "@/components/app/heading";
import { Paragraph } from "@/components/app/paragraph";
import Image from "next/image";
import { CommentListItemProfileContainer } from "./CommentListItemProfileContainer";
import { CommentListItemProfileOwner } from "./CommentListItemProfileOwner";
import { IUser } from "@/interfaces/user";
import { IComment } from "@/interfaces/comment";
import { CommentContext } from "../Comment/CommentProvider";
import { useContext } from "react";

interface IProps {
  comment: IComment;
}

export const CommentListItemProfile = ({ comment }: IProps) => {
  const { currentUser } = useContext(CommentContext);
  return (
    <CommentListItemProfileContainer>
      <Image
        src={`/${comment.user.image.png}`}
        alt={comment.user.username}
        height={32}
        width={32}
      />
      <Heading>{comment.user.username}</Heading>
      {comment.user.username === currentUser.username && (
        <CommentListItemProfileOwner />
      )}
      <Paragraph>{comment.createdAt}</Paragraph>
    </CommentListItemProfileContainer>
  );
};
