import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Item from '~/components/Item';
import { useEffect, useState } from 'react';
import * as accounts from '~/services/accounts';

const cx = classNames.bind(style);

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const fecthApi = async () => {
      const result = await accounts.accounts();
      setSearchResult(result);
    };

    fecthApi();
  }, []);

  return (
    <div className={cx('colum-container')}>
      {searchResult.map((result) => (
        <Item key={result.id} data={result} isMuted={isMuted} setIsMuted={setIsMuted} />
      ))}
    </div>
  );
}

export default Home;
