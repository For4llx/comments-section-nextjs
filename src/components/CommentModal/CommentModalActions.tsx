import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
}

export const CommentModalActions = ({ children }: IProps) => {
  return <div className={styles.actions}>{children}</div>;
};
