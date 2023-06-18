import styles from "./CommentModal.module.scss";

interface IProps {
  children: any;
  handleDeleteComment: any;
  parentId: any;
}

export const CommentModalContainer = ({
  children,
  handleDeleteComment,
  parentId,
}: IProps) => {
  return (
    <dialog open className={styles.dialog}>
      <form
        data-parent_id={parentId}
        onSubmit={handleDeleteComment}
        className={styles.container}
      >
        {children}
      </form>
    </dialog>
  );
};
