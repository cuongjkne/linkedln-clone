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

    #navUserItem {
      position: relative;
      border-right: 1px solid #eff2f8;
      & > img:first-child {
        width: 25px;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    svg {
      width: 23px;
    }
  }
`;
