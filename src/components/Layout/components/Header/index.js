import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo_tikiok from '~/imgs/download.png';

const cx = classNames.bind(style);
function Header() {
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container-header')}>
          <div className={cx('logo-tiktok')}>
            <img className={cx('logo')} src={logo_tikiok} alt />
          </div>
          <div className={cx('search')}>
            <form className={cx('form-search')}>
              <input type="text" className={cx('search-input')} />
              <button className={cx('search-btn')}>Search</button>
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
