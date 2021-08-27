import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//keyframes
import clickNavItem from '../../../layout/Header/Navbar/keyframes';

export const Container = styled.div<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  background-color: white;
  top: 60px;
  right: 1px;
  border-radius: 10px 0px 10px 10px;
  transform: scale(0);
  box-shadow: 0px 0px 5px rgb(94, 96, 99);
  & > * {
    padding: 15px 25px;
  }
  ${({ isactive }) =>
    isactive &&
    css`
      transform: scale(1);
    `}
`;
export const LinkItem = styled(Link)<{ isactive: number }>`
  @media only screen {
    display: none;
    &:active {
      img,
      svg {
        animation: ${clickNavItem} 0.2s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
    ${({ isactive }) =>
      isactive &&
      css`
        svg {
          fill: black !important;
        }
      `}
  }
  @media (max-width: 375px) {
    display: initial;
  }
`;
export const PanelShowItem = styled.div`
  img {
    width: 23px;
    border-radius: 30px;
  }
  &:active {
    img,
    svg {
      animation: ${clickNavItem} 0.2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
`;
