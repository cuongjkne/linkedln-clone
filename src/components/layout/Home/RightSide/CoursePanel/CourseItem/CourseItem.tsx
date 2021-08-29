import React from 'react';
import styled from 'styled-components';
import ExternalLinkIcon from '../../../../../common/Icon/ExternalLinkIcon';

function CourseItem({ order, courseName, author }) {
  return (
    <Container>
      <div>
        <h3>
          {order}. {courseName}
        </h3>
        <p>{author}</p>
      </div>
      <ExternalLinkIcon />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
//TODO: style
export default CourseItem;
