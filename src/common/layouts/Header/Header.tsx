//components
import Navbar from '../../components/Navbar/Navbar';
import { Container } from './Header.style';
function Header() {
  return (
    <Container>
      <a id="logo" href="/feed">
        <img src="/images/linkedin.png" alt="logo" />
      </a>

      <Navbar />
    </Container>
  );
}

export default Header;
