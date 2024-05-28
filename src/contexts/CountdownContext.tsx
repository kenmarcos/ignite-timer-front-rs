import { ReactNode, createContext, useContext, useEffect } from "react";
import { CyclesContext } from "./CyclesContext";
import { differenceInSeconds } from "date-fns";

interface CountdownContextData {
  minutes: string;
  seconds: string;
}

export const CountdownContext = createContext({} as CountdownContextData);

interface CountdownContextProviderProps {
  children: ReactNode;
}

export const CountdownContextProvider = ({
  children,
}: CountdownContextProviderProps) => {
  const {
    activeCycle,
    amountSecondsPassed,
    markCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished();

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, markCycleAsFinished, setSecondsPassed, totalSeconds]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} - ${minutes}:${seconds}`;
    } else {
      document.title = "Ignite Timer";
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContext.Provider value={{ minutes, seconds }}>
      {children}
    </CountdownContext.Provider>
  );
};
