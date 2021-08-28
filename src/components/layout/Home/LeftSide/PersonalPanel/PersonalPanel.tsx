import { Link } from 'react-router-dom';
import { Container, Header, ConnectionSection, PremiumSection, MyItems } from './PersonalPanel.style';

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
          <p>Front-end Web Developer</p>
        </div>
      </Header>
      <ConnectionSection to="/">
        <div>
          <p>
            <span>Connections</span> <br /> Grow your network
          </p>
          <img src="/images/connect-icon.svg" />
        </div>
      </ConnectionSection>
      <PremiumSection to="/">
        <p>Access exclusive tools & insights</p>
        <p>
          <img src="/images/premium-icon.svg" />
          Try Premium for free
        </p>
      </PremiumSection>
      <MyItems to="/">
        <img src="/images/myitems-icon.svg" />
        <span>My items</span>
      </MyItems>
    </Container>
  );
}

export default PersonalPanel;
