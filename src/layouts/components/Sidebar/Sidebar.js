import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config/index';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  DiscoverIcon,
  DiscoverActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/icons';
import FollowingAccounts from './FollowingAccounts/FollowingAccounts';
import Footer from './Footer/index';

const cx = classNames.bind(style);
function Sidebar() {
  const currentUser = true;
  return (
    <>
      <aside className={cx('sidebar')}>
        <Menu>
          <MenuItem title={'For You'} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
          <MenuItem
            title={'Following'}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
            to={config.routes.following}
          />
          <MenuItem
            title={'Discover'}
            noti
            icon={<DiscoverIcon />}
            activeIcon={<DiscoverActiveIcon />}
            to={config.routes.discover}
          />
          <MenuItem title={'LIVE'} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
        </Menu>

        <FollowingAccounts currentUser={currentUser} />

        <Footer />
      </aside>
    </>
  );
}

export default Sidebar;
