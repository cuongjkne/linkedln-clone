import { useHistory } from 'react-router-dom';

//styles
import { Container, LinkItem, PanelShowItem } from './ItemOptionsPanel.style';
//panels
import UserPanel from '../UserPanel/UserPanel';
import WorkPanel from '../WorkPanel/WorkPanel';
//icons
import { MessageIcon, NotificationIcon, MultiDotsIcon } from '../../Icon';

function ItemsPanel({ isactive, userPanel, workPanel }) {
  const path = useHistory().location.pathname;
  const { isUserPanelActive, showUserPanel } = userPanel;
  const { isWorkPanelActive, showWorkPanel } = workPanel;
  return (
    <>
      <Container isactive={isactive}>
        <LinkItem to="messaging" isactive={path === '/messaging' ? 1 : 0}>
          <MessageIcon isactive={path === '/messaging'} />
        </LinkItem>
        <LinkItem to="notifications" isactive={path === '/notifications' ? 1 : 0}>
          <NotificationIcon isactive={path === '/notifications'} />
        </LinkItem>
        <PanelShowItem onClick={showUserPanel}>
          <img src="/images/user.jpg" alt="user.jpg" />
        </PanelShowItem>
        <PanelShowItem onClick={showWorkPanel}>
          <MultiDotsIcon />
        </PanelShowItem>
      </Container>
      <UserPanel isactive={isUserPanelActive} />
      <WorkPanel isactive={isWorkPanelActive} />
    </>
  );
}

export default ItemsPanel;
