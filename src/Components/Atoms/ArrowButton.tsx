import React from 'react';

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
      <a onMouseDown={() => onPress()}>{isLeft ? 'LEFT' : 'RIGHT'}</a>
    </div>
  );
};

export const ArrowButton = React.memo(ArrowButtonElement);
