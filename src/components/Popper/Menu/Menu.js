import PropType from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../index.js';
import ItemMenu from './itemMenu';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <ItemMenu
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      hideOnClick={false}
      delay={[0, 700]}
      offset={[18, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <ul className={cx('list-menu')}>{renderItems()}</ul>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

Menu.prototype = {
  children: PropType.node.isRequired,
  item: PropType.array,
  onChange: PropType.func,
};

export default Menu;
