import styles from "./CommentListReplies.module.scss";

interface IProps {
  children: any;
}

export const CommentListRepliesContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
