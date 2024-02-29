import React, { FC, useEffect , useState} from 'react';
import { playerProvider } from './Player-provider/Player-provider';
import { Player_Event_Types, PLAYER_STATES } from './constant/const';
import { Simulate } from 'react-dom/test-utils';
import VideoItem from './VideoItem/VideoItem';

import play = Simulate.play;

type Props = {
  url: string;
}
 const VideoPlayer = () => {

    const [showPlayer, setShowPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const onStateToggle = () => {
      isPlaying ? playerProvider.pause() : playerProvider.play();
      setIsPlaying(!isPlaying);
    };
  
    const onTimeChange = (time: number) => {
      playerProvider.jump(time);
    };
  
    return (
      <div>
        {showPlayer ? (
          <VideoItem url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
        ) : (
          <button onClick={() => setShowPlayer(true)}>Show</button>
        )}
        <button onClick={onStateToggle}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    );
}

export default VideoPlayer;