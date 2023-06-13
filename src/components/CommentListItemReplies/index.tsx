import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentList } from "../CommentList";
import { CommentListItemRepliesList } from "./CommentListItemReplesList";
import { CommentListRepliesContainer } from "./CommentListRepliesContainer";

interface IProps {
  replies?: Array<IComment>;
  parentId: number;
}

export const CommentListItemReplies = ({ replies, parentId }: IProps) => {
  return (
    <CommentListRepliesContainer>
      <CommentListItemRepliesList replies={replies} parentId={parentId} />
    </CommentListRepliesContainer>
  );
};
