import styled, { css } from 'styled-components';

//COMPONENTS
import Suggestion from './Suggestion';
function SearchSuggestPanel({ isActive }) {
  return !isActive ? (
    <></>
  ) : (
    <div>
      <Panel>
        <h5>Try searching for</h5>
        <div>
          <Suggestion text={'#stopasianhate'} to="/jobs" />
          <Suggestion text={'covid vaccines'} to="/feed" />
        </div>
      </Panel>
    </div>
  );
}

const Panel = styled.div`
  display: block;
  width: 400px;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 2px 5px rgba(94, 96, 99, 0.7);
  border-radius: 8px;
  color: black;
  padding: 8px 0;
  position: absolute;

  h5 {
    font-weight: 380;
    margin: 10px 18px;
    font-size: 14px;
  }

  @media (max-width: 1028px) {
  }
`;

export default SearchSuggestPanel;
