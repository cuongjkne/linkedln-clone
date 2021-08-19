import styled from 'styled-components';
//components
import Navbar from '../common/components/Navbar/Navbar';
// import Search from './Search/Search';

//CONTEXT
import CoverScreen from '../common/components/CoverScreen/CoverScreen';

function Header() {
  return (
    <Container>
      <img src="/images/linkedin.png" alt="logo" />
      {/* <Search /> */}
      <Navbar />
      <CoverScreen />
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
