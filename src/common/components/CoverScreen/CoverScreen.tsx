import styled, { css } from 'styled-components';

function CoverScreen({ isActive }) {
  return <Container isActive={isActive} />;
}
const Container = styled.div<{ isActive: boolean }>`
  background-color: rgba(0, 0, 0, 0.4);
  width: 0vw;
  height: 100vh;
  z-index: -1;
  right: 0;
  top: 52px;
  position: absolute;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ isActive }) => {
    if (isActive) {
      return css`
        opacity: 1;
        width: 100vw;
      `;
    }
  }}
`;
export default CoverScreen;
