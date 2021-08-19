import styled, { css } from 'styled-components';

function NetworkIcon({ isActive }) {
  return (
    <Container isActive={isActive}>
      <svg width="30" height="36" viewBox="-3 -1 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="networkIcon-first"
          d="M15.8824 24.7059V35.2941H0V24.7059C0 21.7059 2.29412 19.4118 5.29412 19.4118H10.5882C13.5882 19.4118 15.8824 21.7059 15.8824 24.7059ZM7.94118 0C3.52941 0 0 3.52941 0 7.94118C0 12.3529 3.52941 15.8824 7.94118 15.8824C12.3529 15.8824 15.8824 12.3529 15.8824 7.94118C15.8824 3.52941 12.3529 0 7.94118 0Z"
        />
        <path
          id="networkIcon-second"
          d="M30 28.4118V35.2941H19.4118V28.4118C19.4118 26.4618 20.9412 24.9706 22.9412 24.9706H26.4706C28.4706 24.9706 30 26.4618 30 28.4118ZM24.7059 12.3529C21.7647 12.3529 19.4118 14.6471 19.4118 17.5147C19.4118 20.3824 21.7647 22.6765 24.7059 22.6765C27.6471 22.6765 30 20.3824 30 17.5147C30 14.6471 27.6471 12.3529 24.7059 12.3529Z"
        />
      </svg>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  display: inherit;
  svg {
    #networkIcon-first {
      transform: translateX(0);
      transition: transform 0.2s ease-in-out;
    }
    #networkIcon-second {
      transform: translateX(0);
      transition: transform 0.2s ease-in-out;
    }
  }
  ${({ isActive }) => {
    if (isActive) {
      return css`
        svg {
          #networkIcon-first {
            transform: translateX(16px);
          }
          #networkIcon-second {
            transform: translateX(-16px);
          }
        }
      `;
    }
  }}
`;
export default NetworkIcon;
