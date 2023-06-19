import styles from "./CommentListItemCard.module.scss";

interface IProps {
  children: any;
}

export const CommentListItemCardContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
