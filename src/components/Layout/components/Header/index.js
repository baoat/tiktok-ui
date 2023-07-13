import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo_tiktok from '~/acsets/img/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCircleInfo,
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { Inbox, Message } from '~/components/icons';
import Search from '../Search';

const cx = classNames.bind(style);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { code: 'en', title: 'English' },
        { code: 'vn', title: 'Tiếng Việt' },
        { code: 'vn', title: 'Tiếng Việt' },
        { code: 'vn', title: 'Tiếng Việt' },
        { code: 'vn', title: 'Tiếng Việt' },
        { code: 'vn', title: 'Tiếng Việt' },
        { code: 'vn', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  // Biến
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: 'Favorites',
    },
    {
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  //Handle logic
  const handleMenuOnChange = (menuItem) => {
    console.log(menuItem);
  };
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container-header')}>
          {/* Logo tiktok */}
          <div className={cx('logo-tiktok')}>
            <img className={cx('logo')} src={logo_tiktok} alt="" />
          </div>
          {/* Search */}
          <Search />
          {/* User - account */}
          <div className={cx('acc')}>
            {currentUser ? (
              <>
                {/* <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button> */}
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} href="#" outline_text>
                  Upload
                </Button>
                <Tippy content="Messages">
                  <button className={cx('action-btn')}>
                    <Message />
                  </button>
                </Tippy>
                <Tippy content="inBox">
                  <button className={cx('action-btn')}>
                    <Inbox />
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} href="#" outline_text>
                  Upload
                </Button>
                <Button primary>Log in</Button>
              </>
            )}
            <Menu items={userMenu} onChange={handleMenuOnChange}>
              {currentUser ? (
                <img className={cx('user-avatar')} src="https://i.imgur.com/u2p0Xm3h.jpg" alt="Nguyen Van A" />
              ) : (
                <i className={cx('cover')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </i>
              )}
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
