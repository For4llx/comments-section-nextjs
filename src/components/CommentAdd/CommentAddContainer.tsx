import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: any;
  parentId: number | false;
}

export const CommentAddContainer = ({
  children,
  onsubmit,
  parentId,
}: IProps) => {
  return (
    <form
      data-parent_id={parentId ? parentId.toString() : false}
      onSubmit={onsubmit}
      className={styles.container}
    >
      {children}
    </form>
  );
};
