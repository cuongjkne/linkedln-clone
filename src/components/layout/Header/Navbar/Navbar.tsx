//components
import NavLinkItems from './NavLinkItems/NavLinkItems';
import NavPanelShowItems from './NavPanelShowItems/NavPanelShowItems';
import SearchBox from './SearchBox/SearchBox';
import NavOptionsItem from './NavOptionsItem/NavOptionsItem';
//styles
import { Container } from './Navbar.style';
function Navbar() {
  return (
    <Container>
      <SearchBox />
      <NavLinkItems />
      <NavPanelShowItems />
      <NavOptionsItem />
    </Container>
  );
}

export default Navbar;
