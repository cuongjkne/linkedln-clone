import styled, { css } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

//KEYFRAMES
import clickNavItem from './keyframes';

//ICON
import { HomeIcon, MessageIcon, NetworkIcon, JobIcon, NotificationIcon } from '../Icon/index';

function NavLinkItems() {
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <>
      <NavLinkItem isActive={path === '/feed'} to="/feed">
        <HomeIcon isActive={path === '/feed'} />
        <p>Home</p>
      </NavLinkItem>
      <NavLinkItem isActive={path === '/mynetwork'} to="/mynetwork">
        <NetworkIcon isActive={path === '/mynetwork'} />
        <p>My Network</p>
      </NavLinkItem>
      <NavLinkItem isActive={path === '/jobs'} to="/jobs">
        <JobIcon isActive={path === '/jobs'} />
        <p>Jobs</p>
      </NavLinkItem>
      <NavLinkItem isActive={path === '/messaging'} to="/messaging">
        <MessageIcon isActive={path === '/messaging'} />
        <p>Messaging</p>
      </NavLinkItem>
      <NavLinkItem isActive={path === '/notifications'} to="/notifications">
        <NotificationIcon isActive={path === '/notifications'} />
        <p>Notifications</p>
      </NavLinkItem>
    </>
  );
}
const NavLinkItem = styled(Link)<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: fit-content;

  &::after {
    content: ' ';
    width: 100%;
    height: 2.2px;
    background-color: black;
    position: relative;
    top: 4px;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  p {
    margin-top: 2px;
  }
  svg {
    fill: var(--nav-color-icon);
    width: 27px;
    height: 27px;
  }
  &:active {
    svg,
    p {
      animation: ${clickNavItem} 0.2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  &:hover {
    svg {
      fill: black;
    }
    p {
      color: black;
    }
  }
  ${({ isActive }) => {
    if (isActive) {
      return css`
        &::after {
          transform: scaleX(1);
        }
        svg {
          fill: black;
          width: 26px;
          height: 26px;
        }
        p {
          color: black;
        }
      `;
    }
  }}
`;
export default NavLinkItems;
