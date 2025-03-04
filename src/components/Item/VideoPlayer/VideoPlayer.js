import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './VideoPlayer.module.scss';
import classNames from 'classnames/bind';
import { faEllipsisVertical, faPlay } from '@fortawesome/free-solid-svg-icons';
import { MutedIcon, PauseIcon, PlayIcon, ReplayIcon, VoiceIcon } from '~/components/icons';
import HeartActionVideo from './HeartActionVideo/HeartActionVideo';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(style);

function VideoPlayer({ videoSrc, onStatusChange, isMuted, setIsMuted }) {
  // biến
  const videoRef = useRef(null);
  const [showReplay, setShowReplay] = useState(false);
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  //video tự động phát khi lướt tới
  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0; // Reset video về 0 giây
          video.muted = isMuted; // Ban đầu tắt tiếng
          video.play().catch((error) => console.log('Autoplay failed:', error));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    if (video) observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  //chức năng
  //tim video
  const handleSetHeartVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(true);
    onStatusChange(false);
    setTimeout(() => setShow(false), 1500);
    const heartActionVideos = document.querySelectorAll('#heartActionVideo');
    console.log('value: ', heartActionVideos);
    heartActionVideos.forEach(function (heartActionVideo) {
      heartActionVideo.style.position = 'absolute';
      heartActionVideo.style.top = `${e.clientY - e.currentTarget.getBoundingClientRect().top}px`;
      heartActionVideo.style.left = `${e.clientX - e.currentTarget.getBoundingClientRect().left}px`;
    });
  };

  const handleButtonPlay = (event) => {
    event.stopPropagation();
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setShowReplay(false);
    }
  };

  const handleVideoPlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleButtonVoice = (event) => {
    event.stopPropagation();
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleShowReplay = () => {
    setShowReplay(true);
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleReplay = (event) => {
    event.stopPropagation();
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowReplay(false);
    }
  };

  return (
    <div
      id="wrapper-video"
      onClick={handleVideoPlay}
      onDoubleClick={handleSetHeartVideo}
      className={cx('wrapper-video')}
    >
      <HeartActionVideo show={show} />
      <div className={cx('video')}>
        {/* hiển thị video */}
        <video
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
          ref={videoRef}
          onEnded={handleShowReplay}
          disablePictureInPicture
          controlsList="noremoteplayback"
        >
          <source className={cx('video-img')} src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={cx('play')}>
        <button onClick={handleButtonPlay} className={cx('btn-play')}>
          {isPlaying ? <PauseIcon /> : <PlayIcon className={cx('play-icon')} />}
        </button>
      </div>
      <div className={cx('voice')}>
        <button onClick={handleButtonVoice} className={cx('btn-voice')}>
          {isMuted ? <MutedIcon /> : <VoiceIcon />}
        </button>
      </div>
      <div className={cx('vertical')}>
        <button className={cx('btn-vertical')}>
          <FontAwesomeIcon className={cx('vertical-icon')} icon={faEllipsisVertical} />
        </button>
      </div>
      {showReplay && (
        <div className={cx('replay')}>
          <button onClick={handleReplay} className={cx('btn-replay')}>
            <ReplayIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
