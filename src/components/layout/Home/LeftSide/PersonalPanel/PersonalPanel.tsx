import { Link } from 'react-router-dom';
//icons
import ConnectIcon from '../../../../common/Icon/ConnectIcon';
import MyItemsIcon from '../../../../common/Icon/MyItemsIcon';
import PremiumIcon from '../../../../common/Icon/PremiumIcon';
//styles
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
          <ConnectIcon />
        </div>
      </ConnectionSection>
      <PremiumSection to="/">
        <p>Access exclusive tools & insights</p>
        <p>
          <PremiumIcon />
          Try Premium for free
        </p>
      </PremiumSection>
      <MyItems to="/">
        <MyItemsIcon />
        <span>My items</span>
      </MyItems>
    </Container>
  );
}

export default PersonalPanel;
