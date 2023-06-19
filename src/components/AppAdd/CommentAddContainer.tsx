import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: any;
  targetId: number;
}

export const CommentAddContainer = ({
  children,
  onsubmit,
  targetId,
}: IProps) => {
  return (
    <form
      data-target_id={targetId.toString()}
      onSubmit={onsubmit}
      className={styles.container}
    >
      {children}
    </form>
  );
};
