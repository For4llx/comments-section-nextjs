import { IComment } from "@/interfaces/comment";
import { CommentListContainer } from "./CommentListContainer";
import { CommentListItem } from "../CommentListItem";

interface IProps {
  comments?: Array<IComment>;
  setComments: any;
}

export const CommentList = ({ setComments, comments }: IProps) => {
  const commentList = comments?.map((comment) => (
    <li key={comment.id}>
      <CommentListItem setComments={setComments} comment={comment} />
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
