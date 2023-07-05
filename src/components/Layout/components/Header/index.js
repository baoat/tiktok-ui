import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo_tiktok from '~/imgs/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function Header() {
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container-header')}>
          <div className={cx('logo-tiktok')}>
            <img className={cx('logo')} src={logo_tiktok} alt="" />
          </div>
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
          <div className={cx('acc')}>
            <div className={cx('upload')}>
              <button className={cx('btn-upload')}>Upload</button>
            </div>
            <div className={cx('login')}>
              <button className={cx('btn-login')}>Login</button>
            </div>
            <div className={cx('cover')}>
              <button className={cx('btn-cover')}>...</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
