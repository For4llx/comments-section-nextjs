import utilsStyles from "@/styles/utils.module.scss";
import styles from "./AppHeading.module.scss";

interface IProps {
  children: string;
}

export const AppHeading = ({ children }: IProps) => {
  return (
    <p className={`${styles.heading} ${utilsStyles.headingMedium}`}>
      {children}
    </p>
  );
};
