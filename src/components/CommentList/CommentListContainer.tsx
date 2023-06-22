import styles from "./CommentList.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const CommentListContainer = ({ children }: IProps) => {
  return <ul className={styles.container}>{children}</ul>;
};
