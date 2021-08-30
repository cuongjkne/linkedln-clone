//components
import RecommendedUserItem from './RecommendedUserItem/RecommendedUserItem';
import RightSidePanel from '../common/RightSidePanel';

function FollowsPanel() {
  const title = 'Add to your feed';
  const linkText = 'View all recommendations';
  const linkUrl = '/mynetwork';
  const data = [
    { id: '1', name: 'Husky King', bio: 'President', linkUrl: '/', imgSrc: '/images/husky.png' },
    { id: '2', name: 'Cat Yellow', bio: 'Fish is my favorite', linkUrl: '/', imgSrc: '/images/cat.jpg' },
    { id: '3', name: 'Banh Mi Viet Nam', bio: 'I love bread', linkUrl: '/', imgSrc: '/images/bread.jpg' }
  ];
  //render list
  const Items = data.map(({ id, name, bio, linkUrl, imgSrc }) => (
    <RecommendedUserItem key={id} name={name} bio={bio} linkUrl={linkUrl} imgSrc={imgSrc} />
  ));
  return <RightSidePanel linkUrl={linkUrl} title={title} linkText={linkText} items={Items} />;
}

export default FollowsPanel;
