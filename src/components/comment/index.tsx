import { CommentList } from "./list";
import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";

interface IProps {
  comments: Array<IComment>;
  currentUser: IUser;
}

export const Comment = ({ comments, currentUser }: IProps) => {
  return <CommentList comments={comments} currentUser={currentUser} />;
};
