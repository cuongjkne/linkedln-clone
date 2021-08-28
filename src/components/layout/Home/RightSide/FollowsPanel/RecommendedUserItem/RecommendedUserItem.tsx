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
        <img src={imgSrc} alt="user.jpg" />
      </Link>
      <div>
        <Link to={to}>
          <h3>
            {name}
            <LinkdelnSmallIcon />
          </h3>
          <p>{bio}</p>
        </Link>
        <p>
          <PlusIcon /> Follow
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  & > a {
    margin-right: 15px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 100px;
    }
  }
  & > div {
    & > a {
      h3 {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        svg {
          margin-left: 4px;
        }
      }
      p {
        font-size: 13px;
        /* color:black; */
        font-weight: 300;
      }
    }
    & > p {
      padding: 8px 15px;
      border-radius: 50px;
      background-color: inherit;
      border: 1px solid rgb(102 102 102);
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 5px;
      width: 100px;
      height: 33px;
      color: rgb(102 102 102);
      svg {
        fill: rgb(102 102 102);
        margin-right: 5px;
      }
      &:hover {
        background-color: rgb(235 235 235);
        /* border-width: 0.16rem; */
        box-shadow: 0 0 0 1px rgb(102 102 102);
      }
    }
  }
`;
export default RecommendedUserItem;
