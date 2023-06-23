import styles from "./AppTextArea.module.scss";
import utilsStyles from "@/styles/utils.module.scss";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface IProps {
  defaultValue?: string;
}

export const AppTextarea = ({ defaultValue }: IProps) => {
  return (
    <textarea
      name="textarea"
      className={`${styles.textarea} ${utilsStyles.bodyMedium} ${rubik.className}`}
      placeholder="Add a comment..."
      defaultValue={defaultValue}
    ></textarea>
  );
};
