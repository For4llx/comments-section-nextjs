import styles from "./CommentItem.module.scss";

interface IProps {
  counter: any;
  profile: any;
  paragraph: any;
  action: any;
}

export const CommentItemContainer = ({
  counter,
  profile,
  action,
  paragraph,
}: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.profile}>{profile}</div>
      <div className={styles.action}>{action}</div>
      <div className={styles.paragraph}>{paragraph}</div>
    </div>
  );
};
