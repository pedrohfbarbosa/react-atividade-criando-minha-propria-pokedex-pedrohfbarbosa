import styled from "styled-components";
import { ContainerMinor } from "../../styles/ContainerMinor";

export const FormWrapper = styled(ContainerMinor)`
  background-color: ${({theme}) => theme.skyNight};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: fit-content;
  ul {
    width: 100%;
  }
`