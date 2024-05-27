import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme["gray-100"]};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const CountdownSeparator = styled.div`
  color: ${({ theme }) => theme["green-500"]};
  padding: 2rem 0;
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
