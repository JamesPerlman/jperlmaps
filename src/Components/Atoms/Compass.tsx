import React from 'react';
import compassIcon from '../../images/compass.svg';

type CompassProps = {
  className?: string;
  style?: React.CSSProperties;
};

const SIZE = 90;

const CompassElement: React.FC<CompassProps> = (props) => {
  const { className, style } = props;

  return (
    <div className={className} style={style}>
      <img style={{ marginLeft: `-${0.5 * SIZE}px` }} src={compassIcon} width={`${SIZE}px`} height={`${SIZE}px`} />
    </div>
  );
};

export const Compass = React.memo(CompassElement);
