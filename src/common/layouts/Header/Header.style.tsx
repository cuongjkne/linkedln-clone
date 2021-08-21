import styled from 'styled-components';
export const Container = styled.div`
  @media only screen {
    display: flex;
    background-color: white;
    padding: 0 100px;
    align-items: center;
    margin: auto;
    position: fixed;
    width: 100vw;

    #logo {
      margin-right: 20px;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 50px;
    min-width: auto;
  }
  @media (max-width: 768px) {
    padding: 0 30px;
    #logo {
      margin-right: 15px;
    }
  }
  @media (max-width: 425px) {
    padding: 0 5px 0 15px;
  }
`;
