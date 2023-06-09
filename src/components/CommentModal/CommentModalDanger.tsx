import styles from "./CommentModal.module.scss";
import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  children: string;
}

export const CommentModalDanger = ({ children }: IProps) => {
  return (
    <button className={`${styles.danger} ${utilsStyles.bodyMediumBold}`}>
      {children}
    </button>
  );
};
