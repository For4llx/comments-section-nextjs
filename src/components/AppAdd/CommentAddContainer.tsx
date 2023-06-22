import { FormEventHandler } from "react";
import styles from "./CommentAdd.module.scss";

interface IProps {
  children: any;
  onsubmit: FormEventHandler<HTMLFormElement>;
  targetId: number;
  targetType: string;
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
