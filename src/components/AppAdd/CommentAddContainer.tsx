import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: any;
  targetId: number;
  targetType: any;
}

export const CommentAddContainer = ({
  children,
  onsubmit,
  targetId,
  targetType,
}: IProps) => {
  return (
    <form
      data-target_type={targetType}
      data-target_id={targetId.toString()}
      onSubmit={onsubmit}
      className={styles.container}
    >
      {children}
    </form>
  );
};
