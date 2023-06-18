import { IComment } from "@/interfaces/comment";
import { CommentListItemContainer } from "./CommentListItemContainer";
import { CommentListItemLayout } from "./CommentListItemLayout";
import { useContext, useRef, useState } from "react";
import { CommentContext } from "../Comment/CommentProvider";
import { Counter } from "../CommentListItemCounter";
import { CommentListItemHeader } from "../CommentListItemHeader";
import { CommentListItemActions } from "../CommentListItemActions";
import { CommentListItemContent } from "../CommentListItemContent";
import { AppAdd } from "../AppAdd";
import { CommentListItemReplies } from "../CommentListItemReplies";
import { CommentModal } from "../CommentListItemModal";

interface IProps {
  comment: IComment;
  parentId?: number;
  setComments: any;
}

export const CommentListItem = ({ setComments, parentId, comment }: IProps) => {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [content, setContent] = useState<string>(comment.content);
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
        console.log(e.target);
        const targetId = e.target.dataset.parent_id
          ? e.target.dataset.parent_id
          : comment.id;

        if (currentComment.id == targetId) {
          currentComment.replies = [...currentComment.replies, newComment];
          setIsReply((previous) => !previous);
          return currentComment;
        }
        return currentComment;
      })
    );
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    setContent((previous) => (previous = e.target[0].value));
    setIsEdit((previous) => !previous);
  };

  const handleDeleteComment = (e) => {
    e.preventDefault();
    setComments((previousComments) =>
      previousComments.map((previousComment) => {
        const targetId = e.target.dataset.parent_id;
        console.log(targetId);
        if (previousComment.id == targetId) {
          const updatedCommentList = previousComment.replies.filter(
            (reply) => reply.id != comment.id
          );
          previousComment.replies = updatedCommentList;
          return previousComment;
        }
        return previousComment;
      })
    );
  };

  return (
    <>
      <CommentListItemContainer>
        <CommentListItemLayout
          counter={<Counter value={comment.score} />}
          profile={<CommentListItemHeader comment={comment} />}
          action={
            <CommentListItemActions
              comment={comment}
              setIsEdit={setIsEdit}
              setIsDelete={setIsDelete}
              setIsReply={setIsReply}
            />
          }
          content={
            <CommentListItemContent
              handleEditComment={handleEditComment}
              comment={comment}
              isEdit={isEdit}
              id={comment.id}
              content={content}
            />
          }
        />
        {isReply && (
          <AppAdd
            comment={comment}
            onsubmit={handleCreateReply}
            id={comment.id}
            parentId={parentId ? "" : ""}
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
      {isDelete && (
        <CommentModal
          handleDeleteComment={handleDeleteComment}
          setIsDelete={setIsDelete}
          id={comment.id}
          parentId={parentId ? parentId : comment.id}
        />
      )}
    </>
  );
};

/*


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

/*
  if (isReplyy) {
    return (
      <>
        <CommentListItemContainer>
          <CommentListItemLayout
            counter={<Counter value={comment.score} />}
            profile={<CommentListItemProfile comment={comment} />}
            action={
              <CommentListItemAction
                comment={comment}
                setIsReply={setIsReply}
                setIsEdit={setIsEdit}
                setIsDelete={setIsDelete}
              />
            }
            content={
              <CommentListItemContent
                comment={comment}
                id={parentId}
                isEdit={isEdit}
              />
            }
          />
          {isReply && (
            <CommentAdd
              id={parentId}
              comment={comment}
              onsubmit={undefined}  handleCreateReplyChildren 
              name={"CreateReply"}
            />
          )}
        </CommentListItemContainer>
        <CommentModal
          onSubmit={undefined} handleDeleteCommentChildren
          setIsDelete={setIsDelete}
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
                setIsEdit={setIsEdit}
                setIsDelete={setIsDelete}
                setIsReply={setIsReply}
              />
            }
            content={
              <CommentListItemContent
                comment={comment}
                id={comment.id}
                isEdit={isEdit}
              />
            }
          />
          {isReply && (
            <CommentAdd
              name={"CreateReply"}
              comment={comment}
              onsubmit={undefined} handleCreateReplyRoot
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
          setIsDelete={setIsDelete}
          onSubmit={undefined} handleDeleteComment
          id={comment.id}
        />
      </>
    );
  }
};
*/
