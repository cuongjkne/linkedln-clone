import styled from 'styled-components';
import { useState } from 'react';
//hooks
import { useAppDispatch } from '../../utilities/hooks';
//keyframes
import clickNavItem from './keyframes';
//components
import UserPanel from '../Panel/UserPanel';
import WorkPanel from '../Panel/WorkPanel';

//actions
import { coverScreenShowed, coverScreenHidden } from '../../../features/UI/UISlice';

function NavPanelShowItems() {
  const dispatch = useAppDispatch();

  const [isUserItemActive, setIsUserItemActive] = useState(false);
  const [isWorkItemActive, setIsWorkItemActive] = useState(false);
  const toogleUserItemState = () => {
    setIsUserItemActive(!isUserItemActive);
  };

  const blurUserItem = () => {
    setIsUserItemActive(false);
  };

  const toogleWorkItemState = () => {
    setIsWorkItemActive(!isWorkItemActive);
    if (!isWorkItemActive) {
      dispatch(coverScreenShowed());
    } else {
      dispatch(coverScreenHidden());
    }
  };

  const blurWorkItem = (e) => {
    setIsWorkItemActive(false);
    dispatch(coverScreenHidden());
  };
  return (
    <>
      <PannelWrapper id="navUserItem" tabIndex={0} onBlur={() => blurUserItem()}>
        <NavPanelShowItem onMouseDown={() => toogleUserItemState()}>
          <img src="/images/user.svg" alt="user-img" />
          <p>
            Me{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="17"
              height="15"
              data-supported-dps="16x16"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>
          </p>
        </NavPanelShowItem>
        <UserPanel isActive={isUserItemActive} />
      </PannelWrapper>
      <PannelWrapper tabIndex={0} onBlur={(e) => blurWorkItem(e)}>
        <NavPanelShowItem id="navWorkItem" onMouseDown={() => toogleWorkItemState()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
            <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
          </svg>
          <p>
            Work{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="17"
              height="15"
              data-supported-dps="16x16"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>
          </p>
        </NavPanelShowItem>
        <WorkPanel isActive={isWorkItemActive} />
      </PannelWrapper>
    </>
  );
}
const PannelWrapper = styled.div``;
const NavPanelShowItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 52px;
  min-width: 82px;
  justify-content: center;
  position: relative;
  svg {
    fill: var(--nav-color-icon);
  }

  & > img:first-of-type {
    width: 25px;
    border-radius: 30px;
  }
  & > p:first-of-type {
    margin-top: 4px;
    display: flex;

    svg {
      width: 17px;
      position: relative;
      top: -2px;
      filter: invert(40%);
    }
  }
  &:active {
    & > img:first-of-type,
    & > svg:first-of-type,
    & > p:first-of-type {
      animation: ${clickNavItem} 0.2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  &:hover {
    svg {
      fill: black;
    }

    & > p:first-of-type {
      color: black;
    }
  }
`;

export default NavPanelShowItems;
