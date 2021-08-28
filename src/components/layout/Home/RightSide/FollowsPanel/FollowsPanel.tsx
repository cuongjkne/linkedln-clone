import React from 'react';
import { Link } from 'react-router-dom';

//styles
import { Container, Header, RecommendedUserList } from './FollowsPanel.style';

//components
import RecommendedUserItem from './RecommendedUserItem/RecommendedUserItem';

function FollowsPanel() {
  const data = [
    { id: '1', name: 'Husky', bio: 'I like dogs', to: '/', imgSrc: '/images/husky' },
    { id: '2', name: 'Cat', bio: 'I like cats', to: '/', imgSrc: '/images/cat' },
    { id: '3', name: 'Banh Mi', bio: 'I love bread', to: '/', imgSrc: '/images/bread' }
  ];
  //render list
  const Items = data.map(({ id, name, bio, to, imgSrc }) => (
    <RecommendedUserItem key={id} name={name} bio={bio} to={to} imgSrc={imgSrc} />
  ));
  return (
    <Container>
      <Header>
        <p>Add to your feed</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
        </svg>
      </Header>
      <RecommendedUserList>{Items}</RecommendedUserList>
      <Link to="/mynetwork">View all recommendations</Link>
    </Container>
  );
}

export default FollowsPanel;
