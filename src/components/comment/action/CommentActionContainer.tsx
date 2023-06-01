interface IProps {
  children: any;
}

export const CommentActionContainer = ({ children }: IProps) => {
  return <div className="comment__action">{children}</div>;
};
