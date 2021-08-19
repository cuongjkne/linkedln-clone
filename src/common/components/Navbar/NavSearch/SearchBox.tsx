import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

//components
import SearchSuggestPanel from '../../Panel/SearchSuggestPanel/SearchSuggestPanel';
import CoverScreen from '../../CoverScreen/CoverScreen';
import { useHistory } from 'react-router';

function SearchBox() {
  const path = useHistory().location.pathname;
  //state
  const [isSearchInputActive, setIsSearchInputActive] = useState(false);
  //ref
  const input: any = React.createRef();
  const wrapper: any = React.createRef();
  useEffect(() => {
    input.current.blur();
    setIsSearchInputActive(false);
  }, [path]);

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
      <Wrapper ref={wrapper} tabIndex={1} onFocus={(e) => showSearchInputPanel(e)}>
        <SearchInput isSearchInputActive={isSearchInputActive}>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <input type="text" placeholder="Search" ref={input} onBlur={(e) => closeSearchInputPanel(e)} />
        </SearchInput>
        <SearchSuggestPanel isActive={isSearchInputActive} />
        {/* <SearchItem isSearchInputActive={isSearchInputActive} onMouseDown={() => showSearchInputPanel()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 18 18"
            data-supported-dps="16x16"
            fill="#5e6063"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg>
          <p>Search</p>
        </SearchItem> */}
      </Wrapper>
      <CoverScreen isActive={isSearchInputActive} />
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: 10px;
  min-height: 52px;

  @media (max-width: 1028px) {
    margin-right: unset;
    /* TODO: */
    /* position: absolute;
    z-index: 1;
    width: 100vw;
    background-color: white; */
  }
`;
const SearchInput = styled.div<{
  isSearchInputActive: boolean;
}>`
  border-radius: var(--border-radius-small);
  display: flex;
  width: 300px;
  height: 34px;
  transition: width 0.1s ease-in-out;
  position: relative;
  background-color: #eff2f8;

  img {
    position: absolute;
    top: 25%;
    left: 10px;
  }
  input {
    border-radius: var(--border-radius-small);
    padding: 0 35px;
    background-color: initial;
    width: 100%;
    font-size: 14px;
    z-index: 1;
    transition: margin-left 0.1s ease-in-out;
  }
  ${({ isSearchInputActive }) => {
    return (
      isSearchInputActive &&
      css`
        width: 350px;
        border: 1px solid rgb(94, 96, 99, 0.1);

        input {
          margin-left: 15px;
          font-size: 15px;
        }
      `
    );
  }}
  @media(max-width:1028px) {
    display: none;
    ${({ isSearchInputActive }) => {
      return (
        isSearchInputActive &&
        css`
          display: flex;
          width: 100%;
          img {
            left: 10px;
          }
        `
      );
    }}
  }
`;
const SearchItem = styled.div<{ isSearchInputActive: boolean }>`
  display: none;
  @media (max-width: 1028px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90px;
    cursor: pointer;
    svg {
      width: 27px;
      height: 27px;
    }

    p {
      margin-top: 2px;
      color: var(--nav-color-icon);
      font-size: var(--nav-font-size);
    }
    ${({ isSearchInputActive }) => {
      return (
        isSearchInputActive &&
        css`
          display: none;
        `
      );
    }}
  }
`;

export default SearchBox;
