import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './Account.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const cx = classNames.bind(style);
const AccountItem = React.forwardRef(({ data, className }, ref) => (
  <Link to={`/@${data.nickname}`} ref={ref} className={cx('wrapper', { [className]: className })}>
    <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
    <div className={cx('info')}>
      <h4 className={cx('name')}>
        <span>{data.full_name}</span>
        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>}
      </h4>
      <span className={cx('username')}>{data.nickname}</span>
    </div>
  </Link>
));

AccountItem.prototype = {
  data: PropTypes.object.isRequired,
  classNames: PropTypes.string,
};

export default AccountItem;
