import styled, { css } from 'styled-components';

function WorkPanel({ isActive }) {
  return (
    <Container>
      <Panel isActive={isActive}></Panel>
    </Container>
  );
}

const Container = styled.div`
  cursor: auto;
`;

const Panel = styled.div<{ isActive: boolean }>`
  width: 380px;
  height: 100vh;
  border-radius: 5px 0 5px 5px;
  background-color: white;
  box-shadow: -1px 1px 2px var(--nav-color-icon);
  position: absolute;

  transition: transform 0.5s ease-in-out;
  transform: translateX(100%);
  ${({ isActive }) => {
    if (isActive) {
      return css`
        transform: translateX(-170px);
      `;
    }
  }}
`;
export default WorkPanel;
