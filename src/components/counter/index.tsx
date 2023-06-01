import { CounterButtonMinus } from "./CounterButtonMinus";
import { CounterButtonPlus } from "./CounterButtonPlus";
import { CounterContainer } from "./CounterContainer";
import { CounterInput } from "./CounterInput";

interface IProps {
  value: number;
}

export const Counter = ({ value }: IProps) => {
  return (
    <CounterContainer>
      <CounterButtonPlus />
      <CounterInput value={value} />
      <CounterButtonMinus />
    </CounterContainer>
  );
};
