import React from 'react';
import ReactPlayer from 'react-player';
import { config } from '../../config';
import { CoverResizer } from '../Atoms';

type FakeMapProps = {};

const FakeMapPageElement: React.FC<FakeMapProps> = (props) => {
  return (
    <CoverResizer aspectRatio={16 / 9}>
      <div>
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={config.backgroundVideoURL}
        />
        hey
      </div>
    </CoverResizer>
  );
};

export const FakeMapPage = React.memo(FakeMapPageElement);
