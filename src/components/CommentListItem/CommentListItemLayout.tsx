import styles from "./CommentListItem.module.scss";

interface IProps {
  counter: any;
  profile: any;
  content: any;
  action: any;
}

export const CommentListItemLayout = ({
  counter,
  profile,
  action,
  content,
}: IProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.profile}>{profile}</div>
      <div className={styles.action}>{action}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
