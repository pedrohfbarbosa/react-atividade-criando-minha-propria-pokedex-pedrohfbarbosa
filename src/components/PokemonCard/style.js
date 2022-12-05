import styled from "styled-components";

export const CardStyled = styled.li`
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;
