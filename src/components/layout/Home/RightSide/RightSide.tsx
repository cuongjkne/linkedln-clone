import React from 'react';
import styled from 'styled-components';
import FollowsPanel from './FollowsPanel/FollowsPanel';

function RightSide() {
  return (
    <Container>
      <FollowsPanel />
    </Container>
  );
}
const Container = styled.div``;

export default RightSide;
