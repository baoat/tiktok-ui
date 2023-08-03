import Tippy from '@tippyjs/react/headless';
import PropType from 'prop-types';

import classNames from 'classnames/bind';
import style from './FollowingAccount.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import { accounts } from '~/services/accounts';
import React, { useRef } from 'react';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(style);

function ProfileAccount({ result }) {
  const ref = React.createRef();
  return (
    <Tippy
      delay={[800, 0]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('account')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <AccountPreview data={result} />
          </PopperWrapper>
        </div>
      )}
    >
      <AccountItem ref={ref} className={cx('following-account')} data={result} />
    </Tippy>
  );
}

ProfileAccount.prototype = {
  result: PropType.object.isRequired,
};

export default ProfileAccount;
