import React, { useState } from 'react';
import arrowIcon from '../../images/arrow.svg';
import './ArrowButton.css';

type ArrowButtonProps = {
  className?: string;
  left?: boolean;
  onPress: () => void;
  right?: boolean;
  style?: React.CSSProperties;
};

const ArrowButtonElement: React.FC<ArrowButtonProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, left, onPress, right, style } = props;
  const isLeft = left !== undefined;

  return (
    <div className={className} style={style}>
      <a style={{ cursor: 'pointer' }} onMouseDown={() => onPress()}>
        <img
          src={arrowIcon}
          className="arrow-button"
          style={{
            transform: isLeft ? 'scaleX(-1)' : undefined,
          }}
          width="100px"
          height="100px"
          alt="left"
        />
      </a>
    </div>
  );
};

export const ArrowButton = React.memo(ArrowButtonElement);
