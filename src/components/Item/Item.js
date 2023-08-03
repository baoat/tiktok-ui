import classNames from 'classnames/bind';
import style from './Item.module.scss';
import Button from '../Button/Button';
import video from '~/acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCommentDots,
  faEllipsisVertical,
  faHeart,
  faPlay,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { HeartActiveIcon, HeartIcon, VoiceIcon } from '../icons';
import { useState } from 'react';

const cx = classNames.bind(style);

function Item({ data }) {
  const [heart, setHeart] = useState(true);

  //Handle
  const handleSetHeart = () => {
    setHeart(!heart);
  };
  const handleSetHeartVideo = () => {
    setHeart(false);
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
          <div onDoubleClick={handleSetHeartVideo} className={cx('wrapper-video')}>
            <canvas className={cx('canvas')} width={56.25} height={100} />
            <div className={cx('video')}>
              <img src={video} alt="" className={cx('video-img')} />
            </div>
            <div className={cx('play')}>
              <button className={cx('btn-play')}>
                <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
              </button>
            </div>
            <div className={cx('voice')}>
              <button className={cx('btn-voice')}>
                <VoiceIcon className={cx('voice-icon')} />
              </button>
            </div>
            <div className={cx('vertical')}>
              <button className={cx('btn-vertical')}>
                <FontAwesomeIcon className={cx('vertical-icon')} icon={faEllipsisVertical} />
              </button>
            </div>
          </div>
          <div className={cx('action')}>
            <button onClick={handleSetHeart} className={cx('btn-action')}>
              <span className={cx('wrapper-icon')}>
                {heart ? (
                  <HeartIcon />
                ) : (
                  // <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                  <HeartActiveIcon />
                )}
              </span>
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
