import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
  commentModal: any;
  onSubmit: any;
}

export const CommentModalContainer = ({
  children,
  commentModal,
  onSubmit,
}: IProps) => {
  return (
    <dialog className={styles.dialog} ref={commentModal}>
      <form onSubmit={onSubmit} className={styles.container}>
        {children}
      </form>
    </dialog>
  );
};
