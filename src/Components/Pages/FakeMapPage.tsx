import React, { useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import { config } from '../../config';
import { TimerUtil } from '../../Utils/TimerUtil';
import { ArrowButton, CoverResizer } from '../Atoms';
import './FakeMapPage.css';

type FakeMapProps = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FakeMapPageElement: React.FC<FakeMapProps> = (props) => {
  const currentStep = useRef<number>(0);
  const isPlaying = useRef<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>();


  const handlePlay = (toStep: number) => {
    if (isPlaying.current) {
      return;
    }

    const nextStep = Math.max(config.videoMinStep, Math.min(config.videoMaxStep, toStep));
    if (nextStep === currentStep.current) {
      return;
    }

    isPlaying.current = true;
    TimerUtil.interpolate(
      currentStep.current,
      nextStep,
      1000,
      30,
      (t) => {
        playerRef.current?.seekTo(t, 'seconds');
      },
      () => {
        isPlaying.current = false;
        currentStep.current = nextStep;
      },
    );
  };

  const handlePressLeft = () => {
    handlePlay(currentStep.current - 1);
  };

  const handlePressRight = () => {
    handlePlay(currentStep.current + 1);
  };

  return (
    <div className="container">
      <CoverResizer aspectRatio={16 / 9}>
        <div>
          <ReactPlayer
            ref={(ref) => (playerRef.current = ref)}
            url={config.backgroundVideoURL}
            className="react-player"
            width="100%"
            height="100%"
          />
          hey
        </div>
      </CoverResizer>
      <ArrowButton left className="left-arrow-button" onPress={handlePressLeft} />
      <ArrowButton right className="right-arrow-button" onPress={handlePressRight} />
    </div>
  );
};

export const FakeMapPage = React.memo(FakeMapPageElement);
