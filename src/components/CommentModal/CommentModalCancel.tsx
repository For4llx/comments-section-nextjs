import styles from "./CommentModal.module.scss";
import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  children: string;
  action: any;
}

export const CommentModalCancel = ({ children, action }: IProps) => {
  return (
    <button
      onClick={action}
      className={`${styles.cancel} ${utilsStyles.bodyMediumBold}`}
    >
      {children}
    </button>
  );
};
