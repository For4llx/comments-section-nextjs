import utilsStyles from "@/styles/utils.module.scss";
import styles from "./headingLarge.module.scss";

interface IProps {
  children: string;
}

export const AppHeadingLarge = ({ children }: IProps) => {
  return (
    <h1 className={`${styles.headingLarge} ${utilsStyles.headingLarge}`}>
      {children}
    </h1>
  );
};
