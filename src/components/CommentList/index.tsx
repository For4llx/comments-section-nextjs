import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListContainer } from "./CommentListContainer";
import { CommentListItem } from "../CommentListItem";

interface IProps {
  comments?: Array<IComment>;
}

export const CommentList = ({ comments }: IProps) => {
  const commentList = comments?.map((comment) => (
    <li key={comment.id}>
      <CommentListItem comment={comment} />
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
