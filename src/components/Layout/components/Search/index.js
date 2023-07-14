import { useEffect, useRef, useState } from 'react';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import * as searchService from '~/apiServices/searchService';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hook';

const cx = classNames.bind(style);
function Search() {
  // hook useState
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);
  // hook useEffect
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fecthApi = async () => {
      setLoading(true);

      const result = await searchService.search(debounce);
      setSearchResult(result);

      setLoading(false);
    };

    fecthApi();
  }, [debounce]);

  // hook useRef
  const inputRef = useRef();

  // Handle
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([]);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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

          {!!searchValue && !loading && (
            <button className={cx('close')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && <FontAwesomeIcon className={cx('notch')} icon={faCircleNotch} />}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
