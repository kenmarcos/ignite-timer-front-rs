import { useContext } from "react";
import { HistoryContainer, HistoryEmpty, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        {cycles.length === 0 && (
          <HistoryEmpty>Não há ciclos registrados.</HistoryEmpty>
        )}

        {cycles.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Inicio</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status $statusNumber={0}>Em andamento</Status>
                    )}

                    {cycle.finishedDate && (
                      <Status $statusNumber={1}>Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status $statusNumber={2}>Interrompido</Status>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </HistoryList>
    </HistoryContainer>
  );
};
