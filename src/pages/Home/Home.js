import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Item from '~/components/Item';
import { useEffect, useState } from 'react';
import * as accounts from '~/services/accounts';

const cx = classNames.bind(style);

function Home() {
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
      <div className={cx('colum-container')}>
        {searchResult.map((result) => (
          <Item key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
}

export default Home;
