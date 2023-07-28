import classNames from 'classnames/bind';
import style from './AccountPreview.module.scss';

import PropType from 'prop-types';

import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <Button outline_text className={cx('btn-unfollow')}>
          Unfollow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>{data.full_name}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{data.followers_count}</strong>
          <span className={cx('label')}>Followers</span>

          <strong className={cx('value')}>{data.likes_count}</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.prototype = {
  data: PropType.object.isRequired,
};

export default AccountPreview;
