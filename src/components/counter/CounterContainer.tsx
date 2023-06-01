interface IProps {
  children: any;
}

export const CounterContainer = ({ children }: IProps) => {
  return <div className="counter comment__counter">{children}</div>;
};
