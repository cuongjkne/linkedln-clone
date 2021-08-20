import { useState } from 'react';

//styles
import { NavPanelShowItem } from './NavPanelShowItems.style';
//components
import UserPanel from '../../Panel/UserPanel/UserPanel';
import WorkPanel from '../../Panel/WorkPanel';
import CoverScreen from '../../CoverScreen/CoverScreen';

function NavPanelShowItems() {
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
  };

  const blurWorkItem = (e) => {
    setIsWorkItemActive(false);
  };
  return (
    <>
      <div id="navUserItem" tabIndex={0} onBlur={() => blurUserItem()}>
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
        <UserPanel isactive={isUserItemActive} />
      </div>
      <div tabIndex={0} onBlur={(e) => blurWorkItem(e)}>
        <NavPanelShowItem onMouseDown={() => toogleWorkItemState()}>
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
        <WorkPanel isactive={isWorkItemActive} />
      </div>
      <CoverScreen isactive={isWorkItemActive} />
    </>
  );
}

export default NavPanelShowItems;
