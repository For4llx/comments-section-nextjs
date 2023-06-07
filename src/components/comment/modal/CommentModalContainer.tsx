import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
}

export const CommentModalContainer = ({ children }: IProps) => {
  return (
    <dialog open className={styles.container}>
      {children}
    </dialog>
  );
};
