import styles from "./CommentModal.module.scss";

interface IProps {
  children: string;
}

export const CommentModalDanger = ({ children }: IProps) => {
  return <button className={styles.danger}>{children}</button>;
};
