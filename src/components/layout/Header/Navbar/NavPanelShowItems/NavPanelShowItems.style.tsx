import styled from 'styled-components';

//keyframes
import clickNavItem from '../keyframes';

export const NavPanelShowItem = styled.div`
  /* max-width:1440px */
  @media only screen {
    cursor: pointer;

    position: relative;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      min-height: 52px;
      justify-content: center;
      align-items: center;
      & > img:first-of-type {
        width: 25px;
        border-radius: 30px;
      }
      & > p:first-of-type {
        margin-top: 4px;
        display: flex;

        svg {
          width: 17px;
          height: 17px;
          position: relative;
          top: -2px;
          filter: invert(40%);
        }
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
    #navUserItem {
      position: relative;
      border-right: 1px solid #eff2f8;
      & > img:first-child {
        width: 25px;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      display: none !important;
    }
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
