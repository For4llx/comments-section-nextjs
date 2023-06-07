import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListConainer } from "./CommentListContainer";
import { CommentItem } from "./item";

interface IProps {
  comments?: Array<IComment>;
  currentUser: IUser;
}

export const CommentList = ({ comments, currentUser }: IProps) => {
  const commentList = comments?.map((comment) => (
    <li>
      <CommentItem currentUser={currentUser} comment={comment} />
    </li>
  ));
  return <>{commentList ? <ul>{commentList}</ul> : null}</>;
};
