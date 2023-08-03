import classNames from 'classnames/bind';
import sytle from './Footer.module.scss';

import create from '~/acsets/img/045b2fc7c278b9a30dd0.png';
import Button from '~/components/Button/Button';

const cx = classNames.bind(sytle);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container-footer')}>
        <div className={cx('create-effects')}>
          <Button href="#" outline_text className={cx('btn-create')}>
            <div className={cx('wrapper')}>
              <img src={create} alt="" className={cx('create-img')} />
              <div className={cx('title')}>
                <h4>Create effects</h4>
              </div>
            </div>
          </Button>
        </div>
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
  );
}

export default Footer;
