import styles from "./AppHeading.module.scss";

interface IProps {
  children: string;
}

export const Heading = ({ children }: IProps) => {
  return <p className={styles.heading}>{children}</p>;
};
