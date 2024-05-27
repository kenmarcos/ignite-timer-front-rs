import { useContext } from "react";
import { CountdownContainer, CountdownSeparator } from "./styles";
import { CountdownContext } from "../../../../contexts/CountdownContext";

export const Countdown = () => {
  const { minutes, seconds } = useContext(CountdownContext);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>

      <CountdownSeparator>:</CountdownSeparator>

      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
};
