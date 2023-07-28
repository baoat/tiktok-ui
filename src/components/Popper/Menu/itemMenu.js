import PropType from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);
function ItemMenu({ data, onClick }) {
  const className = cx('item-menu', {
    separate: data.separate,
  });
  return (
    <li className={className}>
      <Button onClick={onClick} href={data.to} className={cx('item')} outline_text leftIcon={data.icon}>
        {data.title}
      </Button>
    </li>
  );
}

ItemMenu.prototype = {
  data: PropType.object,
  onClick: PropType.func,
};

export default ItemMenu;
