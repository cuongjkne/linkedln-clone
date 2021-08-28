import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '../../Icon/SearchIcon';

function Suggestion({ text, to }) {
  return (
    <Container to={to}>
      <SearchIcon />
      <span>{text}</span>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 20px;
  svg {
    width: 16px !important;
    height: 16px !important;
  }
  span {
    margin-left: 20px;
    font-size: 16px;
    color: black;
    font-weight: 440;
  }
  &:hover {
    background-color: rgb(242, 242, 238);
  }
`;
export default Suggestion;
