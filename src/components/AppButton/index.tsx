import utilsStyles from "@/styles/utils.module.scss";
import { MouseEventHandler } from "react";
import styles from "./AppButton.module.scss";

interface IProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "button" | "reset" | undefined;
}

export const AppButton = ({ children, onClick, type }: IProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${utilsStyles.bodyMediumBold}`}
    >
      {children}
    </button>
  );
};
