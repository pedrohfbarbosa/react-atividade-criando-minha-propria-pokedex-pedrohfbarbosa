import styled from "styled-components";

export const AppStyled = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.transluceGrey};

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
