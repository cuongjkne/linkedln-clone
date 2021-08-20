import styled, { css } from 'styled-components';

function CoverScreen({ isactive }) {
  return <Container isactive={isactive} />;
}
const Container = styled.div<{ isactive: boolean }>`
  background-color: rgba(0, 0, 0, 0.4);
  width: 0vw;
  height: 100vh;
  z-index: -1;
  right: 0;
  top: 52px;
  position: absolute;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ isactive }) => {
    if (isactive) {
      return css`
        opacity: 1;
        width: 100vw;
      `;
    }
  }}
`;
export default CoverScreen;
