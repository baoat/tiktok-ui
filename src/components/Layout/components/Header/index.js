import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo_tiktok from '~/imgs/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCircleInfo,
  faCircleNotch,
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faPaperPlane,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';

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
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });

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
          <div className={cx('logo-tiktok')}>
            <img className={cx('logo')} src={logo_tiktok} alt="" />
          </div>
          <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <form className={cx('form-search')}>
                <input placeholder="Search" type="text" className={cx('search-input')} />

                <button className={cx('close')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('notch')} icon={faCircleNotch} />
                <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </HeadlessTippy>
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
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </Tippy>
                <Tippy content="inBox">
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faMessage} />
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
