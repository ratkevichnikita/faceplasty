'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import IconPlay from '@/../public/icons/icon-play-button.svg';
import IconPause from '@/../public/icons/icon-pause-button.svg';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowOverlay(false);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowOverlay(true);
    }
  };

  return (
    <div
      className="relative size-full"
      onMouseEnter={() => isPlaying && setShowOverlay(true)}
      onMouseLeave={() => isPlaying && setShowOverlay(false)}
    >
      <video
        ref={videoRef}
        src="/video/original.mp4"
        preload="auto"
        playsInline
        disablePictureInPicture
        controls={isPlaying}
        controlsList="nodownload nofullscreen noremoteplayback"
        className="absolute left-0 top-0 rounded-[2.08vw] overflow-hidden w-full h-hull sm:rounded-[5.13vw]"
      />

      {showOverlay && (
        <button onClick={togglePlayPause} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {isPlaying
            ? <Image src={IconPause.src} width={IconPause.width} height={IconPause.height} alt="Pause" className="size-[4.17vw]" />
            : <Image src={IconPlay.src} width={IconPlay.width} height={IconPlay.height} alt="Play" className="size-[4.17vw] sm:size-[10.26vw]" />
          }
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
