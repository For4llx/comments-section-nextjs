import { Heading } from "@/components/app/Heading";
import { Paragraph } from "@/components/app/Paragraph";
import Image from "next/image";
import { CommentProfileContainer } from "./CommentProfileContainer";
import { CommentProfileOwner } from "./CommentProfileOwner";
import { IUser } from "@/interfaces/user";
import { IComment } from "@/interfaces/comment";

interface IProps {
  currentUser: IUser;
  comment: IComment;
}

export const CommentProfile = ({ currentUser, comment }: IProps) => {
  return (
    <CommentProfileContainer>
      <Image src={""} alt={comment.user.username} height={32} width={32} />
      <Heading>{comment.user.username}</Heading>
      {currentUser.username === comment.user.username && (
        <CommentProfileOwner />
      )}
      <Paragraph>{comment.createdAt}</Paragraph>
    </CommentProfileContainer>
  );
};
