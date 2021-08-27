import styled from 'styled-components';

//keyframes
import clickNavItem from '../keyframes';

export const Container = styled.div`
  @media only screen {
    display: none;
    position: relative;
    & > div:first-child {
      display: flex;
      justify-content: center;
      height: 52px;
      align-items: center;
    }
    &:active {
      & > svg {
        animation: ${clickNavItem} 0.2s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
  }
  @media (max-width: 425px) {
    display: block;
  }
`;
