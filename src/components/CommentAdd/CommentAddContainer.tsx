import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: any;
  name: string;
}

export const CommentAddContainer = ({ name, children, onsubmit }: IProps) => {
  return (
    <form name={name} onSubmit={onsubmit} className={styles.container}>
      {children}
    </form>
  );
};
