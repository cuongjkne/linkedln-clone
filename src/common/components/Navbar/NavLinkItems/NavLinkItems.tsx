import { useHistory } from 'react-router-dom';

//styles
import { NavLinkItem } from './NavLinkItems.style';

//icons
import { HomeIcon, MessageIcon, NetworkIcon, JobIcon, NotificationIcon } from '../../Icon/index';

function NavLinkItems() {
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <>
      <NavLinkItem isactive={path === '/feed' ? 1 : 0} to="/feed">
        <HomeIcon isactive={path === '/feed' ? 1 : 0} />
        <p>Home</p>
      </NavLinkItem>
      <NavLinkItem isactive={path === '/mynetwork' ? 1 : 0} to="/mynetwork">
        <NetworkIcon isactive={path === '/mynetwork' ? 1 : 0} />
        <p>My Network</p>
      </NavLinkItem>
      <NavLinkItem isactive={path === '/jobs' ? 1 : 0} to="/jobs">
        <JobIcon isactive={path === '/jobs' ? 1 : 0} />
        <p>Jobs</p>
      </NavLinkItem>
      <NavLinkItem isactive={path === '/messaging' ? 1 : 0} to="/messaging">
        <MessageIcon isactive={path === '/messaging' ? 1 : 0} />
        <p>Messaging</p>
      </NavLinkItem>
      <NavLinkItem isactive={path === '/notifications' ? 1 : 0} to="/notifications">
        <NotificationIcon isactive={path === '/notifications' ? 1 : 0} />
        <p>Notifications</p>
      </NavLinkItem>
    </>
  );
}

export default NavLinkItems;
