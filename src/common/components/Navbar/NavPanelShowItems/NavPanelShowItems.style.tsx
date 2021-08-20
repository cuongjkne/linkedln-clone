import styled from 'styled-components';
//keyframes
import clickNavItem from '../keyframes';

export const NavPanelShowItem = styled.div`
  /* max-width:1440px */
  @media only screen {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 52px;
    min-width: 82px;
    justify-content: center;
    position: relative;
    svg {
      fill: var(--nav-color-icon);
    }

    & > img:first-of-type {
      width: 25px;
      border-radius: 30px;
    }
    & > p:first-of-type {
      margin-top: 4px;
      display: flex;

      svg {
        width: 17px;
        position: relative;
        top: -2px;
        filter: invert(40%);
      }
    }
    &:active {
      & > img:first-of-type,
      & > svg:first-of-type,
      & > p:first-of-type {
        animation: ${clickNavItem} 0.2s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
    &:hover {
      svg {
        fill: black;
      }

      & > p:first-of-type {
        color: black;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      display: none !important;
    }
  }
`;
