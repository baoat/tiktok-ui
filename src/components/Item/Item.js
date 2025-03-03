import classNames from 'classnames/bind';
import style from './Item.module.scss';
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import video from '~/acsets/img/23683386842894528144247647386872177500821145n-11335981.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCommentDots,
  faEllipsisVertical,
  faHeart,
  faLeaf,
  faPlay,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { HeartIcon, VoiceIcon } from '../icons';
import HeartAction from './HeartAction/HeartAction';
import { useState } from 'react';
import HeartActionVideo from './HeartActionVideo/HeartActionVideo';

const cx = classNames.bind(style);

function Item({ data }) {
  const [heart, setHeart] = useState(true);
  const [show, setShow] = useState(false);

  // setTimeout(() => {
  //   setShow(false);
  // }, 1500);

  //Handle
  const handleSetHeart = () => {
    setHeart(!heart);
  };
  const handleSetHeartVideo = (e) => {
    console.log('ee: ', e);
    setHeart(false);
    setShow(true);
    e.preventDefault();
    const heartActionVideos = document.querySelectorAll('#heartActionVideo');
    console.log('value: ', heartActionVideos);
    heartActionVideos.forEach(function (heartActionVideo) {
      heartActionVideo.style.position = 'absolute';
      heartActionVideo.style.top = `${e.clientY - e.currentTarget.getBoundingClientRect().top}px`;
      heartActionVideo.style.left = `${e.clientX - e.currentTarget.getBoundingClientRect().left}px`;
    });
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
          <div id="wrapper-video" onDoubleClick={handleSetHeartVideo} className={cx('wrapper-video')}>
            <HeartActionVideo show={show} />
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
