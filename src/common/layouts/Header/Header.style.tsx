import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0 100px;
  align-items: center;
  margin: auto;
  position: fixed;
  width: 100vw;
  #logo {
    margin-right: 20px;
  }
  @media (max-width: 1028px) {
    justify-content: center;
    padding: 0 20px;
    min-width: auto;
  }
`;
