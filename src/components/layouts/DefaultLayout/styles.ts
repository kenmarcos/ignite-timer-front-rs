import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme["gray-800"]};
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  border-radius: 8px;
  margin: 5rem auto;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;
