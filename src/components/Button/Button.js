import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  outline_text = false,
  rounded = false,
  a = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProper
}) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    outline_text,
    rounded,
    a,
  });

  const props = {
    onClick,
    ...passProper,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,

  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  outline_text: PropTypes.bool,
  rounded: PropTypes.bool,
  a: PropTypes.bool,

  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,

  onClick: PropTypes.func,
};

export default Button;
