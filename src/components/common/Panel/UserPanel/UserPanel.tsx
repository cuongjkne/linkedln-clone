import { Link } from 'react-router-dom';

//styles
import { Container, Header, Section } from './UserPanel.style';

function UserPanel({ isactive }) {
  return !isactive ? (
    <></>
  ) : (
    <Container>
      <Header>
        <img src="/images/user.jpg  " alt="user.jpg" />
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

export default UserPanel;
