export const TimerUtil = {
  interpolate: (
    from: number,
    to: number,
    duration: number,
    steps: number,
    callback: (t: number) => void,
    onFinish?: () => void,
  ) => {
    const interval = duration / steps;
    let i = 0;
    const intervalID = window.setInterval(() => {
      callback(from + (to - from) * (i / steps));
      i++;
      if (i > steps) {
        window.clearInterval(intervalID);
        if (onFinish) {
          onFinish();
        }
      }
    }, interval);
  },
};
