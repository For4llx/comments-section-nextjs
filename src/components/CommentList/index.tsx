import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListContainer } from "./CommentListContainer";
import { CommentListItem } from "../CommentListItem";

interface IProps {
  comments?: Array<IComment>;
  setComments: any;
}

export const CommentList = ({ setComments, comments }: IProps) => {
  const commentList = comments?.map((comment) => (
    <li key={comment.id}>
      <CommentListItem
        setComments={setComments}
        isReply={false}
        comment={comment}
        parentId={-1}
      />
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
