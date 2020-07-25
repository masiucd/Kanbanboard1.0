import * as React from 'react';

interface Bound {
  left: number;
  top: number;
  width: number;
  height: number;
}

const useMeasure = () => {
  const ref = React.useRef();

  const [bounds, setBounds] = React.useState<Bound>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeX, setResizeX] = React.useState(() => {
    new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  React.useEffect(() => {
    if (ref.current) {
      resizeX.observe(ref.current);
    }
    return () => {
      return resizeX.disconnect();
    };
  });

  return [{ ref }, bounds];
};

export default useMeasure;
