import styles from "./CommentListItemAction.module.scss";

interface IProps {
  children: any;
}

export const CommentListItemActionContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
