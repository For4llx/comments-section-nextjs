import styles from "./CommentListItemCardContentForm.module.scss";

interface IProps {
  children: any;
  handleEditComment: any;
  id: any;
}

export const CommentListItemCardContentFormContainer = ({
  children,
  handleEditComment,
  id,
}: IProps) => {
  return (
    <form id={id} onSubmit={handleEditComment} className={styles.container}>
      {children}
    </form>
  );
};
