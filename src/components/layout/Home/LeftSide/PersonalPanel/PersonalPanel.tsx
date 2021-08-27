import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PersonalPanel() {
  return (
    <Container>
      <Header>
        <img src="/images/background-user.svg" />
        <div>
          <Link to="">
            <img src="/images/user.jpg" />
            Cường Nguyễn
          </Link>
          <p>Front-end Developer</p>
        </div>
      </Header>
      <ConnectionSection to="">
        <p>
          <span>Connections</span> <br /> Grow your network
        </p>
        <img src="/images/connect-icon.svg" />
      </ConnectionSection>
      <PremiumSection to="">
        <p>Access exclusive tools & insights</p>
        <p>
          <img src="/images/premium-icon.svg" />
          Try Premium for free
        </p>
      </PremiumSection>
      <MyItems to="">
        <img src="/images/myitems-icon.svg" />
        My items
      </MyItems>
    </Container>
  );
}
const Container = styled.div`
  & > a {
    border-top: 1px #f3f2ef solid;
  }
`;
const Header = styled.div`
  div {
    position: relative;
    top: -37px;
    p {
      text-align: center;
      font-size: 12px;
      color: rgb(0 0 0 / 60%);
      font-weight: 320;
      margin-top: 5px;
      letter-spacing: 2px;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 18px;
      font-weight: 400;
      img {
        margin-bottom: 20px;
        width: 70px;
        border-radius: 100px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

//TODO:Leftside components
const ConnectionSection = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;
const PremiumSection = styled(Link)``;
const MyItems = styled(Link)``;

export default PersonalPanel;
