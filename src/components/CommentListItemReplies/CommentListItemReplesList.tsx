import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentListContainer } from "../CommentList/CommentListContainer";
import { CommentListItem } from "../CommentListItem";

interface IProps {
  replies?: Array<IComment>;
  parentId: number;
}

export const CommentListItemRepliesList = ({ replies, parentId }: IProps) => {
  const commentList = replies?.map((reply) => (
    <li key={reply.id}>
      <CommentListItem isReply={true} comment={reply} parentId={parentId} />
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
