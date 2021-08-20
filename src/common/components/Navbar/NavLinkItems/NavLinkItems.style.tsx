import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
//keyframes
import clickNavItem from '../keyframes';

export const NavLinkItem = styled(Link)<{ isactive: number }>`
  /* max-width:1440px */
  @media only screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: fit-content;

    &::after {
      content: ' ';
      width: 100%;
      height: 2.2px;
      background-color: black;
      position: relative;
      top: 4px;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }

    p {
      margin-top: 2px;
    }
    svg {
      fill: var(--nav-color-icon);
      width: 27px;
      height: 27px;
    }
    &:active {
      svg,
      p {
        animation: ${clickNavItem} 0.2s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
    &:hover {
      svg {
        fill: black;
      }
      p {
        color: black;
      }
    }
    ${({ isactive }) => {
      if (isactive) {
        return css`
          &::after {
            transform: scaleX(1);
          }
          svg {
            fill: black;
            width: 26px;
            height: 26px;
          }
          p {
            color: black;
          }
        `;
      }
    }}
  }

  @media (max-width: 768px) {
    &::after {
      top: 13px;
    }
    p {
      display: none;
    }
  }
`;
