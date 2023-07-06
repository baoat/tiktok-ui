import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo_tiktok from '~/imgs/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(style);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([2, 5]);
    }, 0);
  });
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container-header')}>
          <div className={cx('logo-tiktok')}>
            <img className={cx('logo')} src={logo_tiktok} alt="" />
          </div>
          <Tippy
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
          </Tippy>
          <div className={cx('acc')}>
            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} href="#" outline_text>
              Upload
            </Button>
            <Button primary>Log in</Button>
            {/* <div className={cx('login')}>
              <button className={cx('btn-login')}>Login</button>
            </div>
            <div className={cx('cover')}>
              <button className={cx('btn-cover')}>...</button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
