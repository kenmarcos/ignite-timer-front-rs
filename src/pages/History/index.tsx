import { HistoryContainer, HistoryList, Status } from "./styles";

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
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
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusNumber={0}>Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusNumber={1}>Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusNumber={2}>Interrompido</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusNumber={0}>Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusNumber={2}>Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
