import { CounterListItemCounterButtonMinus } from "./CounterListItemCounterButtonMinus";
import { CounterListItemCounterButtonPlus } from "./CounterListItemCounterButtonPlus";
import { CounterListItemCounterContainer } from "./CounterListItemCounterContainer";
import { CounterListItemCounterInput } from "./CounterListItemCounterInput";

interface IProps {
  value: number;
}

export const CommentListItemCounter = ({ value }: IProps) => {
  return (
    <CounterListItemCounterContainer>
      <CounterListItemCounterButtonPlus />
      <CounterListItemCounterInput value={value} />
      <CounterListItemCounterButtonMinus />
    </CounterListItemCounterContainer>
  );
};
