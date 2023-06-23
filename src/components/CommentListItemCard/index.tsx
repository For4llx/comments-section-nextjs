import { IComment } from "@/interfaces/comment";
import { useState } from "react";
import { CommentListItemCardAction } from "../CommentListItemCardAction";
import { CommentListItemCardContent } from "../CommentListItemCardContent";
import { CommentListItemCardCounter } from "../CommentListItemCardCounter";
import { CommentListItemCardHeader } from "../CommentListItemCardHeader";
import { CommentListItemCardContainer } from "./CommentListItemCardContainer";

interface IProps {
  comment: IComment;
  setIsDelete: any;
  setIsReply: any;
  setComments: any;
}

export const CommentListItemCard = ({
  comment,
  setIsReply,
  setIsDelete,
}: IProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [content, setContent] = useState<string>(comment.content);

  const handleEditComment = (e) => {
    e.preventDefault();
    setContent((content) => (content = e.target[0].value));
    setIsEdit((value: boolean) => !value);
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
