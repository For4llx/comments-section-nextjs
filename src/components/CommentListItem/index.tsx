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
  setComments: Function;
}

export const CommentListItem = ({ setComments, parentId, comment }: IProps) => {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const { currentUser } = useContext(CommentContext);

  const handleCreateReply = (e) => {
    e.preventDefault();
    const targetId = e.target.dataset.target_id;
    const content = e.target[0].value.split(" ").slice(1).join(" ");
    const newComment = {
      id: 5,
      content: content,
      createdAt: "Just now",
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
    setComments((previousComments: IComment[]) => {
      return previousComments.map((currentComment) => {
        if (currentComment.id == targetId) {
          currentComment.replies = [...currentComment.replies, newComment];
          setIsReply((previous) => !previous);
          return currentComment;
        }
        return currentComment;
      });
    });
  };

  const handleDeleteReply = (e: FormEv) => {
    e.preventDefault();
    setComments((previousComments) => {
      const targetType = e.target.dataset.target_type;
      const targetId = e.target.dataset.target_id;

      if (targetType === "comment") {
        return previousComments.filter(
          (currentReply) => currentReply.id != comment.id
        );
      }

      if (targetType === "reply") {
        return previousComments.map((previousComment) => {
          if (previousComment.id == targetId) {
            const updatedCommentList = previousComment.replies.filter(
              (reply) => reply.id != comment.id
            );
            previousComment.replies = updatedCommentList;
            return previousComment;
          }
          return previousComment;
        });
      }
    });
  };

  return (
    <CommentListItemContainer>
      <CommentListItemCard
        comment={comment}
        setIsDelete={setIsDelete}
        setIsReply={setIsReply}
        setComments={setComments}
      />
      {isReply && (
        <AppAdd
          comment={comment}
          onsubmit={handleCreateReply}
          id={comment.id}
          targetType={parentId ? "reply" : "comment"}
          targetId={parentId ? parentId : comment.id}
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
          targetType={parentId ? "reply" : "comment"}
          targetId={parentId ? parentId : comment.id}
        />
      )}
    </CommentListItemContainer>
  );
};
