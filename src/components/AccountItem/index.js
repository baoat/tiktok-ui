import classNames from 'classnames/bind';
import style from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://i.imgur.com/u2p0Xm3h.jpg" alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Chi Bao</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>nguyechibao</span>
      </div>
    </div>
  );
}

export default AccountItem;
