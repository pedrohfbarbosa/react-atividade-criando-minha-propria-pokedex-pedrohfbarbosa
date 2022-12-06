import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10rem;

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 1rem;
    & > div > div {
      flex-direction: column;
      text-align: center;
    }
  }

  & h1 {
    font-size: 4.8125rem;
    font-weight: 700;
  }
  
  & span {
    color: ${({ theme }) => theme.salmon};
  }

  & svg {
   height: 70px;
   width: 70px;
 }
`;
