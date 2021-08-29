import React from 'react';

//components
import RightSidePanel from '../common/RightSidePanel';
import CourseItem from './CourseItem/CourseItem';

function CoursePanel() {
  const title = 'Today’s top courses';
  const linkText = 'Show more on LinkedIn Learning';
  const linkUrl = '/mynetwork';
  const data = [
    { id: 1, courseName: 'How to become a web developer', author: ['Cuong Nguyen'] },
    { id: 2, courseName: 'Play with dog', author: ['Husky Black'] },
    { id: 3, courseName: 'Sleep like a cat', author: ['Cat Yellow'] }
  ];
  const Items = data.map(({ id, courseName, author }, index) => (
    <CourseItem key={id} order={index} courseName={courseName} author={author} />
  ));
  return <RightSidePanel linkUrl={linkUrl} title={title} linkText={linkText} items={Items} />;
}
export default CoursePanel;
