import React from 'react';
import { Link } from 'react-router-dom';
//icons
import PlusIcon from '../../../../common/Icon/PlusIcon';
//styles
import { Container, TopSection } from './CommunityPanel.style';

function CommunityPanel() {
  return (
    <Container>
      <TopSection>
        <div>
          <Link to="/">Groups</Link>
          <Link to="/">Events</Link>
          <Link to="/">Followed Hastags</Link>
        </div>
        <div>
          <PlusIcon />
        </div>
      </TopSection>
      <Link to="">Discover more</Link>
    </Container>
  );
}

export default CommunityPanel;
