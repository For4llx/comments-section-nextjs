interface IProps {
  value: number;
}

export const CounterInput = ({ value }: IProps) => {
  return <input className="counter__input" defaultValue={value} readOnly />;
};
