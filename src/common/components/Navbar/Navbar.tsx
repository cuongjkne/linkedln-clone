//components
import NavLinkItems from './NavLinkItems/NavLinkItems';
import NavPanelShowItems from './NavPanelShowItems/NavPanelShowItems';
import SearchBox from './SearchBox/SearchBox';
//styles
import { Container } from './Navbar.style';
function Navbar() {
  //TODO:handle nav items on mobile
  return (
    <Container>
      <SearchBox />
      <NavLinkItems />
      <NavPanelShowItems />
    </Container>
  );
}

export default Navbar;
