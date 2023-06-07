import styles from "./CommentModal.module.scss";

interface IProps {
  children: string;
}

export const CommentModalCancel = ({ children }: IProps) => {
  return <button className={styles.cancel}>{children}</button>;
};
