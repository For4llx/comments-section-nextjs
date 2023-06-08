import styles from "./CommentListItem.module.scss";

interface IProps {
  counter: any;
  profile: any;
  paragraph: any;
  textarea: any;
  action: any;
  button: any;
}

export const CommentListItemLayout = ({
  counter,
  profile,
  action,
  paragraph,
  button,
  textarea,
}: IProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.profile}>{profile}</div>
      <div className={styles.action}>{action}</div>
      <div className={styles.paragraph}>{paragraph}</div>
      <div className={styles.paragraph}>{textarea}</div>
      <div className={styles.button}>{button}</div>
    </div>
  );
};
