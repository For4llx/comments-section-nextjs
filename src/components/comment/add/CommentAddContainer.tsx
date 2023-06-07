import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
}

export const CommentAddContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
