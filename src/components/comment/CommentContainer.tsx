interface IProps {
  children: any;
}

export const CommentContainer = ({ children }: IProps) => {
  return <div className="comment">{children}</div>;
};
