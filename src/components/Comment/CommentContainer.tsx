import utilsStyles from "../../styles/utils.module.scss";
import styles from "./Comment.module.scss";
interface IProps {
  children: React.ReactNode;
}

export const CommentContainer = ({ children }: IProps) => {
  return (
    <div className={`${utilsStyles.container} ${styles.container}`}>
      {children}
    </div>
  );
};
