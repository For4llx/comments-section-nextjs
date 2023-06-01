import classNames from "classnames";

interface IProps {
  children: string;
  isLarge?: boolean;
}

export const Heading = ({ children, isLarge }: IProps) => {
  return (
    <p className={classNames("heading", isLarge && "heading--large")}>
      {children}
    </p>
  );
};
