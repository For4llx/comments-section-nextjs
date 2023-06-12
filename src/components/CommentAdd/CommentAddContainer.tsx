import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: any;
}

export const CommentAddContainer = ({ children, onsubmit }: IProps) => {
  return (
    <form onSubmit={onsubmit} className={styles.container}>
      {children}
    </form>
  );
};
