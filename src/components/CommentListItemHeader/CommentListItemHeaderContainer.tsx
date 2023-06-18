import styles from "./CommentListItemHeader.module.scss";

interface IProps {
  children: any;
}

export const CommentListItemProfileContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
