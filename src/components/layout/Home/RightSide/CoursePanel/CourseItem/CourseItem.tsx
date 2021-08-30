import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ExternalLinkIcon from '../../../../../common/Icon/ExternalLinkIcon';

function CourseItem({ order, courseName, author, linkUrl }) {
  return (
    <Container to={linkUrl}>
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
const Container = styled(Link)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 15px;
    p {
      margin: 4px 0 0 15px;
      font-size: 12px;
      font-weight: 300;
    }
    svg {
      fill: #444444;
      display: none;
    }
    &:hover {
      background-color: #ebebeb;
      svg {
        display: initial;
      }
    }
  }
`;
export default CourseItem;
