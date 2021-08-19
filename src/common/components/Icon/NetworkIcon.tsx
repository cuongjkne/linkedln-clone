import styled, { css } from 'styled-components';

function NotificationIcon({ isActive }) {
  return (
    <Container isActive={isActive}>
      <svg width="30" height="30" viewBox="-3 -3 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4627 25.3731C17.7612 25.8209 17.9104 26.2687 17.9104 26.8657C17.9104 28.5075 16.5672 29.8507 14.9254 29.8507C13.2836 29.8507 11.9403 28.5075 11.9403 26.8657C11.9403 26.2687 12.0896 25.8209 12.3881 25.3731H0V23.8806C0 22.3881 0.597015 21.0448 1.79104 19.7015L3.28358 17.9104H26.7164L28.209 19.7015C29.403 21.194 30 22.5373 30 23.8806V25.3731H17.4627ZM24.1791 8.0597C23.5821 3.43284 19.5522 0 14.9254 0C10.2985 0 6.26866 3.43284 5.67164 8.0597L4.47761 16.4179H25.3731L24.1791 8.0597Z" />
      </svg>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  display: inherit;
  svg {
    path {
      transform: rotate(0) translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        svg {
          path {
            transform: rotate(10deg) translate(4px, -3px);
          }
        }
      `;
    }
  }}
`;
export default NotificationIcon;
