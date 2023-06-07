import styles from "./headingLarge.module.scss";

interface IProps {
  children: any;
}

export const HeadingLarge = ({ children }: IProps) => {
  return <h1 className={styles.headingLarge}>{children}</h1>;
};
