import classNames from 'classnames/bind';
import style from './Item.module.scss';
import React from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon } from '../icons';
import HeartAction from './VideoPlayer/HeartAction/HeartAction';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import video from '../../acsets/video/Download.mp4';

const cx = classNames.bind(style);

function Item({ data }) {
  const [heart, setHeart] = useState(true);

  // setTimeout(() => {
  //   setShow(false);
  // }, 1500);

  //Handle
  const handleSetHeart = () => {
    setHeart(!heart);
  };

  return (
    <div className={cx('item')}>
      <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('content')}>
        <div className={cx('header')}>
          <div className={cx('name')}>
            <Button className={cx('name-link')} href="#" a>
              <h3 className={cx('name-nickname')}>{data.nickname}</h3>
              <h4 className={cx('name-name')}>{data.full_name}</h4>
            </Button>
          </div>
          <Button outline_text className={cx('btn-following')}>
            Following
          </Button>
          <div className={cx('title')}></div>
          <div className={cx('music')}>
            <h4 className={cx('music-title')}>
              <Button className={cx('music-link')} href="#" a>
                <div className={cx('music-name')}>оригинальный звук - ✨Waifu On Fire✨</div>
              </Button>
            </h4>
          </div>
        </div>
        <div className={cx('body')}>
          <VideoPlayer videoSrc={video} onStatusChange={setHeart} />
          <div className={cx('action')}>
            <button onClick={handleSetHeart} className={cx('btn-action')}>
              <span className={cx('wrapper-icon')}>{heart ? <HeartIcon /> : <HeartAction />}</span>
              <strong className={cx('number-value')}>222</strong>
            </button>
            <button className={cx('btn-action')}>
              <span className={cx('wrapper-icon')}>
                <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} />
              </span>
              <strong className={cx('number-value')}>222</strong>
            </button>
            <button className={cx('btn-action')}>
              <span className={cx('wrapper-icon')}>
                <FontAwesomeIcon className={cx('action-icon')} icon={faBookmark} />
              </span>
              <strong className={cx('number-value')}>222</strong>
            </button>
            <button className={cx('btn-action')}>
              <span className={cx('wrapper-icon')}>
                <FontAwesomeIcon width={24} height={24} className={cx('action-icon')} icon={faShare} />
              </span>
              <strong className={cx('number-value')}>222</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
