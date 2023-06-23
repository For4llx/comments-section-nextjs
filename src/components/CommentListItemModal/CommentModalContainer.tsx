import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
  handleDeleteComment: any;
  targetId: any;
  targetType: any;
}

export const CommentModalContainer = ({
  children,
  handleDeleteComment,
  targetId,
  targetType,
}: IProps) => {
  return (
    <dialog open className={styles.dialog}>
      <form
        data-target_type={targetType}
        data-target_id={targetId}
        onSubmit={handleDeleteComment}
        className={styles.container}
      >
        {children}
      </form>
    </dialog>
  );
};
