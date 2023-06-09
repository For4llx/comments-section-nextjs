import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
  commentModal: any;
}

export const CommentModalContainer = ({ children, commentModal }: IProps) => {
  return (
    <dialog className={styles.dialog} ref={commentModal}>
      <div className={styles.container}>{children}</div>
    </dialog>
  );
};
