import styles from "./CommentItem.module.scss";

interface IProps {
  counter: any;
  profile: any;
  paragraph: any;
  textarea: any;
  action: any;
  button: any;
}

export const CommentItemLayout = ({
  counter,
  profile,
  action,
  paragraph,
  button,
  textarea,
}: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.profile}>{profile}</div>
      <div className={styles.action}>{action}</div>
      <div className={styles.paragraph}>{paragraph}</div>
      <div className={styles.paragraph}>{textarea}</div>
      <div className={styles.button}>{button}</div>
    </div>
  );
};
