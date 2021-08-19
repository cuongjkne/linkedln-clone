import { useContext } from 'react';
import styled from 'styled-components';

//COMPONENTS
import NavLinkItems from './NavLinkItems';
import NavPanelShowItems from './NavPanelShowItems';

function Navbar() {
  return (
    <Container>
      <NavLinkItems />
      <NavPanelShowItems />
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  min-height: 52px;

  font-weight: 400;
  letter-spacing: 0.3px;
  align-items: center;

  p {
    color: var(--nav-color-icon);
    font-size: var(--nav-font-size);
  }
  #navUserItem {
    position: relative;
    border-right: 1px solid #eff2f8;
    & > img:first-child {
      width: 25px;
      border-radius: 20px;
    }
  }
`;

export default Navbar;
