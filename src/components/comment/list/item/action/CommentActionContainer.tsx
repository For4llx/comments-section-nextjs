import styles from "./CommentAction.module.scss";

interface IProps {
  children: any;
}

export const CommentActionContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
