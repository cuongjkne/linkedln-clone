import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

//components
import CoverScreen from '../../../../common/CoverScreen/CoverScreen';
import SearchSuggestPanel from '../../../../common/Panel/SearchSuggestPanel/SearchSuggestPanel';

//style
import { Wrapper, SearchInput, SearchItem } from './SearchBox.style';

function SearchBox() {
  const path = useHistory().location.pathname;
  //state
  const [isSearchInputActive, setIsSearchInputActive] = useState(false);
  //ref
  const input: any = React.createRef();
  const wrapper: any = React.createRef();

  // effects;
  useEffect(() => {
    input.current.blur();
    setIsSearchInputActive(false);
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  //functions
  const showSearchInputPanel = (e) => {
    input.current.focus();
    //avoid to reload too many time
    if (wrapper.current.contains(e.relatedTarget)) {
      return;
    }
    setIsSearchInputActive(true);
  };
  const closeSearchInputPanel = (e) => {
    //avoid to reload too many time
    if (wrapper.current.contains(e.relatedTarget)) {
      return;
    }
    setIsSearchInputActive(false);
  };

  return (
    <>
      <Wrapper ref={wrapper} tabIndex={1} isactive={isSearchInputActive} onFocus={(e) => showSearchInputPanel(e)}>
        <SearchInput isactive={isSearchInputActive}>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <input type="text" placeholder="Search" ref={input} onBlur={(e) => closeSearchInputPanel(e)} />
        </SearchInput>
        <SearchSuggestPanel isactive={isSearchInputActive} />
        <SearchItem isactive={isSearchInputActive}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18 18" fill="none">
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg>
          <p>Search</p>
        </SearchItem>
      </Wrapper>
      <CoverScreen isactive={isSearchInputActive} />
    </>
  );
}

export default SearchBox;
