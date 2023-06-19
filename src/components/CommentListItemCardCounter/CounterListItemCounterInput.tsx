import styles from "./CounterListItemCounter.module.scss";
import stylesUtils from "../../styles/utils.module.scss";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface IProps {
  value: number;
}

export const CounterListItemCounterInput = ({ value }: IProps) => {
  return (
    <input
      className={`${styles.input} ${stylesUtils.bodyMediumBold} ${rubik.className}`}
      value={value}
      readOnly
    />
  );
};
