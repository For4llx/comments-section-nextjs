import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { CommentList } from "../CommentList";
import { CommentListItemRepliesList } from "./CommentListItemReplesList";
import { CommentListRepliesContainer } from "./CommentListRepliesContainer";

interface IProps {
  replies?: Array<IComment>;
  parentId: number;
  setComments: any;
}

export const CommentListItemReplies = ({
  setComments,
  replies,
  parentId,
}: IProps) => {
  return (
    <CommentListRepliesContainer>
      <CommentListItemRepliesList
        replies={replies}
        parentId={parentId}
        setComments={setComments}
      />
    </CommentListRepliesContainer>
  );
};
