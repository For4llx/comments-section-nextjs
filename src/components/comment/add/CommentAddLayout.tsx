import styles from "./CommentAdd.module.scss";

interface IProps {
  avatar: any;
  textarea: any;
  button: any;
}

export const CommentAddLayout = ({ avatar, textarea, button }: IProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.content}>{textarea}</div>
      <div className={styles.button}>{button}</div>
    </div>
  );
};
