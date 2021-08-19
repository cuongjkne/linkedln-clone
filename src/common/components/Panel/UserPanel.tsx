import { Link } from 'react-router-dom';
import styled from 'styled-components';

function UserPanel({ isActive }) {
  return !isActive ? (
    <></>
  ) : (
    <Container>
      <Header>
        <img src="/images/user.svg" />
        <div>
          <h5>Cường Nguyễn</h5>
          <p>Student at The Earth</p>
        </div>
        <Link to="">View Profile</Link>
      </Header>
      <Section>
        <h5>Account</h5>
        <Link to="">Settings & Privacy</Link>
        <Link to="">Help</Link>
        <Link to="">Language</Link>
      </Section>
      <Section>
        <h5>Manage</h5>
        <Link to="">Posts & Activity</Link>
        <Link to="">Job Posting Account</Link>
      </Section>
      <Section>
        <Link to="">Sign Out</Link>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 10px var(--nav-color-icon);
  border-radius: 5px 0 5px 5px;
  position: absolute;
  top: 58px;
  right: 2px;
  background-color: white;
  width: 270px;
  cursor: auto;
  section {
    padding: 15px 15px 15px 15px;
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
  }
  & > section:nth-child(4) {
    a {
      margin-top: 0;
    }
  }
`;

const Header = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div {
    margin-left: 10px;
    p {
      font-size: 13px;
      letter-spacing: 0.8px;
    }
    h5 {
      margin-bottom: 5px;
    }
  }

  img {
    width: 50px;
    border-radius: 50px;
  }
  a {
    text-align: center;
    vertical-align: middle;
    padding: 4px 20px;
    border-radius: var(--btt-border-radius);
    border: 1.5px solid var(--main-color);
    color: var(--main-color);
    font-weight: 500;
    font-size: 13.5px;
    margin: auto;
    background-color: inherit;
    cursor: pointer;
    width: 100%;
    height: 27px;
    margin-top: 10px;
    &:hover {
      background-color: #f2f2ee;
      border-width: 2px;
    }
  }
`;
const Section = styled.section`
  border-top: 1px solid var(--main-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    margin-top: 8px;
    font-size: 13.5px;
    color: rgba(94, 96, 99, 0.8);
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default UserPanel;
