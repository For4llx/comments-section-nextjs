import styles from "./CommentListItemCardContentForm.module.scss";

interface IProps {
  children: any;
  handleEditComment: any;
}

export const CommentListItemCardContentFormContainer = ({
  children,
  handleEditComment,
}: IProps) => {
  return (
    <form onSubmit={handleEditComment} className={styles.container}>
      {children}
    </form>
  );
};
