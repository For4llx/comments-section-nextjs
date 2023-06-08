import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListContainer } from "./CommentListContainer";
import { CommentListItem } from "./item";

interface IProps {
  comments?: Array<IComment>;
  currentUser: IUser;
}

export const CommentList = ({ comments, currentUser }: IProps) => {
  const commentList = comments?.map((comment) => (
    <li key={comment.id}>
      <CommentListItem currentUser={currentUser} comment={comment} />
    </li>
  ));
  return (
    <>
      {commentList ? (
        <CommentListContainer>{commentList}</CommentListContainer>
      ) : null}
    </>
  );
};
