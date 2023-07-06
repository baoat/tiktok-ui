import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({
  href,
  onClick,
  children,
  to,
  primary = false,
  outline = false,
  small = false,
  large = false,
  outline_text = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  passProper,
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

export default Button;
