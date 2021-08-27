import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide/LeftSide';
import Middle from './Middle/Middle';
import RightSide from './RightSide/RightSide';

function Home() {
  return (
    <Container>
      <LeftSide />
      <Middle />
      <RightSide />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  & > div {
    background-color: white;
  }
`;
export default Home;
