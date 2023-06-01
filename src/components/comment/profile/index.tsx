import { Heading } from "@/components/app/Heading";
import { Paragraph } from "@/components/app/Paragraph";
import Image from "next/image";
import avatar from "@/assets/images/avatars/image-amyrobson.png";
import { CommentProfileContainer } from "./CommentProfileContainer";
import { CommentProfileOwner } from "./CommentProfileOwner";

export const CommentProfile = () => {
  return (
    <CommentProfileContainer>
      <Image src={avatar} alt={"profile picture"} height={32} width={32} />
      <Heading>amyrobson</Heading>
      <CommentProfileOwner />
      <Paragraph>1 month ago</Paragraph>
    </CommentProfileContainer>
  );
};
