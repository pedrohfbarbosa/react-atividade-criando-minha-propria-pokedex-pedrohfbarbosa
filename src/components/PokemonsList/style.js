import styled from "styled-components";
import { ContainerMinor } from "../../styles/ContainerMinor";

export const PokemonsListStyled = styled(ContainerMinor)`
  background-color: ${({ theme }) => theme.salmon};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    max-height: 75%;
    overflow-y: auto;
  }

  button {
    padding: 0.5rem;
    margin-left: 1rem;
  }
`;
