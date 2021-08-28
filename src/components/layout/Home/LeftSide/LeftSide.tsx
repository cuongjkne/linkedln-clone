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
  width: 230px;
  height: fit-content;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
export default LeftSide;
