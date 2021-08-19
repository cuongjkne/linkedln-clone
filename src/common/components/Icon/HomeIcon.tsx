import styled, { css } from 'styled-components';

function HomeIcon({ isActive }) {
  return (
    <Container isActive={isActive}>
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 9.54545V12.2727H27.2727V21.8182C27.2727 24.1364 25.5 25.9091 23.1818 25.9091H17.7273V17.7273H12.2727V25.9091H6.81818C4.5 25.9091 2.72727 24.1364 2.72727 21.8182V12.2727H0V9.54545L15 0L30 9.54545Z" />
        <path id="homeIcon-chimney" d="M26.0909 7H22V11.3636L26.0909 13.9545V7Z" />
      </svg>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  display: inherit;
  svg {
    #homeIcon-chimney {
      transform: translateY(0);
      transition: transform 0.2s ease-in-out;
    }
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        svg {
          #homeIcon-chimney {
            transform: translateY(-5px);
          }
        }
      `;
    }
  }}
`;
export default HomeIcon;
