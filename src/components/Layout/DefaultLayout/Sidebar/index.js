import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

const cx = classNames.bind(style);
function Sidebar() {
  return (
    <>
      <aside className={cx('sidebar')}>
        <div className={cx('container-sidebar')}>
          <ul className={cx('me-auto')}>
            <li className={cx('item')}>
              <a href="#">Home</a>
            </li>
            <li className={cx('item')}>
              <a href="#">Home</a>
            </li>
            <li className={cx('item')}>
              <a href="#">Home</a>
            </li>
            <li className={cx('item')}>
              <a href="#">Home</a>
            </li>
          </ul>
          <div className={cx('warning-login')}>
            <p className={cx('warning-text')}>Log in to follow creators, like videos, and view comments.</p>
            <button className={cx('btn-login')}>Login</button>
          </div>
          <footer className={cx('footer')}>
            <div className={cx('container-footer')}>
              <div className={cx('connect')}>
                <a className={cx('item-connect')} href="#">
                  About
                </a>
                <a className={cx('item-connect')} href="#">
                  Newsroom
                </a>
                <a className={cx('item-connect')} href="#">
                  Contact
                </a>
                <a className={cx('item-connect')} href="#">
                  Careers
                </a>
                <a className={cx('item-connect')} href="#">
                  ByteDance
                </a>
              </div>
              <div className={cx('connect')}>
                <a className={cx('item-connect')} href="#">
                  TikTok for Good
                </a>
                <a className={cx('item-connect')} href="#">
                  Advertise
                </a>
                <a className={cx('item-connect')} href="#">
                  Developers
                </a>
                <a className={cx('item-connect')} href="#">
                  Transparency
                </a>
                <a className={cx('item-connect')} href="#">
                  TikTok Rewards
                </a>
                <a className={cx('item-connect')} href="#">
                  TikTok Embeds
                </a>
              </div>
              <div className={cx('connect')}>
                <a className={cx('item-connect')} href="#">
                  Help
                </a>
                <a className={cx('item-connect')} href="#">
                  Safety
                </a>
                <a className={cx('item-connect')} href="#">
                  Terms
                </a>
                <a className={cx('item-connect')} href="#">
                  Privacy
                </a>
                <a className={cx('item-connect')} href="#">
                  Creator Portal
                </a>
                <a className={cx('item-connect')} href="#">
                  Community Guidelines
                </a>
              </div>
              <span className={cx('item-connect')}>© 2023 TikTok</span>
            </div>
          </footer>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
