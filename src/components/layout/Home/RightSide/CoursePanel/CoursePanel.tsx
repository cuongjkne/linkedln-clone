import React from 'react';
import styled, { css } from 'styled-components';

//components
import RightSidePanel from '../common/RightSidePanel';
import CourseItem from './CourseItem/CourseItem';

function CoursePanel() {
  const title = 'Today’s top courses';
  const linkText = 'Show more on LinkedIn Learning';
  const linkUrl = '/mynetwork';
  const data = [
    { id: 1, courseName: 'How to become a web developer', author: ['Cuong Nguyen'], linkUrl: '/' },
    { id: 2, courseName: 'Play with dog', author: ['Husky Black'], linkUrl: '/' },
    { id: 3, courseName: 'Sleep like a cat', author: ['Cat Yellow'], linkUrl: '/' }
  ];
  const Items = data.map(({ id, courseName, author }, index) => (
    <CourseItem key={id} order={index + 1} linkUrl={linkUrl} courseName={courseName} author={author} />
  ));
  return <RightSidePanel customStyle={customStyle} linkUrl={linkUrl} title={title} linkText={linkText} items={Items} />;
}

const customStyle = css`
  padding: 0 !important;
`;
export default CoursePanel;
