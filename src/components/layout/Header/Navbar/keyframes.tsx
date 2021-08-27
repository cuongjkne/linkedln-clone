import { keyframes } from 'styled-components';

const clickNavItem = keyframes`
   0% {
      transform: scale(1, 1);
    }
    50% {
          transform: scale(0.85, 0.85);
        }
    100% {
          transform: scale(0.85, 0.85);
        }
`;

export default clickNavItem;
