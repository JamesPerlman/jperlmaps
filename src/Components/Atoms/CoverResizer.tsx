import React, { CSSProperties, useState } from 'react';
import Measure, { ContentRect } from 'react-measure';

type CoverResizerProps = React.PropsWithChildren<{
  aspectRatio: number;
}>;

const CoverResizerElement: React.FC<CoverResizerProps> = (props) => {
  const { aspectRatio, children } = props;

  const [centeredStyle, setCenteredStyles] = useState<CSSProperties>({});

  const handleResize = (rect: ContentRect) => {
    if (rect.bounds === undefined) {
      return;
    }

    let width: number;
    let height: number;

    if (rect.bounds.width / rect.bounds.height > aspectRatio) {
      width = rect.bounds.width;
      height = rect.bounds.width / aspectRatio;
    } else {
      width = rect.bounds.height * aspectRatio;
      height = rect.bounds.height;
    }

    const left = 0.5 * (rect.bounds.width - width);
    const top = 0.5 * (rect.bounds.height - height);

    setCenteredStyles({
      position: 'absolute',
      left,
      top,
      width,
      height,
    });
  };
  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <div style={centeredStyle}>{children}</div>
        </div>
      )}
    </Measure>
  );
};

export const CoverResizer = React.memo(CoverResizerElement);
