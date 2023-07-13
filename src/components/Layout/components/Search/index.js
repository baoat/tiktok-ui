import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(style);
function Search() {
  // hook useState
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  // hook useEffect
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  });

  // hook useRef
  const inputRef = useRef();

  // Handle
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <form className={cx('form-search')}>
          <input
            ref={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            type="text"
            className={cx('search-input')}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && (
            <button
              className={cx('close')}
              onClick={() => {
                setSearchValue('');
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* <FontAwesomeIcon className={cx('notch')} icon={faCircleNotch} /> */}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
