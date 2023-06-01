import classNames from "classnames";

interface IProps {
  children: string;
  isBold?: boolean;
}

export const Paragraph = ({ children, isBold }: IProps) => {
  return (
    <p
      className={classNames(
        "paragraph",
        isBold && "paragraph--bold",
        "comment__paragraph"
      )}
    >
      {children}
    </p>
  );
};
