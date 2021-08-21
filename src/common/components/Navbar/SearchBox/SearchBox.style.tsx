import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  isactive: boolean;
}>`
  /* max-width:1440px */
  @media only screen {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 52px;
    flex-basis: 30% !important;
  }

  @media (max-width: 1024px) {
    flex-basis: 0% !important;
    ${({ isactive }) =>
      isactive &&
      css`
        left: 100px;
        width: 100%;
        position: absolute;
        z-index: 1;
        background-color: white;
      `}
  }
  @media (max-width: 768px) {
    left: 80px;
  }
  @media (max-width: 425px) {
    left: 60px;
  }
`;
export const SearchInput = styled.div<{
  isactive: boolean;
}>`
  /* max-width:1440px */
  @media only screen {
    border-radius: var(--border-radius-small);
    display: flex;
    width: 300px;
    height: 34px;
    transition: width 0.1s ease-in-out;
    position: relative;
    background-color: #eff2f8;

    img {
      position: absolute;
      top: 25%;
      left: 10px;
    }
    input {
      border-radius: var(--border-radius-small);
      padding: 0 35px;
      background-color: initial;
      width: 100%;
      font-size: 14px;
      z-index: 1;
      transition: margin-left 0.1s ease-in-out;
    }
    ${({ isactive }) =>
      isactive &&
      css`
        width: 350px;
        border: 1px solid rgb(94, 96, 99, 0.1);
        input {
          margin-left: 15px;
          font-size: 15px;
        }
      `}
  }

  @media (max-width: 1024px) {
    transform: scale(0);
    width: 85%;
    position: absolute;
    ${({ isactive }) =>
      isactive &&
      css`
        position: unset;
        transform: scale(1);
      `}
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const SearchItem = styled.div<{ isactive: boolean }>`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    p {
      margin-top: 2px;
      color: var(--nav-color-icon);
      font-size: var(--nav-font-size);
    }
    ${({ isactive }) => {
      return (
        isactive &&
        css`
          display: none;
        `
      );
    }}
  }
  @media (max-width: 768px) {
    p {
      display: none;
    }
  }
`;
