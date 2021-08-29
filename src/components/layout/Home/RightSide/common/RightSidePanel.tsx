import React from 'react';
import { Link } from 'react-router-dom';

//icons
import ArrowRightIcon from '../../../../common/Icon/ArrowRightIcon';
import InfoIcon from '../../../../common/Icon/InfoIcon';

//styles
import { Container, Title, List } from './RightSidePanel.style';

function RightSidePanel({ title, items, linkText, linkUrl }) {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
        <InfoIcon />
      </Title>
      <List>{items}</List>
      <Link to={linkUrl}>
        <p>
          {linkText}
          <ArrowRightIcon />
        </p>
      </Link>
    </Container>
  );
}

export default RightSidePanel;
