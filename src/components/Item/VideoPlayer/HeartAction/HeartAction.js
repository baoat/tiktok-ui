import { HeartActiveIcon } from '~/components/icons';

import style from './HeartAction.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function HeartAction() {
  return (
    <>
      <div className={cx('body-heart-action')}>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
        <div className={cx('item-action')}></div>
      </div>
      <HeartActiveIcon className={cx('action-heart')} />
    </>
  );
}

export default HeartAction;
