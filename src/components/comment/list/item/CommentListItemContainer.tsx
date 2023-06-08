import styles from "./CommentListItem.module.scss";

interface IProps {
  children: any;
}

export const CommentListItemContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
