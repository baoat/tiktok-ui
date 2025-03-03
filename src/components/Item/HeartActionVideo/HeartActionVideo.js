import { HeartActiveIconVideo } from '~/components/icons';
import style from './HeartActionVideo.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function HeartActionVideo({ show }) {
  const [heartActionVideoWrapper, setHeartActionVideoWrapper] = useState({});
  useEffect(() => {
    setHeartActionVideoWrapper(
      cx({
        'heartActionVideo-wrapper': true,
        'show-heart': show,
        'hide-heart': !show,
      }),
    );
    const rotate = document.querySelector('#content');
    const randomRotate = Math.floor(Math.random() * (15 - -15 + 1)) + 1; // Tạo mã màu ngẫu nhiên
    rotate.style.transform = `rotate(${randomRotate}deg)`; // Thay đổi màu sắc của phần tử
  }, [show]);
  return (
    <div id="heartActionVideo" className={heartActionVideoWrapper}>
      <div id="content" className={cx('heartActionVideo-content')}>
        <HeartActiveIconVideo className={cx('animation')} />
      </div>
    </div>
  );
}
export default HeartActionVideo;
