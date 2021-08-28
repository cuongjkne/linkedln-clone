import React from 'react';
import { Link } from 'react-router-dom';

//icons
import InfoIcon from '../../../../common/Icon/InfoIcon';
import ArrowRightIcon from '../../../../common/Icon/ArrowRightIcon';

//styles
import { Container, Header, RecommendedUserList } from './FollowsPanel.style';

//components
import RecommendedUserItem from './RecommendedUserItem/RecommendedUserItem';

function FollowsPanel() {
  const data = [
    { id: '1', name: 'Husky King', bio: 'President', to: '/', imgSrc: '/images/husky.jpg' },
    { id: '2', name: 'Cat Yellow', bio: 'Fish is my favorite', to: '/', imgSrc: '/images/cat.jpg' },
    { id: '3', name: 'Banh Mi Viet Nam', bio: 'I love bread', to: '/', imgSrc: '/images/bread.jpg' }
  ];
  //render list
  const Items = data.map(({ id, name, bio, to, imgSrc }) => (
    <RecommendedUserItem key={id} name={name} bio={bio} to={to} imgSrc={imgSrc} />
  ));
  return (
    <Container>
      <Header>
        <p>Add to your feed</p>
        <InfoIcon />
      </Header>
      <RecommendedUserList>{Items}</RecommendedUserList>
      <Link to="/mynetwork">
        <p>
          View all recommendations <ArrowRightIcon />
        </p>
      </Link>
    </Container>
  );
}

export default FollowsPanel;
