import styles from "./CommentList.module.scss";

interface IProps {
  children: any;
}

export const CommentListContainer = ({ children }: IProps) => {
  return <ul className={styles.container}>{children}</ul>;
};
