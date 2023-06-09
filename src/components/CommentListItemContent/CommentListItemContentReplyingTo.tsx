import { IComment } from "@/interfaces/comment";
import utilsStyles from "@/styles/utils.module.scss";
import styles from "./CommentListItemContent.module.scss";

interface IProps {
  comment: IComment;
}

export const CommentListItemContentReplyingTo = ({ comment }: IProps) => {
  return (
    <em className={`${styles.replyingTo} ${utilsStyles.bodyMediumBold}`}>
      @{comment.replyingTo}
    </em>
  );
};
