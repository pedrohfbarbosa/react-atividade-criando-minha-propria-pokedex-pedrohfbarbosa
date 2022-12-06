import styled from "styled-components";
import { ContainerMinor } from "../../styles/ContainerMinor";

export const FavoriteStyled = styled(ContainerMinor)`
  background-color: ${({theme}) => theme.skyNight};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-height: 35rem;
  padding: 2rem 1rem;

  ul {
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
  }
`
