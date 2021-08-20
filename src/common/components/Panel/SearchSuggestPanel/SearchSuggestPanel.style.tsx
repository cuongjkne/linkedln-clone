import styled from 'styled-components';

export const Panel = styled.div`
  width: 400px;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 2px 5px rgba(94, 96, 99, 0.7);
  border-radius: 8px;
  color: black;
  padding: 8px 0;
  position: absolute;
  top: 48px;
  h5 {
    font-weight: 380;
    margin: 10px 18px;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
