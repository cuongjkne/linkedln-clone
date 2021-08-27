import styled from 'styled-components';

export const Container = styled.nav`
  @media only screen {
    display: flex;
    min-height: 52px;
    font-weight: 400;
    letter-spacing: 0.3px;
    align-items: center;
    width: 100%;
    & > * {
      flex: 1;
    }
    p {
      color: var(--nav-color-icon);
      font-size: var(--nav-font-size);
    }
    svg {
      fill: var(--nav-color-icon);
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    svg {
      width: 23px;
      height: 23px;
    }
  }
`;
