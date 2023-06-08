import { AppButton } from "@/components/app/button";
import { IUser } from "@/interfaces/user";
import Image from "next/image";
import { CommentAddContainer } from "./CommentAddContainer";
import { CommentAddTextarea } from "./CommentAddTextarea";

interface IProps {
  currentUser: IUser;
}

export const CommentAdd = ({ currentUser }: IProps) => {
  return (
    <CommentAddContainer>
      <Image
        src={`/${currentUser.image.png}`}
        alt={currentUser.username}
        height={40}
        width={40}
      />
      <CommentAddTextarea />
      <AppButton>Send</AppButton>
    </CommentAddContainer>
  );
};
