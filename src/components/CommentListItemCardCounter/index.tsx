import { useState } from "react";
import { CounterListItemCounterButtonMinus } from "./CounterListItemCounterButtonMinus";
import { CounterListItemCounterButtonPlus } from "./CounterListItemCounterButtonPlus";
import { CounterListItemCounterContainer } from "./CounterListItemCounterContainer";
import { CounterListItemCounterInput } from "./CounterListItemCounterInput";

interface IProps {
  score: number;
}

export const CommentListItemCardCounter = ({ score: initianScore }: IProps) => {
  const [score, setScore] = useState<number>(initianScore);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  const handleIncrementScore = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (liked === true) {
    } else if (disliked === true) {
      setScore((score) => score + 1);
      setDisliked((disliked) => !disliked);
    } else if (liked === false && disliked === false) {
      setScore((score) => score + 1);
      setLiked((liked) => !liked);
    }
  };

  const handleDecrementScore = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (disliked === true) {
    } else if (liked === true) {
      setScore((score) => score - 1);
      setLiked((liked) => !liked);
    } else if (liked === false && disliked === false) {
      setScore((score) => score - 1);
      setDisliked((disliked) => !disliked);
    }
  };
  return (
    <CounterListItemCounterContainer>
      <CounterListItemCounterButtonPlus
        handleIncrementCount={handleIncrementScore}
      />
      <CounterListItemCounterInput value={score} />
      <CounterListItemCounterButtonMinus
        handleDecrementCount={handleDecrementScore}
      />
    </CounterListItemCounterContainer>
  );
};
