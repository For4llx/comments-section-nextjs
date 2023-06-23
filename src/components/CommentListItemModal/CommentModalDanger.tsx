import styles from "./CommentModal.module.scss";
import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  id: number;
}

export const CommentModalDanger = ({ id }: IProps) => {
  return (
    <input
      id={`${id}`}
      value={"Yes, delete"}
      type="submit"
      className={`${styles.danger} ${utilsStyles.bodyMediumBold}`}
    />
  );
};
