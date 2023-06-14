import { IComment } from "@/interfaces/comment";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { Counter } from "@/components/counter";
import { CommentListItemProfile } from "../CommentListItemProfile";
import { CommentListItemAction } from "../CommentListItemAction";
import { CommentAdd } from "../CommentAdd";
import { CommentListItemContent } from "../CommentListItemContent";
import { useContext, useRef, useState } from "react";
import { CommentModal } from "../CommentModal";
import { CommentListItemReplies } from "../CommentListItemReplies";
import { CommentContext } from "../Comment/CommentProvider";

interface IProps {
  comment: IComment;
  isReply: boolean;
  parentId: number;
  setComments: any;
}

export const CommentListItem = ({
  setComments,
  parentId,
  comment,
  isReply,
}: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const commentModal = useRef(null);
  const { currentUser } = useContext(CommentContext);

  const handleCreateReplyRoot = (e) => {
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
    setComments((previousComments) =>
      previousComments.map((previousComment) => {
        if (previousComment.id === comment.id) {
          previousComment.replies = [...comment.replies, newComment];
          return previousComment;
        }
        return previousComment;
      })
    );
  };

  const handleCreateReplyChildren = (e) => {
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
    setComments((previousComments) =>
      previousComments.map((previousComment) => {
        if (previousComment.id == e.target[1].id) {
          previousComment.replies = [...previousComment.replies, newComment];
          return previousComment;
        }
        return previousComment;
      })
    );
  };

  const handleDeleteComment = (e) => {
    e.preventDefault();
    setComments((previousComments) =>
      previousComments.filter(
        (previousComment) => previousComment.id != comment.id
      )
    );
  };

  const handleDeleteCommentChildren = (e) => {
    e.preventDefault();
    setComments((previousComments) => {
      return previousComments.map((previousComment) => {
        if (previousComment.id == e.target[1].id) {
          const newList = previousComment.replies.filter(
            (reply) => reply.id != comment.id
          );
          previousComment.replies = newList;
        }
        return previousComment;
      });
    });
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    setComments((previousComments) =>
      previousComments.map((previousComment) => {
        if (previousComment.id === comment.id) {
          previousComment.content = e.target[0].value;
          setIsEditing(!isEditing);
          return previousComment;
        }
        return previousComment;
      })
    );
  };

  const handleEditCommentChildren = (e) => {
    e.preventDefault();
    setComments((previousComments) => {
      return previousComments.map((previousComment) => {
        if (previousComment.id == e.target[1].id) {
          const newList = previousComment.replies.map((reply) => {
            if (reply.id == comment.id) {
              reply.content = e.target[0].value;
              setIsEditing(!isEditing);
              return reply;
            }
            return reply;
          });
        }
        return previousComment;
      });
    });
  };

  if (isReply) {
    return (
      <>
        <CommentListItemContainer>
          <CommentListItemLayout
            counter={<Counter value={comment.score} />}
            profile={<CommentListItemProfile comment={comment} />}
            action={
              <CommentListItemAction
                comment={comment}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                isReplying={isReplying}
                setIsReplying={setIsReplying}
                commentModal={commentModal}
              />
            }
            content={
              <CommentListItemContent
                onSubmit={handleEditCommentChildren}
                comment={comment}
                isEditing={isEditing}
                id={parentId}
              />
            }
          />
          {isReplying && (
            <CommentAdd
              id={parentId}
              comment={comment}
              onsubmit={handleCreateReplyChildren}
              name={"CreateReply"}
            />
          )}
        </CommentListItemContainer>
        <CommentModal
          onSubmit={handleDeleteCommentChildren}
          commentModal={commentModal}
          id={parentId}
        />
      </>
    );
  } else {
    return (
      <>
        <CommentListItemContainer>
          <CommentListItemLayout
            counter={<Counter value={comment.score} />}
            profile={<CommentListItemProfile comment={comment} />}
            action={
              <CommentListItemAction
                comment={comment}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                isReplying={isReplying}
                setIsReplying={setIsReplying}
                commentModal={commentModal}
              />
            }
            content={
              <CommentListItemContent
                onSubmit={handleEditComment}
                comment={comment}
                isEditing={isEditing}
              />
            }
          />
          {isReplying && (
            <CommentAdd
              name={"CreateReply"}
              comment={comment}
              onsubmit={handleCreateReplyRoot}
              id={comment.id}
            />
          )}
          {comment.replies && comment.replies.length > 0 && (
            <CommentListItemReplies
              parentId={comment.id}
              replies={comment.replies}
              setComments={setComments}
            />
          )}
        </CommentListItemContainer>
        <CommentModal
          commentModal={commentModal}
          onSubmit={handleDeleteComment}
          id={comment.id}
        />
      </>
    );
  }
};
