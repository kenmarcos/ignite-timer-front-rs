import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormSchema = z.object({
  task: z.string().min(1, "Insira o nome da tarefa"),
  minutesAmount: z
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = z.infer<typeof newCycleFormSchema>;

export const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: activeCycle?.task || "",
      minutesAmount: activeCycle?.minutesAmount || 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const taskInput = watch("task");
  const minutesAmountInput = watch("minutesAmount");

  const isSubmitDisabled = !taskInput && !minutesAmountInput;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);

    reset();
  };

  const handleInterruptCycle = () => {
    interruptCurrentCycle();
  };

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />

          <Countdown />
        </FormProvider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
};
