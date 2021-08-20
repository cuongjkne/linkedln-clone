//components
import Navbar from '../../components/Navbar/Navbar';
import SearchBox from '../../components/Navbar/SearchBox/SearchBox';
import { Container } from './Header.style';
function Header() {
  return (
    <Container>
      <a id="logo" href="/feed">
        <img src="/images/linkedin.png" alt="logo" />
      </a>

      <SearchBox />
      <Navbar />
    </Container>
  );
}

export default Header;
