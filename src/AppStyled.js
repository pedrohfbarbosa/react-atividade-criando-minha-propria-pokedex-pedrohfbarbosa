import styled from "styled-components";

export const AppStyled = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.transluceGrey};

  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    & > div {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;
