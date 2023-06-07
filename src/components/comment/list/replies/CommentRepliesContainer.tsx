import styles from "./CommentReplies.module.scss";

interface IProps {
  children: any;
}

export const CommentRepliesContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
