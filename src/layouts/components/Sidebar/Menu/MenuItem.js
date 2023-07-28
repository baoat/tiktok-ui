import { NavLink } from 'react-router-dom';

import PropType from 'prop-types';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, noti, activeIcon }) {
  return (
    <li className={cx('menu')}>
      <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
        <span className={cx('icon')}>{icon}</span>
        <span className={cx('active-icon')}>{activeIcon}</span>
        <span className={cx('item-title')}>{title}</span>
        {noti && <div className={cx('new')}>New</div>}
      </NavLink>
    </li>
  );
}

MenuItem.prototype = {
  title: PropType.string.isRequired,
  to: PropType.string.isRequired,
  icon: PropType.node.isRequired,
};

export default MenuItem;
