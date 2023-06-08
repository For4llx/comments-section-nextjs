import styles from "./CommentListItemContent.module.scss";

interface IProps {
  children: any;
}

export const CommentListItemContentContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
