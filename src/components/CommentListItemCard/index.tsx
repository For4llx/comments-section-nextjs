import { IComment } from "@/interfaces/comment";
import { useState } from "react";
import { CommentListItemCardAction } from "../CommentListItemCardAction";
import { CommentListItemCardContent } from "../CommentListItemCardContent";
import { CommentListItemCardCounter } from "../CommentListItemCardCounter";
import { CommentListItemCardHeader } from "../CommentListItemCardHeader";
import { CommentListItemCardContainer } from "./CommentListItemCardContainer";

interface IProps {
  comment: IComment;
  setIsEdit: any;
  setIsDelete: any;
  setIsReply: any;
  isEdit: boolean;
  setComments: any;
}

export const CommentListItemCard = ({
  comment,
  isEdit,
  setIsReply,
  setIsEdit,
  setIsDelete,
}: IProps) => {
  const [content, setContent] = useState<string>(comment.content);

  const handleEditComment = (e) => {
    e.preventDefault();
    setContent((content) => (content = e.target[0].value));
    setIsEdit((isEdit: boolean) => !isEdit);
  };

  return (
    <CommentListItemCardContainer>
      <CommentListItemCardHeader comment={comment} />
      <CommentListItemCardAction
        comment={comment}
        setIsEdit={setIsEdit}
        setIsDelete={setIsDelete}
        setIsReply={setIsReply}
      />
      <CommentListItemCardCounter score={comment.score} />
      <CommentListItemCardContent
        comment={comment}
        isEdit={isEdit}
        handleEditComment={handleEditComment}
        content={content}
      />
    </CommentListItemCardContainer>
  );
};
