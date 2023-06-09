import styles from "./CommentModal.module.scss";
import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  children: string;
}

export const CommentModalCancel = ({ children }: IProps) => {
  return (
    <button className={`${styles.cancel} ${utilsStyles.bodyMediumBold}`}>
      {children}
    </button>
  );
};
