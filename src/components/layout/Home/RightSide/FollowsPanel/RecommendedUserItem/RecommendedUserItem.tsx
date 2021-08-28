import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icons
import LinkdelnSmallIcon from '../../../../../common/Icon/LinkdelnSmallIcon';
import PlusIcon from '../../../../../common/Icon/PlusIcon';

function RecommendedUserItem({ to, imgSrc, name, bio }) {
  return (
    <Container>
      <Link to={to}>
        <img src={imgSrc} />
      </Link>
      <div>
        <Link to={to}>
          <p>
            {name}
            <LinkdelnSmallIcon />
          </p>
          <p>{bio}</p>
        </Link>
        <button>
          <PlusIcon /> Follow
        </button>
      </div>
    </Container>
  );
}
const Container = styled.div``;
export default RecommendedUserItem;
