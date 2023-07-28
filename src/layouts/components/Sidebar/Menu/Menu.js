import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import PropType from 'prop-types';

const cx = classNames.bind(style);

function Menu({ children }) {
  return <ul className={cx('menu-list')}>{children}</ul>;
}

Menu.prototype = {
  children: PropType.node.isRequired,
};

export default Menu;
