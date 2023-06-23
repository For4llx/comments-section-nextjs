import styles from "./CommentModal.module.scss";
import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  children: string;
  setIsDelete: any;
}

export const CommentModalCancel = ({ children, setIsDelete }: IProps) => {
  return (
    <button
      onClick={() => setIsDelete((previous: boolean) => !previous)}
      className={`${styles.cancel} ${utilsStyles.bodyMediumBold}`}
      type="button"
    >
      {children}
    </button>
  );
};
