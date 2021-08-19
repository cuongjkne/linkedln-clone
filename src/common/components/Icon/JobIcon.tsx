import styled, { css } from 'styled-components';

function JobIcon({ isActive }) {
  return (
    <Container isActive={isActive}>
      <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="jobIcon-handle"
          d="M21.6364 7V4.09091C21.6364 1.77273 19.8636 0 17.5455 0H12.0909C9.77273 0 8 1.77273 8 4.09091V7H19H21.6364ZM10.7273 4.09091C10.7273 3.27273 11.2727 2.72727 12.0909 2.72727H17.5455C18.3636 2.72727 18.9091 3.27273 18.9091 4.09091L19 7H10.7273V4.09091Z"
        />
        <path d="M5.2 27C2.82 27 1 25.1429 1 22.7143V7H29V22.7143C29 25.1429 27.18 27 24.8 27H5.2Z" />
        <path
          d="M13.6 22C13.26 22 13 21.7214 13 21.3571V19H17V21.3571C17 21.7214 16.74 22 16.4 22H13.6Z"
          fill="white"
        />
        <path
          id="jobIcon-border"
          d="M4.5 20C1.95 20 0 18.7929 0 17.2143V7H30V17.2143C30 18.7929 28.05 20 25.5 20H4.5Z"
          fill="white"
        />
        <path
          id="jobIcon-cover"
          d="M5.2 18C2.82 18 1 16.9786 1 15.6429V7H29V15.6429C29 16.9786 27.18 18 24.8 18H5.2Z"
        />
      </svg>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  display: inherit;
  svg {
    #jobIcon-cover {
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
    #jobIcon-border {
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
  }
  ${({ isActive }) => {
    if (isActive) {
      return css`
        svg {
          #jobIcon-cover {
            transform: scaleY(0.75);
          }
          #jobIcon-border {
            transform: scaleY(0.75);
          }
        }
      `;
    }
  }}
`;
export default JobIcon;
