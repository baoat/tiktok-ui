import * as accounts from '~/services/accounts';
import ProfileAccount from './ProfileAccount';
import AccountItem from '~/components/AccountItem/AccountItem';

import classNames from 'classnames/bind';
import style from './FollowingAccount.module.scss';

import { useEffect, useRef, useState } from 'react';

import Button from '~/components/Button/Button';

const cx = classNames.bind(style);

function FollowingAccounts({ currentUser }) {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      const result = await accounts.accounts();
      setSearchResult(result);
    };

    fecthApi();
  }, []);

  return (
    <div className={cx('wrapper')}>
      {currentUser ? (
        <>
          <h4 className={cx('title')}>Following accounts</h4>
          {searchResult.map((result) => (
            <div key={result.id}>
              <ProfileAccount result={result} />
            </div>
          ))}
          <Button outline_text className={cx('btn-see-more')}>
            <span className={cx('title-see-more')}>See more</span>
          </Button>
        </>
      ) : (
        <>
          <p className={cx('warning-text')}>Log in to follow creators, like videos, and view comments.</p>
          <Button outline className={cx('btn-login')}>
            Log in
          </Button>
        </>
      )}
    </div>
  );
}

export default FollowingAccounts;
