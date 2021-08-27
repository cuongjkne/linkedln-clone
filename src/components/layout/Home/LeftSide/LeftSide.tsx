import React from 'react';
import styled from 'styled-components';
import CommunityPanel from './CommunityPanel/CommunityPanel';
import PersonalPanel from './PersonalPanel/PersonalPanel';

function LeftSide() {
  return (
    <Container>
      <PersonalPanel />
      <CommunityPanel />
    </Container>
  );
}

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 230px;
  border: 1px solid #e0dfdc;
`;
export default LeftSide;
