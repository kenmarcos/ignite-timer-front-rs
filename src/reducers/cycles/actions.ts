import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface MarkCurrentCycleAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
}
interface InterruptCurrentCycleAction {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE;
}

export type CyclesActions =
  | AddNewCycleAction
  | MarkCurrentCycleAsFinishedAction
  | InterruptCurrentCycleAction;

export const addNewCycleAction = (newCycle: Cycle): CyclesActions => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
};

export const markCurrentCycleAsFinishedAction = (): CyclesActions => {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
};

export const interruptCurrentCycleAction = (): CyclesActions => {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
};
