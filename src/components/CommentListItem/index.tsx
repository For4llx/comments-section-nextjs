import { IComment } from "@/interfaces/comment";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { useContext, useState } from "react";
import { CommentContext } from "../Comment/CommentProvider";
import { AppAdd } from "../AppAdd";
import { CommentListItemReplies } from "../CommentListItemReplies";
import { CommentListItemModal } from "../CommentListItemModal";
import { CommentListItemCard } from "../CommentListItemCard";

interface IProps {
  comment: IComment;
  parentId?: number;
  setComments: any;
}

export const CommentListItem = ({ setComments, parentId, comment }: IProps) => {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const { currentUser } = useContext(CommentContext);

  const handleCreateReply = (e) => {
    e.preventDefault();
    const newComment = {
      id: 5,
      content: e.target[0].value,
      createdAt: "1 week ago",
      replyingTo: comment.user.username,
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
    };
    setComments((previousComments: IComment[]) =>
      previousComments.map((currentComment) => {
        const targetId = e.target.dataset.target_id;

        if (currentComment.id == targetId) {
          currentComment.replies = [...currentComment.replies, newComment];
          setIsReply((previous) => !previous);
          return currentComment;
        }
        return currentComment;
      })
    );
  };

  const handleDeleteReply = (e) => {
    e.preventDefault();
    setComments((previousComments) => {
      const targetId = e.target.dataset.target_id;
      const targetType = e.target.dataset.target_type;

      if (targetType === "comment") {
        return previousComments.filter((reply) => reply.id != comment.id);
      }

      if (targetType === "reply") {
        return previousComments.map((previousComment) => {
          const updatedCommentList = previousComment.replies.filter(
            (reply) => reply.id != comment.id
          );
          previousComment.replies = updatedCommentList;
          return previousComment;
        });
      }
    });
  };

  return (
    <CommentListItemContainer>
      <CommentListItemCard
        comment={comment}
        setIsEdit={setIsEdit}
        setIsDelete={setIsDelete}
        setIsReply={setIsReply}
        isEdit={isEdit}
        setComments={setComments}
      />
      {isReply && (
        <AppAdd
          comment={comment}
          onsubmit={handleCreateReply}
          id={comment.id}
          targetId={parentId ? parentId : comment.id}
          targetType={parentId ? "reply" : "comment"}
        />
      )}
      {comment.replies && comment.replies.length > 0 && (
        <CommentListItemReplies
          parentId={comment.id}
          replies={comment.replies}
          setComments={setComments}
        />
      )}
      {isDelete && (
        <CommentListItemModal
          handleDeleteComment={handleDeleteReply}
          setIsDelete={setIsDelete}
          id={comment.id}
          targetId={parentId ? parentId : comment.id}
          targetType={parentId ? "reply" : "comment"}
        />
      )}
    </CommentListItemContainer>
  );
};
