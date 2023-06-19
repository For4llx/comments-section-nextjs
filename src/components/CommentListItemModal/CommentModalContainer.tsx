import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
  handleDeleteComment: any;
  targetId: any;
}

export const CommentModalContainer = ({
  children,
  handleDeleteComment,
  targetId,
}: IProps) => {
  return (
    <dialog open className={styles.dialog}>
      <form
        data-target_id={targetId}
        onSubmit={handleDeleteComment}
        className={styles.container}
      >
        {children}
      </form>
    </dialog>
  );
};
