import styles from "./CommentProfile.module.scss";

interface IProps {
  children: any;
}

export const CommentProfileContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
