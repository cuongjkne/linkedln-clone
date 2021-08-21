import { useHistory } from 'react-router-dom';

//styles
import { NavLinkItem } from './NavLinkItems.style';

//icons
import { HomeIcon, MessageIcon, NetworkIcon, JobIcon, NotificationIcon } from '../../Icon/index';
import React from 'react';

function NavLinkItems() {
  //link items
  const items = [
    {
      text: 'Home',
      path: '/feed',
      children: <HomeIcon />
    },
    {
      text: 'My Network',
      path: '/mynetwork',
      children: <NetworkIcon />
    },
    {
      text: 'Jobs',
      path: '/jobs',
      children: <JobIcon />
    },
    {
      text: 'Messaging',
      path: '/messaging',
      className: 'nav_linkitems_hidden',
      children: <MessageIcon />
    },
    {
      text: 'Notifications',
      path: '/notifications',
      className: 'nav_linkitems_hidden',
      children: <NotificationIcon />
    }
  ];
  //render lists
  const Items = items.map((item, index) => (
    <Item key={index} text={item.text} path={item.path} className={item.className || ''}>
      {item.children}
    </Item>
  ));
  return <>{Items}</>;
}
const Item = ({ text, path, children, className }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const isactive = currentPath === path;
  return (
    <NavLinkItem className={className} isactive={isactive ? 1 : 0} to={path}>
      {React.cloneElement(children, { isactive })}
      <p>{text}</p>
    </NavLinkItem>
  );
};
export default NavLinkItems;
