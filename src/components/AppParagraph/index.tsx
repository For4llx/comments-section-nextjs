import utilsStyles from "@/styles/utils.module.scss";
import styles from "./AppParagraph.module.scss";

interface IProps {
  children: any;
}

export const AppParagraph = ({ children }: IProps) => {
  return (
    <p className={`${styles.paragraph} ${utilsStyles.bodyMedium}`}>
      {children}
    </p>
  );
};
