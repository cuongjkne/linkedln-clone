import styled from 'styled-components';
//components
import Navbar from '../components/Navbar/Navbar';
import SearchBox from '../components/Navbar/NavSearch/SearchBox';

function Header() {
  return (
    <Container>
      <img src="/images/linkedin.png" alt="logo" />
      <SearchBox />
      <Navbar />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0 100px;
  align-items: center;
  margin: auto;
  position: fixed;
  width: 100vw;

  @media (max-width: 1028px) {
    justify-content: unset;
    padding: 0 20px;
    min-width: auto;
  }
`;

export default Header;
