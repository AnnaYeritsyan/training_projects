import React, { FC, useEffect } from 'react';
import { playerProvider } from '../Player-provider/Player-provider';
import { Player_Event_Types, PLAYER_STATES } from '../constant/const';
import { Simulate } from 'react-dom/test-utils';

import play = Simulate.play;

type Props = {
  url: string;
}
 const VideoItem: FC<Props> = ({ url }) => {

  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stateChangeOff = playerProvider.eventEmitter.on(Player_Event_Types.STATE_CHANGE, onStateChange);
    const timeUpdateOff = playerProvider.eventEmitter.on(Player_Event_Types.TIME_UPDATE, onTimeUpdate);

    return () => {
      stateChangeOff();
      timeUpdateOff();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('canplay', onCanPlay);
      video.addEventListener('waiting', onWaiting);
    }

    return () => {
      video?.removeEventListener('canplay', onCanPlay);
      video?.removeEventListener('waiting', onWaiting);
    };
  }, [videoRef.current]);

  const onStateChange = (state: number) => {
    switch (state) {
      case PLAYER_STATES.PLAYING: {
        videoRef.current?.play();
        break;
      }
      case PLAYER_STATES.PAUSED: {
        videoRef.current?.pause();
        break;
      }
    }
  };

  const onTimeUpdate = (time: number) => {
    videoRef.current && (videoRef.current.currentTime = time);
  };

  const onCanPlay = () => {
    playerProvider.removeBufferingItem(url);
  };

  const onWaiting = () => {
    playerProvider.addBufferingItem(url);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={url}
        width={640}
        height={360}
      />
    </div>
  )
}

export default VideoItem;