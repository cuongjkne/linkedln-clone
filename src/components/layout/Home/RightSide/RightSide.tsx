import React from 'react';
import styled from 'styled-components';
import CoursePanel from './CoursePanel/CoursePanel';
import FollowsPanel from './FollowsPanel/FollowsPanel';

function RightSide() {
  return (
    <Container>
      <FollowsPanel />
      <CoursePanel />
    </Container>
  );
}
const Container = styled.div`
  width: 320px;
`;

export default RightSide;
