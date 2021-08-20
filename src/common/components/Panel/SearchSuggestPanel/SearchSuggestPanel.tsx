//components
import Suggestion from './Suggestion';
//styles
import { Panel } from './SearchSuggestPanel.style';

function SearchSuggestPanel({ isactive }) {
  return !isactive ? (
    <></>
  ) : (
    <Panel>
      <h5>Try searching for</h5>
      <div>
        <Suggestion text={'#stopasianhate'} to="/jobs" />
        <Suggestion text={'covid vaccines'} to="/feed" />
      </div>
    </Panel>
  );
}

export default SearchSuggestPanel;
